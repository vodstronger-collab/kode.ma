export function SeoContentBlock({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`muted mx-auto max-w-3xl space-y-4 text-base leading-relaxed ${className}`}>
      {children}
    </div>
  );
}
