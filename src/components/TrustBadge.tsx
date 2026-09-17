import { GUARANTEE_TEXT } from "@/lib/constants";

export function TrustBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`glass inline-flex max-w-3xl items-start gap-3 rounded-2xl border-l-4 border-l-[#002395] px-4 py-3 text-sm ${className}`}
    >
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8eefc] text-[#002395]">
        ✓
      </span>
      <p className="muted leading-relaxed">{GUARANTEE_TEXT}</p>
    </div>
  );
}
