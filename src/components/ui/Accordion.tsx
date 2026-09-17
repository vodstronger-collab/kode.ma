"use client";

import { useState } from "react";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

export function Accordion({
  items,
  compact = false,
}: {
  items: AccordionItem[];
  compact?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.title} className="glass overflow-hidden rounded-2xl">
            <button
              type="button"
              className={`flex w-full items-center justify-between gap-4 text-left font-semibold text-[var(--heading)] transition hover:bg-[#e8eefc] ${
                compact ? "px-4 py-3 text-sm" : "px-5 py-4"
              }`}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span>{item.title}</span>
              <span className="text-[#002395]">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <div
                className={`border-t border-black/5 muted leading-relaxed ${
                  compact ? "px-4 py-3 text-sm" : "px-5 py-4"
                }`}
              >
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
