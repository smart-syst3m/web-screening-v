import { AnswerMap, Question, ScoringCategory, ScoringResult } from "./types";

const scorecard: ScoringCategory[] = [
  {
    key: "KBR",
    label: "KEL RISIKO: Kehamilan Beresiko Rendah (KBR)",
    color: "emerald",
    perawatan: ["BIDAN"],
    tempat: ["TIDAK DIRUJUK"],
    penolong: ["RUMAH/POLINDES"],
    rujukanPenolong: ["BIDAN"],
  },
  {
    key: "KRT",
    label: "KEL RISIKO: Kehamilan Risiko Tinggi (KRT)",
    color: "amber",
    perawatan: ["BIDAN", "DOKTER"],
    tempat: ["BIDAN", "PKM"],
    penolong: ["POLINDES", "PKM/RS"],
    rujukanPenolong: ["BIDAN", "DOKTER"],
  },
  {
    key: "KRST",
    label: "KEL RISIKO: Kehamilan Risiki Sangat Tinggi (KRST)",
    color: "rose",
    perawatan: ["DOKTER"],
    tempat: ["RUMAH SAKIT"],
    penolong: ["RUMAH SAKIT"],
    rujukanPenolong: ["DOKTER"],
  },
];

const INITIAL_SCORE = 2;

export function calculateScore(questions: Question[], answers: AnswerMap): ScoringResult {
  const perQuestionScore: Record<string, number> = {};
  let totalScore = INITIAL_SCORE;

  questions.forEach((question) => {
    const answer = answers[question.id];
    const score = answer === "YA" ? question.score : 0;
    perQuestionScore[question.id] = score;
    totalScore += score;
  });

  const category = resolveCategory(totalScore);

  return {
    perQuestionScore,
    totalScore,
    category,
  };
}

function resolveCategory(totalScore: number): ScoringCategory {
  if (totalScore <= 2) {
    return scorecard[0];
  }
  if (totalScore <= 10) {
    return scorecard[1];
  }
  return scorecard[2];
}

export function getInitialScore() {
  return INITIAL_SCORE;
}
