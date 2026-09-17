export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid opacity-80" />
      <div className="animate-float absolute -left-16 top-8 h-64 w-64 rounded-full bg-[#002395]/15 blur-3xl" />
      <div className="animate-float absolute -right-10 top-48 h-72 w-72 rounded-full bg-[#ed2939]/14 blur-3xl [animation-delay:2s]" />
    </div>
  );
}
