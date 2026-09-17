type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

/** Native details/summary — zero client JS, crawlable answers */
export function Accordion({
  items,
  compact = false,
}: {
  items: AccordionItem[];
  compact?: boolean;
}) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={item.title}
          className="glass group overflow-hidden rounded-2xl"
          open={index === 0}
        >
          <summary
            className={`flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[var(--heading)] transition hover:bg-[#e8eefc] [&::-webkit-details-marker]:hidden ${
              compact ? "px-4 py-3 text-sm" : "px-5 py-4"
            }`}
          >
            <span>{item.title}</span>
            <span className="text-[#002395] group-open:hidden" aria-hidden>
              +
            </span>
            <span className="hidden text-[#002395] group-open:inline" aria-hidden>
              −
            </span>
          </summary>
          <div
            className={`border-t border-black/5 muted leading-relaxed ${
              compact ? "px-4 py-3 text-sm" : "px-5 py-4"
            }`}
          >
            {item.content}
          </div>
        </details>
      ))}
    </div>
  );
}
