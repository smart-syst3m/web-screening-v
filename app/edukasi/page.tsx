export default function EdukasiPage() {
  return (
    <main className="space-y-6">
      <header className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Edukasi Kehamilan Sehat</h1>
        <p className="mt-2 text-slate-600">
          Informasi edukasi ini adalah placeholder yang dapat diganti dengan materi resmi.
        </p>
      </header>
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Tips Singkat</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-600">
          <li>Periksa kehamilan secara rutin sesuai jadwal tenaga kesehatan.</li>
          <li>Jaga asupan gizi seimbang dan konsumsi vitamin sesuai anjuran.</li>
          <li>Istirahat cukup dan hindari aktivitas berat tanpa pengawasan.</li>
          <li>Segera konsultasi jika ada keluhan atau tanda bahaya kehamilan.</li>
        </ul>
      </section>
    </main>
  );
}
