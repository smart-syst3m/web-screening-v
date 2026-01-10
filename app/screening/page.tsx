"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Stepper from "../components/Stepper";
import { questions } from "@/lib/questions";
import { calculateScore, getInitialScore } from "@/lib/scoring";
import { generateReportPdf } from "@/lib/reportPdf";
import type { AnswerMap, BiodataRecord, ScoringResult } from "@/lib/types";

const biodataFields = [
  { name: "nama", label: "Nama", type: "text" },
  { name: "umurIbu", label: "Umur Ibu", type: "text" },
  { name: "hamilKe", label: "Hamil Ke", type: "select" },
  { name: "hpht", label: "Hari pertama Haid Terakhir (HPHT)", type: "date" },
  { name: "pendidikanIbu", label: "Pendidikan Ibu", type: "text" },
  { name: "pendidikanSuami", label: "Pendidikan Suami", type: "text" },
  { name: "pekerjaanIbu", label: "Pekerjaan Ibu", type: "textarea" },
  { name: "pekerjaanSuami", label: "Pekerjaan Suami", type: "textarea" },
] as const;

type BiodataFieldName = (typeof biodataFields)[number]["name"];

type BiodataFormValues = {
  [Key in BiodataFieldName]: Key extends "hamilKe" ? number : string;
};

type AnswerFormValues = {
  answers: AnswerMap;
};

const groupBySection = () => {
  return questions.reduce<Record<string, typeof questions>>((acc, question) => {
    acc[question.section] = acc[question.section] ? [...acc[question.section], question] : [question];
    return acc;
  }, {});
};

const formatDateDisplay = (value: Date) => {
  const pad = (item: number) => String(item).padStart(2, "0");
  return `${pad(value.getUTCDate())}-${pad(value.getUTCMonth() + 1)}-${value.getUTCFullYear()}`;
};

const calculateHpl = (hpht: string) => {
  if (!hpht) return "";
  const [year, month, day] = hpht.split("-").map(Number);
  if (!year || !month || !day) return "";
  const date = new Date(Date.UTC(year, month - 1, day));
  if (Number.isNaN(date.getTime())) return "";

  date.setUTCDate(date.getUTCDate() + 7);

  if (month >= 4) {
    date.setUTCMonth(date.getUTCMonth() - 3);
    date.setUTCFullYear(date.getUTCFullYear() + 1);
  } else {
    date.setUTCMonth(date.getUTCMonth() + 9);
  }

  return formatDateDisplay(date);
};

export default function ScreeningPage() {
  const [step, setStep] = useState(1);
  const [biodata, setBiodata] = useState<BiodataRecord | null>(null);
  const [answers, setAnswers] = useState<AnswerMap | null>(null);

  const groupedQuestions = useMemo(groupBySection, []);
  const questionOrderMap = useMemo(
    () => new Map(questions.map((question, index) => [question.id, index + 1])),
    []
  );
  const colorClasses = {
    emerald: "bg-emerald-50 border-emerald-200",
    amber: "bg-amber-50 border-amber-200",
    rose: "bg-rose-50 border-rose-200",
  } as const;

  const biodataForm = useForm<BiodataFormValues>({
    defaultValues: {
      nama: "",
      umurIbu: "",
      hamilKe: 1,
      hpht: "",
      pendidikanIbu: "",
      pendidikanSuami: "",
      pekerjaanIbu: "",
      pekerjaanSuami: "",
    },
  });

  const answerForm = useForm<AnswerFormValues>({
    defaultValues: {
      answers: {},
    },
  });

  const scoring = useMemo<ScoringResult | null>(() => {
    if (!answers) return null;
    return calculateScore(questions, answers);
  }, [answers]);

  const handleReset = () => {
    setStep(1);
    setBiodata(null);
    setAnswers(null);
    biodataForm.reset();
    answerForm.reset();
  };

  const hphtValue = biodataForm.watch("hpht");
  const hplValue = calculateHpl(hphtValue);

  return (
    <main className="space-y-6">
      <header className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold uppercase text-slate-900">
            SISTEM SCREENING KESEHATAN IBU HAMIL BERBASIS WEB
            <span className="mt-2 block text-base font-semibold text-slate-700">
              UNTUK DETEKSI DINI RISIKO KEHAMILAN DENGAN MENGGUNAKAN SKOR POEDJI ROCHJATI (KSPR)
            </span>
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Isi data dan kuesioner sesuai kondisi ibu hamil.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-emerald-200 hover:text-emerald-700"
          >
            Kembali ke Beranda
          </Link>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200"
          >
            Reset
          </button>
        </div>
      </header>

      <Stepper currentStep={step} />

      {step === 1 && (
        <form
          className="space-y-6 rounded-2xl bg-white p-6 shadow-sm"
          onSubmit={biodataForm.handleSubmit((data) => {
            setBiodata({
              nama: data.nama,
              umurIbu: data.umurIbu,
              hamilKe: Number(data.hamilKe),
              hpht: data.hpht,
              hpl: calculateHpl(data.hpht),
              pendidikanIbu: data.pendidikanIbu,
              pendidikanSuami: data.pendidikanSuami,
              pekerjaanIbu: data.pekerjaanIbu,
              pekerjaanSuami: data.pekerjaanSuami,
            });
            setStep(2);
          })}
        >
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Biodata Pasien</h2>
            <p className="mt-1 text-sm text-slate-500">
              Semua field wajib diisi sebelum melanjutkan.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {biodataFields.map((field) => (
              <label key={field.name} className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                {field.label}
                {field.type === "select" ? (
                  <select
                    {...biodataForm.register(field.name, {
                      required: "Field ini wajib diisi",
                      valueAsNumber: true,
                    })}
                    className="rounded-xl border border-slate-200 px-4 py-2 text-sm"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    rows={3}
                    {...biodataForm.register(field.name, { required: "Field ini wajib diisi" })}
                    className="rounded-xl border border-slate-200 px-4 py-2 text-sm"
                  />
                ) : (
                  <input
                    type={field.type}
                    {...biodataForm.register(field.name, { required: "Field ini wajib diisi" })}
                    className="rounded-xl border border-slate-200 px-4 py-2 text-sm"
                  />
                )}
                {biodataForm.formState.errors[field.name] && (
                  <span className="text-xs text-rose-500">
                    {biodataForm.formState.errors[field.name]?.message}
                  </span>
                )}
              </label>
            ))}
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Hari Perkiraan Lahir (HPL)
              <input
                type="text"
                value={hplValue}
                readOnly
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600"
              />
              <span className="text-xs text-slate-500">
                HPL dihitung otomatis berdasarkan HPHT.
              </span>
            </label>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700"
            >
              Lanjut
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form
          className="space-y-6 rounded-2xl bg-white p-6 shadow-sm"
          onSubmit={answerForm.handleSubmit((data) => {
            setAnswers(data.answers);
            setStep(3);
          })}
        >
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Kuesioner Risiko</h2>
            <p className="mt-1 text-sm text-slate-500">Semua pertanyaan wajib dijawab Ya/Tidak.</p>
          </div>

          <div className="space-y-6">
            {Object.entries(groupedQuestions).map(([section, items]) => (
              <div key={section} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  {section}
                </h3>
                <div className="space-y-4">
                  {items.map((question) => (
                    <fieldset key={question.id} className="rounded-xl border border-slate-100 p-4">
                      <legend className="text-sm font-semibold text-slate-700">
                        {questionOrderMap.get(question.id)}. {question.text}
                      </legend>
                      <div className="mt-3 flex flex-wrap gap-6">
                        {["YA", "TIDAK"].map((value) => (
                          <label
                            key={value}
                            className="flex items-center gap-2 text-sm font-medium text-slate-600"
                          >
                            <input
                              type="radio"
                              value={value}
                              {...answerForm.register(`answers.${question.id}` as const, {
                                required: "Pilih salah satu jawaban",
                              })}
                            />
                            {value}
                          </label>
                        ))}
                      </div>
                      {answerForm.formState.errors.answers?.[question.id] && (
                        <span className="mt-2 block text-xs text-rose-500">
                          {answerForm.formState.errors.answers?.[question.id]?.message}
                        </span>
                      )}
                    </fieldset>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-emerald-200 hover:text-emerald-700"
            >
              Kembali
            </button>
            <button
              type="submit"
              className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700"
            >
              Selesai
            </button>
          </div>
        </form>
      )}

      {step === 3 && biodata && answers && scoring && (
        <section className="space-y-6 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Hasil Screening</h2>
              <p className="mt-1 text-sm text-slate-500">
                Skor awal pasien: {getInitialScore()}.
              </p>
            </div>
            <Link
              href="/edukasi"
              target="_blank"
              className="rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
            >
              Baca Edukasi
            </Link>
          </div>

          <div
            className={`rounded-2xl border p-6 shadow-sm ${colorClasses[scoring.category.color]}`}
          >
            <p className="text-sm font-semibold text-slate-600">Total Skor</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{scoring.totalScore}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{scoring.category.label}</p>
              <p>Perawatan: {scoring.category.perawatan.join(", ")}</p>
              <p>Tempat: {scoring.category.tempat.join(", ")}</p>
              <p>Penolong: {scoring.category.penolong.join(", ")}</p>
              <p>Rujukan Penolong: {scoring.category.rujukanPenolong.join(", ")}</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-100">
            <table className="min-w-full divide-y divide-slate-100 text-sm">
              <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">No</th>
                  <th className="px-4 py-3">Pertanyaan</th>
                  <th className="px-4 py-3">Jawaban</th>
                  <th className="px-4 py-3">Skor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {questions.map((question) => (
                  <tr key={question.id}>
                    <td className="px-4 py-3 text-slate-600">
                      {questionOrderMap.get(question.id)}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{question.text}</td>
                    <td className="px-4 py-3 font-semibold text-slate-700">
                      {answers[question.id]}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-700">
                      {scoring.perQuestionScore[question.id]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-emerald-200 hover:text-emerald-700"
            >
              Kembali
            </button>
            <button
              type="button"
              onClick={() => generateReportPdf({ biodata, questions, answers, scoring })}
              className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700"
            >
              Download PDF
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-200"
            >
              Mulai Baru
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
