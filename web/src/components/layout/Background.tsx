export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="bg-grid bg-grid-fade absolute inset-0" />
      <div className="absolute left-1/2 top-[-18%] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
      <div className="absolute left-[10%] top-[28%] h-[380px] w-[380px] rounded-full bg-violet/10 blur-[150px]" />
      <div className="absolute bottom-[-12%] right-[8%] h-[420px] w-[420px] rounded-full bg-teal/10 blur-[150px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(255,255,255,0.9)_0%,transparent_55%)]" />
    </div>
  );
}
