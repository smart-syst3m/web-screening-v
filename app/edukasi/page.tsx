const edukasiSections = [
  {
    title: "1. Tanda-tanda Bahaya pada Ibu Hamil",
    description:
      "Tanda-tanda bahaya pada ibu hamil menurut WHO dan UNICEF meliputi:",
    items: [
      "Perdarahan dari vagina",
      "Kejang",
      "Sakit kepala hebat disertai gangguan penglihatan",
      "Kondisi tubuh sangat lemah atau merasa sangat sakit",
      "Nyeri perut hebat",
      "Pernapasan cepat atau sulit bernapas",
      "Demam tinggi",
      "Pembengkakan pada jari, wajah, dan kaki",
      "Keluarnya cairan ketuban sebelum waktu persalinan",
      "Muntah terus-menerus atau tidak mau makan",
      "Gerakan janin berkurang atau tidak terasa sama sekali",
    ],
    highlight:
      "Apabila ibu hamil mengalami salah satu tanda bahaya tersebut, segera dapatkan pertolongan dari tenaga kesehatan di fasilitas pelayanan kesehatan.",
    sources: [
      {
        label: "WHO – Pregnancy, Childbirth, Postpartum and Newborn Care",
        href: "https://iris.who.int/server/api/core/bitstreams/49373e59-2db6-4b1e-b8f4-8c72aef8bf8d/content",
      },
      {
        label: "UNICEF – Wall Hanging 1 (English)",
        href: "https://www.unicef.org/timorleste/media/1586/file/Wall%20Hanging%201%20%28English%29%20Print.pdf",
      },
    ],
  },
  {
    title: "2. Birth Plan (Rencana Persalinan)",
    description:
      "Birth plan membantu ibu mempersiapkan persalinan secara aman, nyaman, dan terencana.",
    items: [
      "Tempat persalinan (puskesmas, klinik bersalin, rumah sakit) sesuai kondisi kehamilan dan jarak dari rumah.",
      "Penolong persalinan (bidan atau dokter) sesuai fasilitas yang dipilih.",
      "Pendamping persalinan (suami/keluarga) agar ibu merasa lebih tenang.",
      "Persiapan biaya dan transportasi, termasuk jika terjadi keadaan darurat.",
      "Rencana selama persalinan: posisi melahirkan, dukungan pendamping, dan kesiapan mengikuti anjuran tenaga kesehatan.",
      "Rencana jika terjadi keadaan darurat: rujukan ke RS, siapa yang menemani, dan kesiapan keluarga.",
      "Persiapan darah: calon pendonor dari keluarga/kerabat bila diperlukan.",
      "Rencana setelah persalinan: IMD, ASI, kontrol nifas, dan pemantauan ibu-bayi.",
    ],
    sources: [
      {
        label: "Kemenkes RI – Buku KIA",
        href: "https://kesga.kemkes.go.id/layanan/buku-kia",
      },
      {
        label: "Kemenkes RI – Pedoman Pelayanan Kesehatan Ibu",
        href: "https://kesga.kemkes.go.id",
      },
      {
        label: "WHO – Intrapartum Care Recommendations",
        href: "https://www.who.int/publications/i/item/9789241550215",
      },
    ],
  },
  {
    title: "3. Edukasi Anemia pada Ibu Hamil",
    description: "Kenali tanda, risiko, dan tindakan yang dapat dilakukan.",
    subsections: [
      {
        title: "Tanda dan Gejala",
        items: [
          "Mudah lelah dan lemas",
          "Wajah terlihat pucat",
          "Sering pusing atau sakit kepala",
          "Jantung berdebar",
          "Mudah mengantuk",
        ],
      },
      {
        title: "Risiko Jika Tidak Diatasi",
        items: [
          "Ibu mudah lelah selama kehamilan dan persalinan",
          "Risiko perdarahan saat melahirkan",
          "Pemulihan setelah melahirkan lebih lama",
          "Bayi berisiko lahir dengan berat badan rendah",
          "Bayi berisiko lahir sebelum waktunya",
        ],
      },
      {
        title: "Tindakan yang Dapat Dilakukan",
        items: [
          "Minum tablet tambah darah setiap hari (lebih nyaman sebelum tidur malam bila mual).",
          "Minum tablet tambah darah dengan air putih atau jus jeruk.",
          "Hindari teh, kopi, atau susu saat minum tablet tambah darah.",
          "Konsumsi makanan bergizi: daging, ikan, telur, tahu, tempe, kacang-kacangan, sayur hijau.",
          "Perbanyak air putih dan jus buah.",
          "Periksa kehamilan secara rutin untuk memantau ibu dan bayi.",
        ],
      },
    ],
    sources: [
      {
        label: "WHO – Anaemia Fact Sheet",
        href: "https://www.who.int/news-room/fact-sheets/detail/anaemia",
      },
      {
        label: "Kemenkes RI – Buku Saku Pencegahan Anemia",
        href: "https://ayosehat.kemkes.go.id/buku-saku-pencegahan-anemia-pada-ibu-hamil-dan-remaja-putri",
      },
    ],
  },
  {
    title: "4. Pencegahan Tekanan Darah Tinggi (Preeklamsia)",
    description:
      "Preeklamsia biasanya muncul setelah usia kehamilan 20 minggu dan dapat berbahaya bagi ibu serta bayi.",
    items: [
      "Rutin periksa kehamilan (ANC) dan cek tekanan darah serta urine sesuai anjuran.",
      "Kenali tanda bahaya: sakit kepala berat, pandangan kabur, bengkak mendadak, nyeri ulu hati.",
      "Pola hidup sehat: makan bergizi seimbang, kurangi makanan asin/instan, cukup air putih.",
      "Aktivitas fisik ringan seperti jalan kaki atau senam hamil sesuai anjuran.",
      "Minum obat/suplemen sesuai anjuran tenaga kesehatan, jangan minum obat sendiri.",
      "Dukungan keluarga untuk kontrol rutin dan kewaspadaan tanda bahaya.",
    ],
    sources: [
      {
        label:
          "Jurnal Antara Abdimas Keperawatan – Penyuluhan Pencegahan Preeklamsia (2025)",
        href: "https://doi.org/10.37063/jurnalantaraabdimaskeperawatan.v8i1.394",
      },
    ],
  },
  {
    title: "5. Edukasi Gizi pada Ibu Hamil untuk Mencegah Stunting",
    description: "Gizi seimbang membantu pertumbuhan janin dan mencegah komplikasi.",
    subsections: [
      {
        title: "Tanda & Gejala Kekurangan Gizi",
        items: [
          "Berat badan tidak naik sesuai usia kehamilan",
          "Mudah lelah, lemas, pusing",
          "Nafsu makan menurun",
          "Anemia (pucat, Hb rendah)",
          "LILA < 23,5 cm",
          "Pertumbuhan janin lebih kecil dari usia kehamilan",
        ],
      },
      {
        title: "Risiko Jika Tidak Diatasi",
        items: [
          "Ibu: anemia berat, mudah infeksi, komplikasi kehamilan/persalinan.",
          "Bayi: BBLR, IUGR, stunting, perkembangan otak tidak optimal.",
        ],
      },
      {
        title: "Tindakan yang Harus Dilakukan",
        items: [
          "Konsumsi makanan bergizi seimbang (karbohidrat, protein, sayur, buah).",
          "Minum tablet tambah darah (zat besi + asam folat) rutin.",
          "Perbanyak protein hewani (ikan, telur, daging).",
          "Rutin pemeriksaan kehamilan (ANC).",
          "Ikut konseling gizi bila tersedia.",
          "Istirahat cukup dan terapkan pola hidup sehat.",
        ],
      },
    ],
    sources: [
      {
        label: "WHO – Nutrition Counselling During Pregnancy",
        href: "https://www.who.int/tools/elena/interventions/nutrition-counselling-pregnancy",
      },
      {
        label: "UNICEF – Maternal Nutrition",
        href: "https://www.unicef.org/nutrition/maternal",
      },
      {
        label: "UNICEF – Maternal Nutrition Programming Guidance (PDF)",
        href: "https://www.unicef.org/media/114561/file/Maternal%20Nutrition%20Programming%20Guidance.pdf",
      },
      {
        label: "Kemenkes RI – Pencegahan Stunting",
        href: "https://www.kemkes.go.id",
      },
    ],
  },
  {
    title: "6. Edukasi Kesehatan Mental Ibu Hamil",
    description: "Menjaga kesehatan mental membantu ibu lebih nyaman dan siap menghadapi persalinan.",
    subsections: [
      {
        title: "Cara Sederhana Menjaga Kesehatan Mental",
        items: [
          "Cerita dan minta dukungan dari suami, keluarga, atau tenaga kesehatan.",
          "Istirahat cukup (7–9 jam) dan lakukan relaksasi ringan.",
          "Lakukan aktivitas yang menyenangkan: jalan santai, musik, membaca, atau berdoa.",
          "Makan sehat dan teratur serta cukup air putih.",
          "Ikut kelas ibu hamil untuk menambah pengetahuan dan mengurangi rasa cemas.",
          "Konsultasi ke tenaga kesehatan bila ada keluhan psikologis.",
        ],
      },
      {
        title: "Peran Keluarga",
        items: [
          "Memberi perhatian dan dukungan emosional.",
          "Tidak menyalahkan ibu.",
          "Membantu pekerjaan rumah.",
          "Mengajak ibu berbicara dan didengar.",
        ],
      },
    ],
    sources: [
      { label: "WHO – Mental Health of Women During Pregnancy", href: "https://www.who.int" },
      { label: "Kemenkes RI – Buku KIA", href: "https://kesga.kemkes.go.id/layanan/buku-kia" },
      {
        label: "ACOG – Mental Health Conditions During Pregnancy",
        href: "https://www.acog.org",
      },
    ],
  },
  {
    title: "7. Edukasi Jarak Kehamilan",
    description: "Jarak kehamilan yang cukup membantu pemulihan ibu dan kesehatan bayi.",
    items: [
      "Memberi waktu tubuh ibu pulih sepenuhnya setelah melahirkan.",
      "Mengurangi risiko anemia, perdarahan, BBLR, ketuban pecah dini, dan persalinan prematur.",
      "Mendukung gizi dan tumbuh kembang anak sebelumnya.",
      "Dianjurkan jarak sekitar 24 bulan (2 tahun) antar kehamilan.",
    ],
    sources: [
      {
        label:
          "Pohan R.A. dkk (2024) – KIE kontrasepsi jarak kehamilan sehat (Jurnal PkM Aufa)",
        href: "https://doi.org/10.51933/jpma.v7i1.1956",
      },
    ],
  },
  {
    title: "8. Edukasi Kunjungan ANC (Antenatal Care)",
    description:
      "Menurut rekomendasi WHO, kunjungan ANC minimal 8 kali selama kehamilan.",
    subsections: [
      {
        title: "Trimester I (0–12 minggu)",
        items: [
          "1 kali dengan dokter sebelum usia kehamilan 12 minggu.",
          "Tujuan: konfirmasi kehamilan, tentukan usia kehamilan & HPL, deteksi dini risiko, pemeriksaan awal ibu & janin.",
        ],
      },
      {
        title: "Trimester II (13–28 minggu)",
        items: [
          "2 kali dengan bidan (±16 minggu dan ±24 minggu).",
          "Tujuan: pemantauan pertumbuhan janin, pemeriksaan kesehatan ibu, edukasi nutrisi & tanda bahaya.",
        ],
      },
      {
        title: "Trimester III (29–40 minggu)",
        items: [
          "4 kali dengan bidan (±28–30, ±32, ±36, ±38–40 minggu).",
          "Tujuan: pemantauan kesejahteraan ibu-janin, deteksi komplikasi akhir.",
        ],
      },
      {
        title: "Kunjungan Dokter Menjelang Persalinan",
        items: [
          "1 kali dengan dokter sekitar 36–37 minggu.",
          "Tujuan: penilaian akhir, rencana & tempat persalinan, evaluasi kebutuhan rujukan.",
        ],
      },
    ],
    highlight: "Total minimal 8 kali kunjungan ANC.",
    sources: [
      {
        label: "WHO – Antenatal Care Recommendations (2022)",
        href: "https://www.who.int/publications/i/item/9789240053047",
      },
    ],
  },
  {
    title: "9. Edukasi Tanda Persalinan & Kegawatdaruratan",
    description: "Kenali tanda gawat darurat yang perlu penanganan segera.",
    items: [
      "Perdarahan dari jalan lahir yang terus-menerus.",
      "Sakit kepala hebat & penglihatan kabur disertai bengkak.",
      "Nyeri perut hebat & terus menerus.",
      "Ketuban pecah disertai cairan hijau/coklat & bau.",
      "Gerakan janin berkurang (< 10 kali dalam 12 jam).",
      "Demam tinggi (≥ 38°C).",
      "Kejang atau penurunan kesadaran.",
    ],
    sources: [
      { label: "Kemenkes RI – Buku KIA", href: "https://kesga.kemkes.go.id/layanan/buku-kia" },
      {
        label: "WHO – Pregnancy, Childbirth, Postpartum and Newborn Care",
        href: "https://www.who.int/publications/i/item/924159084X",
      },
    ],
  },
  {
    title: "10. Edukasi Rujukan dan Persalinan Aman",
    description:
      "Rujukan ke fasilitas kesehatan yang lebih lengkap dapat menyelamatkan ibu dan bayi.",
    subsections: [
      {
        title: "Tujuan dan Pentingnya Rujukan",
        items: [
          "Komplikasi membutuhkan fasilitas dan tenaga khusus.",
          "Mencegah kematian ibu dan bayi saat persalinan.",
          "Mengurangi risiko cedera atau kecacatan jangka panjang.",
        ],
      },
      {
        title: "Tanda Bahaya yang Perlu Dirujuk Segera",
        items: [
          "Perdarahan hebat.",
          "Nyeri kepala berat yang tidak hilang.",
          "Penglihatan kabur.",
          "Kontraksi terlalu cepat atau tidak berhenti.",
          "Gerakan bayi berkurang.",
        ],
      },
      {
        title: "Rencana Persalinan yang Aman",
        items: [
          "Tentukan fasilitas persalinan yang terdekat dan sesuai kondisi.",
          "Siapkan transportasi dan biaya darurat.",
          "Siapkan kontak fasilitas rujukan.",
          "Diskusikan kemungkinan rujukan sebelum persalinan dimulai.",
        ],
      },
      {
        title: "Standar Pelayanan Persalinan Aman (WHO Safe Childbirth Checklist)",
        items: [
          "Pencegahan dan penanganan perdarahan.",
          "Pencegahan infeksi.",
          "Deteksi komplikasi.",
          "Penanganan hipertensi pada kehamilan.",
          "Perawatan bayi baru lahir.",
        ],
      },
    ],
    sources: [
      {
        label: "WHO – Safe Childbirth Checklist",
        href: "https://www.who.int/teams/integrated-health-services/patient-safety/research/safe-childbirth",
      },
      {
        label: "Jurnal Universitas Pahlawan – Persalinan Aman",
        href: "https://journal.universitaspahlawan.ac.id/index.php/cdj/article/view/44347",
      },
    ],
  },
];

export default function EdukasiPage() {
  return (
    <main className="space-y-8">
      <header className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
          Pusat Edukasi
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Edukasi Kehamilan Sehat & Persiapan Persalinan
        </h1>
        <p className="mt-3 text-slate-600">
          Materi berikut dirangkum agar mudah dipahami dan dapat menjadi panduan praktis bagi
          ibu hamil serta keluarga.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="space-y-6">
          {edukasiSections.map((section) => (
            <article key={section.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
              {section.description && <p className="mt-2 text-sm text-slate-600">{section.description}</p>}

              {section.items && (
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-700">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.subsections && (
                <div className="mt-4 space-y-4">
                  {section.subsections.map((subsection) => (
                    <div key={subsection.title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                      <h3 className="text-sm font-semibold text-slate-800">{subsection.title}</h3>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-700">
                        {subsection.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {section.highlight && (
                <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                  {section.highlight}
                </p>
              )}

              {section.sources && (
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Sumber</p>
                  <ul className="mt-2 space-y-1 text-xs text-emerald-700">
                    {section.sources.map((source) => (
                      <li key={source.href}>
                        <a className="hover:underline" href={source.href} target="_blank" rel="noreferrer">
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-sm text-emerald-700 shadow-sm">
            <h3 className="text-base font-semibold text-emerald-800">Pesan Penting</h3>
            <p className="mt-2">
              Segera datangi fasilitas kesehatan jika ibu hamil mengalami perdarahan, kejang,
              demam tinggi, atau gerakan janin berkurang. Keselamatan ibu dan bayi adalah prioritas utama.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-sm text-slate-600 shadow-sm">
            <h3 className="text-base font-semibold text-slate-800">Checklist Harian Ibu Hamil</h3>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Minum air putih cukup dan makan bergizi seimbang.</li>
              <li>Minum tablet tambah darah sesuai anjuran.</li>
              <li>Istirahat cukup dan kelola stres.</li>
              <li>Catat jadwal kontrol ANC berikutnya.</li>
              <li>Diskusikan rencana persalinan dengan keluarga.</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
