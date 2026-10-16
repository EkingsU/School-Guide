import React, { useState } from 'react';
import { 
  User, 
  BookOpen, 
  Calculator, 
  GraduationCap, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp,
  Award,
  Users
} from 'lucide-react';
import { Language, UserRole } from '../types';
import { 
  CareerExplorationProgressBar, 
  ExplorationJourneyState 
} from './CareerExplorationProgressBar';

interface RoleDashboardProps {
  currentRole: UserRole;
  currentLang: Language;
  onTakeAssessment: () => void;
  onViewPathways: () => void;
  explorationProgress: ExplorationJourneyState;
  onToggleExplorationStep: (stepKey: keyof ExplorationJourneyState) => void;
  onNavigateToStep: (stepKey: keyof ExplorationJourneyState) => void;
}

export const RoleDashboard: React.FC<RoleDashboardProps> = ({
  currentRole,
  currentLang,
  onTakeAssessment,
  onViewPathways,
  explorationProgress,
  onToggleExplorationStep,
  onNavigateToStep
}) => {
  // Parent cost calculator state
  const [institutionType, setInstitutionType] = useState<'state-uni' | 'grande-ecole' | 'private-uni'>('state-uni');
  const [cityLiving, setCityLiving] = useState<'home' | 'away'>('away');

  const getTuition = () => {
    switch (institutionType) {
      case 'state-uni': return 50000; // 50,000 XAF annual state tuition in Cameroon
      case 'grande-ecole': return 50000; // Plus approx 150,000 lab/equipment fees
      case 'private-uni': return 650000; // Average private university tuition
    }
  };

  const getLivingCost = () => {
    return cityLiving === 'home' ? 60000 : 360000; // Rent (approx 30k/mo in Yaoundé/Buea) + food
  };

  const totalCost = getTuition() + getLivingCost();

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
            {currentRole === 'student' ? <GraduationCap className="w-5 h-5" /> :
             currentRole === 'parent' ? <User className="w-5 h-5" /> : <Users className="w-5 h-5" />}
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
              {currentLang === 'en' ? 'Personalized Dashboard' : 'Tableau de Bord Personnalisé'}
            </span>
            <h2 className="text-lg font-bold text-slate-900">
              {currentRole === 'student' && (currentLang === 'en' ? 'Student Academic Space' : 'Espace Élève')}
              {currentRole === 'parent' && (currentLang === 'en' ? 'Parent Higher Education Planning Space' : 'Espace Parents & Planification')}
              {currentRole === 'counsellor' && (currentLang === 'en' ? 'Guidance Counsellor Cohort Portal' : 'Espace Conseillers d\'Orientation')}
            </h2>
          </div>
        </div>

        <span className="text-xs text-slate-500 font-medium hidden sm:inline">
          {currentLang === 'en' ? 'Cameroon Academic Year 2026/2027' : 'Année Académique 2026/2027'}
        </span>
      </div>

      {/* Student View */}
      {currentRole === 'student' && (
        <div className="space-y-6">
          {/* Career Path Exploration Progress Bar & 5-Step Journey Component */}
          <CareerExplorationProgressBar
            currentLang={currentLang}
            progress={explorationProgress}
            onToggleStep={onToggleExplorationStep}
            onNavigateToStep={onNavigateToStep}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>{currentLang === 'en' ? 'Orientation Checklist' : 'Checklist d\'Orientation'}</span>
              </div>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Choose series (Science, Arts, F-Series, G-Series) before Form 4 / Seconde</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Verify prerequisite GCE O-Level / BEPC grades</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Identify 2 target Cameroon Grande Écoles Concours</span>
              </li>
            </ul>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>{currentLang === 'en' ? 'Quick Actions' : 'Actions Rapides'}</span>
            </div>
            <p className="text-xs text-slate-500">
              {currentLang === 'en' ? 'Unsure of your strengths? Complete the 5-minute RIASEC Holland assessment.' : 'Incertain de vos points forts ? Faites le test RIASEC en 5 minutes.'}
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={onTakeAssessment}
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                {currentLang === 'en' ? 'Launch Career Quiz' : 'Lancer le Test'}
              </button>
              <button
                onClick={onViewPathways}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold cursor-pointer"
              >
                {currentLang === 'en' ? 'Browse High School Series' : 'Explorer les Séries'}
              </button>
            </div>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>{currentLang === 'en' ? 'Key Official Dates' : 'Dates Clés Examens'}</span>
            </div>
            <div className="text-xs text-slate-600 space-y-2">
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <strong>GCE O & A Levels:</strong> May – June
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <strong>Baccalauréat Général & Tech:</strong> June
              </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-100">
                  <strong>National Concours (ENSPY, FHS, ESSEC):</strong> July – August
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Parent View: Higher Ed Budget Planner */}
      {currentRole === 'parent' && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <Calculator className="w-5 h-5 text-emerald-600" />
            <span>{currentLang === 'en' ? 'Cameroon Higher Education Cost Estimator (XAF)' : 'Simulateur de Budget Universitaire au Cameroun (FCFA)'}</span>
          </div>

          <p className="text-xs text-slate-600 max-w-2xl">
            {currentLang === 'en'
              ? 'Estimate annual education and accommodation expenses to plan early for your child\'s post-secondary studies.'
              : 'Estimez les frais de scolarité annuels et d\'hébergement pour anticiper les études supérieures de votre enfant.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                {currentLang === 'en' ? 'Target Institution Type:' : 'Type d\'Établissement Cible :'}
              </label>
              <select
                value={institutionType}
                onChange={(e) => setInstitutionType(e.target.value as any)}
                className="w-full p-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900"
              >
                <option value="state-uni">State University (Univ. of Yaoundé I, Buea, Douala - 50,000 XAF statutory)</option>
                <option value="grande-ecole">Grande École (ENSPY, FMSB, FHS, ESSEC - 50,000 XAF + Lab fees)</option>
                <option value="private-uni">Private University / UCAC / ISTAG (~650,000 XAF)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                {currentLang === 'en' ? 'Accommodation & Living:' : 'Logement & Vie Étudiante :'}
              </label>
              <select
                value={cityLiving}
                onChange={(e) => setCityLiving(e.target.value as any)}
                className="w-full p-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900"
              >
                <option value="home">Living at Home (Commuting locally - ~60,000 XAF/yr transport)</option>
                <option value="away">Rented Student Mini-cite (Buea, Yaoundé, Bandjoun - ~360,000 XAF/yr)</option>
              </select>
            </div>
          </div>

          <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-900 block">
                {currentLang === 'en' ? 'Estimated Total Annual Budget:' : 'Budget Annuel Estimé :'}
              </span>
              <span className="text-xs text-emerald-700">
                Tuition: {getTuition().toLocaleString()} XAF · Living: {getLivingCost().toLocaleString()} XAF
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-900">
              {totalCost.toLocaleString()} XAF/year
            </div>
          </div>
        </div>
      )}

      {/* Counsellor View */}
      {currentRole === 'counsellor' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">National Trends</span>
            <h3 className="font-bold text-slate-900 text-sm">Top In-Demand Streams in Cameroon</h3>
            <p className="text-xs text-slate-600">
              Software Engineering, Electrical/Solar Maintenance, and Civil Construction are showing 35% higher student interest than traditional General Arts series.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Counsellor Toolkit</span>
            <h3 className="font-bold text-slate-900 text-sm">MINESEC Guidance Circulars</h3>
            <p className="text-xs text-slate-600">
              Official circular on subject series orientation before Form 4 and Seconde (General vs Technical streaming).
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Mentorship Sessions</span>
            <h3 className="font-bold text-slate-900 text-sm">Active School Partnerships</h3>
            <p className="text-xs text-slate-600">
              Coordinating career day workshops with Lycée Bilingue Yaoundé, BGS Molyko Buea, and Collège Vogt.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
