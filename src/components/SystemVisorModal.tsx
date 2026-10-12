import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  BookOpen,
  Mic,
  Maximize2,
  Minimize2,
  RotateCcw,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { InterfaceLanguage, INTERFACE_TRANSLATIONS } from '../i18n/interfaceTranslations';

export interface SystemVisorModalProps {
  isOpen: boolean;
  type: 'read' | 'speak';
  url: string;
  title?: string;
  subtitle?: string;
  language?: InterfaceLanguage;
  isDark?: boolean;
  onClose: () => void;
}

export const SystemVisorModal: React.FC<SystemVisorModalProps> = ({
  isOpen,
  type,
  url,
  title,
  subtitle,
  language = 'es',
  isDark = false,
  onClose
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const t = INTERFACE_TRANSLATIONS[language] || INTERFACE_TRANSLATIONS.es;

  // Escuchar mensaje 'CLOSE_VISOR_MODAL' desde el interior del iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && (event.data.type === 'CLOSE_VISOR_MODAL' || event.data.action === 'close')) {
        onClose();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onClose]);

  // Tecla Escape para cerrar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset loading state when url changes
  useEffect(() => {
    setIsLoading(true);
  }, [url]);

  if (!isOpen) return null;

  const handleReload = () => {
    setIsLoading(true);
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }
  };

  const defaultTitle =
    type === 'read' ? 'Lector Dual Autónomo' : 'Entrenador de Pronunciación (Speak)';
  const defaultSubtitle =
    type === 'read'
      ? 'Lectura guiada, transcripciones fonéticas y traducción bilingüe interactiva'
      : 'Evaluación y calibración de pronunciación con voz nativa y micrófono';

  const modalTitle = title || defaultTitle;
  const modalSubtitle = subtitle || defaultSubtitle;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`w-full transition-all duration-200 flex flex-col bg-white shadow-2xl border border-slate-200 overflow-hidden ${
          isFullscreen
            ? 'fixed inset-0 max-w-none h-full rounded-none'
            : 'max-w-7xl h-[94vh] max-h-[96vh] rounded-2xl sm:rounded-3xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header de la ventana popup del sistema */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#001f42] text-white flex items-center justify-between border-b border-white/10 select-none shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#25b0ae] shrink-0">
              {type === 'read' ? (
                <BookOpen className="w-5 h-5 text-[#25b0ae]" />
              ) : (
                <Mic className="w-5 h-5 text-[#25b0ae]" />
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-sm sm:text-base font-extrabold text-white tracking-tight truncate">
                  {modalTitle}
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#25b0ae]/20 text-[#25b0ae] border border-[#25b0ae]/30">
                  <ShieldCheck className="w-3 h-3" />
                  Módulo Integrado
                </span>
              </div>
              <p className="text-[11px] text-slate-300 truncate hidden xs:block">
                {modalSubtitle}
              </p>
            </div>
          </div>

          {/* Controles de la ventana del sistema */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={handleReload}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              title="Recargar visor"
              aria-label="Recargar visor"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer hidden sm:flex items-center justify-center"
              title={isFullscreen ? 'Restaurar tamaño' : 'Pantalla completa'}
              aria-label={isFullscreen ? 'Restaurar tamaño' : 'Pantalla completa'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white rounded-xl transition-colors cursor-pointer flex items-center justify-center ml-1"
              title="Cerrar visor y volver a la app"
              aria-label="Cerrar visor"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contenedor del visor autónomo */}
        <div className="relative flex-1 w-full h-full bg-slate-50 overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50 text-slate-600 gap-3">
              <div className="w-8 h-8 border-3 border-[#25b0ae] border-t-transparent rounded-full animate-spin" />
              <span className="text-xs font-semibold text-slate-500">
                Cargando visor autónomo Zeltavia...
              </span>
            </div>
          )}

          <iframe
            ref={iframeRef}
            src={url}
            className="w-full h-full border-none"
            allow="microphone; speech-synthesis; autoplay; display-capture"
            title={modalTitle}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
};
