const articles = [
  {
    title: "Kenali Faktor Risiko Kehamilan",
    summary:
      "Artikel ini membahas faktor risiko kehamilan dan pentingnya deteksi dini untuk ibu hamil.",
  },
  {
    title: "Pentingnya Pemeriksaan Kehamilan Rutin",
    summary:
      "Pemeriksaan rutin membantu memantau kesehatan ibu dan janin selama kehamilan.",
  },
  {
    title: "Tips Menjaga Kesehatan Ibu Hamil",
    summary:
      "Panduan singkat untuk menjaga asupan gizi, istirahat, dan aktivitas fisik yang aman.",
  },
];

export default function BlogPage() {
  return (
    <main className="space-y-6">
      <header className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Artikel Edukasi</h1>
        <p className="mt-2 text-slate-600">
          Konten berikut masih berupa placeholder, namun menggambarkan halaman blog sederhana.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <article key={article.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{article.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{article.summary}</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-emerald-600">
              Baca selengkapnya (dummy)
            </span>
          </article>
        ))}
      </section>
    </main>
  );
}
