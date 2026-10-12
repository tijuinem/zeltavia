import React, { useState, useEffect, useMemo } from 'react';
import { STORIES_DATA } from './data/courseData';
import { getPhasesData } from './i18n/phasesTranslations';
import { Navbar } from './components/Navbar';
import { PhaseView } from './components/PhaseView';
import { Phase0View } from './components/Phase0View';
import { TheoryIntroView } from './components/TheoryIntroView';
import { AudioVocabTrack } from './components/AudioVocabTrack';
import { AntiTranslationView } from './components/AntiTranslationView';
import { StoryReaderModal } from './components/StoryReaderModal';
import { CourseSummaryModal } from './components/CourseSummaryModal';
import { SettingsModal, AppSettings } from './components/SettingsModal';
import { CreditsModal } from './components/CreditsModal';
import { SystemVisorModal } from './components/SystemVisorModal';
import { ZeltaviaLogo } from './components/ZeltaviaLogo';
import { InterfaceLanguage, INTERFACE_TRANSLATIONS } from './i18n/interfaceTranslations';
import {
  Compass,
  ArrowRight,
  BookOpen,
  Headphones,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Mic,
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'theory' | 'phase0' | 'phase' | 'vocab' | 'antiTranslation'>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const v = params.get('view');
      if (v && ['theory', 'phase0', 'phase', 'vocab', 'antiTranslation'].includes(v)) {
        return v as any;
      }
    } catch (e) {}
    return 'phase';
  });
  const [currentPhaseNumber, setCurrentPhaseNumber] = useState<number>(1);
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null);
  const [showSummaryModal, setShowSummaryModal] = useState<boolean>(false);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [showCreditsModal, setShowCreditsModal] = useState<boolean>(false);
  const [activeVisor, setActiveVisor] = useState<{
    isOpen: boolean;
    type: 'read' | 'speak';
    url: string;
    title?: string;
    subtitle?: string;
  } | null>(null);

  // Settings State: RESTORE AND DEFAULT STRICTLY TO LIGHT MODE AS REQUESTED
  const [settings, setSettings] = useState<AppSettings>(() => {
    const savedLang = (localStorage.getItem('zeltavia_ui_lang') as InterfaceLanguage) || 'es';
    // Clear any previous dark mode residue so the app opens in clean Light Mode
    localStorage.setItem('zeltavia_theme', 'light');
    const savedFontSize = (localStorage.getItem('zeltavia_font_size') as 'standard' | 'large' | 'xlarge') || 'standard';
    const savedHighContrast = localStorage.getItem('zeltavia_high_contrast') === 'true';

    return {
      language: ['es', 'en', 'fr', 'de'].includes(savedLang) ? savedLang : 'es',
      theme: 'light', // RESTORED CLEAN LIGHT MODE AS IN EARLY VERSIONS
      fontSize: ['standard', 'large', 'xlarge'].includes(savedFontSize) ? savedFontSize : 'standard',
      highContrast: savedHighContrast
    };
  });

  const [isDark, setIsDark] = useState<boolean>(() => settings.theme === 'dark');

  // Apply settings to DOM (HTML root element)
  useEffect(() => {
    const root = document.documentElement;

    // 1. Language attribute
    root.lang = settings.language;
    localStorage.setItem('zeltavia_ui_lang', settings.language);

    // 2. Font size classes
    root.classList.remove('text-size-standard', 'text-size-large', 'text-size-xlarge');
    root.classList.add(`text-size-${settings.fontSize}`);
    localStorage.setItem('zeltavia_font_size', settings.fontSize);

    // 3. High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    localStorage.setItem('zeltavia_high_contrast', String(settings.highContrast));

    // 4. Dark/Light Theme: Default strictly to clean Light Mode
    root.classList.remove('dark');
    if (settings.theme === 'dark') {
      root.classList.add('dark');
      setIsDark(true);
    } else {
      setIsDark(false);
    }
    localStorage.setItem('zeltavia_theme', settings.theme);
  }, [settings]);

  const handleUpdateSettings = (newPartial: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...newPartial }));
  };

  const t = INTERFACE_TRANSLATIONS[settings.language];

  // Retrieve localized phases according to selected language
  const phasesList = useMemo(() => getPhasesData(settings.language), [settings.language]);

  // Retrieve current active phase data
  const currentPhase = phasesList.find(p => p.number === currentPhaseNumber) || phasesList[0];

  // Retrieve story data if modal active
  const activeStory = activeStoryId ? STORIES_DATA[activeStoryId] : null;

  const handleNavigate = (view: string, phaseNum?: number) => {
    if (view === 'phase' && phaseNum) {
      setCurrentPhaseNumber(phaseNum);
      setCurrentView('phase');
    } else {
      setCurrentView(view as any);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenStory = (storyId: string) => {
    setActiveStoryId(storyId);
  };

  const handleCloseStory = () => {
    setActiveStoryId(null);
  };

  const handleOpenVisor = (type: 'read' | 'speak', customUrl?: string, title?: string, subtitle?: string) => {
    const defaultUrl = type === 'read' ? './app_read/index.html?mode=popup' : './app_speak/index.html?mode=popup';
    setActiveVisor({
      isOpen: true,
      type,
      url: customUrl || defaultUrl,
      title,
      subtitle
    });
  };

  const handleOpenStandaloneReader = (storyId: string) => {
    const num = storyId.replace(/[^0-9]/g, '');
    setActiveVisor({
      isOpen: true,
      type: 'read',
      url: `./app_read/index.html?story=${storyId}&mode=popup`,
      title: `Lector Dual Autónomo — Story #${num}`,
      subtitle: 'Lectura bilingüe guiada con transcripción fonética y pronunciación nativa'
    });
  };

  const handleOpenSpeakVisor = (word?: string) => {
    const query = word ? `?word=${encodeURIComponent(word)}&mode=popup` : '?mode=popup';
    setActiveVisor({
      isOpen: true,
      type: 'speak',
      url: `./app_speak/index.html${query}`,
      title: word ? `Entrenador Speak — "${word}"` : 'Entrenador de Pronunciación (Speak)',
      subtitle: 'Evaluación y calibración de voz con micrófono y fonética nativa'
    });
  };

  const handleOpenLegal = () => {
    handleOpenVisor(
      'read',
      './legal.html',
      'Uso, Legal y Política de Privacidad — ZELTAVIA',
      'Términos de servicio, licencia CC BY 4.0 y protección de datos'
    );
  };

  const handleGoToNextPhase = () => {
    if (currentPhaseNumber < 6) {
      setCurrentPhaseNumber(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowSummaryModal(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#25b0ae]/20 selection:text-[#002a5b]">
      {/* Top Main Navigation */}
      <Navbar
        currentView={currentView}
        currentPhaseNumber={currentPhaseNumber}
        language={settings.language}
        isDark={isDark}
        onNavigate={handleNavigate}
        onOpenSummary={() => setShowSummaryModal(true)}
        onOpenSettings={() => setShowSettingsModal(true)}
        onOpenCredits={() => setShowCreditsModal(true)}
        onChangeLanguage={(lang) => handleUpdateSettings({ language: lang })}
      />

      {/* Course Sub-Header for Phase Navigation (Includes Fase 0 with matching aesthetics) */}
      {(currentView === 'phase' || currentView === 'phase0') && (
        <div className="bg-white dark:bg-[#0c1527] border-b border-slate-200 dark:border-slate-800 shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-[#002a5b] dark:text-[#25b0ae]">{t.curriculumHeader}</span>
                <span className="hidden md:inline">{t.curriculumSubtitle}</span>
              </div>

              {/* Phase pills / segmented navigation: Fase 0, Fase 1, Fase 2, Fase 3, Fase 4, Fase 5, Fase 6 */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                {/* Fase 0 Pill */}
                <button
                  type="button"
                  onClick={() => handleNavigate('phase0')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                    currentView === 'phase0'
                      ? 'bg-[#002a5b] text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>{t.phaseLabel} 0</span>
                  {currentView === 'phase0' && <span className="w-1.5 h-1.5 rounded-full bg-[#25b0ae]" />}
                </button>

                {/* Fases 1 to 6 Pills */}
                {phasesList.map((p) => {
                  const isActive = currentView === 'phase' && currentPhaseNumber === p.number;
                  return (
                    <button
                      key={p.number}
                      type="button"
                      onClick={() => handleNavigate('phase', p.number)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-[#002a5b] text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>{t.phaseLabel} {p.number}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#25b0ae]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {currentView === 'theory' && (
          <TheoryIntroView language={settings.language} onStartCourse={() => handleNavigate('phase0')} />
        )}

        {currentView === 'phase0' && (
          <Phase0View language={settings.language} onGoToPhase1={() => handleNavigate('phase', 1)} />
        )}

        {currentView === 'phase' && (
          <PhaseView
            phase={currentPhase}
            language={settings.language}
            onOpenStory={handleOpenStory}
            onOpenStandaloneReader={handleOpenStandaloneReader}
            onOpenSpeakVisor={handleOpenSpeakVisor}
            onSelectNextPhase={handleGoToNextPhase}
          />
        )}

        {currentView === 'vocab' && (
          <AudioVocabTrack
            language={settings.language}
            onOpenVisor={handleOpenVisor}
          />
        )}

        {currentView === 'antiTranslation' && <AntiTranslationView language={settings.language} />}
      </main>

      {/* Story Reader Modal */}
      {activeStory && (
        <StoryReaderModal
          story={activeStory}
          language={settings.language}
          phaseTitle={`${t.phaseLabel} ${activeStory.phaseId}: ${phasesList.find(p => p.id === activeStory.phaseId)?.title || ''}`}
          onClose={handleCloseStory}
          onGoToAhaRules={() => {
            handleCloseStory();
            setTimeout(() => {
              window.scrollTo({ top: 750, behavior: 'smooth' });
            }, 100);
          }}
        />
      )}

      {/* 6 Phases 1-Line Summary Modal */}
      {showSummaryModal && (
        <CourseSummaryModal
          language={settings.language}
          onClose={() => setShowSummaryModal(false)}
          onSelectPhase={(phaseNum) => handleNavigate('phase', phaseNum)}
        />
      )}

      {/* Settings Modal (Tuerca de Configuración) */}
      {showSettingsModal && (
        <SettingsModal
          settings={settings}
          isDark={isDark}
          onUpdateSettings={handleUpdateSettings}
          onClose={() => setShowSettingsModal(false)}
        />
      )}

      {/* Credits & Version Modal (Tres Puntos Verticales) */}
      {showCreditsModal && (
        <CreditsModal
          language={settings.language}
          isDark={isDark}
          onOpenLegal={handleOpenLegal}
          onClose={() => setShowCreditsModal(false)}
        />
      )}

      {/* System Visor Modal (Popups del Sistema para Read y Speak) */}
      {activeVisor && activeVisor.isOpen && (
        <SystemVisorModal
          isOpen={activeVisor.isOpen}
          type={activeVisor.type}
          url={activeVisor.url}
          title={activeVisor.title}
          subtitle={activeVisor.subtitle}
          language={settings.language}
          isDark={isDark}
          onClose={() => setActiveVisor(null)}
        />
      )}

      {/* Footer Minimalista */}
      <footer className="mt-auto bg-[#001733] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div className="leading-relaxed text-center md:text-left">
              ZELTAVIA — {t.footerLicense} · {t.footerDevelopedBy} <span className="text-white font-semibold">@garba</span> {t.footerFor}{' '}
              <a
                href="https://www.zainder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25b0ae] hover:underline font-medium"
              >
                zainder.com
              </a>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => setShowSettingsModal(true)}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                {t.settingsTitle}
              </button>
              <span>·</span>
              <button
                onClick={() => setShowCreditsModal(true)}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                {t.creditsTitle}
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={handleOpenLegal}
                className="hover:text-[#25b0ae] transition-colors cursor-pointer text-slate-400 hover:underline"
              >
                Uso & Privacidad
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
