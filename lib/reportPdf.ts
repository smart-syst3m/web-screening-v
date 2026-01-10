import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { AnswerMap, BiodataRecord, Question, ScoringResult } from "./types";

export type ReportPayload = {
  biodata: BiodataRecord;
  questions: Question[];
  answers: AnswerMap;
  scoring: ScoringResult;
};

export function formatTimestamp(date = new Date()) {
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}_${pad(
    date.getHours()
  )}${pad(date.getMinutes())}`;
}

export function formatDisplayTimestamp(date = new Date()) {
  return date.toLocaleString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function generateReportPdf({ biodata, questions, answers, scoring }: ReportPayload) {
  const doc = new jsPDF();
  const createdAt = new Date();

  doc.setFontSize(16);
  doc.text("Laporan Screening Ibu Resiko Tinggi", 14, 18);
  doc.setFontSize(11);
  doc.text(`Timestamp: ${formatDisplayTimestamp(createdAt)}`, 14, 26);

  autoTable(doc, {
    startY: 32,
    head: [["Biodata", "Detail"]],
    body: [
      ["Nama", biodata.nama],
      ["Umur Ibu", biodata.umurIbu],
      ["Hamil Ke", String(biodata.hamilKe)],
      ["Hari pertama Haid Terakhir (HPHT)", biodata.hpht],
      ["Hari Perkiraan Lahir (HPL)", biodata.hpl],
      ["Pendidikan Ibu", biodata.pendidikanIbu],
      ["Pendidikan Suami", biodata.pendidikanSuami],
      ["Pekerjaan Ibu", biodata.pekerjaanIbu],
      ["Pekerjaan Suami", biodata.pekerjaanSuami],
    ],
  });

  const questionRows = questions.map((question, index) => [
    String(index + 1),
    question.text,
    answers[question.id] ?? "-",
    String(scoring.perQuestionScore[question.id] ?? 0),
  ]);

  autoTable(doc, {
    startY: (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable
      ?.finalY
      ? (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable!.finalY + 8
      : 60,
    head: [["No", "Pertanyaan", "Jawaban", "Skor"]],
    body: questionRows,
    styles: { fontSize: 9 },
    headStyles: { fillColor: [16, 185, 129] },
  });

  autoTable(doc, {
    startY: (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable
      ?.finalY
      ? (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable!.finalY + 8
      : 80,
    head: [["Ringkasan", "Detail"]],
    body: [
      ["Total Skor", String(scoring.totalScore)],
      ["Kategori", scoring.category.label],
      ["Perawatan", scoring.category.perawatan.join(", ")],
      ["Tempat", scoring.category.tempat.join(", ")],
      ["Penolong", scoring.category.penolong.join(", ")],
      ["Rujukan Penolong", scoring.category.rujukanPenolong.join(", ")],
    ],
  });

  const fileName = `screening_nama_${biodata.nama.replace(/\s+/g, "_")}_${formatTimestamp(
    createdAt
  )}.pdf`;
  doc.save(fileName);
}
