import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Gift,
  Crown
} from 'lucide-react';
import { Language } from '../types';

interface FreemiumModelModalProps {
  currentLang: Language;
  onClose: () => void;
  onBookCounsellor?: () => void;
}

export const FreemiumModelModal: React.FC<FreemiumModelModalProps> = ({
  currentLang,
  onClose,
  onBookCounsellor
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-4xl w-full text-slate-900 shadow-2xl relative flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-bold text-sm">
              {currentLang === 'en' ? 'School Guide Platform Architecture & Freemium Model' : 'Modèle Freemium & Architecture School Guide'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-8 text-xs sm:text-sm">
          {/* Mission & Problem Statement Banner */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
              {currentLang === 'en' ? 'Problem Statement & National Challenge' : 'Problématique & Défi National'}
            </span>
            <p className="text-slate-700 leading-relaxed text-xs">
              {currentLang === 'en'
                ? 'Many secondary school students in Cameroon lack adequate academic and career guidance when choosing their educational and career paths. Most students simply attend school because it is expected of them or because their friends do, without understanding the opportunities available in Grammar, Technical, and Commercial streams. This often results in poor academic motivation, wrong subject combinations, and unemployment due to mismatch. Furthermore, school leavers often do not know where to find credible training centres, scholarships, or digital development programmes.'
                : 'Beaucoup d\'élèves du secondaire au Cameroun manquent d\'orientation adéquate lors du choix de leurs séries et études. La plupart vont à l\'école par conformisme social ou imitation de leurs camarades, sans saisir les débouchés en Enseignement Général, Technique ou Commercial. Cela engendre une démotivation, de mauvais choix de matières et le chômage dû à l\'inadéquation formation-emploi.'}
            </p>
          </div>

          {/* Freemium Tiers: Free vs Premium */}
          <div>
            <div className="mb-4">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                {currentLang === 'en' ? 'Sustainable Business Model' : 'Modèle Économique Pérenne'}
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                {currentLang === 'en' ? 'Free Services vs Premium Personalized Guidance' : 'Services Gratuits vs Services Premium'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Free Services Card */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-4">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-base">
                  <Gift className="w-5 h-5 text-emerald-600" />
                  <h3>{currentLang === 'en' ? 'Free Services (Universal Access)' : 'Services Gratuits (Accès Universel)'}</h3>
                </div>

                <p className="text-xs text-slate-500">
                  Open to all learners across Cameroon to ensure zero financial barrier to basic guidance:
                </p>

                <ul className="text-xs text-slate-700 space-y-2">
                  {[
                    'Academic and career guidance for Grammar, Technical, and Commercial streams',
                    'Structured career roadmaps and subject combination matrices',
                    'Learning resources and official MINESEC circulars',
                    'Basic career aptitude and RIASEC tests',
                    'Verified scholarship, internship, and digital skills listings',
                    'Directory of state universities, institutes, and vocational centres'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Premium Services Card */}
              <div className="p-5 rounded-xl border-2 border-emerald-500/50 bg-emerald-50/40 space-y-4">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-base">
                  <Crown className="w-5 h-5 text-emerald-700" />
                  <h3>{currentLang === 'en' ? 'Premium Services (Deep Support)' : 'Services Premium (Accompagnement Avancé)'}</h3>
                </div>

                <p className="text-xs text-emerald-800">
                  Specialized, high-touch services for students and parents seeking tailored intervention:
                </p>

                <ul className="text-xs text-slate-800 space-y-2">
                  {[
                    'One-on-one personalized mentorship and career coaching sessions',
                    'Personalized academic and career counselling with certified psychologists',
                    'Advanced psychometric career assessment reports and dossier reviews',
                    'Cameroon university and Grande École Concours admission guidance',
                    'CV writing, LinkedIn profile optimization, and interview preparation',
                    'Live interactive webinars and workshops with industry leaders',
                    'Progress monitoring and personalized study plans'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Institutional Revenue Partnerships */}
          <div className="p-5 bg-slate-900 text-white rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Building2 className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Institutional Revenue Streams' : 'Partenariats Institutionnels & Entreprises'}</span>
            </div>

            <p className="text-xs text-slate-300">
              The platform generates sustainable B2B revenue by partnering with:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <strong className="text-white block mb-0.5">Universities & Higher Institutes:</strong>
                <span className="text-slate-300">Promoting certified degree programs, Concours deadlines, and student open days.</span>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <strong className="text-white block mb-0.5">Vocational Training Centres:</strong>
                <span className="text-slate-300">Connecting young adults and school leavers directly to accredited short-cycle diplomas (CQP/DQP).</span>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <strong className="text-white block mb-0.5">Private Secondary Schools:</strong>
                <span className="text-slate-300">Institutional campus licenses for school guidance departments to monitor student cohorts.</span>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <strong className="text-white block mb-0.5">Employers & Corporate Recruiters:</strong>
                <span className="text-slate-300">Publishing verified internships, graduate trainee programmes, and junior tech talent recruitment.</span>
              </div>
            </div>
          </div>

          {/* Expected Impact */}
          <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
              <TrendingUp className="w-4 h-4 text-emerald-700" />
              <span>{currentLang === 'en' ? 'Expected National Impact in Cameroon' : 'Impact National Attendu au Cameroun'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-950">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Improve students' understanding of academic & career paths</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Reduce wrong subject combinations and dropout rates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Increase awareness of digital and vocational skills</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Bridge the gap between education and the labour market</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            School Guide Cameroon · Freemium Architecture
          </span>

          <div className="flex items-center gap-2">
            {onBookCounsellor && (
              <button
                onClick={() => {
                  onClose();
                  onBookCounsellor();
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <span>Book 1-on-1 Guidance Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
