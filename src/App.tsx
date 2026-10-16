import React, { useState } from 'react';
import { Header } from './components/Header';
import { TrackExplorer } from './components/TrackExplorer';
import { CareerAssessment } from './components/CareerAssessment';
import { CareerDirectory } from './components/CareerDirectory';
import { InstitutionsDirectory } from './components/InstitutionsDirectory';
import { OpportunitiesHub } from './components/OpportunitiesHub';
import { MentorshipBooking } from './components/MentorshipBooking';
import { RoleDashboard } from './components/RoleDashboard';
import { MernStackGuide } from './components/MernStackGuide';
import { PresentationGuideModal } from './components/PresentationGuideModal';
import { FreemiumModelModal } from './components/FreemiumModelModal';
import { AiCareerRecommender } from './components/AiCareerRecommender';
import { CareerRoadmaps } from './components/CareerRoadmaps';
import { ExplorationJourneyState } from './components/CareerExplorationProgressBar';
import { Language, UserRole } from './types';
import { TRANSLATIONS } from './data/translations';
import { Code2, Compass, Sparkles, X, Gift } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<string>('pathways');
  const [currentRole, setCurrentRole] = useState<UserRole>('student');
  const [selectedCareerId, setSelectedCareerId] = useState<string | undefined>(undefined);
  const [showMernGuideModal, setShowMernGuideModal] = useState<boolean>(false);
  const [showPresentationModal, setShowPresentationModal] = useState<boolean>(false);
  const [showFreemiumModal, setShowFreemiumModal] = useState<boolean>(false);

  // Student 5-step exploration journey state
  const [explorationProgress, setExplorationProgress] = useState<ExplorationJourneyState>({
    discover: true, // Started by exploring secondary tracks
    assess: false,
    explore: false,
    plan: false,
    connect: false,
  });

  const t = TRANSLATIONS[currentLang];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedCareerId(undefined);

    // Auto-update journey steps based on student exploration
    setExplorationProgress(prev => {
      const updated = { ...prev };
      if (tab === 'pathways') updated.discover = true;
      if (tab === 'assessment' || tab === 'aiAdvisor') updated.assess = true;
      if (tab === 'institutions') updated.explore = true;
      if (tab === 'careers' || tab === 'roadmaps') updated.plan = true;
      if (tab === 'mentorship' || tab === 'opportunities') updated.connect = true;
      return updated;
    });
  };

  const handleToggleExplorationStep = (stepKey: keyof ExplorationJourneyState) => {
    setExplorationProgress(prev => ({
      ...prev,
      [stepKey]: !prev[stepKey]
    }));
  };

  const handleNavigateToExplorationStep = (stepKey: keyof ExplorationJourneyState) => {
    switch (stepKey) {
      case 'discover':
        handleTabChange('pathways');
        break;
      case 'assess':
        handleTabChange('assessment');
        break;
      case 'explore':
        handleTabChange('institutions');
        break;
      case 'plan':
        handleTabChange('roadmaps');
        break;
      case 'connect':
        handleTabChange('mentorship');
        break;
    }
  };

  const handleSelectCareer = (careerId: string) => {
    setSelectedCareerId(careerId);
    handleTabChange('careers');
    setExplorationProgress(prev => ({ ...prev, plan: true }));
  };

  const handleStartAssessment = () => {
    handleTabChange('assessment');
  };

  const handleViewPathways = () => {
    handleTabChange('pathways');
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Primary Navigation Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        currentRole={currentRole}
        onRoleChange={setCurrentRole}
        onOpenMernGuide={() => setShowMernGuideModal(true)}
        onOpenPresentationDeck={() => setShowPresentationModal(true)}
        onOpenFreemiumModal={() => setShowFreemiumModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {/* Dynamic Role Dashboard Widget with Career Exploration Progress Bar */}
        <RoleDashboard
          currentRole={currentRole}
          currentLang={currentLang}
          onTakeAssessment={handleStartAssessment}
          onViewPathways={handleViewPathways}
          explorationProgress={explorationProgress}
          onToggleExplorationStep={handleToggleExplorationStep}
          onNavigateToStep={handleNavigateToExplorationStep}
        />

        {/* Tab View Router */}
        {activeTab === 'pathways' && (
          <TrackExplorer
            currentLang={currentLang}
            onSelectCareer={handleSelectCareer}
            onStartAssessment={handleStartAssessment}
          />
        )}

        {activeTab === 'assessment' && (
          <CareerAssessment
            currentLang={currentLang}
            onExploreCareer={handleSelectCareer}
            onViewPathways={handleViewPathways}
          />
        )}

        {activeTab === 'roadmaps' && (
          <CareerRoadmaps
            currentLang={currentLang}
            onExploreCareer={handleSelectCareer}
            onOpenAiAdvisor={() => handleTabChange('aiAdvisor')}
          />
        )}

        {activeTab === 'aiAdvisor' && (
          <AiCareerRecommender
            currentLang={currentLang}
            onExploreCareer={handleSelectCareer}
            onExploreInstitutions={() => handleTabChange('institutions')}
          />
        )}

        {activeTab === 'careers' && (
          <CareerDirectory
            currentLang={currentLang}
            selectedCareerId={selectedCareerId}
            onClearSelectedCareer={() => setSelectedCareerId(undefined)}
          />
        )}

        {activeTab === 'institutions' && (
          <InstitutionsDirectory
            currentLang={currentLang}
          />
        )}

        {activeTab === 'opportunities' && (
          <OpportunitiesHub
            currentLang={currentLang}
          />
        )}

        {activeTab === 'mentorship' && (
          <MentorshipBooking
            currentLang={currentLang}
          />
        )}
      </main>

      {/* Presentation Guide Modal (9 Slides) */}
      {showPresentationModal && (
        <PresentationGuideModal
          currentLang={currentLang}
          onClose={() => setShowPresentationModal(false)}
          onStartJourney={() => {
            setShowPresentationModal(false);
            handleTabChange('assessment');
          }}
        />
      )}

      {/* Freemium Model & Impact Modal */}
      {showFreemiumModal && (
        <FreemiumModelModal
          currentLang={currentLang}
          onClose={() => setShowFreemiumModal(false)}
          onBookCounsellor={() => {
            setShowFreemiumModal(false);
            handleTabChange('mentorship');
          }}
        />
      )}

      {/* Full-Screen / Modal Viewer for MERN Technical Stack Guide */}
      {showMernGuideModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm overflow-y-auto p-4 sm:p-6 lg:p-10 flex justify-center">
          <div className="max-w-5xl w-full relative">
            <button
              onClick={() => setShowMernGuideModal(false)}
              className="fixed top-6 right-6 z-50 p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 shadow-xl border border-slate-700 cursor-pointer"
              title="Close Guide"
            >
              <X className="w-5 h-5" />
            </button>
            <MernStackGuide
              currentLang={currentLang}
              onClose={() => setShowMernGuideModal(false)}
            />
          </div>
        </div>
      )}

      {/* Freemium & Institutional Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Freemium Value Notice */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-3xl">
              <span className="font-bold text-emerald-400 text-xs uppercase tracking-wider block">
                {t.freemiumBannerTitle}
              </span>
              <p className="text-slate-300 leading-relaxed text-xs">
                {t.freemiumBannerDesc}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setShowFreemiumModal(true)}
                className="px-3.5 py-2 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/80 rounded-lg font-semibold shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Gift className="w-3.5 h-3.5" />
                <span>Freemium & Partnerships</span>
              </button>
              <button
                onClick={() => setShowPresentationModal(true)}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-semibold shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
              >
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>Presentation Guide</span>
              </button>
              <button
                onClick={() => setShowMernGuideModal(true)}
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>{currentLang === 'en' ? 'MERN Blueprint' : 'Plan MERN'}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="font-bold text-white">School Guide Cameroon</span>
              <span aria-hidden="true">·</span>
              <span>Yaoundé · Douala · Buea · Bamenda · Dschang</span>
            </div>
            <div>
              <p className="text-slate-500 text-center sm:text-right">
                {t.footerCopyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
