import { persistentAtom } from '@nanostores/persistent';
import type { Lang } from '@/i18n/langUtils';

export interface UserPreferences {
  language: Lang;
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  reducedMotion: boolean;
}

const defaultPreferences: UserPreferences = {
  language: 'uz',
  theme: 'system',
  fontSize: 'medium',
  reducedMotion: false
};

export const $preferences = persistentAtom<UserPreferences>(
  'user-preferences',
  defaultPreferences,
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);

export const preferencesStore = {
  setLanguage(lang: Lang) {
    const currentPrefs = $preferences.get();
    $preferences.set({ ...currentPrefs, language: lang });
  },

  setTheme(theme: 'light' | 'dark' | 'system') {
    const currentPrefs = $preferences.get();
    $preferences.set({ ...currentPrefs, theme: theme });
  },

  setFontSize(size: 'small' | 'medium' | 'large') {
    const currentPrefs = $preferences.get();
    $preferences.set({ ...currentPrefs, fontSize: size });
  },

  setReducedMotion(reduced: boolean) {
    const currentPrefs = $preferences.get();
    $preferences.set({ ...currentPrefs, reducedMotion: reduced });
  }
};