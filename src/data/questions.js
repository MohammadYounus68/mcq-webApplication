
const questions = [
  // English: Antonym (1-5)
  {
    id: 1,
    topic: "Antonym",
    question: "‘Epiphany’ শব্দের Antonym কোনটি?",
    options: ["Revelation", "Ignorance", "Insight", "Realization"],
    answerIndex: 1,
    explanation: "‘Epiphany’ means a sudden realization or insight, so its antonym is ‘Ignorance’."
  },
  {
    id: 2,
    topic: "Antonym",
    question: "‘Taciturn’ শব্দের Antonym কোনটি?",
    options: ["Reserved", "Silent", "Talkative", "Reticent"],
    answerIndex: 2,
    explanation: "‘Taciturn’ means reserved or uncommunicative, so its antonym is ‘Talkative’."
  },
  {
    id: 3,
    topic: "Antonym",
    question: "‘Limpid’ শব্দের Antonym কোনটি?",
    options: ["Clear", "Murky", "Transparent", "Lucid"],
    answerIndex: 1,
    explanation: "‘Limpid’ means clear or transparent, so its antonym is ‘Murky’."
  },
  {
    id: 4,
    topic: "Antonym",
    question: "‘Perfunctory’ শব্দের Antonym কোনটি?",
    options: ["Cursory", "Hasty", "Thorough", "Superficial"],
    answerIndex: 2,
    explanation: "‘Perfunctory’ means done without care, so its antonym is ‘Thorough’."
  },
  {
    id: 5,
    topic: "Antonym",
    question: "‘Cacophony’ শব্দের Antonym কোনটি?",
    options: ["Discord", "Harmony", "Noise", "Clamor"],
    answerIndex: 1,
    explanation: "‘Cacophony’ means harsh, discordant sound, so its antonym is ‘Harmony’."
  },

  // English: Preposition (6-15)
  {
    id: 6,
    topic: "Preposition",
    question: "His success depends ___ his ability to adapt ___ changing circumstances.",
    options: ["on, to", "upon, with", "at, in", "for, on"],
    answerIndex: 0,
    explanation: "‘Depends on’ and ‘adapt to’ are the correct prepositions."
  },
  {
    id: 7,
    topic: "Preposition",
    question: "She is notorious ___ her temper but admired ___ her dedication.",
    options: ["for, for", "about, with", "in, by", "with, for"],
    answerIndex: 0,
    explanation: "‘Notorious for’ and ‘admired for’ are the correct prepositions."
  },
  {
    id: 8,
    topic: "Preposition",
    question: "The book was written ___ a scholar who specializes ___ medieval history.",
    options: ["by, in", "from, on", "with, at", "of, for"],
    answerIndex: 0,
    explanation: "‘Written by’ and ‘specializes in’ are the correct prepositions."
  },
  {
    id: 9,
    topic: "Preposition",
    question: "He was absolved ___ all charges ___ lack of evidence.",
    options: ["of, for", "from, due to", "with, because of", "off, on"],
    answerIndex: 1,
    explanation: "‘Absolved from’ and ‘due to’ are the correct prepositions."
  },
  {
    id: 10,
    topic: "Preposition",
    question: "The committee is divided ___ the issue ___ budget allocation.",
    options: ["on, of", "over, about", "at, for", "in, with"],
    answerIndex: 1,
    explanation: "‘Divided over’ and ‘about’ are the correct prepositions."
  },
  {
    id: 11,
    topic: "Preposition",
    question: "She takes pride ___ her work and is indifferent ___ criticism.",
    options: ["in, to", "for, about", "with, of", "at, with"],
    answerIndex: 0,
    explanation: "‘Takes pride in’ and ‘indifferent to’ are the correct prepositions."
  },
  {
    id: 12,
    topic: "Preposition",
    question: "The decision was arrived ___ after hours ___ intense debate.",
    options: ["at, of", "on, in", "with, for", "by, about"],
    answerIndex: 0,
    explanation: "‘Arrived at’ and ‘hours of’ are the correct prepositions."
  },
  {
    id: 13,
    topic: "Preposition",
    question: "He is allergic ___ dust and sensitive ___ loud noises.",
    options: ["to, to", "with, for", "at, about", "from, of"],
    answerIndex: 0,
    explanation: "‘Allergic to’ and ‘sensitive to’ are the correct prepositions."
  },
  {
    id: 14,
    topic: "Preposition",
    question: "The painting was inspired ___ nature and dedicated ___ the artist’s mentor.",
    options: ["by, to", "from, for", "with, at", "of, by"],
    answerIndex: 0,
    explanation: "‘Inspired by’ and ‘dedicated to’ are the correct prepositions."
  },
  {
    id: 15,
    topic: "Preposition",
    question: "They are confident ___ their strategy but wary ___ unforeseen challenges.",
    options: ["about, of", "in, about", "for, with", "with, for"],
    answerIndex: 1,
    explanation: "‘Confident in’ and ‘wary about’ are the correct prepositions."
  },

  // Bangla Prose: Aparichita, Bilasi, Amar Poth (16-35)
  {
    id: 16,
    topic: "গদ্য - অপরিচিতা",
    question: "‘অপরিচিতা’ গল্পে কালিদাসের চরিত্র কোন সামাজিক প্রথার বিরুদ্ধে প্রতিবাদ করে?",
    options: ["বাল্যবিবাহ", "জাতিভেদ প্রথা", "পণপ্রথা", "পিতৃতান্ত্রিকতা"],
    answerIndex: 0,
    explanation: "কালিদাস বাল্যবিবাহের বিরুদ্ধে প্রতিবাদ করে, যা গল্পের মূল বিষয়।"
  },
  {
    id: 17,
    topic: "গদ্য - বিলাসী",
    question: "‘বিলাসী’ গল্পে মৃত্যুঞ্জয়ের পতনের পেছনে কোনটি প্রধান ভূমিকা পালন করে?",
    options: ["তার অহংকার", "তার বিলাসী জীবনযাপন", "তার স্ত্রীর অবহেলা", "গ্রামবাসীদের ষড়যন্ত্র"],
    answerIndex: 1,
    explanation: "মৃত্যুঞ্জয়ের বিলাসী জীবনযাপনই তার পতনের প্রধান কারণ।"
  },
  {
    id: 18,
    topic: "গদ্য - আমার পথ",
    question: "‘আমার পথ’ প্রবন্ধে সত্যেন্দ্রনাথ দত্ত বাঙালির কোন দুর্বলতার সমালোচনা করেছেন?",
    options: ["শিক্ষার অভাব", "আত্মবিশ্বাসের ঘাটতি", "ধর্মীয় কুসংস্কার", "অর্থনৈতিক পশ্চাৎপদতা"],
    answerIndex: 1,
    explanation: "লেখক বাঙালির আত্মবিশ্বাসের ঘাটতির সমালোচনা করেছেন।"
  },
  {
    id: 19,
    topic: "গদ্য - অপরিচিতা",
    question: "‘অপরিচিতা’ গল্পে কুসুমের নীরবতা কোন বার্তা বহন করে?",
    options: ["সামাজিক বাধ্যবাধকতার কাছে আত্মসমর্পণ", "নিজের ইচ্ছার প্রকাশে অনীহা", "নারীর অধিকারের প্রতি সচেতনতা", "পিতৃতান্ত্রিক সমাজের প্রতি বিদ্রোহ"],
    answerIndex: 0,
    explanation: "কুসুমের নীরবতা সামাজিক বাধ্যবাধকতার কাছে আত্মসমর্পণের বার্তা দেয়।"
  },
  {
    id: 20,
    topic: "গদ্য - বিলাসী",
    question: "‘বিলাসী’ গল্পে শরৎচন্দ্র কীভাবে নৈতিকতার প্রশ্ন তুলে ধরেছেন?",
    options: ["মৃত্যুঞ্জয়ের স্ত্রীর নিষ্ক্রিয়তার মাধ্যমে", "গ্রামের সমাজের প্রতিক্রিয়ার মাধ্যমে", "মৃত্যুঞ্জয়ের জীবনযাপনের পরিণতির মাধ্যমে", "নীলমণির দায়িত্বশীলতার মাধ্যমে"],
    answerIndex: 2,
    explanation: "মৃত্যুঞ্জয়ের জীবনযাপনের পরিণতি নৈতিকতার প্রশ্ন তুলে ধরে।"
  },
  {
    id: 21,
    topic: "গদ্য - আমার পথ",
    question: "‘আমার পথ’ প্রবন্ধে লেখক কোন দৃষ্টিভঙ্গির প্রতি জোর দিয়েছেন?",
    options: ["সমাজ সংস্কার", "ব্যক্তিগত স্বাধীনতা ও আত্মনির্ভরতা", "রাজনৈতিক আন্দোলন", "ধর্মীয় সংহতি"],
    answerIndex: 1,
    explanation: "লেখক ব্যক্তিগত স্বাধীনতা ও আত্মনির্ভরতার উপর জোর দিয়েছেন।"
  },
  {
    id: 22,
    topic: "গদ্য - অপরিচিতা",
    question: "‘অপরিচিতা’ গল্পে শশীকলার চরিত্র কোন নারীবাদী আদর্শকে প্রতিনিধিত্ব করে?",
    options: ["স্বাধীন সিদ্ধান্ত গ্রহণ", "মাতৃত্ব ও সহানুভূতি", "সমাজের প্রতি বিদ্রোহ", "অর্থনৈতিক স্বাধীনতা"],
    answerIndex: 1,
    explanation: "শশীকলা মাতৃত্ব ও সহানুভূতির নারীবাদী আদর্শকে প্রতিনিধিত্ব করে।"
  },
  {
    id: 23,
    topic: "গদ্য - বিলাসী",
    question: "‘বিলাসী’ গল্পে মৃত্যুঞ্জয়ের স্ত্রীর চরিত্র কীভাবে সমাজের দ্বৈত মানদণ্ড প্রকাশ করে?",
    options: ["তার নিষ্ক্রিয়তা ও নির্ভরতার মাধ্যমে", "তার স্বাধীন সিদ্ধান্তের মাধ্যমে", "তার প্রতিবাদী মনোভাবের মাধ্যমে", "তার সামাজিক প্রভাবের মাধ্যমে"],
    answerIndex: 0,
    explanation: "তার নিষ্ক্রিয়তা ও নির্ভরতা সমাজের দ্বৈত মানদণ্ড প্রকাশ করে।"
  },
  {
    id: 24,
    topic: "গদ্য - আমার পথ",
    question: "‘আমার পথ’ প্রবন্ধে বাঙালির সাংস্কৃতিক পরিচয় কীভাবে তুলে ধরা হয়েছে?",
    options: ["ঐতিহাসিক ঘটনার উল্লেখে", "জীবনযাত্রা ও সংগ্রামের বর্ণনায়", "ধর্মীয় বিশ্বাসের প্রশংসায়", "রাজনৈতিক আন্দোলনের বিশ্লেষণে"],
    answerIndex: 1,
    explanation: "জীবনযাত্রা ও সংগ্রামের বর্ণনায় সাংস্কৃতিক পরিচয় তুলে ধরা হয়েছে।"
  },
  {
    id: 25,
    topic: "গদ্য - অপরিচিতা",
    question: "‘অপরিচিতা’ গল্পে কালিদাসের সিদ্ধান্ত কোন সামাজিক বার্তা দেয়?",
    options: ["ব্যক্তিগত স্বাধীনতার গুরুত্ব", "পারিবারিক দায়িত্ব পালন", "সামাজিক রীতির প্রতি শ্রদ্ধা", "অর্থনৈতিক স্থিতিশীলতার প্রয়োজনীয়তা"],
    answerIndex: 0,
    explanation: "কালিদাসের সিদ্ধান্ত ব্যক্তিগত স্বাধীনতার গুরুত্ব প্রকাশ করে।"
  },
  {
    id: 26,
    topic: "গদ্য - বিলাসী",
    question: "‘বিলাসী’ গল্পে নীলমণির চরিত্র কোন মূল্যবোধের প্রতিনিধিত্ব করে?",
    options: ["স্বাধীনতা", "দায়িত্বশীলতা ও নৈতিকতা", "প্রতিশোধ", "বিলাসিতা"],
    answerIndex: 1,
    explanation: "নীলমণি দায়িত্বশীলতা ও নৈতিকতার প্রতিনিধিত্ব করে।"
  },
  {
    id: 27,
    topic: "গদ্য - আমার পথ",
    question: "‘আমার পথ’ প্রবন্ধে সত্যেন্দ্রনাথ দত্ত কোন সমাজ সংস্কারের পক্ষে কথা বলেছেন?",
    options: ["নারী শিক্ষা", "ব্যক্তিগত সংগ্রাম ও আত্মোন্নতি", "ধর্মীয় সংস্কার", "অর্থনৈতিক সমতা"],
    answerIndex: 1,
    explanation: "লেখক ব্যক্তিগত সংগ্রাম ও আত্মোন্নতির পক্ষে কথা বলেছেন।"
  },
  {
    id: 28,
    topic: "গদ্য - অপরিচিতা",
    question: "‘অপরিচিতা’ গল্পে রবীন্দ্রনাথ কীভাবে নারীর স্বাধীনতার প্রশ্ন তুলে ধরেছেন?",
    options: ["কুসুমের সক্রিয় প্রতিবাদের মাধ্যমে", "শশীকলার মমতাময়ী চরিত্রের মাধ্যমে", "কালিদাসের সিদ্ধান্তের মাধ্যমে", "অনুপমের মায়ের প্রভাবের মাধ্যমে"],
    answerIndex: 2,
    explanation: "কালিদাসের সিদ্ধান্ত নারীর স্বাধীনতার প্রশ্ন তুলে ধরে।"
  },
  {
    id: 29,
    topic: "গদ্য - বিলাসী",
    question: "‘বিলাসী’ গল্পে শরৎচন্দ্র কোন সামাজিক সমস্যার দিকে ইঙ্গিত করেছেন?",
    options: ["শ্রেণিবৈষম্য", "নৈতিক অবক্ষয়", "নারী নির্যাতন", "শিক্ষার অভাব"],
    answerIndex: 1,
    explanation: "শরৎচন্দ্র নৈতিক অবক্ষয়ের দিকে ইঙ্গিত করেছেন।"
  },
  {
    id: 30,
    topic: "গদ্য - আমার পথ",
    question: "‘আমার পথ’ প্রবন্ধে লেখক কীভাবে বাঙালির আত্মমর্যাদার প্রশ্ন তুলে ধরেছেন?",
    options: ["ঐতিহাসিক বিজয়ের উদাহরণ দিয়ে", "ব্যক্তিগত সংগ্রামের গল্পের মাধ্যমে", "সামাজিক প্রথার সমালোচনা করে", "ধর্মীয় ঐক্যের আহ্বান জানিয়ে"],
    answerIndex: 1,
    explanation: "ব্যক্তিগত সংগ্রামের গল্পের মাধ্যমে আত্মমর্যাদার প্রশ্ন তুলে ধরা হয়েছে।"
  },
  {
    id: 31,
    topic: "গদ্য - অপরিচিতা",
    question: "‘অপরিচিতা’ গল্পে কালিদাসের শশীকলার প্রতি শ্রদ্ধা কোন দিকটি প্রকাশ করে?",
    options: ["তার বুদ্ধিদীপ্ত ব্যক্তিত্ব", "তার মানবিক ও সহানুভূতিশীল প্রকৃতি", "তার সামাজিক প্রভাব", "তার কঠোর স্বভাব"],
    answerIndex: 1,
    explanation: "কালিদাসের শ্রদ্ধা শশীকলার মানবিক ও সহানুভূতিশীল প্রকৃতি প্রকাশ করে।"
  },
  {
    id: 32,
    topic: "গদ্য - বিলাসী",
    question: "‘বিলাসী’ গল্পে মৃত্যুঞ্জয়ের জীবনের ট্র্যাজেডি কোন বিষয়ের পরিণতি?",
    options: ["সামাজিক প্রত্যাখ্যান", "অতিরিক্ত ভোগবিলাস", "পারিবারিক অশান্তি", "অর্থনৈতিক সংকট"],
    answerIndex: 1,
    explanation: "মৃত্যুঞ্জয়ের ট্র্যাজেডি অতিরিক্ত ভোগবিলাসের পরিণতি।"
  },
  {
    id: 33,
    topic: "গদ্য - আমার পথ",
    question: "‘আমার পথ’ প্রবন্ধে সত্যেন্দ্রনাথ দত্ত কোন দার্শনিক দৃষ্টিভঙ্গির প্রতি ইঙ্গিত করেছেন?",
    options: ["ব্যক্তিবাদ", "সমাজবাদ", "আধ্যাত্মিকতা", "উপনিষদীয় চিন্তাধারা"],
    answerIndex: 0,
    explanation: "লেখক ব্যক্তিবাদের দার্শনিক দৃষ্টিভঙ্গির প্রতি ইঙ্গিত করেছেন।"
  },
  {
    id: 34,
    topic: "গদ্য - অপরিচিতা",
    question: "‘অপরিচিতা’ গল্পে কুসুমের চরিত্র কীভাবে নারীর সামাজিক অবস্থান প্রকাশ করে?",
    options: ["তার স্বাধীন সিদ্ধান্তের মাধ্যমে", "তার নীরব সম্মতি ও অসহায়তার মাধ্যমে", "তার প্রতিবাদী মনোভাবের মাধ্যমে", "তার সামাজিক প্রভাবের মাধ্যমে"],
    answerIndex: 1,
    explanation: "কুসুমের নীরব সম্মতি ও অসহায়তা নারীর সামাজিক অবস্থান প্রকাশ করে।"
  },
  {
    id: 35,
    topic: "গদ্য - বিলাসী",
    question: "‘বিলাসী’ গল্পে শরৎচন্দ্র কীভাবে সমাজের পুরুষতান্ত্রিক দৃষ্টিভঙ্গির সমালোচনা করেছেন?",
    options: ["মৃত্যুঞ্জয়ের বিলাসী জীবনের মাধ্যমে", "নীলমণির দায়িত্বশীলতার মাধ্যমে", "মৃত্যুঞ্জয়ের স্ত্রীর নিষ্ক্রিয়তার মাধ্যমে", "গ্রামবাসীদের প্রতিক্রিয়ার মাধ্যমে"],
    answerIndex: 2,
    explanation: "মৃত্যুঞ্জয়ের স্ত্রীর নিষ্ক্রিয়তা পুরুষতান্ত্রিক দৃষ্টিভঙ্গির সমালোচনা করে।"
  },

  // Bangla Poetry: Sonar Tori, Bidrohi (36-50)
  {
    id: 36,
    topic: "পদ্য - সোনার তরী",
    question: "‘সোনার তরী’ কবিতায় ‘ধানের শীষ’ কোন প্রতীকের প্রতিনিধিত্ব করে?",
    options: ["জীবনের সমৃদ্ধি", "মানুষের কষ্ট ও পরিশ্রম", "প্রকৃতির সৌন্দর্য", "মৃত্যুর অনিশ্চয়তা"],
    answerIndex: 1,
    explanation: "‘ধানের শীষ’ মানুষের কষ্ট ও পরিশ্রমের প্রতীক।"
  },
  {
    id: 37,
    topic: "পদ্য - বিদ্রোহী",
    question: "‘বিদ্রোহী’ কবিতায় নজরুল কোন শক্তির বিরুদ্ধে বিদ্রোহ ঘোষণা করেছেন?",
    options: ["প্রকৃতির নিয়ম", "সামাজিক ও রাজনৈতিক শোষণ", "ধর্মীয় কুসংস্কার", "ব্যক্তিগত দুর্বলতা"],
    answerIndex: 1,
    explanation: "নজরুল সামাজিক ও রাজনৈতিক শোষণের বিরুদ্ধে বিদ্রোহ ঘোষণা করেছেন।"
  },
  {
    id: 38,
    topic: "পদ্য - সোনার তরী",
    question: "‘সোনার তরী’ কবিতায় কবি কেন তরীতে উঠতে অস্বীকার করেন?",
    options: ["জীবনের প্রতি মোহের জন্য", "ত্যাগ ও নিষ্কাম কর্মের আদর্শের জন্য", "সামাজিক দায়বদ্ধতার জন্য", "প্রকৃতির প্রতি ভালোবাসার জন্য"],
    answerIndex: 1,
    explanation: "কবি ত্যাগ ও নিষ্কাম কর্মের আদর্শের জন্য তরীতে উঠতে অস্বীকার করেন।"
  },
  {
    id: 39,
    topic: "পদ্য - বিদ্রোহী",
    question: "‘বিদ্রোহী’ কবিতায় নজরুল নিজেকে কোন প্রতীকের সাথে তুলনা করেছেন?",
    options: ["ঝঞ্ঝা ও বিদ্যুৎ", "নদী ও সমুদ্র", "পাহাড় ও আগ্নেয়গিরি", "সূর্য ও চন্দ্র"],
    answerIndex: 0,
    explanation: "নজরুল নিজেকে ঝঞ্ঝা ও বিদ্যুতের সাথে তুলনা করেছেন।"
  },
  {
    id: 40,
    topic: "পদ্য - সোনার তরী",
    question: "‘সোনার তরী’ কবিতায় ‘নদীর দুই কূল’ কোন দ্বন্দ্বের প্রতিনিধিত্ব করে?",
    options: ["জীবন ও মৃত্যু", "ধনী ও গরিব", "সুখ ও দুঃখ", "আধ্যাত্মিকতা ও বস্তুবাদ"],
    answerIndex: 0,
    explanation: "‘নদীর দুই কূল’ জীবন ও মৃত্যুর দ্বন্দ্বের প্রতিনিধিত্ব করে।"
  },
  {
    id: 41,
    topic: "পদ্য - বিদ্রোহী",
    question: "‘বিদ্রোহী’ কবিতায় নজরুল কোন ধরনের সামাজিক পরিবর্তনের আহ্বান জানিয়েছেন?",
    options: ["শান্তিপূর্ণ সংস্কার", "বিপ্লবী পরিবর্তন", "ধর্মীয় ঐক্য", "রাজনৈতিক স্থিতিশীলতা"],
    answerIndex: 1,
    explanation: "নজরুল বিপ্লবী পরিবর্তনের আহ্বান জানিয়েছেন।"
  },
  {
    id: 42,
    topic: "পদ্য - সোনার তরী",
    question: "‘সোনার তরী’ কবিতায় কবির কোন দার্শনিক চিন্তাধারা প্রকাশ পায়?",
    options: ["ভোগবাদ", "ত্যাগ ও নিষ্কাম কর্ম", "সাম্যবাদ", "ব্যক্তিবাদ"],
    answerIndex: 1,
    explanation: "কবির ত্যাগ ও নিষ্কাম কর্মের দার্শনিক চিন্তাধারা প্রকাশ পায়।"
  },
  {
    id: 43,
    topic: "পদ্য - বিদ্রোহী",
    question: "‘বিদ্রোহী’ কবিতায় নজরুল কীভাবে বিশ্বের শোষণের বিরুদ্ধে প্রতিবাদ জানিয়েছেন?",
    options: ["প্রকৃতির প্রতীক ব্যবহার করে", "সামাজিক শৃঙ্খলা ভাঙার আহ্বান জানিয়ে", "ধর্মীয় সংস্কারের প্রস্তাব দিয়ে", "রাজনৈতিক বিপ্লবের ডাকে"],
    answerIndex: 1,
    explanation: "নজরুল সামাজিক শৃঙ্খলা ভাঙার আহ্বান জানিয়ে প্রতিবাদ করেছেন।"
  },
  {
    id: 44,
    topic: "পদ্য - সোনার তরী",
    question: "‘সোনার তরী’ কবিতায় ‘তরী’ কোন প্রতীকের প্রতিনিধিত্ব করে?",
    options: ["জীবনের অনিশ্চয়তা", "সম্পদের প্রাচুর্য", "মৃত্যু ও মুক্তি", "সামাজিক শৃঙ্খলা"],
    answerIndex: 2,
    explanation: "‘তরী’ মৃত্যু ও মুক্তির প্রতীক।"
  },
  {
    id: 45,
    topic: "পদ্য - বিদ্রোহী",
    question: "‘বিদ্রোহী’ কবিতায় নজরুল কোন বিশ্বাসের প্রতি দৃঢ়তা প্রকাশ করেছেন?",
    options: ["সামাজিক শান্তি", "সর্বজনীন ন্যায় ও স্বাধীনতা", "ধর্মীয় ঐক্য", "রাজনৈতিক আধিপত্য"],
    answerIndex: 1,
    explanation: "নজরুল সর্বজনীন ন্যায় ও স্বাধীনতার প্রতি দৃঢ়তা প্রকাশ করেছেন।"
  },
  {
    id: 46,
    topic: "পদ্য - সোনার তরী",
    question: "‘সোনার তরী’ কবিতায় কবি কেন ফসল তরীতে তুলে নিতে অস্বীকার করেন?",
    options: ["ফসলের অপ্রতুলতার জন্য", "ত্যাগের মহত্ত্ব প্রকাশের জন্য", "সামাজিক অবিচারের প্রতিবাদে", "প্রকৃতির প্রতি ভালোবাসার জন্য"],
    answerIndex: 1,
    explanation: "কবি ত্যাগের মহত্ত্ব প্রকাশের জন্য ফসল তরীতে তুলতে অস্বীকার করেন।"
  },
  {
    id: 47,
    topic: "পদ্য - বিদ্রোহী",
    question: "‘বিদ্রোহী’ কবিতায় নজরুল কোন শক্তির প্রতি চ্যালেঞ্জ ছুঁড়ে দিয়েছেন?",
    options: ["প্রকৃতির নিয়ম", "শোষণ ও অত্যাচার", "ধর্মীয় কুসংস্কার", "ব্যক্তিগত দুর্বলতা"],
    answerIndex: 1,
    explanation: "নজরুল শোষণ ও অত্যাচারের প্রতি চ্যালেঞ্জ ছুঁড়ে দিয়েছেন।"
  },
  {
    id: 48,
    topic: "পদ্য - সোনার তরী",
    question: "‘সোনার তরী’ কবিতায় কবির মনোভাব কোন দিকটি প্রকাশ করে?",
    options: ["জীবনের প্রতি মোহ", "ত্যাগ ও আধ্যাত্মিকতা", "সামাজিক প্রতিবাদ", "প্রকৃতির প্রশংসা"],
    answerIndex: 1,
    explanation: "কবির মনোভাব ত্যাগ ও আধ্যাত্মিকতা প্রকাশ করে।"
  },
  {
    id: 49,
    topic: "পদ্য - বিদ্রোহী",
    question: "‘বিদ্রোহী’ কবিতায় নজরুল কীভাবে নিজেকে উপস্থাপন করেছেন?",
    options: ["একজন শান্তিপ্রিয় কবি হিসেবে", "একজন বিপ্লবী যোদ্ধা হিসেবে", "একজন ধর্মীয় সংস্কারক হিসেবে", "একজন প্রকৃতি প্রেমিক হিসেবে"],
    answerIndex: 1,
    explanation: "নজরুল নিজেকে একজন বিপ্লবী যোদ্ধা হিসেবে উপস্থাপন করেছেন।"
  },
  {
    id: 50,
    topic: "পদ্য - সোনার তরী",
    question: "‘সোনার তরী’ কবিতায় কবি কোন জীবনদর্শনের প্রতি ইঙ্গিত করেছেন?",
    options: ["ভোগবাদ", "নিষ্কাম কর্ম ও ত্যাগ", "সামাজিক সাম্য", "রাজনৈতিক বিপ্লব"],
    answerIndex: 1,
    explanation: "কবি নিষ্কাম কর্ম ও ত্যাগের জীবনদর্শনের প্রতি ইঙ্গিত করেছেন।"
  }
];




























// ==========================================================================
/*const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      answerIndex: 1,
      explanation: "Paris is the capital and most populous city of France."
    },
    {
      id: 2,
      question: "Which language is used for web apps?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answerIndex: 1,
      explanation: "JavaScript is the most widely used language for interactive web apps."
    },
    {
      id: 3,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Machine Learning",
        "Hot Mail",
        "Hyper Tool Multi Language"
      ],
      answerIndex: 0,
      explanation: "HTML stands for Hyper Text Markup Language, the standard for web pages."
    }
  ]; */

export default questions;



/* const questions = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: [
            { option: "A", text: "Berlin" },
            {option: "B", text: "Madrid"},
            { option: "C", text: "Paris" },
            { option: "D", text: "Rome" },
        ],
        answerIndex: 3,
        explaintatinon: "Paris is the capital of France. It is known for its art, fashion, and culture.",
    },
    {
        id: 2,
        question: "What is the largest planet in our solar system?",
        options: [
            { option: "A", text: "Earth" },
            { option: "B", text: "Jupiter" },
            { option: "C", text: "Mars" },
            { option: "D", text: "Saturn" },
        ],
        answerIndex: 2,
        explaintatinon: "Jupiter is the largest planet in our solar system. It is a gas giant with a thick atmosphere and many moons.",
    },
    {
        id: 3,
        question: "what is html stands for?",
        options: [
            { option: "A", text: "Hyper Text Markup Language" },
            { option: "B", text: "Hyper Text Markup Link" },
            { option: "C", text: "Hyper Text Markup List" },
            { option: "D", text: "Hyper Text Markup Level" },
        ],
        answerIndex: 1,
        explaintatinon: "HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages.",
    }
];
export default questions; */