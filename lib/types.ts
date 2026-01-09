export type BiodataRecord = {
  nama: string;
  umurIbu: string;
  hamilKe: number;
  hpht: string;
  hpl: string;
  pendidikanIbu: string;
  pendidikanSuami: string;
  pekerjaanIbu: string;
  pekerjaanSuami: string;
};

export type Question = {
  id: string;
  text: string;
  score: number;
  section: string;
};

export type AnswerValue = "YA" | "TIDAK";

export type AnswerMap = Record<string, AnswerValue>;

export type ScoringCategory = {
  key: "KBR" | "KRT" | "KRST";
  label: string;
  color: "emerald" | "amber" | "rose";
  perawatan: string[];
  tempat: string[];
  penolong: string[];
  rujukanPenolong: string[];
};

export type ScoringResult = {
  perQuestionScore: Record<string, number>;
  totalScore: number;
  category: ScoringCategory;
};
