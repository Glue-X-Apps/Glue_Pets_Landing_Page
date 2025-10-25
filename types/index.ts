export interface SectionNavigationState {
  currentSection: number;
  isTransitioning: boolean;
  totalSections: number;
}

export interface SectionNavigationActions {
  navigateToSection: (index: number) => void;
  goToNextSection: () => void;
  goToPreviousSection: () => void;
}

export type SectionNavigationHook = SectionNavigationState & SectionNavigationActions;