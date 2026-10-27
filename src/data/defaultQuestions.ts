import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // --- BAGIAN I: 30 SOAL PILIHAN GANDA (PG) (Nomor 1 - 30) ---
  // Distribusi PG: 24 Soal Mudah (80%), 6 Soal Sedang (20%)
  // Topik: 15 Pengukuran Panjang (No 1-15), 15 Pengukuran Berat (No 16-30)
  // =========================================================================

  // --- SOAL 1 (PG - Mudah - Pengukuran Panjang) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Alat ukur baku yang paling sering digunakan untuk mengukur panjang pensil atau buku tulis adalah...',
    options: [
      { id: 'A', text: 'Penggaris' },
      { id: 'B', text: 'Timbangan' },
      { id: 'C', text: 'Termometer' },
      { id: 'D', text: 'Stopwatch' },
    ],
    correctAnswer: 'A',
    explanation:
      'Penggaris adalah alat ukur panjang baku yang praktis dan tepat untuk benda berukuran relatif pendek seperti pensil dan buku.',
  },

  // --- SOAL 2 (PG - Mudah - Pengukuran Panjang) ---
  {
    id: 2,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Satuan panjang baku yang biasanya terdapat pada penggaris siswa adalah...',
    options: [
      { id: 'A', text: 'Kilogram (kg)' },
      { id: 'B', text: 'Sentimeter (cm)' },
      { id: 'C', text: 'Liter (L)' },
      { id: 'D', text: 'Detik (det)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Skala angka pada penggaris sekolah umumnya menggunakan satuan sentimeter (cm) dan milimeter (mm).',
  },

  // --- SOAL 3 (PG - Mudah - Pengukuran Panjang) ---
  {
    id: 3,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Nilai panjang dari 1 meter (m) sama dengan...',
    options: [
      { id: 'A', text: '10 cm' },
      { id: 'B', text: '50 cm' },
      { id: 'C', text: '100 cm' },
      { id: 'D', text: '1.000 cm' },
    ],
    correctAnswer: 'C',
    explanation:
      'Hubungan satuan panjang: 1 meter sama dengan 100 sentimeter (turun dua tangga: 1 × 100 = 100 cm).',
  },

  // --- SOAL 4 (PG - Mudah - Pengukuran Panjang) ---
  {
    id: 4,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Alat ukur yang paling tepat digunakan oleh penjahit untuk mengukur lingkar pinggang adalah...',
    options: [
      { id: 'A', text: 'Penggaris kayu lurus' },
      { id: 'B', text: 'Meteran pita kain' },
      { id: 'C', text: 'Timbangan duduk' },
      { id: 'D', text: 'Jangka sorong' },
    ],
    correctAnswer: 'B',
    explanation:
      'Meteran pita kain bersifat lentur sehingga mudah dilingkarkan pada badan atau kain yang melengkung.',
  },

  // --- SOAL 5 (PG - Sedang - Pengukuran Panjang) ---
  {
    id: 5,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Sedang',
    elemen: 'Pengukuran',
    levelKognitif: 'L2',
    text: 'Panjang meja belajar adalah 125 cm. Panjang meja tersebut dapat ditulis...',
    options: [
      { id: 'A', text: '1 m lebih 25 cm' },
      { id: 'B', text: '12 m lebih 5 cm' },
      { id: 'C', text: '2 m kurang 25 cm' },
      { id: 'D', text: '10 m lebih 25 cm' },
    ],
    correctAnswer: 'A',
    explanation:
      '125 cm = 100 cm + 25 cm. Karena 100 cm = 1 meter, maka hasilnya adalah 1 m lebih 25 cm.',
  },

  // --- SOAL 6 (PG - Mudah - Pengukuran Panjang) ---
  {
    id: 6,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Panjang seutas pita adalah 4 meter. Panjang pita tersebut sama dengan...',
    options: [
      { id: 'A', text: '40 cm' },
      { id: 'B', text: '140 cm' },
      { id: 'C', text: '400 cm' },
      { id: 'D', text: '4.000 cm' },
    ],
    correctAnswer: 'C',
    explanation:
      '1 m = 100 cm, sehingga 4 m = 4 × 100 cm = 400 cm.',
  },

  // --- SOAL 7 (PG - Mudah - Pengukuran Panjang) ---
  {
    id: 7,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Satuan panjang yang paling tepat untuk menyatakan jarak antarkota adalah...',
    options: [
      { id: 'A', text: 'Milimeter (mm)' },
      { id: 'B', text: 'Sentimeter (cm)' },
      { id: 'C', text: 'Desimeter (dm)' },
      { id: 'D', text: 'Kilometer (km)' },
    ],
    correctAnswer: 'D',
    explanation:
      'Kilometer (km) digunakan untuk mengukur jarak yang sangat jauh antarwilayah atau antarkota.',
  },

  // --- SOAL 8 (PG - Mudah - Pengukuran Panjang) ---
  {
    id: 8,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Panjang sebuah penghapus pensil adalah 3 cm. Panjang penghapus tersebut dalam milimeter (mm) adalah...',
    options: [
      { id: 'A', text: '30 mm' },
      { id: 'B', text: '300 mm' },
      { id: 'C', text: '13 mm' },
      { id: 'D', text: '3 mm' },
    ],
    correctAnswer: 'A',
    explanation:
      '1 cm = 10 mm, sehingga 3 cm = 3 × 10 mm = 30 mm.',
  },

  // --- SOAL 9 (PG - Mudah - Pengukuran Panjang) ---
  {
    id: 9,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Panjang papan tulis di kelas adalah 300 cm. Panjang papan tulis tersebut sama dengan...',
    options: [
      { id: 'A', text: '3 meter' },
      { id: 'B', text: '30 meter' },
      { id: 'C', text: '300 meter' },
      { id: 'D', text: '0,3 meter' },
    ],
    correctAnswer: 'A',
    explanation:
      '100 cm = 1 meter, maka 300 cm = 300 : 100 = 3 meter.',
  },

  // --- SOAL 10 (PG - Sedang - Pengukuran Panjang) ---
  {
    id: 10,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Sedang',
    elemen: 'Pengukuran',
    levelKognitif: 'L2',
    text: 'Siti memiliki pita merah 2 meter dan pita kuning 150 cm. Panjang seluruh pita Siti adalah...',
    options: [
      { id: 'A', text: '250 cm' },
      { id: 'B', text: '300 cm' },
      { id: 'C', text: '350 cm' },
      { id: 'D', text: '450 cm' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pita merah = 2 m = 200 cm. Panjang seluruh pita = 200 cm + 150 cm = 350 cm.',
  },

  // --- SOAL 11 (PG - Mudah - Pengukuran Panjang) ---
  {
    id: 11,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Tukang bangunan biasanya mengukur panjang pintu atau ruangan menggunakan...',
    options: [
      { id: 'A', text: 'Termometer' },
      { id: 'B', text: 'Meteran rol (meteran saku)' },
      { id: 'C', text: 'Timbangan gantung' },
      { id: 'D', text: 'Gelas ukur' },
    ],
    correctAnswer: 'B',
    explanation:
      'Meteran rol atau meteran saku praktis dan cukup panjang untuk mengukur pintu, jendela, atau ruangan.',
  },

  // --- SOAL 12 (PG - Mudah - Pengukuran Panjang) ---
  {
    id: 12,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Jarak 1 kilometer (km) sama nilainya dengan...',
    options: [
      { id: 'A', text: '10 meter' },
      { id: 'B', text: '100 meter' },
      { id: 'C', text: '500 meter' },
      { id: 'D', text: '1.000 meter' },
    ],
    correctAnswer: 'D',
    explanation:
      '1 kilometer = 1.000 meter (turun tiga tangga dalam satuan panjang).',
  },

  // --- SOAL 13 (PG - Mudah - Pengukuran Panjang) ---
  {
    id: 13,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Saat mengukur panjang pensil dengan penggaris, ujung pensil harus lurus tepat di angka...',
    options: [
      { id: 'A', text: '0 (nol)' },
      { id: 'B', text: '1 (satu)' },
      { id: 'C', text: '10 (sepuluh)' },
      { id: 'D', text: 'Tepi penggaris' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pengukuran panjang yang tepat selalu dimulai dari titik nol (angka 0) pada penggaris.',
  },

  // --- SOAL 14 (PG - Mudah - Pengukuran Panjang) ---
  {
    id: 14,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Benda yang paling tepat diukur menggunakan penggaris 30 cm adalah...',
    options: [
      { id: 'A', text: 'Halaman sekolah' },
      { id: 'B', text: 'Buku tulis' },
      { id: 'C', text: 'Jalan raya' },
      { id: 'D', text: 'Kereta api' },
    ],
    correctAnswer: 'B',
    explanation:
      'Buku tulis berukuran sekitar 20–25 cm sehingga sangat pas diukur dengan penggaris 30 cm.',
  },

  // --- SOAL 15 (PG - Sedang - Pengukuran Panjang) ---
  {
    id: 15,
    type: 'pg',
    topic: 'Pengukuran Panjang',
    difficulty: 'Sedang',
    elemen: 'Pengukuran',
    levelKognitif: 'L2',
    text: 'Edo mempunyai tali sepanjang 3 meter. Tali dipotong sepanjang 70 cm. Sisa panjang tali Edo adalah...',
    options: [
      { id: 'A', text: '130 cm' },
      { id: 'B', text: '170 cm' },
      { id: 'C', text: '230 cm' },
      { id: 'D', text: '270 cm' },
    ],
    correctAnswer: 'C',
    explanation:
      'Panjang awal tali = 3 m = 300 cm. Sisa tali = 300 cm - 70 cm = 230 cm.',
  },

  // --- SOAL 16 (PG - Mudah - Pengukuran Berat) ---
  {
    id: 16,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Alat yang digunakan untuk mengukur berat suatu benda adalah...',
    options: [
      { id: 'A', text: 'Meteran' },
      { id: 'B', text: 'Timbangan' },
      { id: 'C', text: 'Penggaris' },
      { id: 'D', text: 'Jam dinding' },
    ],
    correctAnswer: 'B',
    explanation:
      'Timbangan adalah alat ukur baku untuk mengukur berat atau massa suatu benda.',
  },

  // --- SOAL 17 (PG - Mudah - Pengukuran Berat) ---
  {
    id: 17,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Di bawah ini yang merupakan contoh satuan baku untuk berat adalah...',
    options: [
      { id: 'A', text: 'Kilogram dan gram' },
      { id: 'B', text: 'Meter dan sentimeter' },
      { id: 'C', text: 'Detik dan menit' },
      { id: 'D', text: 'Liter dan mililiter' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kilogram (kg), gram (g), dan ons adalah satuan baku yang digunakan dalam pengukuran berat.',
  },

  // --- SOAL 18 (PG - Mudah - Pengukuran Berat) ---
  {
    id: 18,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Berat 1 kilogram (kg) sama nilainya dengan...',
    options: [
      { id: 'A', text: '10 gram' },
      { id: 'B', text: '100 gram' },
      { id: 'C', text: '1.000 gram' },
      { id: 'D', text: '10.000 gram' },
    ],
    correctAnswer: 'C',
    explanation:
      'Hubungan satuan berat: 1 kilogram sama dengan 1.000 gram.',
  },

  // --- SOAL 19 (PG - Mudah - Pengukuran Berat) ---
  {
    id: 19,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Alat ukur yang paling tepat digunakan untuk menimbang berat badan siswa adalah...',
    options: [
      { id: 'A', text: 'Timbangan kue' },
      { id: 'B', text: 'Timbangan badan' },
      { id: 'C', text: 'Neraca perhiasan' },
      { id: 'D', text: 'Timbangan bebek' },
    ],
    correctAnswer: 'B',
    explanation:
      'Timbangan badan dirancang khusus dengan kapasitas beban untuk menimbang tubuh manusia.',
  },

  // --- SOAL 20 (PG - Sedang - Pengukuran Berat) ---
  {
    id: 20,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Sedang',
    elemen: 'Pengukuran',
    levelKognitif: 'L2',
    text: 'Ibu membeli 2 kg tepung terigu dan 500 gram gula pasir. Berapa gram berat seluruh belanjaan ibu?',
    options: [
      { id: 'A', text: '700 gram' },
      { id: 'B', text: '1.500 gram' },
      { id: 'C', text: '2.050 gram' },
      { id: 'D', text: '2.500 gram' },
    ],
    correctAnswer: 'D',
    explanation:
      '2 kg = 2.000 gram. Berat total belanjaan = 2.000 g + 500 g = 2.500 gram.',
  },

  // --- SOAL 21 (PG - Mudah - Pengukuran Berat) ---
  {
    id: 21,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Nilai 1 kilogram (kg) sama dengan...',
    options: [
      { id: 'A', text: '10 ons' },
      { id: 'B', text: '50 ons' },
      { id: 'C', text: '100 ons' },
      { id: 'D', text: '1.000 ons' },
    ],
    correctAnswer: 'A',
    explanation:
      '1 kilogram (kg) setara dengan 10 ons (hektogram).',
  },

  // --- SOAL 22 (PG - Mudah - Pengukuran Berat) ---
  {
    id: 22,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Nilai berat 1 ons jika dinyatakan dalam satuan gram adalah...',
    options: [
      { id: 'A', text: '10 gram' },
      { id: 'B', text: '100 gram' },
      { id: 'C', text: '500 gram' },
      { id: 'D', text: '1.000 gram' },
    ],
    correctAnswer: 'B',
    explanation:
      '1 ons sama nilainya dengan 100 gram.',
  },

  // --- SOAL 23 (PG - Mudah - Pengukuran Berat) ---
  {
    id: 23,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Timbangan dapur biasanya digunakan untuk menimbang...',
    options: [
      { id: 'A', text: 'Sepeda motor' },
      { id: 'B', text: 'Beras berkarung-karung' },
      { id: 'C', text: 'Bahan kue seperti tepung dan gula' },
      { id: 'D', text: 'Batu kali besar' },
    ],
    correctAnswer: 'C',
    explanation:
      'Timbangan dapur atau timbangan kue cocok untuk menakar bahan-bahan masakan yang tidak terlalu berat.',
  },

  // --- SOAL 24 (PG - Mudah - Pengukuran Berat) ---
  {
    id: 24,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Sebuah semangka memiliki berat 4 kg. Berat semangka tersebut dalam gram adalah...',
    options: [
      { id: 'A', text: '40 gram' },
      { id: 'B', text: '4.000 gram' },
      { id: 'C', text: '400 gram' },
      { id: 'D', text: '40.000 gram' },
    ],
    correctAnswer: 'B',
    explanation:
      '1 kg = 1.000 gram, maka 4 kg = 4 × 1.000 gram = 4.000 gram.',
  },

  // --- SOAL 25 (PG - Sedang - Pengukuran Berat) ---
  {
    id: 25,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Sedang',
    elemen: 'Pengukuran',
    levelKognitif: 'L2',
    text: 'Paman memanen 5 kg mangga. Sebanyak 2 kg diberikan kepada tetangga. Sisa mangga paman dalam satuan gram adalah...',
    options: [
      { id: 'A', text: '3.000 gram' },
      { id: 'B', text: '2.000 gram' },
      { id: 'C', text: '1.500 gram' },
      { id: 'D', text: '300 gram' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sisa mangga = 5 kg - 2 kg = 3 kg. Diubah ke gram: 3 kg = 3 × 1.000 gram = 3.000 gram.',
  },

  // --- SOAL 26 (PG - Mudah - Pengukuran Berat) ---
  {
    id: 26,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Satuan yang paling tepat untuk menyatakan berat sebutir permen adalah...',
    options: [
      { id: 'A', text: 'Kilogram (kg)' },
      { id: 'B', text: 'Kuintal' },
      { id: 'C', text: 'Gram (g)' },
      { id: 'D', text: 'Ton' },
    ],
    correctAnswer: 'C',
    explanation:
      'Benda yang berukuran kecil dan ringan seperti permen paling tepat dinyatakan dalam satuan gram (g).',
  },

  // --- SOAL 27 (PG - Mudah - Pengukuran Berat) ---
  {
    id: 27,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Berat 3.000 gram jika diubah ke satuan kilogram (kg) menjadi...',
    options: [
      { id: 'A', text: '3 kg' },
      { id: 'B', text: '30 kg' },
      { id: 'C', text: '300 kg' },
      { id: 'D', text: '0,3 kg' },
    ],
    correctAnswer: 'A',
    explanation:
      '1.000 gram = 1 kg, maka 3.000 gram = 3.000 : 1.000 = 3 kg.',
  },

  // --- SOAL 28 (PG - Mudah - Pengukuran Berat) ---
  {
    id: 28,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Pedagang di pasar menimbang cabai menggunakan timbangan bebek. Satuan pada anak timbangannya biasanya adalah...',
    options: [
      { id: 'A', text: 'Meter dan sentimeter' },
      { id: 'B', text: 'Liter dan mililiter' },
      { id: 'C', text: 'Detik dan jam' },
      { id: 'D', text: 'Kilogram dan ons' },
    ],
    correctAnswer: 'D',
    explanation:
      'Anak timbangan pasar tradisional dibuat dengan ukuran baku seperti 1 ons, 2 ons, 500 gram, dan 1 kilogram.',
  },

  // --- SOAL 29 (PG - Mudah - Pengukuran Berat) ---
  {
    id: 29,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Lani membeli 2 bungkus garam. Masing-masing bungkus beratnya 250 gram. Berat total garam Lani adalah...',
    options: [
      { id: 'A', text: '400 gram' },
      { id: 'B', text: '500 gram' },
      { id: 'C', text: '750 gram' },
      { id: 'D', text: '1.000 gram' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berat gabungan = 250 gram + 250 gram = 500 gram.',
  },

  // --- SOAL 30 (PG - Sedang - Pengukuran Berat) ---
  {
    id: 30,
    type: 'pg',
    topic: 'Pengukuran Berat',
    difficulty: 'Sedang',
    elemen: 'Pengukuran',
    levelKognitif: 'L2',
    text: 'Berat sekarung beras adalah 3 kg lebih 250 gram. Berat beras tersebut jika dinyatakan dalam gram adalah...',
    options: [
      { id: 'A', text: '325 gram' },
      { id: 'B', text: '1.325 gram' },
      { id: 'C', text: '3.250 gram' },
      { id: 'D', text: '3.520 gram' },
    ],
    correctAnswer: 'C',
    explanation:
      '3 kg = 3.000 gram. Ditambah 250 gram = 3.000 g + 250 g = 3.250 gram.',
  },

  // =========================================================================
  // --- BAGIAN II: 10 SOAL BENAR / SALAH (Nomor 31 - 40) ---
  // Distribusi Benar/Salah: 8 Soal Mudah (80%), 2 Soal Sedang (20%)
  // Topik: 5 Pengukuran Panjang (No 31-35), 5 Pengukuran Berat (No 36-40)
  // =========================================================================

  // --- SOAL 31 (Benar/Salah - Mudah - Pengukuran Panjang) ---
  {
    id: 31,
    type: 'pgk_kategori',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Panjang 1 meter sama dengan 100 sentimeter.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan BENAR. 1 meter tepat sama dengan 100 sentimeter.',
  },

  // --- SOAL 32 (Benar/Salah - Mudah - Pengukuran Panjang) ---
  {
    id: 32,
    type: 'pgk_kategori',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Penggaris saku 30 cm adalah alat yang paling tepat untuk mengukur panjang lapangan sepak bola.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan SALAH. Mengukur lapangan sepak bola yang panjangnya puluhan meter harus memakai meteran rol panjang, bukan penggaris kecil 30 cm.',
  },

  // --- SOAL 33 (Benar/Salah - Mudah - Pengukuran Panjang) ---
  {
    id: 33,
    type: 'pgk_kategori',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Satuan sentimeter (cm) nilainya lebih panjang daripada satuan meter (m).',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan SALAH. Satuan meter jauh lebih panjang daripada sentimeter. Satu meter membutuhkan 100 sentimeter.',
  },

  // --- SOAL 34 (Benar/Salah - Mudah - Pengukuran Panjang) ---
  {
    id: 34,
    type: 'pgk_kategori',
    topic: 'Pengukuran Panjang',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Jarak 2 kilometer (km) sama panjangnya dengan 2.000 meter (m).',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan BENAR. Karena 1 km = 1.000 m, maka 2 km = 2 × 1.000 m = 2.000 m.',
  },

  // --- SOAL 35 (Benar/Salah - Sedang - Pengukuran Panjang) ---
  {
    id: 35,
    type: 'pgk_kategori',
    topic: 'Pengukuran Panjang',
    difficulty: 'Sedang',
    elemen: 'Pengukuran',
    levelKognitif: 'L2',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Tongkat kayu dengan panjang 150 cm lebih pendek daripada tongkat bambu dengan panjang 2 meter.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan BENAR. Tongkat bambu = 2 m = 200 cm. Karena 150 cm lebih kecil dari 200 cm, maka tongkat kayu memang lebih pendek.',
  },

  // --- SOAL 36 (Benar/Salah - Mudah - Pengukuran Berat) ---
  {
    id: 36,
    type: 'pgk_kategori',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Berat 1 kilogram sama dengan 1.000 gram.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan BENAR. Hubungan satuan baku berat menetapkan bahwa 1 kg setara dengan 1.000 gram.',
  },

  // --- SOAL 37 (Benar/Salah - Mudah - Pengukuran Berat) ---
  {
    id: 37,
    type: 'pgk_kategori',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Alat yang paling tepat untuk menimbang berat badan seseorang adalah timbangan dapur.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan SALAH. Menimbang berat badan seseorang menggunakan timbangan badan, bukan timbangan dapur.',
  },

  // --- SOAL 38 (Benar/Salah - Mudah - Pengukuran Berat) ---
  {
    id: 38,
    type: 'pgk_kategori',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Nilai berat 1 kilogram sama dengan 10 ons.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan BENAR. 1 kilogram setara dengan 10 ons.',
  },

  // --- SOAL 39 (Benar/Salah - Mudah - Pengukuran Berat) ---
  {
    id: 39,
    type: 'pgk_kategori',
    topic: 'Pengukuran Berat',
    difficulty: 'Mudah',
    elemen: 'Pengukuran',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Sebungkus gula seberat 700 gram lebih berat daripada sebungkus tepung seberat 1 kilogram.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan SALAH. 1 kg = 1.000 gram. Karena 700 gram lebih ringan dari 1.000 gram, maka gula lebih ringan daripada tepung.',
  },

  // --- SOAL 40 (Benar/Salah - Sedang - Pengukuran Berat) ---
  {
    id: 40,
    type: 'pgk_kategori',
    topic: 'Pengukuran Berat',
    difficulty: 'Sedang',
    elemen: 'Pengukuran',
    levelKognitif: 'L2',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Dua kantong tepung masing-masing seberat 500 gram jika digabungkan memiliki berat 1 kilogram.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan BENAR. 500 gram + 500 gram = 1.000 gram. Karena 1.000 gram = 1 kg, maka berat gabungannya tepat 1 kilogram.',
  },
];
