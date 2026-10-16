export type Language = 'en' | 'fr';

export type UserRole = 'student' | 'parent' | 'counsellor';

export type EducationStream = 'grammar' | 'technical' | 'commercial' | 'vocational';

export type EducationLevel = 'lower-secondary' | 'upper-secondary' | 'high-school' | 'school-leaver';

export interface Subject {
  id: string;
  nameEn: string;
  nameFr: string;
  level: 'Ordinary' | 'Advanced' | 'Both' | 'BEPC' | 'Probatoire' | 'Baccalaureat';
  isCore: boolean;
  category: 'Sciences' | 'Arts' | 'Industrial' | 'Commercial' | 'General';
  descriptionEn: string;
  descriptionFr: string;
  targetStreams: EducationStream[];
  careerRelevanceEn: string;
  careerRelevanceFr: string;
}

export interface EducationTrackInfo {
  id: EducationStream;
  titleEn: string;
  titleFr: string;
  taglineEn: string;
  taglineFr: string;
  descriptionEn: string;
  descriptionFr: string;
  subTracks: {
    nameEn: string;
    nameFr: string;
    subSystem: 'Anglophone' | 'Francophone' | 'Both';
    certificates: string[];
    coreSubjects: string[];
    typicalCareerOutcomes: string[];
    entrepreneurshipOutcomes?: string[];
  }[];
  keyInstitutions: string[];
}

export interface CareerItem {
  id: string;
  titleEn: string;
  titleFr: string;
  sector: 'Tech & Engineering' | 'Healthcare' | 'Agribusiness & Environment' | 'Finance & Commerce' | 'Law & Public Admin' | 'Trades & Industry' | 'Media & Creative';
  descriptionEn: string;
  descriptionFr: string;
  requiredStream: EducationStream[];
  recommendedSubjectsEn: string[];
  recommendedSubjectsFr: string[];
  concoursRequired?: string;
  localInstitutions: string[];
  demandLevel: 'High' | 'Very High' | 'Moderate';
  salaryRangeXAF: string;
  dailyTasksEn: string[];
  dailyTasksFr: string[];
  isEmerging?: boolean;
  requiredSkillsEn?: string[];
  requiredSkillsFr?: string[];
  entrepreneurshipAngleEn?: string;
  entrepreneurshipAngleFr?: string;
}

export interface CareerRoadmap {
  id: string;
  careerTitleEn: string;
  careerTitleFr: string;
  stream: EducationStream;
  stages: {
    stageNameEn: string;
    stageNameFr: string;
    timeline: string;
    milestonesEn: string[];
    milestonesFr: string[];
  }[];
  entrepreneurshipPathEn: string;
  entrepreneurshipPathFr: string;
}

export interface LearningResource {
  id: string;
  titleEn: string;
  titleFr: string;
  category: 'Subject Selection' | 'Concours Guide' | 'Exam Preparation' | 'Vocational Orientation';
  format: 'PDF Guide' | 'Interactive Roadmap' | 'Official Circular';
  descriptionEn: string;
  descriptionFr: string;
  targetAudience: string;
  downloadUrl?: string;
}

export interface InstitutionItem {
  id: string;
  name: string;
  type: 'State University' | 'Grande École' | 'Polytechnic / IUT' | 'Accredited Vocational Centre' | 'Private University';
  region: 'Centre' | 'Littoral' | 'South West' | 'North West' | 'West' | 'Far North' | 'Adamawa' | 'North' | 'East' | 'South';
  city: string;
  subSystem: 'Bilingual' | 'Anglophone' | 'Francophone';
  establishedYear: number;
  popularFaculties: {
    facultyName: string;
    degrees: string[];
    admissions: 'Concours (Competitive Exam)' | 'Study of Dossier' | 'Direct Entry (A-Level / Bac)';
  }[];
  contactInfo: {
    website?: string;
    email?: string;
    phone?: string;
    city?: string;
  };
}

export interface AssessmentQuestion {
  id: number;
  questionEn: string;
  questionFr: string;
  options: {
    labelEn: string;
    labelFr: string;
    riasecType: 'Realistic' | 'Investigative' | 'Artistic' | 'Social' | 'Enterprising' | 'Conventional';
    suggestedStreams: EducationStream[];
  }[];
}

export interface OpportunityItem {
  id: string;
  titleEn: string;
  titleFr: string;
  provider: string;
  type: 'Scholarship' | 'Internship' | 'Digital Bootcamp' | 'Vocational Grant';
  targetAudience: string;
  deadline: string;
  awardEn: string;
  awardFr: string;
  eligibilityEn: string;
  eligibilityFr: string;
  applyLinkText: string;
}

export interface MentorItem {
  id: string;
  name: string;
  titleEn: string;
  titleFr: string;
  organization: string;
  city: string;
  specialization: string;
  languages: string[];
  yearsExperience: number;
  availability: string;
}
