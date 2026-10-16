import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  GraduationCap, 
  CheckCircle2, 
  Lightbulb, 
  ArrowRight, 
  Target, 
  Briefcase, 
  Building2, 
  RotateCcw,
  Zap,
  BookOpen
} from 'lucide-react';
import { EducationStream, Language } from '../types';
import { CAREER_PROFILES, CAMEROON_INSTITUTIONS } from '../data/cameroonData';

interface AiCareerRecommenderProps {
  currentLang: Language;
  onExploreCareer: (careerId: string) => void;
  onExploreInstitutions: () => void;
}

interface AiRecommendationResult {
  recommendedStream: EducationStream;
  streamRationale: string;
  recommendedSubjects: string[];
  matchedCareers: typeof CAREER_PROFILES;
  targetConcoursAndInstitutions: string[];
  entrepreneurshipAngle: string;
  nextSteps: string[];
}

export const AiCareerRecommender: React.FC<AiCareerRecommenderProps> = ({
  currentLang,
  onExploreCareer,
  onExploreInstitutions
}) => {
  const [level, setLevel] = useState<string>('form4-5');
  const [currentStream, setCurrentStream] = useState<EducationStream>('grammar');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Mathematics', 'Physics']);
  const [careerAspirations, setCareerAspirations] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [result, setResult] = useState<AiRecommendationResult | null>(null);

  const availableSubjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology',
    'Literature in English', 'History', 'Philosophy', 'French', 'English Language',
    'Applied Electricity', 'Electronics', 'Technical Drawing', 'Building Construction',
    'Financial Accounting', 'Cost Accounting (OHADA)', 'Economics', 'Commerce', 'Computer Science / ICT'
  ];

  const handleToggleSubject = (subj: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subj) 
        ? prev.filter(s => s !== subj) 
        : [...prev, subj]
    );
  };

  const handleGenerateRecommendation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    // Realistic synthesis based on student parameters & Cameroon education matrix
    setTimeout(() => {
      let targetStream: EducationStream = currentStream;
      const lowerAspiration = careerAspirations.toLowerCase();
      const hasMathOrPhysics = selectedSubjects.some(s => ['Mathematics', 'Physics', 'Computer Science / ICT'].includes(s));
      const hasCommercial = selectedSubjects.some(s => ['Financial Accounting', 'Cost Accounting (OHADA)', 'Economics', 'Commerce'].includes(s));
      const hasTechnical = selectedSubjects.some(s => ['Applied Electricity', 'Electronics', 'Technical Drawing', 'Building Construction'].includes(s));
      const hasBiology = selectedSubjects.includes('Biology');

      if (lowerAspiration.includes('code') || lowerAspiration.includes('tech') || lowerAspiration.includes('software')) {
        targetStream = hasTechnical ? 'technical' : 'grammar';
      } else if (lowerAspiration.includes('business') || lowerAspiration.includes('bank') || lowerAspiration.includes('account') || hasCommercial) {
        targetStream = 'commercial';
      } else if (lowerAspiration.includes('build') || lowerAspiration.includes('electric') || lowerAspiration.includes('solar') || hasTechnical) {
        targetStream = 'technical';
      } else if (lowerAspiration.includes('doctor') || lowerAspiration.includes('nurse') || lowerAspiration.includes('medic') || hasBiology) {
        targetStream = 'grammar';
      }

      // Filter careers matching stream
      let matches = CAREER_PROFILES.filter(c => c.requiredStream.includes(targetStream));
      if (matches.length === 0) matches = CAREER_PROFILES.slice(0, 3);
      else matches = matches.slice(0, 3);

      const streamRationale = currentLang === 'en'
        ? `Based on your chosen subjects (${selectedSubjects.join(', ')}) and aspirations towards "${careerAspirations || 'practical success'}", the ${targetStream.toUpperCase()} track provides the most reliable pathway to Cameroon higher education concours and market employment.`
        : `Selon vos matières favorites (${selectedSubjects.join(', ')}) et vos aspirations ("${careerAspirations || 'réussite concrète'}"), la filière ${targetStream.toUpperCase()} offre les meilleures garanties de succès aux concours camerounais et à l'insertion professionnelle.`;

      const recommendedSubjects = targetStream === 'grammar' 
        ? (hasBiology ? ['Biology', 'Chemistry', 'Physics', 'Pure Mathematics'] : ['Pure Mathematics', 'Physics', 'Chemistry', 'Computer Science'])
        : targetStream === 'technical'
        ? ['Applied Electricity / F2-F3', 'Technical Drawing', 'Industrial Math', 'Physics']
        : targetStream === 'commercial'
        ? ['Financial Accounting G2', 'Cost Accounting (OHADA)', 'Economics', 'Business Math']
        : ['Full-Stack Web Dev / DQP', 'Cloud Computing', 'Database Design'];

      const targetConcours = targetStream === 'grammar'
        ? ['Concours ENSPY Yaoundé (Polytechnique)', 'Concours Unique National de Médecine (FMSB / FHS Buea)', 'University of Buea FET']
        : targetStream === 'technical'
        ? ['Concours IUT Douala / Bandjoun', 'Concours ENSTP Yaoundé / Buea (Génie Civil)', 'COLTECH Bamenda']
        : ['Concours ESSEC Douala', 'Higher Institute of Commerce and Management (HICM Bamenda)', 'ONECCA Professional Pathway'];

      const entrepreneurshipAngle = targetStream === 'grammar'
        ? 'High potential to build digital services, telemedicine solutions, or educational technology startups in Cameroon.'
        : targetStream === 'technical'
        ? 'Direct opportunity to establish a licensed solar installation firm, electrical maintenance agency, or civil works subcontracting enterprise.'
        : 'Opportunity to open an OHADA tax consulting and SME accounting bureau serving local Cameroonian enterprises.';

      const nextSteps = [
        'Secure high grades (minimum B grade / Mention Bien) in your core coefficient subjects.',
        'Obtain past examination and Concours question papers for your target faculties early.',
        'Schedule a 1-on-1 session with a certified guidance counsellor in the Mentorship tab.'
      ];

      setResult({
        recommendedStream: targetStream,
        streamRationale,
        recommendedSubjects,
        matchedCareers: matches,
        targetConcoursAndInstitutions: targetConcours,
        entrepreneurshipAngle,
        nextSteps
      });
      setIsGenerating(false);
    }, 700);
  };

  const handleReset = () => {
    setResult(null);
    setCareerAspirations('');
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI-Powered Academic & Career Guidance System</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          {currentLang === 'en' 
            ? 'Personalized AI Guidance Advisor for Cameroon' 
            : 'Conseiller d\'Orientation IA Personnalisé pour le Cameroun'}
        </h1>

        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Our system analyses your current education level, favorite subjects, and future career ambitions to recommend tailored subject combinations, Cameroon university concours, and labor market opportunities.'
            : 'Notre système analyse votre niveau d\'études, vos matières de prédilection et vos ambitions pour vous recommander des séries adaptées, des concours universitaires et des débouchés porteurs.'}
        </p>
      </div>

      {!result ? (
        /* Input Form */
        <form onSubmit={handleGenerateRecommendation} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold text-slate-900">
              {currentLang === 'en' ? 'Step 1: Your Current Academic Profile' : 'Étape 1 : Votre Profil Scolaire Actuel'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {currentLang === 'en' ? 'Provide your education stage so we can calibrate requirements.' : 'Renseignez votre niveau pour des recommandations calibrées.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                {currentLang === 'en' ? 'Current Education Level:' : 'Niveau d\'Études Actuel :'}
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
              >
                <option value="form1-3">Form 1 - Form 3 / 6ème - 4ème (Lower Secondary Orientation)</option>
                <option value="form4-5">Form 4 - Form 5 / 3ème - Seconde (GCE O-Level / BEPC Prep)</option>
                <option value="sixth-form">Lower/Upper Sixth / 1ère - Terminale (GCE A-Level / Baccalauréat)</option>
                <option value="school-leaver">School Leaver / Young Adult (Vocational / Higher Education Transition)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                {currentLang === 'en' ? 'Enrolled or Intended Academic Stream:' : 'Filière d\'Enseignement Souhaitée :'}
              </label>
              <select
                value={currentStream}
                onChange={(e) => setCurrentStream(e.target.value as EducationStream)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
              >
                <option value="grammar">Grammar Education (General Arts & Sciences)</option>
                <option value="technical">Technical & Industrial (F1 Mechanical, F2 Electronics, F3 Electrical, F4 Civil)</option>
                <option value="commercial">Commercial & Business (G1 Secretarial, G2 Accounting, G3 Marketing)</option>
                <option value="vocational">Vocational & Digital Skills (DQP/CQP Fast-Track)</option>
              </select>
            </div>
          </div>

          {/* Subject Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 block">
              {currentLang === 'en' ? 'Select 2 to 5 Subjects You Enjoy or Excel in:' : 'Sélectionnez 2 à 5 matières que vous appréciez :'}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {availableSubjects.map((subj) => {
                const isSelected = selectedSubjects.includes(subj);
                return (
                  <button
                    type="button"
                    key={subj}
                    onClick={() => handleToggleSubject(subj)}
                    className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {subj}
                  </button>
                );
              })}
            </div>
            <span className="text-[11px] text-slate-400 block">
              {selectedSubjects.length} {currentLang === 'en' ? 'subjects selected' : 'matières sélectionnées'}
            </span>
          </div>

          {/* Ambitions */}
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              {currentLang === 'en' 
                ? 'What are your career dreams, passions, or problems you want to solve?' 
                : 'Quelles sont vos ambitions professionnelles ou les défis que vous voulez relever ?'}
            </label>
            <textarea
              rows={3}
              value={careerAspirations}
              onChange={(e) => setCareerAspirations(e.target.value)}
              placeholder={currentLang === 'en'
                ? 'e.g. I want to build mobile apps for Cameroon business, install solar power in rural towns, or become a cardiothoracic surgeon...'
                : 'ex: Je souhaite concevoir des applications web pour les PME, installer des centrales solaires dans les régions rurales ou devenir médecin...'}
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={isGenerating || selectedSubjects.length === 0}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>{currentLang === 'en' ? 'Analyzing Pathways...' : 'Analyse en cours...'}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{currentLang === 'en' ? 'Generate AI Guidance Plan' : 'Générer Mon Bilan Personnalisé'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        /* Results View */
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                {currentLang === 'en' ? 'Personalized Guidance Report' : 'Bilan d\'Orientation Personnalisé'}
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 mt-0.5">
                {currentLang === 'en' ? 'Your Tailored Academic & Career Blueprint' : 'Votre Feuille de Route Académique & Professionnelle'}
              </h2>
            </div>

            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? 'Re-analyze' : 'Nouvelle Analyse'}</span>
            </button>
          </div>

          {/* Rationale Card */}
          <div className="p-4 sm:p-5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
              <Lightbulb className="w-4 h-4 text-emerald-700" />
              <span>{currentLang === 'en' ? 'Recommended Stream Alignment' : 'Alignement Recommandé'}</span>
            </div>
            <p className="text-xs text-emerald-900 leading-relaxed">
              {result.streamRationale}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Subject Combinations */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <h3>{currentLang === 'en' ? 'Required Subject Combinations' : 'Matières Clés à Maximiser'}</h3>
              </div>
              <p className="text-xs text-slate-500">
                Prioritize these coefficient subjects for GCE O/A Levels or Probatoire/Baccalauréat:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {result.recommendedSubjects.map((subj, idx) => (
                  <span key={idx} className="bg-white border border-slate-200 text-slate-800 px-2.5 py-1 rounded text-xs font-medium">
                    {subj}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Concours and Institutions */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <h3>{currentLang === 'en' ? 'Cameroon Higher Ed Concours to Target' : 'Concours Nationaux à Préparer'}</h3>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5">
                {result.targetConcoursAndInstitutions.map((conc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{conc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Matched Careers */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
              {currentLang === 'en' ? 'Top Matched Labor Market Careers' : 'Métiers Recommandés'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {result.matchedCareers.map((c) => (
                <div key={c.id} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {c.sector}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 mt-2">
                      {currentLang === 'en' ? c.titleEn : c.titleFr}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {currentLang === 'en' ? c.descriptionEn : c.descriptionFr}
                    </p>
                    <div className="text-xs text-slate-700 font-semibold mt-2">
                      {c.salaryRangeXAF}
                    </div>
                  </div>

                  <button
                    onClick={() => onExploreCareer(c.id)}
                    className="mt-3 text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{currentLang === 'en' ? 'View Details' : 'Voir Fiche'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Entrepreneurship Angle */}
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>{currentLang === 'en' ? 'Entrepreneurship & Self-Reliance Path:' : 'Potentiel Entrepreneurial :'}</span>
            </div>
            <p className="text-xs text-slate-800">
              {result.entrepreneurshipAngle}
            </p>
          </div>

          {/* Next Steps */}
          <div className="space-y-2 border-t border-slate-100 pt-4">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              {currentLang === 'en' ? 'Recommended Action Steps:' : 'Prochaines Actions Immédiates :'}
            </span>
            <ul className="text-xs text-slate-600 space-y-1">
              {result.nextSteps.map((step, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
