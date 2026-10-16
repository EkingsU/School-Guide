import React, { useState } from 'react';
import { 
  Search, 
  Briefcase, 
  GraduationCap, 
  Banknote, 
  Building2, 
  Check, 
  X,
  ChevronRight
} from 'lucide-react';
import { CareerItem, EducationStream, Language } from '../types';
import { CAREER_PROFILES } from '../data/cameroonData';

interface CareerDirectoryProps {
  currentLang: Language;
  selectedCareerId?: string;
  onClearSelectedCareer?: () => void;
}

export const CareerDirectory: React.FC<CareerDirectoryProps> = ({
  currentLang,
  selectedCareerId
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStreamFilter, setSelectedStreamFilter] = useState<string>('all');
  const [activeModalCareer, setActiveModalCareer] = useState<CareerItem | null>(() => {
    if (selectedCareerId) {
      return CAREER_PROFILES.find(c => c.id === selectedCareerId) || null;
    }
    return null;
  });

  const streamsList: { id: string; labelEn: string; labelFr: string }[] = [
    { id: 'all', labelEn: 'All Streams', labelFr: 'Toutes Filières' },
    { id: 'grammar', labelEn: 'Grammar (Arts & Sciences)', labelFr: 'Général (Lettres & Sciences)' },
    { id: 'technical', labelEn: 'Technical & Industrial', labelFr: 'Technique & Industriel' },
    { id: 'commercial', labelEn: 'Commercial & Business', labelFr: 'Commercial & Gestion' },
    { id: 'vocational', labelEn: 'Vocational / TVET', labelFr: 'Formation Professionnelle' },
  ];

  const filteredCareers = CAREER_PROFILES.filter((career) => {
    const matchesSearch = 
      career.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.titleFr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.descriptionFr.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStream = 
      selectedStreamFilter === 'all' || 
      career.requiredStream.includes(selectedStreamFilter as EducationStream);

    return matchesSearch && matchesStream;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
            {currentLang === 'en' ? 'Cameroon Labor Market & Career Encyclopedia' : 'Répertoire des Métiers & Débouchés au Cameroun'}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            {filteredCareers.length} {currentLang === 'en' ? 'Careers Catalogued' : 'Métiers Référencés'}
          </span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          {currentLang === 'en' ? 'Explore Careers & Required High-School Subjects' : 'Explorez les Métiers & Séries Requises'}
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          {currentLang === 'en'
            ? 'Discover real-world salaries in XAF, national entrance examination requirements (Concours), and verified Cameroon universities for each profession.'
            : 'Consultez les salaires réels en FCFA, les concours nationaux d\'entrée et les universités camerounaises correspondantes.'}
        </p>

        {/* Search & Stream Filter Controls */}
        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'en' ? 'Search by career, sector, or keyword (e.g. Software, Accounting, Medicine)...' : 'Rechercher par métier, secteur ou mot-clé (ex: Logiciel, Comptabilité, Médecine)...'}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all text-slate-900"
            />
          </div>

          {/* Stream Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/80">
            {streamsList.map((stream) => (
              <button
                key={stream.id}
                onClick={() => setSelectedStreamFilter(stream.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedStreamFilter === stream.id
                    ? 'bg-white text-slate-900 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {currentLang === 'en' ? stream.labelEn : stream.labelFr}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Careers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCareers.map((career) => (
          <div
            key={career.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs text-slate-500 font-medium">
                  {career.sector}
                </span>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                  career.demandLevel === 'Very High' 
                    ? 'bg-emerald-50 text-emerald-700' 
                    : 'bg-amber-50 text-amber-700'
                }`}>
                  {career.demandLevel} Demand
                </span>
              </div>

              <h2 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {currentLang === 'en' ? career.titleEn : career.titleFr}
              </h2>

              <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                {currentLang === 'en' ? career.descriptionEn : career.descriptionFr}
              </p>

              {/* Salary & Stream info */}
              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Banknote className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold">{career.salaryRangeXAF}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="capitalize">{career.requiredStream.join(', ')} track</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveModalCareer(career)}
              className="mt-5 w-full py-2 bg-slate-50 group-hover:bg-emerald-600 group-hover:text-white text-slate-700 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{currentLang === 'en' ? 'View Complete Profile' : 'Consulter la Fiche Métier'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {filteredCareers.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3">
          <Briefcase className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="font-bold text-slate-800">
            {currentLang === 'en' ? 'No careers matched your search' : 'Aucun métier ne correspond à votre recherche'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {currentLang === 'en' ? 'Try adjusting your search terms or clearing the stream filter.' : 'Essayez d\'ajuster vos termes de recherche ou de réinitialiser le filtre.'}
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedStreamFilter('all'); }}
            className="text-xs font-semibold text-emerald-600 hover:text-emerald-700"
          >
            {currentLang === 'en' ? 'Clear filters' : 'Réinitialiser les filtres'}
          </button>
        </div>
      )}

      {/* Detailed Modal for Active Career */}
      {activeModalCareer && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative space-y-6">
            <button
              onClick={() => setActiveModalCareer(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <span>{activeModalCareer.sector}</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-emerald-700">{activeModalCareer.salaryRangeXAF}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {currentLang === 'en' ? activeModalCareer.titleEn : activeModalCareer.titleFr}
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {currentLang === 'en' ? activeModalCareer.descriptionEn : activeModalCareer.descriptionFr}
              </p>
            </div>

            {/* High School Preparation */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                {currentLang === 'en' ? 'Required High School Subjects (GCE A-Level / Baccalauréat)' : 'Matières Requises au Secondaire (GCE / Baccalauréat)'}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {(currentLang === 'en' ? activeModalCareer.recommendedSubjectsEn : activeModalCareer.recommendedSubjectsFr).map((sub, sIdx) => (
                  <span key={sIdx} className="text-xs bg-white text-slate-800 border border-slate-200 px-2.5 py-1 rounded font-medium">
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Entry Concours */}
            {activeModalCareer.concoursRequired && (
              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  {currentLang === 'en' ? 'Official National Concours Requirement:' : 'Concours National Requis :'}
                </span>
                <p className="text-xs font-semibold text-slate-900">
                  {activeModalCareer.concoursRequired}
                </p>
              </div>
            )}

            {/* Daily Responsibilities */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                {currentLang === 'en' ? 'Key On-The-Job Responsibilities in Cameroon:' : 'Missions Professionnelles Concrètes :'}
              </h4>
              <ul className="text-xs text-slate-600 space-y-1.5">
                {(currentLang === 'en' ? activeModalCareer.dailyTasksEn : activeModalCareer.dailyTasksFr).map((task, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Local Cameroon Institutions */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center gap-1.5 text-slate-800 text-xs font-bold">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>{currentLang === 'en' ? 'Accredited Cameroon Training Institutions:' : 'Établissements de Formation Agréés :'}</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {activeModalCareer.localInstitutions.map((inst, iIdx) => (
                  <span key={iIdx} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-medium">
                    {inst}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalCareer(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                {currentLang === 'en' ? 'Close Profile' : 'Fermer la Fiche'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
