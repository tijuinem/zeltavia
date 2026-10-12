import React, { useState, useRef, useEffect } from 'react';
import { ZeltaviaLogo } from './ZeltaviaLogo';
import {
  BookOpen,
  Headphones,
  ShieldAlert,
  Menu,
  X,
  Sparkles,
  ChevronDown,
  Settings,
  MoreVertical,
  Globe,
  Check
} from 'lucide-react';
import { InterfaceLanguage, INTERFACE_TRANSLATIONS } from '../i18n/interfaceTranslations';

interface NavbarProps {
  currentView: string;
  currentPhaseNumber: number;
  language: InterfaceLanguage;
  isDark?: boolean;
  onNavigate: (view: string, phaseNum?: number) => void;
  onOpenSummary: () => void;
  onOpenSettings: () => void;
  onOpenCredits: () => void;
  onChangeLanguage: (lang: InterfaceLanguage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  currentPhaseNumber,
  language,
  isDark = false,
  onNavigate,
  onOpenSummary,
  onOpenSettings,
  onOpenCredits,
  onChangeLanguage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phaseDropdownOpen, setPhaseDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const phaseDropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const t = INTERFACE_TRANSLATIONS[language];

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        phaseDropdownRef.current &&
        !phaseDropdownRef.current.contains(event.target as Node)
      ) {
        setPhaseDropdownOpen(false);
      }
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const phaseNames = t.phaseNames.map((name, idx) => ({
    num: idx + 1,
    name
  }));

  const languagesList: { code: InterfaceLanguage; label: string; flag: string }[] = [
    { code: 'es', label: 'Español', flag: 'ES' },
    { code: 'en', label: 'English', flag: 'GB' },
    { code: 'fr', label: 'Français', flag: 'FR' },
    { code: 'de', label: 'Deutsch', flag: 'DE' }
  ];

  const currentLangLabel = languagesList.find(l => l.code === language)?.flag || 'ES';

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0c1527]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <button
            onClick={() => onNavigate('theory')}
            className="flex items-center gap-2 group text-left focus:outline-hidden"
          >
            <ZeltaviaLogo size="md" light={isDark} showSubtitle={false} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            {/* Introducción */}
            <button
              onClick={() => onNavigate('theory')}
              className={`px-3 py-2 rounded-xl transition-colors ${
                currentView === 'theory'
                  ? 'bg-slate-100 dark:bg-slate-800 text-[#002a5b] dark:text-[#25b0ae] font-bold'
                  : 'hover:text-[#002a5b] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              {t.navIntro}
            </button>

            {/* Fases Dropdown Selector (incorporating Fase 0 and Resumen) */}
            <div className="relative" ref={phaseDropdownRef}>
              <button
                onClick={() => {
                  setPhaseDropdownOpen(!phaseDropdownOpen);
                  setLangDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                  currentView === 'phase' || currentView === 'phase0'
                    ? 'bg-[#002a5b] text-white font-bold shadow-xs'
                    : 'hover:text-[#002a5b] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>{t.navPhases}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${phaseDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {phaseDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-[#0c1527] rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 z-50 animate-fadeIn"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                    {t.navPhasesDropdownHeader}
                  </div>

                  {/* Fase 0: Ficha Previa */}
                  <button
                    onClick={() => {
                      onNavigate('phase0');
                      setPhaseDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center justify-between group ${
                      currentView === 'phase0'
                        ? 'bg-sky-50 dark:bg-slate-800 text-[#002a5b] dark:text-[#25b0ae] font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-[#002a5b]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#25b0ae]" />
                      <span className="font-semibold">{t.navPhase0}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60">
                      2 min
                    </span>
                  </button>

                  <div className="my-1.5 border-t border-slate-100 dark:border-slate-800" />

                  {/* Fases 1 a 6 */}
                  <div className="space-y-0.5">
                    {phaseNames.map((p) => (
                      <button
                        key={p.num}
                        onClick={() => {
                          onNavigate('phase', p.num);
                          setPhaseDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center justify-between ${
                          currentView === 'phase' && currentPhaseNumber === p.num
                            ? 'bg-sky-50 dark:bg-slate-800 text-[#002a5b] dark:text-[#25b0ae] font-bold'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-[#002a5b]'
                        }`}
                      >
                        <span>
                          <strong className="text-[#002a5b] dark:text-[#25b0ae] font-mono mr-1.5">{t.phaseLabel} {p.num}:</strong>
                          {p.name}
                        </span>
                        {currentView === 'phase' && currentPhaseNumber === p.num && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#002a5b] dark:bg-[#25b0ae]" />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="my-1.5 border-t border-slate-100 dark:border-slate-800" />

                  {/* Resumen de Fases */}
                  <button
                    onClick={() => {
                      onOpenSummary();
                      setPhaseDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center gap-2.5 text-[#002a5b] dark:text-sky-300 hover:bg-sky-50/80 dark:hover:bg-slate-800/60 group"
                  >
                    <Sparkles className="w-4 h-4 text-[#25b0ae] shrink-0 group-hover:rotate-12 transition-transform" />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">
                        {t.navPhaseSummary}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">
                        {t.navPhaseSummarySubtitle}
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Pista Vocabulario */}
            <button
              onClick={() => onNavigate('vocab')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-colors ${
                currentView === 'vocab'
                  ? 'bg-slate-100 dark:bg-slate-800 text-[#002a5b] dark:text-[#25b0ae] font-bold'
                  : 'hover:text-[#002a5b] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <Headphones className="w-4 h-4 text-[#25b0ae]" />
              <span>{t.navVocab}</span>
            </button>

            {/* Filtro Anti-Traducción */}
            <button
              onClick={() => onNavigate('antiTranslation')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-colors ${
                currentView === 'antiTranslation'
                  ? 'bg-slate-100 dark:bg-slate-800 text-[#002a5b] dark:text-[#25b0ae] font-bold'
                  : 'hover:text-[#002a5b] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <ShieldAlert className="w-4 h-4 text-rose-500" />
              <span>{t.navAntiTranslation}</span>
            </button>
          </nav>

          {/* Right Action Icons: Language Globe, Settings Gear, and 3 Vertical Dots */}
          <div className="hidden sm:flex items-center gap-2">
            {/* 1. Language Dropdown (Zeltavia Palette in Light Mode & Midnight in Dark Mode) */}
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setPhaseDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl transition-all border cursor-pointer ${
                  isDark
                    ? langDropdownOpen
                      ? 'border-[#25b0ae] ring-2 ring-[#25b0ae]/20 text-[#25b0ae] bg-slate-800'
                      : 'text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border-slate-700'
                    : langDropdownOpen
                      ? 'border-[#002a5b] ring-2 ring-[#002a5b]/15 text-[#002a5b] bg-sky-50 shadow-2xs'
                      : 'text-slate-700 hover:text-[#002a5b] bg-white hover:bg-slate-50 border-slate-200 shadow-2xs'
                }`}
                aria-label="Language selector"
              >
                <Globe className={`w-4 h-4 ${isDark ? 'text-[#25b0ae]' : 'text-[#002a5b]'}`} />
                <span className={`font-mono tracking-wider font-extrabold ${isDark ? 'text-slate-100' : 'text-[#002a5b]'}`}>
                  {currentLangLabel}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  langDropdownOpen ? 'rotate-180' : ''
                } ${isDark ? 'text-slate-400' : 'text-slate-400'}`} />
              </button>

              {/* Language Dropdown Menu (Zeltavia Palette for Light Mode, Preserved Palette for Dark Mode) */}
              {langDropdownOpen && (
                <div
                  className={`absolute right-0 top-full mt-2 w-52 rounded-2xl shadow-2xl p-2 z-50 animate-fadeIn border ${
                    isDark
                      ? 'bg-[#0c1527] border-slate-800 ring-1 ring-slate-800'
                      : 'bg-white border-slate-200/90 shadow-xl ring-1 ring-slate-900/5'
                  }`}
                >
                  <div className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 mb-1 flex items-center justify-between border-b ${
                    isDark
                      ? 'text-slate-400 border-slate-800/80'
                      : 'text-slate-400 border-slate-100'
                  }`}>
                    <span>Idioma / Language</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25b0ae]"></span>
                  </div>

                  <div className="space-y-1">
                    {languagesList.map((langItem) => {
                      const isSelected = language === langItem.code;
                      return (
                        <button
                          key={langItem.code}
                          type="button"
                          onClick={() => {
                            onChangeLanguage(langItem.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer group ${
                            isSelected
                              ? isDark
                                ? 'bg-[#002a5b] text-white shadow-md border border-[#25b0ae]/50 font-bold'
                                : 'bg-[#002a5b] text-white shadow-md font-bold'
                              : isDark
                                ? 'text-slate-200 hover:text-white hover:bg-slate-800/70 font-semibold'
                                : 'text-slate-700 hover:text-[#002a5b] hover:bg-sky-50/80 font-semibold'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={`font-mono text-[11px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded-md ${
                              isSelected
                                ? isDark
                                  ? 'text-[#25b0ae] bg-slate-900/60'
                                  : 'text-[#25b0ae] bg-[#001c3d]'
                                : isDark
                                  ? 'text-slate-400 bg-slate-800/80 group-hover:text-white'
                                  : 'text-slate-500 bg-slate-100 group-hover:text-[#002a5b] group-hover:bg-[#25b0ae]/15'
                            }`}>
                              {langItem.flag}
                            </span>
                            <span className={isSelected ? 'text-white' : ''}>
                              {langItem.label}
                            </span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#25b0ae] stroke-[2.5]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Settings Gear Button (Tuerca de Configuración) */}
            <button
              type="button"
              onClick={onOpenSettings}
              className={`p-2.5 rounded-xl transition-all border group cursor-pointer ${
                isDark
                  ? 'text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 hover:text-white'
                  : 'text-slate-700 hover:text-[#002a5b] bg-white hover:bg-slate-50 border-slate-200 shadow-2xs'
              }`}
              title={t.settingsTitle}
              aria-label={t.settingsTitle}
            >
              <Settings className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </button>

            {/* 3. Three Vertical Dots (Créditos y Versión) */}
            <button
              type="button"
              onClick={onOpenCredits}
              className={`p-2.5 rounded-xl transition-all border group cursor-pointer ${
                isDark
                  ? 'text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 hover:text-white'
                  : 'text-slate-700 hover:text-[#002a5b] bg-white hover:bg-slate-50 border-slate-200 shadow-2xs'
              }`}
              title={t.creditsTitle}
              aria-label={t.creditsTitle}
            >
              <MoreVertical className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions: Language & Hamburger */}
          <div className="flex lg:hidden items-center gap-1.5">
            {/* Quick Language pill on mobile */}
            <button
              type="button"
              onClick={() => {
                const nextLang: Record<InterfaceLanguage, InterfaceLanguage> = {
                  es: 'en',
                  en: 'fr',
                  fr: 'de',
                  de: 'es'
                };
                onChangeLanguage(nextLang[language]);
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
            >
              <Globe className="w-3.5 h-3.5 text-[#25b0ae]" />
              <span className="font-mono">{currentLangLabel}</span>
            </button>

            {/* Settings button on mobile */}
            <button
              type="button"
              onClick={onOpenSettings}
              className="p-2 text-slate-700 dark:text-slate-200 hover:text-[#002a5b] rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Settings"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-200 hover:text-[#002a5b] rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1527] px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            <button
              onClick={() => {
                onNavigate('theory');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {t.navIntro}
            </button>

            <button
              onClick={() => {
                onNavigate('phase0');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between"
            >
              <span>{t.navPhase0}</span>
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800">
                2 min
              </span>
            </button>

            <div className="pt-2 pb-1 text-xs font-bold uppercase tracking-wider text-slate-400 px-3">
              {t.navPhasesDropdownHeader}
            </div>

            <div className="grid grid-cols-2 gap-1.5 pl-2">
              {phaseNames.map((p) => (
                <button
                  key={p.num}
                  onClick={() => {
                    onNavigate('phase', p.num);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium border ${
                    currentView === 'phase' && currentPhaseNumber === p.num
                      ? 'bg-[#002a5b] text-white border-[#002a5b]'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {t.phaseLabel} {p.num}: {p.name.slice(0, 16)}...
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                onOpenSummary();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-[#002a5b] dark:text-sky-300 bg-sky-50 dark:bg-slate-800/80 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#25b0ae]" />
              <span>{t.navPhaseSummary}</span>
            </button>

            <button
              onClick={() => {
                onNavigate('vocab');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
            >
              <Headphones className="w-4 h-4 text-[#25b0ae]" />
              <span>{t.navVocab}</span>
            </button>

            <button
              onClick={() => {
                onNavigate('antiTranslation');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4 text-rose-500" />
              <span>{t.navAntiTranslation}</span>
            </button>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 px-1">
              <button
                type="button"
                onClick={() => {
                  onOpenSettings();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl text-xs font-bold"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>{t.settingsTitle}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onOpenCredits();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl text-xs font-bold"
              >
                <MoreVertical className="w-3.5 h-3.5" />
                <span>{t.creditsTitle}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
