import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Compass, 
  GraduationCap, 
  Building2, 
  Target, 
  Users, 
  Trophy
} from 'lucide-react';
import { Language } from '../types';

export interface ExplorationJourneyState {
  discover: boolean;
  assess: boolean;
  explore: boolean;
  plan: boolean;
  connect: boolean;
}

interface CareerExplorationProgressBarProps {
  currentLang: Language;
  progress: ExplorationJourneyState;
  onToggleStep: (stepKey: keyof ExplorationJourneyState) => void;
  onNavigateToStep: (stepKey: keyof ExplorationJourneyState) => void;
}

export const CareerExplorationProgressBar: React.FC<CareerExplorationProgressBarProps> = ({
  currentLang,
  progress,
  onToggleStep,
  onNavigateToStep
}) => {
  const stepsConfig: {
    key: keyof ExplorationJourneyState;
    number: string;
    titleEn: string;
    titleFr: string;
    descEn: string;
    descFr: string;
    actionEn: string;
    actionFr: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      key: 'discover',
      number: '01',
      titleEn: 'Discover',
      titleFr: 'Découvrir',
      descEn: 'Understand subjects, streams (Grammar, Tech, Commercial), and pathways.',
      descFr: 'Comprendre les matières, les séries (Général, Tech, Commercial) et filières.',
      actionEn: 'View Pathways',
      actionFr: 'Voir les Filières',
      icon: Compass
    },
    {
      key: 'assess',
      number: '02',
      titleEn: 'Assess',
      titleFr: 'Évaluer',
      descEn: 'Reflect on aptitude, RIASEC personality, interests, and strengths.',
      descFr: 'Identifier vos aptitudes, votre profil RIASEC et vos centres d\'intérêt.',
      actionEn: 'Take Quiz',
      actionFr: 'Passer le Test',
      icon: GraduationCap
    },
    {
      key: 'explore',
      number: '03',
      titleEn: 'Explore',
      titleFr: 'Explorer',
      descEn: 'Compare Cameroon universities, Grande Écoles, and vocational centres.',
      descFr: 'Comparer les universités d\'État, les Grandes Écoles et la formation pro.',
      actionEn: 'Browse Campuses',
      actionFr: 'Explorer les Campus',
      icon: Building2
    },
    {
      key: 'plan',
      number: '04',
      titleEn: 'Plan',
      titleFr: 'Planifier',
      descEn: 'Turn recommendations into clear subject combinations and career goals.',
      descFr: 'Transformer les recommandations en choix de matières et objectifs clairs.',
      actionEn: 'Explore Careers',
      actionFr: 'Voir les Métiers',
      icon: Target
    },
    {
      key: 'connect',
      number: '05',
      titleEn: 'Connect',
      titleFr: 'Connecter',
      descEn: 'Access 1-on-1 guidance counsellors, mentorship, and scholarship opportunities.',
      descFr: 'Échanger avec un conseiller d\'orientation et consulter les bourses.',
      actionEn: 'Book Counsellor',
      actionFr: 'Prendre RDV',
      icon: Users
    }
  ];

  const completedCount = Object.values(progress).filter(Boolean).length;
  const totalSteps = stepsConfig.length;
  const percentage = Math.round((completedCount / totalSteps) * 100);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
      {/* Header with Title and Progress Count */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              {currentLang === 'en' ? 'The Learner Experience' : 'Parcours de l\'Élève'}
            </span>
            <span className="text-xs text-slate-400">
              {currentLang === 'en' ? 'A journey from uncertainty to direction' : 'De l\'incertitude vers une orientation claire'}
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-900">
            {currentLang === 'en' ? 'Career Path Exploration Progress' : 'Progression de Votre Parcours d\'Orientation'}
          </h2>
        </div>

        <div className="flex items-baseline gap-2 shrink-0">
          <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
            {percentage}%
          </span>
          <span className="text-xs text-slate-500 font-medium">
            ({completedCount} / {totalSteps} {currentLang === 'en' ? 'steps completed' : 'étapes validées'})
          </span>
        </div>
      </div>

      {/* Progress Bar Track */}
      <div className="space-y-1.5">
        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200/60">
          <div
            className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 h-full rounded-full transition-all duration-500 ease-out shadow-xs"
            style={{ width: `${Math.max(percentage, 4)}%` }}
          />
        </div>
        <div className="flex justify-between text-[11px] text-slate-400 font-medium px-1">
          <span>01 Discover</span>
          <span>02 Assess</span>
          <span>03 Explore</span>
          <span>04 Plan</span>
          <span>05 Connect</span>
        </div>
      </div>

      {/* 100% Celebration Banner if complete */}
      {percentage === 100 && (
        <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-900 text-xs">
          <Trophy className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <span className="font-bold block">
              {currentLang === 'en' ? 'Orientation Milestone Achieved!' : 'Parcours Complet d\'Orientation Validé !'}
            </span>
            <span>
              {currentLang === 'en'
                ? 'You have completed all 5 steps: discovered your track, assessed your personality, explored campuses, established goals, and reached out to guidance mentors.'
                : 'Félicitations ! Vous avez validé les 5 étapes : séries identifiées, test RIASEC passé, universités comparées, plan de carrière défini et contact établi.'}
            </span>
          </div>
        </div>
      )}

      {/* Interactive 5-Step Journey Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-1">
        {stepsConfig.map((step) => {
          const Icon = step.icon;
          const isDone = progress[step.key];
          return (
            <div
              key={step.key}
              className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                isDone
                  ? 'bg-emerald-50/50 border-emerald-300/80 shadow-2xs'
                  : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded ${
                    isDone ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {step.number}
                  </span>
                  
                  {/* Click to manually toggle completion */}
                  <button
                    onClick={() => onToggleStep(step.key)}
                    title={isDone ? 'Mark pending' : 'Mark completed'}
                    className="cursor-pointer text-slate-400 hover:text-emerald-600 transition-colors"
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-300 hover:text-slate-500" />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className={`w-3.5 h-3.5 ${isDone ? 'text-emerald-700' : 'text-slate-500'}`} />
                  <h3 className={`text-xs font-bold ${isDone ? 'text-emerald-950' : 'text-slate-800'}`}>
                    {currentLang === 'en' ? step.titleEn : step.titleFr}
                  </h3>
                </div>

                <p className="text-[11px] text-slate-500 line-clamp-2 leading-snug">
                  {currentLang === 'en' ? step.descEn : step.descFr}
                </p>
              </div>

              {/* Action Jump Button */}
              <button
                onClick={() => onNavigateToStep(step.key)}
                className={`w-full py-1.5 px-2 text-[11px] font-semibold rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer ${
                  isDone
                    ? 'bg-white border border-emerald-200 text-emerald-800 hover:bg-emerald-100/50'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{currentLang === 'en' ? step.actionEn : step.actionFr}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
