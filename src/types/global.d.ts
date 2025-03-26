import type { UIStore } from '@/data/store/ui/uiStore';

declare global {
  interface Window {
    uiStore: typeof UIStore;
  }
}