import React, { useState } from 'react';
import { 
  Award, 
  Calendar, 
  ExternalLink, 
  CheckCircle, 
  Gift, 
  Users,
  Search
} from 'lucide-react';
import { Language } from '../types';
import { OPPORTUNITIES } from '../data/cameroonData';

interface OpportunitiesHubProps {
  currentLang: Language;
}

export const OpportunitiesHub: React.FC<OpportunitiesHubProps> = ({
  currentLang
}) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const types = [
    { id: 'all', label: currentLang === 'en' ? 'All Opportunities' : 'Toutes Opportunités' },
    { id: 'Scholarship', label: currentLang === 'en' ? 'Scholarships' : 'Bourses d\'Études' },
    { id: 'Digital Bootcamp', label: currentLang === 'en' ? 'Digital Bootcamps' : 'Formations Numériques' },
  ];

  const filtered = OPPORTUNITIES.filter(op => {
    const matchesSearch = 
      op.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.titleFr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.provider.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = filterType === 'all' || op.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
            {currentLang === 'en' ? 'Grants, Bursaries & Fast-Track Upskilling' : 'Bourses, Financements & Stages Accélérés'}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            {filtered.length} {currentLang === 'en' ? 'Verified Programs' : 'Programmes Actifs'}
          </span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          {currentLang === 'en' ? 'Scholarships, Internships & Digital Skills Hub' : 'Guichet des Bourses & Programmes de Compétences'}
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          {currentLang === 'en'
            ? 'Discover tuition funding from MINESUP, Mastercard Foundation, and accredited tech training centers across Cameroon.'
            : 'Accédez aux aides financières du MINESUP, de la Fondation Mastercard et aux incubateurs tech du Cameroun.'}
        </p>

        {/* Search & Filter */}
        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'en' ? 'Search opportunity, provider (e.g. MINESUP, Mastercard, Bootcamp)...' : 'Rechercher une bourse, organisme...'}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-slate-900"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/80">
            {types.map((t) => (
              <button
                key={t.id}
                onClick={() => setFilterType(t.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  filterType === t.id
                    ? 'bg-white text-slate-900 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Opportunities List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((op) => (
          <div
            key={op.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                  {op.type}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{op.deadline}</span>
                </div>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900">
                  {currentLang === 'en' ? op.titleEn : op.titleFr}
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {op.provider}
                </p>
              </div>

              {/* Award Value */}
              <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl flex items-start gap-2.5">
                <Gift className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block">
                    {currentLang === 'en' ? 'Package / Value:' : 'Avantages & Prise en Charge :'}
                  </span>
                  <p className="text-xs text-emerald-800 font-medium mt-0.5">
                    {currentLang === 'en' ? op.awardEn : op.awardFr}
                  </p>
                </div>
              </div>

              {/* Eligibility */}
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>{currentLang === 'en' ? 'Eligibility Criteria:' : 'Critères d\'Éligibilité :'}</span>
                </div>
                <p className="text-slate-600 leading-relaxed pl-5">
                  {currentLang === 'en' ? op.eligibilityEn : op.eligibilityFr}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {op.targetAudience}
              </span>
              <a
                href={op.applyLinkText}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{currentLang === 'en' ? 'Apply / Details' : 'Postuler / Info'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
