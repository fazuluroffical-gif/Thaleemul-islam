import { Course, TeacherProfile, MakharijLetter } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida',
    tamilTitle: 'நூரானி காயிதா',
    tagline: 'A gentle foundation for beginners to recognise Arabic letters, learn pronunciation and prepare for Qur\'an reading.',
    category: 'foundation',
    targetAudience: 'Children (Age 4+) & Absolute Beginners',
    duration: '3 - 5 Months',
    frequency: '2 to 3 sessions per week',
    description: 'A structured, gentle foundation designed to teach students how to identify single and compound Arabic letters, master precise Makharij (points of articulation), and understand short/long vowels before reciting the Holy Qur\'an.',
    accentColor: '#C29B38',
    prerequisites: 'No prior Arabic knowledge required.',
    recommendedFor: [
      'Young children taking their first Islamic education steps',
      'Adults who never learned to read Arabic script',
      'Tamil-speaking families seeking patient, child-friendly teachers'
    ],
    syllabus: [
      {
        title: 'Module 1: Arabic Alphabets & Makharij',
        description: 'Individual letter recognition from Alif to Yaa with correct point of sound origin.',
        topics: ['29 Arabic letters recognition', 'Makharij articulation basics', 'Distinguishing similar sounding letters (Haa vs Haa, Saad vs Seen)']
      },
      {
        title: 'Module 2: Harakaat & Vowel Sounds',
        description: 'Mastering the short vowels (Fatha, Kasra, Damma) and basic rhythm.',
        topics: ['Fatha, Kasra, Damma movements', 'Tanween (double vowels)', 'Avoiding stretching short vowels']
      },
      {
        title: 'Module 3: Letter Connecting & Sukoon',
        description: 'Recognizing letters at the beginning, middle, and end of words.',
        topics: ['Connected letter shapes', 'The silent letter (Sukoon/Jazm)', 'Qalqalah (echo letters)']
      },
      {
        title: 'Module 4: Madd & Shaddah Rules',
        description: 'Vowel elongation and emphasis for smooth transition into Quranic verses.',
        topics: ['Madd Asli (natural elongation 2 harakah)', 'Shaddah (doubled letter tension)', 'Transition to Surah Al-Fatiha & Juz Amma']
      }
    ]
  },
  {
    id: 'quran-reading-tajweed',
    title: 'Qur\'an Reading with Tajweed',
    tamilTitle: 'தஜ்வீதுடன் குர்ஆன் ஓதுதல்',
    tagline: 'Build confident recitation with correct pronunciation, essential Tajweed rules and guided practice.',
    category: 'recitation',
    targetAudience: 'Beginners & Intermediate Reciters',
    duration: '6 - 9 Months',
    frequency: '2 to 4 sessions per week',
    description: 'Transform your recitation from hesitant reading into confident, melodious recitation conforming to the authentic rules of Tajweed handed down from the Prophet Muhammad (ﷺ).',
    accentColor: '#0D7E6C',
    prerequisites: 'Basic familiarity with Arabic letters or completion of Noorani Qaida.',
    recommendedFor: [
      'Students who can read Arabic letters but struggle with fluency',
      'Adults looking to correct common pronunciation mistakes',
      'Families wanting their children to recite with classical beauty'
    ],
    syllabus: [
      {
        title: 'Module 1: Rules of Noon & Meem Saakin',
        description: 'The backbone of smooth Quranic recitation and nasalization (Ghunnah).',
        topics: ['Izhaar (clear pronunciation)', 'Idghaam (merging with/without Ghunnah)', 'Iqlaab (converting Noon into Meem)', 'Ikhfaa (concealing the sound)']
      },
      {
        title: 'Module 2: Makharij & Sifaat of Letters',
        description: 'Fine-tuning throat, tongue, and lip articulation points with native nuances.',
        topics: ['Heavy (Tafkheem) and Light (Tarqeeq) letters', 'Rules of the letter Raa and Lam in Allah', 'Sifaat Lazimah (permanent characteristics)']
      },
      {
        title: 'Module 3: Madd Rules & Waqf (Stopping Signs)',
        description: 'Knowing how long to stretch sounds and where to stop respectfully.',
        topics: ['Madd Waajib, Jaa\'iz, and Laazim (2, 4, 6 counts)', 'Signs of Waqf (Meem, Qily, Sily, Jim)', 'Starting and pausing rules']
      },
      {
        title: 'Module 4: Guided Recitation & Revision',
        description: 'Direct 1-on-1 recitation with ustadh/ustadha correction and confidence building.',
        topics: ['Recitation of Juz 30 (Juz Amma)', 'Correction of hidden errors (Lahn Khafi)', 'Completion certificate preparation']
      }
    ]
  },
  {
    id: 'quran-memorisation-hifz',
    title: 'Qur\'an Memorisation (Hifz)',
    tamilTitle: 'ஹிஃப்ழுல் குர்ஆன் (மனனம்)',
    tagline: 'A structured memorisation journey with revision cycles, steady goals and individual guidance.',
    category: 'hifz',
    targetAudience: 'Committed Children, Youths & Adults',
    duration: 'Customized (1 - 3 Years)',
    frequency: '3 to 5 sessions per week',
    description: 'A dignified path to committing the words of Allah to memory. Using the classical 3-tier methodology: Sabaq (new verses), Sabqi (recent 5-10 pages revision), and Manzil (cumulative revision) to ensure lifelong retention.',
    accentColor: '#072026',
    prerequisites: 'Fluent recitation with sound Tajweed application.',
    recommendedFor: [
      'Children aiming for full or partial Hifz alongside academic schooling',
      'Working professionals memorizing selected Surahs (e.g., Yaseen, Mulk, Kahf)',
      'Huffadh needing structured retention cycles with a certified Hafiz/Hafidha'
    ],
    syllabus: [
      {
        title: 'Track A: Juz Amma & Selected Surahs',
        description: 'Foundation track committing the most recited Surahs of daily prayers.',
        topics: ['Surah An-Naas to Surah An-Naba', 'Surah Al-Mulk, As-Sajdah, Al-Waqi\'ah', 'Daily revision habits']
      },
      {
        title: 'Track B: Systematic Full Hifz Program',
        description: 'Comprehensive 30 Juz memorization roadmap with scheduled milestones.',
        topics: ['Daily Sabaq (new page preparation)', 'Sabqi daily check (last 10 pages)', 'Weekly Manzil Juz evaluation']
      },
      {
        title: 'Track C: Mutashabihat (Similar Verses)',
        description: 'Mastering confusing cross-Surah verse variations without hesitation.',
        topics: ['Techniques for similar ayah endings', 'Mental mapping & page visualization', 'Tafseer connection to aid memory']
      }
    ]
  },
  {
    id: 'spoken-quranic-arabic',
    title: 'Spoken & Quranic Arabic',
    tamilTitle: 'அரபு மொழி & குர்ஆனிய அரபு',
    tagline: 'Understand the direct linguistic meaning of the verses and converse with foundational Arabic.',
    category: 'arabic',
    targetAudience: 'High-Schoolers, Youths & Adults',
    duration: '6 Months',
    frequency: '2 sessions per week',
    description: 'Bridge the gap between reciting the Qur\'an and understanding what Allah is saying to you. Learn the 80% most recurring vocabulary words in the Qur\'an, basic Sarf (morphology), and conversational Arabic through Tamil explanations.',
    accentColor: '#006354',
    prerequisites: 'Ability to read Arabic script.',
    recommendedFor: [
      'Reciters who want their hearts engaged in Salah and Taraweeh',
      'Students planning Umrah/Hajj seeking conversational Arabic skills',
      'Tamil-speaking Muslims who find heavy grammar books intimidating'
    ],
    syllabus: [
      {
        title: 'Module 1: The High-Frequency Quranic Lexicon',
        description: '300 core words that constitute roughly 70% of the entire Quranic text.',
        topics: ['Pronouns, prepositions, and particles', 'Common nouns (Jannah, Naar, Kitaab, Noor)', 'Word roots & derivation']
      },
      {
        title: 'Module 2: Essential Verb Forms (Sarf)',
        description: 'Understand past, present, and command verb forms easily.',
        topics: ['Three-letter root patterns (Fa-a-la)', 'Past tense (Madi) & Present/Future (Mudari\')', 'Imperative forms (Amr) in Duas']
      },
      {
        title: 'Module 3: Sentence Structure (Nahw)',
        description: 'How Arabic sentences form meaning with simple grammatical endings.',
        topics: ['Nominal and verbal sentences', 'The concept of I\'raab simplified', 'Direct translation of Surah Al-Fatiha & Short Surahs']
      }
    ]
  },
  {
    id: 'islamic-studies-akhlaq',
    title: 'Islamic Studies & Akhlaq',
    tamilTitle: 'இஸ்லாமிய விழுமியங்கள் & ஒழுக்கவியல்',
    tagline: 'Nurture prophetic character, authentic Hadith, daily Duas, and practical Salah guidance.',
    category: 'character',
    targetAudience: 'Children (Age 6-15) & New Muslims',
    duration: 'Continuous / Modular (3-6 Months)',
    frequency: '1 to 2 sessions per week',
    description: 'An enriching companion course focusing on character formation, prophetic morals (Akhlaq), authentic Adhkar from Hisn al-Muslim, practical demonstration of Wudhu and Salah, and inspiring stories of the Anbiya in clear Tamil and English.',
    accentColor: '#10B981',
    prerequisites: 'Open to all.',
    recommendedFor: [
      'Diaspora children growing up in Western or secular educational systems',
      'Parents wanting a holistic Islamic upbringing alongside Quran recitation',
      'Youths needing grounded answers to contemporary moral challenges'
    ],
    syllabus: [
      {
        title: 'Module 1: Practical Fiqh of Worship',
        description: 'Step-by-step masterclass on purification and daily prayers.',
        topics: ['Correct method of Wudhu and Ghusl', 'Prayer postures, conditions, and recitations', 'Common mistakes during Salah']
      },
      {
        title: 'Module 2: Akhlaq & Prophetic Character',
        description: 'The golden manners of the Prophet Muhammad (ﷺ) in daily life.',
        topics: ['Kindness to parents & elders', 'Honesty, humility, and avoiding gossip', 'Controlling anger & resolving disputes']
      },
      {
        title: 'Module 3: Daily Adhkar & Duas',
        description: 'Memorising essential authentic morning, evening, and situational supplications.',
        topics: ['Duas for eating, sleeping, waking, travel', 'Ayat al-Kursi & the 3 Quls protection', 'Meaning and spiritual impact']
      }
    ]
  }
];

export const TEACHERS_DATA: TeacherProfile[] = [
  {
    id: 't-1',
    name: 'Ustadha Fathima Zeenath',
    title: 'Senior Tajweed & Qaida Instructor',
    credentials: 'Al-Alimiyyah & Ijazah in Hafs \'an \'Asim',
    specialty: 'Children\'s Qaida, Female Tajweed & Makharij correction',
    experience: '8+ Years Teaching',
    gender: 'female',
    languages: ['Tamil', 'English', 'Arabic'],
    bio: 'Patient and nurturing educator specialized in introducing young children and adult sisters to the Qur\'an with gentle pedagogical methods and encouraging positive reinforcement.'
  },
  {
    id: 't-2',
    name: 'Ustadh Hafiz Mohamed Irfan',
    title: 'Head of Hifz & Recitation',
    credentials: 'Hafiz al-Qur\'an, Sanad Mutassil, Jamia Graduate',
    specialty: 'Systematic Hifz, Tajweed rules & Mutashabihat',
    experience: '12+ Years Teaching',
    gender: 'male',
    languages: ['Tamil', 'English', 'Arabic', 'Urdu'],
    bio: 'Guided dozens of students across Singapore, UK, UAE, and India to complete Quran memorisation with classical discipline and balanced retention cycles.'
  },
  {
    id: 't-3',
    name: 'Ustadha Sumayya Rafeek',
    title: 'Islamic Studies & Quranic Arabic Lead',
    credentials: 'BA in Islamic Studies & Arabic Linguistics',
    specialty: 'Prophetic Akhlaq, Kids Fiqh & Arabic Vocabulary',
    experience: '6+ Years Teaching',
    gender: 'female',
    languages: ['Tamil', 'English', 'Arabic'],
    bio: 'Brings Islamic history and character principles alive with storytelling, interactive slides, and relatable real-world discussions for young diaspora Muslims.'
  },
  {
    id: 't-4',
    name: 'Ustadh Abdul Samad Faizy',
    title: 'Senior Arabic & Tajweed Mentor',
    credentials: 'Moulavi Fazil & Quranic Phonetics Certified',
    specialty: 'Adult Tajweed Transformation, Advanced Grammar',
    experience: '14+ Years Teaching',
    gender: 'male',
    languages: ['Tamil', 'English', 'Arabic'],
    bio: 'Renowned for helping busy professionals relearn Quran recitation from scratch with clarity and confidence, eliminating hesitancy in group Salah.'
  }
];

export const MAKHAARIJ_LETTERS: MakharijLetter[] = [
  {
    letter: 'أ',
    name: 'Alif / Hamzah',
    arabicName: 'هَمْزَة',
    tamilPhonetic: 'அம்ஸா / அலிஃப்',
    articulationPoint: 'Throat (Halq)',
    tamilPoint: 'தொண்டையின் அடிப்பகுதி (Aqsa al-Halq)',
    description: 'Produced from the deepest part of the throat nearest to the chest. Vocal cords momentarily close and open with a clear crisp stop.',
    audioExampleWord: 'أَمْر (Amr)',
    transliteration: 'Amr',
    meaning: 'Command'
  },
  {
    letter: 'ع',
    name: '\'Ayn',
    arabicName: 'عَيْن',
    tamilPhonetic: 'ஐன் (தொண்டை நடு)',
    articulationPoint: 'Throat (Halq)',
    tamilPoint: 'தொண்டையின் மத்திய பகுதி (Wasaṭ al-Halq)',
    description: 'Emitted from the middle of the throat by compressing the epiglottis. It has a distinctive squeeze sound unique to Arabic, neither a simple \'A\' nor a choke.',
    audioExampleWord: 'عِلْم (\'Ilm)',
    transliteration: '\'Ilm',
    meaning: 'Knowledge'
  },
  {
    letter: 'ح',
    name: 'Haa (Whispered)',
    arabicName: 'حَاء',
    tamilPhonetic: 'ஹா (சுத்தமான தொண்டை மூச்சு)',
    articulationPoint: 'Throat (Halq)',
    tamilPoint: 'தொண்டையின் மத்திய பகுதி (Wasaṭ al-Halq)',
    description: 'A sharp, breathy \'H\' from the middle of the throat like cleaning glasses with your warm breath. Free of rasp or friction.',
    audioExampleWord: 'حَمْد (Hamd)',
    transliteration: 'Hamd',
    meaning: 'Praise'
  },
  {
    letter: 'خ',
    name: 'Khaa',
    arabicName: 'خَاء',
    tamilPhonetic: 'ஃகா / கா (தொண்டை மேல் உராய்வு)',
    articulationPoint: 'Throat (Halq)',
    tamilPoint: 'தொண்டையின் மேல் பகுதி (Adna al-Halq)',
    description: 'Produced at the top of the throat closest to the mouth. Heavy letter (Tafkheem) with a soft gargling sound without harsh scraping.',
    audioExampleWord: 'خَيْر (Khayr)',
    transliteration: 'Khayr',
    meaning: 'Goodness'
  },
  {
    letter: 'ق',
    name: 'Qaaf',
    arabicName: 'قَاف',
    tamilPhonetic: 'காஃப் (உள்நாக்கு கனத்த ஒலி)',
    articulationPoint: 'Tongue (Lisaan)',
    tamilPoint: 'நாக்கின் அடிப்பகுதி உள்நாக்குடன் இணையும் இடம்',
    description: 'Back of the tongue striking the soft palate (uvula). A deep, resonant, heavy consonant with Qalqalah echo when saakin.',
    audioExampleWord: 'قَلْب (Qalb)',
    transliteration: 'Qalb',
    meaning: 'Heart'
  },
  {
    letter: 'ص',
    name: 'Saad',
    arabicName: 'صَاد',
    tamilPhonetic: 'ஸாத் (கனத்த ஸ)',
    articulationPoint: 'Tongue (Lisaan)',
    tamilPoint: 'நாக்கின் நுனி கீழ் பற்களின் உட்புறம்',
    description: 'A heavy, elevated whistling letter (Huroof As-Saafeer) with full mouth resonance (Itbaaq), distinctly different from light Seen.',
    audioExampleWord: 'صَبْر (Sabr)',
    transliteration: 'Sabr',
    meaning: 'Patience'
  },
  {
    letter: 'ض',
    name: 'Daad',
    arabicName: 'ضَاد',
    tamilPhonetic: 'ழாத் / ளாத் (அரபுக்கே உரிய பிரத்யேக ஒலி)',
    articulationPoint: 'Tongue (Lisaan)',
    tamilPoint: 'நாக்கின் ஒரு பக்க அல்லது இரு பக்க விளிம்புகள் மேல் கடைவாய்ப் பற்களுடன்',
    description: 'The signature letter of the Arabic language ("Lughat al-Daad"). Edge of the tongue touches upper molars with elongation (Istitaalah).',
    audioExampleWord: 'ضَوْء (Daw\')',
    transliteration: 'Daw\'',
    meaning: 'Radiant Light'
  },
  {
    letter: 'ب',
    name: 'Baa',
    arabicName: 'بَاء',
    tamilPhonetic: 'பா (இரு உதடுகள்)',
    articulationPoint: 'Lips (Shafataan)',
    tamilPoint: 'இரு உதடுகளின் ஈரப்பகுதி ஒன்றோடொன்று சேர்வது',
    description: 'Produced by pressing the wet inner edges of both lips firmly together and releasing with crispness and Qalqalah.',
    audioExampleWord: 'بَرَكَة (Barakah)',
    transliteration: 'Barakah',
    meaning: 'Blessing'
  }
];

export const FAQS = [
  {
    question: 'How do the online classes work across different time zones?',
    answer: 'Classes are conducted live 1-on-1 via high-quality interactive virtual classrooms (Google Meet / Zoom). Because our students are located across the UK, Singapore, UAE, USA, Canada, India, and Sri Lanka, our scheduling coordinators arrange fixed lesson times that comfortably fit around school schedules, work hours, or weekends in your local time zone.'
  },
  {
    question: 'Can sisters and young girls request dedicated female tutors?',
    answer: 'Yes, absolutely. We have experienced, certified Ustadhas (female scholars) specifically dedicated for adult sisters and young daughters. We respect your family\'s modesty and comfort as a foundational priority.'
  },
  {
    question: 'My child only speaks Tamil and English. Will the tutor be able to communicate effectively?',
    answer: 'Yes! All our teachers are completely fluent in Tamil and English alongside classical Arabic. They explain complex Tajweed concepts and stories in friendly, conversational Tamil and English, ensuring children and youths born abroad understand effortlessly without intimidation.'
  },
  {
    question: 'What happens during the Free Trial Assessment class?',
    answer: 'The 30-minute trial class is a welcoming, zero-pressure assessment. The ustadh or ustadha will gently evaluate the student\'s current recognition of letters or recitation fluency, understand your family\'s learning goals, demonstrate our teaching style, and recommend a personalized curriculum roadmap.'
  },
  {
    question: 'What if we miss a class due to illness or family travel?',
    answer: 'We offer flexible rescheduling! Simply inform our academy coordinator at least 4 hours before the session, and your tutor will arrange a makeup class at a mutually suitable time so your child\'s learning momentum is never lost.'
  },
  {
    question: 'Is Noorani Qaida suitable for adults who want to start from zero?',
    answer: '100% yes. Many of our adult students are professionals and parents who never had the chance to learn proper Arabic phonetics earlier in life. Our adult classes are private, discreet, and conducted with great respect and encouragement.'
  }
];
