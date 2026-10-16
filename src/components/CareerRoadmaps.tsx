import React, { useState } from 'react';
import { 
  GitFork, 
  BookOpen, 
  FileText, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  ExternalLink, 
  Lightbulb,
  Search,
  Zap,
  Briefcase
} from 'lucide-react';
import { Language } from '../types';
import { 
  CAREER_ROADMAPS, 
  LEARNING_RESOURCES, 
  DISCIPLINES_EXPLAINED,
  CAREER_PROFILES
} from '../data/cameroonData';

interface CareerRoadmapsProps {
  currentLang: Language;
  onExploreCareer: (careerId: string) => void;
  onOpenAiAdvisor: () => void;
}

export const CareerRoadmaps: React.FC<CareerRoadmapsProps> = ({
  currentLang,
  onExploreCareer,
  onOpenAiAdvisor
}) => {
  const [subTab, setSubTab] = useState<'roadmaps' | 'disciplines' | 'resources' | 'labormarket'>('roadmaps');
  const [subjectSearch, setSubjectSearch] = useState('');
  const [activeRoadmapId, setActiveRoadmapId] = useState(CAREER_ROADMAPS[0].id);

  const activeRoadmap = CAREER_ROADMAPS.find(r => r.id === activeRoadmapId) || CAREER_ROADMAPS[0];

  const filteredDisciplines = DISCIPLINES_EXPLAINED.filter(s => 
    s.nameEn.toLowerCase().includes(subjectSearch.toLowerCase()) ||
    s.nameFr.toLowerCase().includes(subjectSearch.toLowerCase()) ||
    s.category.toLowerCase().includes(subjectSearch.toLowerCase()) ||
    s.descriptionEn.toLowerCase().includes(subjectSearch.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
            {currentLang === 'en' ? 'Structured Pathways & Educational Resources' : 'Feuilles de Route & Ressources Pédagogiques'}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            {currentLang === 'en' ? 'National Education Matrix' : 'Matrice Nationale d\'Orientation'}
          </span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          {currentLang === 'en' 
            ? 'Career Roadmaps, Subject Guides & Labor Market Data' 
            : 'Feuilles de Route Métiers, Guide des Matières & Marché de l\'Emploi'}
        </h1>

        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Understand which subjects open specific university doors, explore progressive roadmaps from secondary school to employment, and analyze high-demand careers in Cameroon.'
            : 'Comprenez l\'utilité de chaque matière, découvrez les parcours types du secondaire jusqu\'à l\'emploi et identifiez les secteurs porteurs au Cameroun.'}
        </p>

        {/* Sub-tab navigation */}
        <div className="pt-4 flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
          {[
            { id: 'roadmaps', label: currentLang === 'en' ? '1. Career Roadmaps' : '1. Feuilles de Route', icon: GitFork },
            { id: 'disciplines', label: currentLang === 'en' ? '2. Subjects & Disciplines Explained' : '2. Matières & Débouchés', icon: BookOpen },
            { id: 'resources', label: currentLang === 'en' ? '3. Learning Resources & Guides' : '3. Guides & Circulaires', icon: FileText },
            { id: 'labormarket', label: currentLang === 'en' ? '4. Emerging Careers & Labor Market' : '4. Métiers Porteurs & Marché', icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = subTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SUB-TAB 1: Career Roadmaps */}
      {subTab === 'roadmaps' && (
        <div className="space-y-6">
          {/* Roadmap Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CAREER_ROADMAPS.map((roadmap) => (
              <button
                key={roadmap.id}
                onClick={() => setActiveRoadmapId(roadmap.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  activeRoadmapId === roadmap.id
                    ? 'bg-emerald-50/70 border-emerald-500 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  {roadmap.stream.toUpperCase()} STREAM
                </div>
                <h3 className="font-bold text-sm text-slate-900 mt-1">
                  {currentLang === 'en' ? roadmap.careerTitleEn : roadmap.careerTitleFr}
                </h3>
              </button>
            ))}
          </div>

          {/* Active Roadmap Timeline */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  {currentLang === 'en' ? 'Step-by-Step Trajectory' : 'Trajectoire Progressive'}
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  {currentLang === 'en' ? activeRoadmap.careerTitleEn : activeRoadmap.careerTitleFr}
                </h2>
              </div>

              <button
                onClick={onOpenAiAdvisor}
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{currentLang === 'en' ? 'Get AI Customized Version' : 'Personnaliser avec l\'IA'}</span>
              </button>
            </div>

            {/* Stages Timeline */}
            <div className="space-y-6">
              {activeRoadmap.stages.map((st, idx) => (
                <div key={idx} className="relative pl-8 pb-4 border-l-2 border-emerald-500 last:border-l-0 last:pb-0">
                  <div className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-2xs"></div>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {st.timeline}
                      </span>
                      <h3 className="font-bold text-sm text-slate-900">
                        {currentLang === 'en' ? st.stageNameEn : st.stageNameFr}
                      </h3>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2">
                      <ul className="text-xs text-slate-600 space-y-1.5">
                        {(currentLang === 'en' ? st.milestonesEn : st.milestonesFr).map((m, mIdx) => (
                          <li key={mIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Entrepreneurship Note */}
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900">
                {currentLang === 'en' ? 'Entrepreneurship & Independent Creation Angle:' : 'Angle Entrepreneuriat & Auto-emploi :'}
              </span>
              <p className="text-xs text-slate-800">
                {currentLang === 'en' ? activeRoadmap.entrepreneurshipPathEn : activeRoadmap.entrepreneurshipPathFr}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: Disciplines & Subjects Explained */}
      {subTab === 'disciplines' && (
        <div className="space-y-6">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={subjectSearch}
              onChange={(e) => setSubjectSearch(e.target.value)}
              placeholder={currentLang === 'en' ? 'Search subjects (e.g. Mathematics, Electricity, Accounting, Literature)...' : 'Rechercher une matière (ex: Mathématiques, Électricité, Comptabilité)...'}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-slate-900 shadow-2xs"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDisciplines.map((subj) => (
              <div 
                key={subj.id}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {subj.category} · {subj.level} Level
                    </span>
                    <span className="text-[11px] text-slate-400 capitalize">
                      {subj.targetStreams.join(', ')} stream
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900">
                    {currentLang === 'en' ? subj.nameEn : subj.nameFr}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {currentLang === 'en' ? subj.descriptionEn : subj.descriptionFr}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 bg-slate-50/80 -mx-5 -mb-5 p-4 rounded-b-xl space-y-1">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                    {currentLang === 'en' ? 'Why It Matters for Your Career & Concours:' : 'Importance pour Vos Concours & Carrière :'}
                  </span>
                  <p className="text-xs text-emerald-900 font-medium">
                    {currentLang === 'en' ? subj.careerRelevanceEn : subj.careerRelevanceFr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: Learning Resources & Guides */}
      {subTab === 'resources' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {LEARNING_RESOURCES.map((res) => (
            <div
              key={res.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                    {res.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {res.format}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {currentLang === 'en' ? res.titleEn : res.titleFr}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentLang === 'en' ? res.descriptionEn : res.descriptionFr}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  {res.targetAudience}
                </span>

                <button
                  onClick={() => alert(`Reading official guide: ${res.titleEn}`)}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{currentLang === 'en' ? 'Read Guide' : 'Lire le Guide'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SUB-TAB 4: Emerging Careers & Labor Market In-Demand */}
      {subTab === 'labormarket' && (
        <div className="space-y-6">
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-3 border border-slate-800">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Cameroon Labor Market & Emerging Opportunities
            </span>
            <h2 className="text-xl sm:text-2xl font-bold">
              High-Demand Professions Aligned with National Industrial Strategy
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Cameroon's National Development Strategy (SND30) highlights urgent talent requirements in digital technologies, renewable energy mini-grids, agropastoral value-addition, and modern financial accounting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CAREER_PROFILES.map((career) => (
              <div 
                key={career.id}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">
                      {career.sector}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {career.demandLevel} Demand
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900">
                    {currentLang === 'en' ? career.titleEn : career.titleFr}
                  </h3>

                  <p className="text-xs text-slate-600 mt-1 line-clamp-3">
                    {currentLang === 'en' ? career.descriptionEn : career.descriptionFr}
                  </p>

                  <div className="text-xs text-emerald-800 font-bold mt-2">
                    {career.salaryRangeXAF}
                  </div>
                </div>

                <button
                  onClick={() => onExploreCareer(career.id)}
                  className="w-full py-1.5 bg-slate-50 hover:bg-emerald-600 hover:text-white text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <span>{currentLang === 'en' ? 'View Required Skills' : 'Compétences Requises'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
