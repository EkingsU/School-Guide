import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ExternalLink, 
  GraduationCap, 
  Search,
  BookMarked
} from 'lucide-react';
import { Language } from '../types';
import { CAMEROON_INSTITUTIONS } from '../data/cameroonData';

interface InstitutionsDirectoryProps {
  currentLang: Language;
}

export const InstitutionsDirectory: React.FC<InstitutionsDirectoryProps> = ({
  currentLang
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const regions = [
    { id: 'all', label: currentLang === 'en' ? 'All Regions' : 'Toutes Régions' },
    { id: 'Centre', label: 'Centre (Yaoundé)' },
    { id: 'Littoral', label: 'Littoral (Douala)' },
    { id: 'South West', label: 'South West (Buea)' },
    { id: 'North West', label: 'North West (Bamenda)' },
    { id: 'West', label: 'West (Dschang)' }
  ];

  const filteredInstitutions = CAMEROON_INSTITUTIONS.filter(inst => {
    const matchesSearch = 
      inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.popularFaculties.some(f => 
        f.facultyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.degrees.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()))
      );

    const matchesRegion = selectedRegion === 'all' || inst.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
            {currentLang === 'en' ? 'Verified Higher Education Institutions' : 'Établissements d\'Enseignement Supérieur Reconnus'}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            {filteredInstitutions.length} {currentLang === 'en' ? 'Campuses Listed' : 'Campus Répertoriés'}
          </span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          {currentLang === 'en' ? 'Cameroon Universities & Grande Écoles Directory' : 'Répertoire des Universités d\'État & Grandes Écoles'}
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          {currentLang === 'en'
            ? 'Explore state universities, admission criteria (Concours vs Study of Dossier), faculties, and degree programs.'
            : 'Consultez les universités d\'État, les critères d\'admission (Concours vs Étude de Dossier) et les filières agréées.'}
        </p>

        {/* Filter & Search */}
        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'en' ? 'Search university, city, or faculty name (e.g. ENSPY, Buea, Medicine)...' : 'Rechercher une université, ville ou faculté (ex: ENSPY, Buea, Médecine)...'}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-slate-900"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/80">
            {regions.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setSelectedRegion(reg.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedRegion === reg.id
                    ? 'bg-white text-slate-900 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Institutions Cards */}
      <div className="space-y-6">
        {filteredInstitutions.map((inst) => (
          <div
            key={inst.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all space-y-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span className="font-semibold text-slate-700">{inst.type}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{inst.city}, {inst.region} Region</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Est. {inst.establishedYear}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  {inst.name}
                </h2>
              </div>

              {inst.contactInfo.website && (
                <a
                  href={inst.contactInfo.website}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>{currentLang === 'en' ? 'Official Portal' : 'Portail Officiel'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}
            </div>

            {/* Popular Faculties & Grande Écoles */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>{currentLang === 'en' ? 'Prominent Faculties & Specialized Schools' : 'Facultés Clés & Écoles Spécialisées'}</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {inst.popularFaculties.map((fac, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2 hover:bg-white hover:border-emerald-300 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="font-bold text-sm text-slate-900">
                        {fac.facultyName}
                      </h5>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded shrink-0 ${
                        fac.admissions.includes('Concours')
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {fac.admissions}
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 space-y-1">
                      <span className="font-medium text-slate-700 block">
                        {currentLang === 'en' ? 'Flagship Degrees:' : 'Diplômes Clés :'}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {fac.degrees.map((deg, dIdx) => (
                          <span
                            key={dIdx}
                            className="bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded text-[11px]"
                          >
                            {deg}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {filteredInstitutions.length === 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3">
            <Building2 className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-bold text-slate-800">
              {currentLang === 'en' ? 'No institutions matched your filter' : 'Aucun établissement trouvé'}
            </h3>
            <button
              onClick={() => { setSearchQuery(''); setSelectedRegion('all'); }}
              className="text-xs font-semibold text-emerald-600 hover:text-emerald-700"
            >
              {currentLang === 'en' ? 'Reset search' : 'Réinitialiser la recherche'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
