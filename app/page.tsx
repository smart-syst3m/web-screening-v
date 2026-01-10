import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-10">
      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
          Screening Kesehatan
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">
          Screening Ibu Resiko Tinggi
        </h1>
        <p className="mt-4 text-slate-600">
          Lengkapi biodata dan kuesioner untuk mengetahui kategori risiko kehamilan.
          Hasil dapat diunduh sebagai laporan PDF.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/screening"
            className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700"
          >
            Mulai Screening
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-emerald-200 hover:text-emerald-700"
          >
            Baca Artikel
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Form Biodata",
            desc: "Isi data diri ibu hamil dengan lengkap.",
          },
          {
            title: "Kuesioner Risiko",
            desc: "Jawab pertanyaan Ya/Tidak untuk menentukan risiko.",
          },
          {
            title: "Hasil & Laporan",
            desc: "Lihat skor dan unduh laporan PDF untuk referensi.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
