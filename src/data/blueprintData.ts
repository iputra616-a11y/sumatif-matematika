import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase B (Kelas III) Mata Pelajaran Matematika
 * Materi: Pengukuran Panjang dan Pengukuran Berat
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 40 butir soal Kurikulum Merdeka Matematika Kelas III
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menentukan alat ukur baku yang tepat untuk mengukur benda pendek.',
    indikatorSoal: 'Disajikan gambar/konteks benda pendek (pensil/buku), peserta didik dapat menentukan penggaris sebagai alat ukur yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat mengidentifikasi satuan panjang baku yang ada pada penggaris.',
    indikatorSoal: 'Disajikan pilihan satuan, peserta didik dapat menentukan satuan baku sentimeter (cm) pada penggaris.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat melakukan konversi satuan meter ke sentimeter.',
    indikatorSoal: 'Disajikan nilai panjang 1 meter, peserta didik dapat mengonversi ke dalam satuan sentimeter (100 cm).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menentukan alat ukur panjang yang fleksibel untuk bidang melengkung.',
    indikatorSoal: 'Disajikan kegiatan penjahit mengukur badan, peserta didik dapat memilih meteran pita kain.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menyatakan panjang benda dalam kombinasi meter dan sentimeter.',
    indikatorSoal: 'Disajikan panjang meja 125 cm, peserta didik dapat menguraikan menjadi 1 m lebih 25 cm.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menghitung konversi satuan meter ke sentimeter pada bilangan bulat.',
    indikatorSoal: 'Disajikan panjang pita 4 meter, peserta didik dapat menentukan kesetaraannya dalam cm (400 cm).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat mengenali satuan panjang untuk jarak jauh.',
    indikatorSoal: 'Disajikan pertanyaan tentang jarak antarkota, peserta didik dapat memilih satuan kilometer (km).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat mengonversi satuan sentimeter ke milimeter.',
    indikatorSoal: 'Disajikan panjang penghapus 3 cm, peserta didik dapat menentukan panjangnya dalam mm (30 mm).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat mengonversi satuan sentimeter ratusan ke satuan meter.',
    indikatorSoal: 'Disajikan panjang 300 cm, peserta didik dapat menentukan kesetaraannya dalam satuan meter (3 m).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan operasi penjumlahan panjang dengan satuan berbeda (m dan cm).',
    indikatorSoal: 'Disajikan panjang dua pita (2 m dan 150 cm), peserta didik dapat menghitung panjang total dalam cm.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat mengidentifikasi alat ukur panjang untuk bangunan.',
    indikatorSoal: 'Disajikan pekerjaan tukang bangunan, peserta didik dapat menentukan meteran rol/saku sebagai alat ukur yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat memahami hubungan kesetaraan kilometer dan meter.',
    indikatorSoal: 'Disajikan satuan 1 km, peserta didik dapat menentukan kesetaraannya yaitu 1.000 meter.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat memahami teknik pengukuran panjang benda menggunakan penggaris.',
    indikatorSoal: 'Disajikan tata cara mengukur dengan penggaris, peserta didik dapat menentukan titik awal pengukuran dari angka 0.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat memilih benda yang sesuai diukur dengan penggaris 30 cm.',
    indikatorSoal: 'Disajikan pilihan benda di sekitar, peserta didik dapat memilih buku tulis sebagai benda yang tepat diukur dengan penggaris.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan operasi pengurangan panjang (pemotongan tali).',
    indikatorSoal: 'Disajikan tali 3 m yang dipotong 70 cm, peserta didik dapat menghitung sisa tali dalam cm (230 cm).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat mengenali alat ukur baku untuk mengukur berat benda.',
    indikatorSoal: 'Disajikan fungsi pengukuran berat, peserta didik dapat menentukan timbangan sebagai alat ukur baku.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat mengidentifikasi satuan baku pengukuran berat.',
    indikatorSoal: 'Disajikan beberapa kelompok satuan, peserta didik dapat memilih kilogram dan gram sebagai satuan baku berat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat memahami hubungan konversi kilogram ke gram.',
    indikatorSoal: 'Disajikan berat 1 kilogram, peserta didik dapat menentukan kesetaraannya yaitu 1.000 gram.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menentukan alat ukur berat badan manusia.',
    indikatorSoal: 'Disajikan kebutuhan menimbang berat tubuh siswa, peserta didik dapat memilih timbangan badan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menghitung total berat belanjaan dengan satuan berbeda (kg dan g).',
    indikatorSoal: 'Disajikan belanjaan 2 kg tepung dan 500 g gula, peserta didik dapat menghitung total berat dalam gram (2.500 g).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat memahami hubungan kesetaraan kilogram dan ons.',
    indikatorSoal: 'Disajikan berat 1 kg, peserta didik dapat menentukan nilainya sama dengan 10 ons.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat memahami hubungan konversi ons ke gram.',
    indikatorSoal: 'Disajikan berat 1 ons, peserta didik dapat menentukan nilainya sama dengan 100 gram.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat mengidentifikasi kegunaan timbangan dapur/kue.',
    indikatorSoal: 'Disajikan macam kegiatan menimbang, peserta didik dapat menentukan bahan pembuat kue sebagai objek timbangan dapur.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat melakukan konversi kilogram ke gram pada bilangan bulat.',
    indikatorSoal: 'Disajikan berat semangka 4 kg, peserta didik dapat menentukan nilainya dalam gram (4.000 g).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan operasi pengurangan berat dan konversi ke gram.',
    indikatorSoal: 'Disajikan panen 5 kg dikurangi 2 kg, peserta didik dapat menentukan sisa berat buah dalam satuan gram (3.000 g).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menentukan satuan berat yang tepat untuk benda ringan.',
    indikatorSoal: 'Disajikan benda kecil (permen/cincin), peserta didik dapat menentukan satuan gram sebagai satuan yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat mengonversi satuan gram ribuan ke kilogram.',
    indikatorSoal: 'Disajikan berat 3.000 gram, peserta didik dapat menentukan kesetaraannya yaitu 3 kg.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat mengenali satuan anak timbangan pada timbangan pasar/bebek.',
    indikatorSoal: 'Disajikan kegiatan di pasar tradisional, peserta didik dapat menentukan satuan kilogram dan ons pada anak timbangan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menjumlahkan dua besaran berat dalam satuan gram.',
    indikatorSoal: 'Disajikan dua bungkus garam @ 250 g, peserta didik dapat menjumlahkan berat totalnya (500 g).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat mengonversi campuran satuan kg dan gram ke gram murni.',
    indikatorSoal: 'Disajikan beras 3 kg 250 gram, peserta didik dapat menentukan beratnya dalam satuan gram (3.250 g).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat memvalidasi kesetaraan 1 meter = 100 sentimeter.',
    indikatorSoal: 'Disajikan pernyataan konversi 1 m = 100 cm, peserta didik dapat memvalidasi kebenarannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menilai ketepatan alat ukur penggaris untuk benda sangat panjang.',
    indikatorSoal: 'Disajikan pernyataan mengukur lapangan dengan penggaris 30 cm, peserta didik dapat menentukan bahwa pernyataan tersebut salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat membandingkan besaran satuan sentimeter dan meter.',
    indikatorSoal: 'Disajikan pernyataan perbandingan cm dan m, peserta didik dapat mengidentifikasi kekeliruan pernyataan tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat memvalidasi kesetaraan 2 kilometer = 2.000 meter.',
    indikatorSoal: 'Disajikan pernyataan konversi 2 km = 2.000 m, peserta didik dapat menentukan kebenarannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat membandingkan panjang dua benda dengan satuan berbeda (cm dan m).',
    indikatorSoal: 'Disajikan perbandingan tongkat 150 cm dengan bambu 2 meter, peserta didik dapat memvalidasi kesimpulan perbandingan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  36: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat memvalidasi kesetaraan 1 kilogram = 1.000 gram.',
    indikatorSoal: 'Disajikan pernyataan konversi 1 kg = 1.000 g, peserta didik dapat menentukan kebenarannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  37: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menilai ketepatan alat ukur timbangan dapur untuk menimbang orang.',
    indikatorSoal: 'Disajikan pernyataan menimbang badan dengan timbangan dapur, peserta didik dapat mengidentifikasi kekeliruan pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  38: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat memvalidasi kesetaraan 1 kilogram = 10 ons.',
    indikatorSoal: 'Disajikan pernyataan hubungan 1 kg = 10 ons, peserta didik dapat menentukan kebenarannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  39: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat membandingkan berat benda dalam satuan gram dan kilogram.',
    indikatorSoal: 'Disajikan perbandingan 700 gram dengan 1 kg, peserta didik dapat mengidentifikasi kekeliruan perbandingan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  40: {
    elemen: 'Pengukuran',
    tujuanPembelajaran: 'Peserta didik dapat menganalisis kesetaraan gabungan dua benda 500 gram dengan 1 kilogram.',
    indikatorSoal: 'Disajikan gabungan dua kantong 500 g menghasilkan 1 kg, peserta didik dapat memvalidasi kebenarannya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda';
    case 'pgk':
      return 'Pilihan Ganda Kompleks';
    case 'pgk_kategori':
      return 'Benar / Salah';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L1 (Pemahaman)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      if (q.statements.length === 1) {
        return q.statements[0].correctAnswer ? 'Benar' : 'Salah';
      }
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);
  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def ? def.tujuanPembelajaran : `Peserta didik mampu memahami dan menyelesaikan masalah ${q.topic}.`);
  const indikatorSoal =
    q.indikatorSoal ||
    (def ? def.indikatorSoal : `Disajikan soal ${q.topic}, peserta didik dapat menjawab pertanyaan dengan tepat.`);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('panjang') || t.includes('berat') || t.includes('ukur') || t.includes('pengukuran')) {
    return 'Pengukuran';
  }
  if (t.includes('hitung') || t.includes('bilangan') || t.includes('pecahan')) {
    return 'Bilangan';
  }
  if (t.includes('bangun') || t.includes('ruang') || t.includes('datar') || t.includes('geometri')) {
    return 'Geometri';
  }
  return 'Pengukuran';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghasilkan data agregasi statistik blueprint dari seluruh soal aktif
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Hitung distribusi elemen
  const elemenCountMap: Record<string, number> = {};
  // Hitung distribusi level kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Hitung distribusi kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Hitung distribusi bentuk soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    diffCountMap[bp.difficulty] = (diffCountMap[bp.difficulty] || 0) + 1;
    const qType = questions[idx]?.type || 'pg';
    typeCountMap[qType] = (typeCountMap[qType] || 0) + 1;
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar pengukuran',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pengukuran dan konversi satuan',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kontekstual',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
