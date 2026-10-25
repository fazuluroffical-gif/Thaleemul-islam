export interface Course {
  id: string;
  title: string;
  tagline: string;
  category: 'foundation' | 'recitation' | 'hifz' | 'arabic' | 'character';
  targetAudience: string;
  duration: string;
  frequency: string;
  description: string;
  accentColor: string;
  syllabus: {
    title: string;
    description: string;
    topics: string[];
  }[];
  prerequisites: string;
  recommendedFor: string[];
  tamilTitle?: string;
}

export interface TeacherProfile {
  id: string;
  name: string;
  title: string;
  credentials: string;
  specialty: string;
  experience: string;
  gender: 'female' | 'male';
  languages: string[];
  bio: string;
}

export interface MakharijLetter {
  letter: string;
  name: string;
  arabicName: string;
  tamilPhonetic: string;
  articulationPoint: 'Throat (Halq)' | 'Tongue (Lisaan)' | 'Lips (Shafataan)' | 'Nose (Khayshum)' | 'Oral Cavity (Jawf)';
  tamilPoint: string;
  description: string;
  audioExampleWord: string;
  transliteration: string;
  meaning: string;
}

export interface BookingSubmission {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  countryCode: string;
  courseId: string;
  ageGroup: string;
  tutorPreference: 'female' | 'male' | 'no-preference';
  languagePreference: 'tamil' | 'english-tamil' | 'english';
  timezone: string;
  preferredDays: string[];
  preferredSlot: 'morning' | 'afternoon' | 'evening' | 'weekend';
  notes?: string;
}

export interface StudentSignUpData {
  id?: string;
  name: string;
  age: string;
  gender: 'male' | 'female';
  fatherName: string;
  phone: string;
  countryCode: string;
  email: string;
  courseId: string;
  cityCountry?: string;
  preferredSlot?: string;
  notes?: string;
  registrationDate?: string;
}
