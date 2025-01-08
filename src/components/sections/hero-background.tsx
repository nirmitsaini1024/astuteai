"use client";

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-violet-950/20 to-black" />
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:h-[600px] bg-violet-900/10 rounded-full blur-[120px]" />
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(139,92,246,0.02),transparent)]" />
    </>
  );
}
