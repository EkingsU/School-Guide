import React, { useState } from 'react';
import { 
  BookOpen, 
  Wrench, 
  BarChart3, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Building,
  GraduationCap
} from 'lucide-react';
import { EducationStream, Language } from '../types';
import { EDUCATION_TRACKS } from '../data/cameroonData';

interface TrackExplorerProps {
  currentLang: Language;
  onSelectCareer: (careerId: string) => void;
  onStartAssessment: () => void;
}

export const TrackExplorer: React.FC<TrackExplorerProps> = ({
  currentLang,
  onStartAssessment
}) => {
  const [selectedStream, setSelectedStream] = useState<EducationStream>('grammar');

  const streamIcons = {
    grammar: BookOpen,
    technical: Wrench,
    commercial: BarChart3,
    vocational: Sparkles
  };

  const activeTrack = EDUCATION_TRACKS.find(t => t.id === selectedStream) || EDUCATION_TRACKS[0];

  return (
    <div className="space-y-8">
      {/* Hero Introduction */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-3 py-1 rounded-full">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>
              {currentLang === 'en' ? 'Cameroon Secondary & Higher Education Pathways' : 'Filières d\'Enseignement Secondaire et Supérieur au Cameroun'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {currentLang === 'en' 
              ? 'Find the Right Academic Stream for Your Goals' 
              : 'Choisissez la Bonne Série Selon Vos Ambitions'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {currentLang === 'en'
              ? 'Whether in the Anglophone system (GCE Ordinary & Advanced Levels) or Francophone system (BEPC, Probatoire, Baccalauréat), explore core subjects, examination series, and post-secondary opportunities.'
              : 'Que vous soyez dans le sous-système anglophone (GCE O/A Levels) ou francophone (BEPC, Probatoire, Baccalauréat), découvrez les matières clés, les séries et les débouchés professionnels.'}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onStartAssessment}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold text-sm transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <span>{currentLang === 'en' ? 'Take Career Aptitude Quiz' : 'Passer le Test d\'Aptitude'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Track Selector Tabs */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">
            {currentLang === 'en' ? 'Select an Educational Stream' : 'Sélectionnez une Filière d\'Enseignement'}
          </h2>
          <span className="text-xs text-slate-500">
            {currentLang === 'en' ? '4 National Pathways Available' : '4 Parcours Nationaux Disponibles'}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {EDUCATION_TRACKS.map((track) => {
            const Icon = streamIcons[track.id];
            const isSelected = selectedStream === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedStream(track.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                  isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 leading-snug">
                  {currentLang === 'en' ? track.titleEn : track.titleFr}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {currentLang === 'en' ? track.taglineEn : track.taglineFr}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Stream Deep Dive */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-slate-900">
              {currentLang === 'en' ? activeTrack.titleEn : activeTrack.titleFr}
            </h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
              {currentLang === 'en' ? activeTrack.taglineEn : activeTrack.taglineFr}
            </span>
          </div>
          <p className="text-sm text-slate-600">
            {currentLang === 'en' ? activeTrack.descriptionEn : activeTrack.descriptionFr}
          </p>
        </div>

        {/* Sub-Tracks & Examination Series */}
        <div className="space-y-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">
            {currentLang === 'en' ? 'Sub-Tracks, Certificates & Core Subjects' : 'Séries, Diplômes & Matières Clés'}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeTrack.subTracks.map((sub, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-4 hover:border-slate-300 transition-colors"
              >
                <div>
                  <h5 className="font-bold text-base text-slate-900">
                    {currentLang === 'en' ? sub.nameEn : sub.nameFr}
                  </h5>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <span>{sub.subSystem} Sub-system</span>
                    <span aria-hidden="true">·</span>
                    <span>{sub.certificates.length} Official Exams</span>
                  </div>
                </div>

                {/* Certificates */}
                <div>
                  <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                    {currentLang === 'en' ? 'Official Examination Diplomas:' : 'Examens & Diplômes Officiels :'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sub.certificates.map((cert, cIdx) => (
                      <span 
                        key={cIdx}
                        className="text-xs bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Subjects */}
                <div>
                  <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                    {currentLang === 'en' ? 'Core Subjects Tested:' : 'Matières Principales :'}
                  </span>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {sub.coreSubjects.map((subj, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{subj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career Outcomes */}
                <div className="border-t border-slate-200 pt-3">
                  <span className="text-xs font-semibold text-slate-700 block mb-1">
                    {currentLang === 'en' ? 'Direct Career Destinations:' : 'Débouchés Professionnels :'}:
                  </span>
                  <div className="text-xs text-emerald-800 font-medium flex flex-wrap gap-x-2 gap-y-1">
                    {sub.typicalCareerOutcomes.map((career, crIdx) => (
                      <span key={crIdx}>
                        {career}{crIdx < sub.typicalCareerOutcomes.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feeder Higher Ed Institutions */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Building className="w-4 h-4 text-emerald-600" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              {currentLang === 'en' ? 'Key Cameroon Higher Education Institutions & Grande Écoles' : 'Principales Universités et Grandes Écoles Associées au Cameroun'}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeTrack.keyInstitutions.map((inst, iIdx) => (
              <span
                key={iIdx}
                className="text-xs bg-white text-slate-800 border border-slate-200 px-3 py-1 rounded-md font-medium shadow-xs"
              >
                {inst}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
