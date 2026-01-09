import { Question } from "./types";

export const QUESTION_SECTIONS = {
  satu: "KELOMPOK FAKTOR RISIKO I (ADA POTENSI RISIKO / POTENSI GAWAT)",
  dua: "KELOMPOK FAKTOR RISIKO II (ADA RISIKO/ADA GAWAT/ADA TANDA BAHAYA)",
  tiga: "KELOMPOK FAKTOR RISIKO III (ADA GAWAT DARURAT)",
} as const;

export const questions: Question[] = [
  {
    id: "fr1-usia-16",
    text: "Apakah usia ibu hamil saat ini kurang atau sama dengan 16 tahun?",
    score: 4,
    section: QUESTION_SECTIONS.satu,
  },
  {
    id: "fr1-hamil-pertama-4tahun",
    text: "Apakah ini kehamilan pertama dan ibu hamil setelah menikah selama 4 tahun atau lebih?",
    score: 4,
    section: QUESTION_SECTIONS.satu,
  },
  {
    id: "fr1-hamil-pertama-35",
    text: "Apakah ini kehamilan pertama dan usia ibu saat ini 35 tahun atau lebih?",
    score: 4,
    section: QUESTION_SECTIONS.satu,
  },
  {
    id: "fr1-jarak-kelahiran-2",
    text: "Apakah jarak kelahiran dengan anak terkecil sebelumnya kurang dari 2 tahun?",
    score: 4,
    section: QUESTION_SECTIONS.satu,
  },
  {
    id: "fr1-jarak-persalinan-10",
    text: "Apakah jarak persalinan terakhir adalah 10 tahun atau lebih?",
    score: 4,
    section: QUESTION_SECTIONS.satu,
  },
  {
    id: "fr1-hamil-4",
    text: "Apakah ibu pernah hamil atau melahirkan anak sebanyak 4 kali atau lebih?",
    score: 4,
    section: QUESTION_SECTIONS.satu,
  },
  {
    id: "fr1-usia-35",
    text: "Apakah usia ibu saat ini 35 tahun atau lebih?",
    score: 4,
    section: QUESTION_SECTIONS.satu,
  },
  {
    id: "fr1-tinggi-145",
    text: "Apakah tinggi badan ibu 145 cm atau kurang?",
    score: 4,
    section: QUESTION_SECTIONS.satu,
  },
  {
    id: "fr1-keguguran",
    text: "Apakah ibu pernah mengalami keguguran?",
    score: 4,
    section: QUESTION_SECTIONS.satu,
  },
  {
    id: "fr1-vakum",
    text: "Apakah ibu pernah melahirkan dengan tindakan tarikan tang/vakum/alat penyedot?",
    score: 4,
    section: QUESTION_SECTIONS.satu,
  },
  {
    id: "fr1-manual-plasenta",
    text: "Apakah ibu pernah melahirkan dengan tindakan pengeluaran uri/ari-ari/plasenta menggunakan tangan?",
    score: 4,
    section: QUESTION_SECTIONS.satu,
  },
  {
    id: "fr1-infus-transfusi",
    text: "Apakah ibu pernah diberi infus atau transfusi saat persalinan?",
    score: 4,
    section: QUESTION_SECTIONS.satu,
  },
  {
    id: "fr1-sesar",
    text: "Apakah ibu pernah melahirkan bayi dengan operasi sesar (SC)?",
    score: 8,
    section: QUESTION_SECTIONS.satu,
  },
  {
    id: "fr2-anemia",
    text: "Apakah ibu mengalami penyakit pada masa kehamilan berupa kurang darah/anemia?",
    score: 4,
    section: QUESTION_SECTIONS.dua,
  },
  {
    id: "fr2-malaria",
    text: "Apakah ibu mengalami penyakit pada masa kehamilan berupa malaria?",
    score: 4,
    section: QUESTION_SECTIONS.dua,
  },
  {
    id: "fr2-tbc",
    text: "Apakah ibu mengalami penyakit pada masa kehamilan berupa Tuberkulosis Paru (TBC)?",
    score: 4,
    section: QUESTION_SECTIONS.dua,
  },
  {
    id: "fr2-jantung",
    text: "Apakah ibu mengalami penyakit pada masa kehamilan berupa payah jantung?",
    score: 4,
    section: QUESTION_SECTIONS.dua,
  },
  {
    id: "fr2-diabetes",
    text: "Apakah ibu mengalami penyakit pada masa kehamilan berupa kencing manis/diabetes melitus?",
    score: 4,
    section: QUESTION_SECTIONS.dua,
  },
  {
    id: "fr2-pms",
    text: "Apakah ibu mengalami penyakit pada masa kehamilan berupa penyakit menular seksual?",
    score: 4,
    section: QUESTION_SECTIONS.dua,
  },
  {
    id: "fr2-preeklampsia",
    text: "Apakah ibu mengalami bengkak pada muka/tungkai disertai tekanan darah tinggi (preeklampsia)?",
    score: 4,
    section: QUESTION_SECTIONS.dua,
  },
  {
    id: "fr2-kembar",
    text: "Apakah ibu sedang hamil kembar dua atau lebih?",
    score: 4,
    section: QUESTION_SECTIONS.dua,
  },
  {
    id: "fr2-ketuban",
    text: "Apakah ibu pernah diberitahu oleh tenaga kesehatan bahwa jumlah air ketuban saat ini terlalu banyak?",
    score: 4,
    section: QUESTION_SECTIONS.dua,
  },
  {
    id: "fr2-bayi-meninggal",
    text: "Apakah ibu pernah mengalami bayi meninggal di dalam kandungan pada kehamilan sebelumnya?",
    score: 4,
    section: QUESTION_SECTIONS.dua,
  },
  {
    id: "fr2-usia-42",
    text: "Apakah usia kehamilan ibu saat ini lebih bulan (42 minggu atau lebih)?",
    score: 4,
    section: QUESTION_SECTIONS.dua,
  },
  {
    id: "fr2-sungsang",
    text: "Apakah saat ini posisi bayi adalah sungsang?",
    score: 8,
    section: QUESTION_SECTIONS.dua,
  },
  {
    id: "fr2-melintang",
    text: "Apakah saat ini posisi bayi adalah melintang?",
    score: 8,
    section: QUESTION_SECTIONS.dua,
  },
  {
    id: "fr3-perdarahan",
    text: "Apakah ibu mengalami perdarahan dalam kehamilan ini?",
    score: 8,
    section: QUESTION_SECTIONS.tiga,
  },
  {
    id: "fr3-kejang",
    text: "Apakah pada usia kehamilan 6 bulan atau lebih ibu mengalami sakit kepala/pusing disertai bengkak pada tungkai/wajah, tekanan darah tinggi, pemeriksaan urine terdapat albumin, dan disertai kejang-kejang?",
    score: 8,
    section: QUESTION_SECTIONS.tiga,
  },
];
