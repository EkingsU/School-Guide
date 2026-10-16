import React, { useState } from 'react';
import { 
  CheckCircle, 
  RotateCcw, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  ArrowRight,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { Language } from '../types';
import { ASSESSMENT_QUESTIONS, CAREER_PROFILES } from '../data/cameroonData';

interface CareerAssessmentProps {
  currentLang: Language;
  onExploreCareer: (careerId: string) => void;
  onViewPathways: () => void;
}

export const CareerAssessment: React.FC<CareerAssessmentProps> = ({
  currentLang,
  onExploreCareer,
  onViewPathways
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { riasec: string; streams: string[] }>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const currentQuestion = ASSESSMENT_QUESTIONS[currentStep];

  const handleSelectOption = (riasec: string, streams: string[]) => {
    const updated = {
      ...answers,
      [currentQuestion.id]: { riasec, streams }
    };
    setAnswers(updated);

    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Compute RIASEC tallies
  const computeResults = () => {
    const riasecCounts: Record<string, number> = {};
    const streamCounts: Record<string, number> = {};

    Object.values(answers).forEach(({ riasec, streams }) => {
      riasecCounts[riasec] = (riasecCounts[riasec] || 0) + 1;
      streams.forEach(st => {
        streamCounts[st] = (streamCounts[st] || 0) + 1;
      });
    });

    const dominantRiasec = Object.entries(riasecCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Investigative';
    const topStream = Object.entries(streamCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'grammar';

    // Find recommended careers
    const matchedCareers = CAREER_PROFILES.filter(c => c.requiredStream.includes(topStream as any)).slice(0, 3);

    return {
      dominantRiasec,
      topStream,
      matchedCareers
    };
  };

  const results = isCompleted ? computeResults() : null;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Assessment Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {currentLang === 'en' ? 'RIASEC Holland Career Profiler' : 'Test d\'Aptitude RIASEC Hollande'}
            </span>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            {isCompleted 
              ? (currentLang === 'en' ? 'Assessment Completed' : 'Test Terminé')
              : `${currentLang === 'en' ? 'Question' : 'Question'} ${currentStep + 1} / ${totalQuestions}`}
          </span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          {currentLang === 'en' ? 'Cameroon Career & Stream Assessment' : 'Évaluation d\'Orientation & Séries Scolaires'}
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          {currentLang === 'en'
            ? 'Answer 5 practical scenarios to discover your personality profile, ideal high school series (Arts, Sciences, F-Series, G-Series), and matching higher education concours.'
            : 'Répondez à 5 mises en situation concrètes pour identifier votre profil de personnalité, vos séries recommandées et les concours d\'entrée.'}
        </p>

        {/* Progress Bar */}
        {!isCompleted && (
          <div className="mt-5">
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Active Question View */}
      {!isCompleted && currentQuestion && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              {currentLang === 'en' ? `Question ${currentStep + 1} of ${totalQuestions}` : `Question ${currentStep + 1} sur ${totalQuestions}`}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentLang === 'en' ? currentQuestion.questionEn : currentQuestion.questionFr}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt.riasecType, opt.suggestedStreams)}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-emerald-50/60 hover:border-emerald-300 text-left transition-all group flex items-start gap-3 cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-emerald-500 group-hover:text-emerald-600 text-xs font-semibold text-slate-600">
                  {String.fromCharCode(65 + idx)}
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-slate-800 group-hover:text-slate-900 block leading-relaxed">
                    {currentLang === 'en' ? opt.labelEn : opt.labelFr}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 shrink-0 self-center opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          {currentStep > 0 && (
            <div className="pt-2 flex justify-start">
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-xs text-slate-500 hover:text-slate-800 font-medium py-1 px-2 rounded cursor-pointer"
              >
                ← {currentLang === 'en' ? 'Previous Question' : 'Question Précédente'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Completion & Results View */}
      {isCompleted && results && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8 animate-fadeIn">
          {/* Result Banner */}
          <div className="bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-xl p-6 sm:p-8 shadow-inner space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <CheckCircle className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Assessment Results' : 'Résultats de Votre Test'}</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {results.dominantRiasec} Profile
                </h2>
                <p className="text-sm text-slate-300 mt-1 max-w-xl">
                  {currentLang === 'en'
                    ? `Your answers show a strong alignment with analytical, practical problem solving in the ${results.topStream.toUpperCase()} education stream.`
                    : `Vos réponses démontrent une forte affinité avec la filière ${results.topStream.toUpperCase()} et la résolution pragmatique de défis.`}
                </p>
              </div>
              <div className="bg-emerald-800/60 border border-emerald-600/50 rounded-xl px-4 py-3 text-center">
                <span className="text-xs text-emerald-200 block">Recommended Stream</span>
                <span className="text-lg font-bold text-white capitalize">{results.topStream} Track</span>
              </div>
            </div>
          </div>

          {/* Recommendations Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Academic Recommendations */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <h3>{currentLang === 'en' ? 'Recommended Subject Combos' : 'Combinaisons de Matières Conseillées'}</h3>
              </div>
              <p className="text-xs text-slate-600">
                {currentLang === 'en'
                  ? 'Based on Cameroon examination benchmarks, prioritizing these subjects will maximize your entry chances in official Concours:'
                  : 'Selon les exigences des examens officiels camerounais, ces matières optimisent vos chances d\'admission :'}
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                {results.topStream === 'grammar' && (
                  <>
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <strong>Sciences (S-Series / C&D):</strong> Pure Mathematics, Physics, Chemistry, Biology
                    </div>
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <strong>Arts (A-Series):</strong> Literature in English, History, Philosophy, French/English
                    </div>
                  </>
                )}
                {results.topStream === 'technical' && (
                  <>
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <strong>F2/F3 (Electrical & Telecoms):</strong> Applied Electricity, Electronics, Technical Drawing, Physics
                    </div>
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <strong>F4 (Civil & Building):</strong> Construction Tech, Applied Mechanics, Strength of Materials
                    </div>
                  </>
                )}
                {results.topStream === 'commercial' && (
                  <>
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <strong>G2 (Accounting):</strong> Financial Accounting, Cost Accounting (OHADA), Economics, Business Math
                    </div>
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <strong>G3 (Marketing):</strong> Sales Strategy, Consumer Behavior, Commercial Law, Economics
                    </div>
                  </>
                )}
                {results.topStream === 'vocational' && (
                  <>
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <strong>Software & Digital:</strong> JavaScript/React, Database Design, UI/UX, Cloud Basics
                    </div>
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <strong>Agropastoral:</strong> Greenhouse Production, Poultry Management, Farm Accounting
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Target Cameroon Concours */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <h3>{currentLang === 'en' ? 'Target Cameroon Higher Ed Concours' : 'Concours d\'Entrée Cibles au Cameroun'}</h3>
              </div>
              <p className="text-xs text-slate-600">
                {currentLang === 'en'
                  ? 'Competitive national entrance examinations (Concours) you are best positioned to prepare for:'
                  : 'Concours nationaux prestigieux les mieux adaptés à vos aptitudes :'}
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-white rounded border border-slate-200">
                  <div className="font-bold text-slate-900">ENSPY (Polytechnique Yaoundé) / COLTECH Bamenda</div>
                  <div className="text-slate-500 mt-0.5">Engineering, AI, Civil & Telecommunications degrees</div>
                </div>
                <div className="p-2.5 bg-white rounded border border-slate-200">
                  <div className="font-bold text-slate-900">FHS Buea / FMSB Yaoundé</div>
                  <div className="text-slate-500 mt-0.5">Doctor of Medicine, Nursing, Biomedical Sciences</div>
                </div>
                <div className="p-2.5 bg-white rounded border border-slate-200">
                  <div className="font-bold text-slate-900">ESSEC Douala / HICM Bamenda</div>
                  <div className="text-slate-500 mt-0.5">Chartered Accounting, Corporate Finance, Management</div>
                </div>
              </div>
            </div>
          </div>

          {/* Matched Careers Cards */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>{currentLang === 'en' ? 'Top Matched Career Pathways' : 'Métiers Recommandés'}</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {results.matchedCareers.map((c) => (
                <div 
                  key={c.id} 
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {c.sector}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 mt-2">
                      {currentLang === 'en' ? c.titleEn : c.titleFr}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {currentLang === 'en' ? c.descriptionEn : c.descriptionFr}
                    </p>
                    <div className="text-xs text-slate-500 mt-2">
                      <span className="font-semibold text-slate-700">{c.salaryRangeXAF}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onExploreCareer(c.id)}
                    className="mt-4 text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{currentLang === 'en' ? 'View Career Details' : 'Voir les Détails'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
            <button
              onClick={handleReset}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? 'Retake Assessment' : 'Recommencer le Test'}</span>
            </button>

            <button
              onClick={onViewPathways}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold text-xs transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>{currentLang === 'en' ? 'Explore Academic Tracks' : 'Consulter les Séries'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
