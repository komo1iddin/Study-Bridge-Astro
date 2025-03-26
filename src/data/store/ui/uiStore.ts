import { atom } from 'nanostores';

export interface UIState {
  isMobileMenuOpen: boolean;
  isContactModalOpen: boolean;
  isOfferPopupOpen: boolean;
  activeSection: string | null;
}

export const $uiState = atom<UIState>({
  isMobileMenuOpen: false,
  isContactModalOpen: false,
  isOfferPopupOpen: false,
  activeSection: null
});

export const uiStore = {
  toggleMobileMenu(isOpen?: boolean) {
    const currentState = $uiState.get();
    $uiState.set({
      ...currentState,
      isMobileMenuOpen: isOpen ?? !currentState.isMobileMenuOpen
    });
  },

  toggleContactModal(isOpen?: boolean) {
    const currentState = $uiState.get();
    $uiState.set({
      ...currentState,
      isContactModalOpen: isOpen ?? !currentState.isContactModalOpen
    });
  },

  toggleOfferPopup(isOpen?: boolean) {
    const currentState = $uiState.get();
    $uiState.set({
      ...currentState,
      isOfferPopupOpen: isOpen ?? !currentState.isOfferPopupOpen
    });
  },

  setActiveSection(sectionId: string | null) {
    const currentState = $uiState.get();
    $uiState.set({
      ...currentState,
      activeSection: sectionId
    });
  }
};