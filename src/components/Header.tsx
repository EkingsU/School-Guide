import React from 'react';
import { 
  GraduationCap, 
  Compass, 
  Briefcase, 
  Building2, 
  Award, 
  Users, 
  Code2, 
  Languages, 
  Menu, 
  X,
  UserCheck,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { Language, UserRole } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  onOpenMernGuide: () => void;
  onOpenPresentationDeck: () => void;
  onOpenFreemiumModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onTabChange,
  currentRole,
  onRoleChange,
  onOpenMernGuide,
  onOpenPresentationDeck,
  onOpenFreemiumModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const t = TRANSLATIONS[currentLang];

  const navLinks = [
    { id: 'pathways', label: t.navHome, icon: Compass },
    { id: 'assessment', label: t.navAssessment, icon: GraduationCap },
    { id: 'roadmaps', label: t.navRoadmaps, icon: BookOpen },
    { id: 'aiAdvisor', label: t.navAiAdvisor, icon: Sparkles },
    { id: 'careers', label: t.navCareers, icon: Briefcase },
    { id: 'institutions', label: t.navInstitutions, icon: Building2 },
    { id: 'opportunities', label: t.navOpportunities, icon: Award },
    { id: 'mentorship', label: t.navMentorship, icon: Users },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-slate-100 shadow-md">
      {/* Top Banner: Bilingual announcement & quick role selection */}
      <div className="bg-slate-950/80 border-b border-slate-800/80 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-medium text-slate-300">
              {currentLang === 'en' ? 'M Learning Guide · Cameroon Education Gateway' : 'M Learning Guide · Portail National d\'Orientation'}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="hidden sm:inline">A digital pathway from school choices to career confidence</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Role Switcher */}
            <div className="flex items-center gap-1.5 text-slate-400">
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">{t.selectRolePrompt}</span>
              <div className="flex bg-slate-900 rounded p-0.5 border border-slate-700">
                {(['student', 'parent', 'counsellor'] as UserRole[]).map((role) => (
                  <button
                    key={role}
                    onClick={() => onRoleChange(role)}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                      currentRole === role
                        ? 'bg-emerald-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {role === 'student' ? (currentLang === 'en' ? 'Student' : 'Élève') :
                     role === 'parent' ? (currentLang === 'en' ? 'Parent' : 'Parent') :
                     (currentLang === 'en' ? 'Counsellor' : 'Conseiller')}
                  </button>
                ))}
              </div>
            </div>

            <span aria-hidden="true" className="text-slate-700">|</span>

            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors py-0.5 px-2 rounded hover:bg-slate-800"
              title="Toggle English / Français"
            >
              <Languages className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentLang.toUpperCase()}</span>
              <span className="text-slate-500 text-[10px]">({currentLang === 'en' ? 'FR' : 'EN'})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div 
            onClick={() => onTabChange('pathways')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-inner group-hover:bg-emerald-500 transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-white">
                  M Learning <span className="text-emerald-400">Guide</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">
                  School Guide
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                {currentLang === 'en' ? 'Education × Career Pathways' : 'Filières d\'Éducation & Débouchés'}
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onTabChange(link.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-800 text-emerald-400 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Presentation Guide Deck + Freemium Model + MERN Tech Stack */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenFreemiumModal}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-700/60 transition-all cursor-pointer"
            >
              <span>{currentLang === 'en' ? 'Freemium Model' : 'Modèle Freemium'}</span>
            </button>

            <button
              onClick={onOpenPresentationDeck}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>{currentLang === 'en' ? 'Presentation' : 'Présentation'}</span>
            </button>

            <button
              onClick={onOpenMernGuide}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xs transition-all border border-emerald-500/30 cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-200" />
              <span>MERN</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenMernGuide}
              className="p-2 rounded-md bg-emerald-700 text-white text-xs font-medium flex items-center gap-1"
              title="MERN Plan"
            >
              <Code2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onTabChange(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                onOpenFreemiumModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-700"
            >
              <span>{currentLang === 'en' ? 'Freemium Model' : 'Modèle Freemium'}</span>
            </button>
            <button
              onClick={() => {
                onOpenPresentationDeck();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700"
            >
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>{currentLang === 'en' ? 'Presentation Guide' : 'Guide Présentation'}</span>
            </button>
            <button
              onClick={() => {
                onOpenMernGuide();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-semibold bg-emerald-600 text-white shadow-sm"
            >
              <Code2 className="w-4 h-4" />
              <span>{t.navMernPlan}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
