import { useState, useEffect, useRef, useCallback } from 'react';
import type { SectionNavigationHook } from '@/types';

const TRANSITION_DURATION = 700;
const SCROLL_THROTTLE = 700;
const WHEEL_THRESHOLD = 15;
const TOUCH_THRESHOLD = 25;

export function useSectionNavigation(totalSections: number, enabled: boolean = true): SectionNavigationHook {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartY = useRef(0);
  const lastScrollTime = useRef(0);

  const startTransition = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
  }, []);

  const canNavigate = useCallback((now: number) => {
    return enabled && !isTransitioning && now - lastScrollTime.current >= SCROLL_THROTTLE;
  }, [isTransitioning, enabled]);

  const goToNextSection = useCallback(() => {
    const now = Date.now();
    if (canNavigate(now) && currentSection < totalSections - 1) {
      lastScrollTime.current = now;
      startTransition();
      setCurrentSection((prev) => prev + 1);
    }
  }, [canNavigate, currentSection, totalSections, startTransition]);

  const goToPreviousSection = useCallback(() => {
    const now = Date.now();
    if (canNavigate(now) && currentSection > 0) {
      lastScrollTime.current = now;
      startTransition();
      setCurrentSection((prev) => prev - 1);
    }
  }, [canNavigate, currentSection, startTransition]);

  const navigateToSection = useCallback((index: number) => {
    if (enabled && index !== currentSection && !isTransitioning && index >= 0 && index < totalSections) {
      startTransition();
      setCurrentSection(index);
    }
  }, [currentSection, isTransitioning, totalSections, startTransition, enabled]);

  useEffect(() => {
    if (!enabled) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (e.deltaY > WHEEL_THRESHOLD) {
        goToNextSection();
      } else if (e.deltaY < -WHEEL_THRESHOLD) {
        goToPreviousSection();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (diff > TOUCH_THRESHOLD) {
        goToNextSection();
      } else if (diff < -TOUCH_THRESHOLD) {
        goToPreviousSection();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        goToNextSection();
      } else if (e.key === "ArrowUp") {
        goToPreviousSection();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNextSection, goToPreviousSection, enabled]);

  return {
    currentSection,
    isTransitioning,
    totalSections,
    navigateToSection,
    goToNextSection,
    goToPreviousSection,
  };
}