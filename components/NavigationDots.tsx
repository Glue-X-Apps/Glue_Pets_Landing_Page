interface NavigationDotsProps {
  currentSection: number;
  totalSections: number;
  onNavigateToSection: (index: number) => void;
}

export function NavigationDots({ currentSection, totalSections, onNavigateToSection }: NavigationDotsProps) {
  return (
    <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {[...Array(totalSections)].map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigateToSection(i)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSection === i ? "bg-blue-500 scale-125" : "bg-slate-600 hover:bg-slate-500"
          }`}
          aria-label={`Go to section ${i + 1}`}
        />
      ))}
    </nav>
  );
}