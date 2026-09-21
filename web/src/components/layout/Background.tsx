const nodes = ["</>", "{ }", "()", "01", "λ", "…"];

const nodePositions = [
  { left: "12%", top: "22%", delay: "0s" },
  { left: "82%", top: "18%", delay: "1.1s" },
  { left: "8%", top: "64%", delay: "0.6s" },
  { left: "75%", top: "70%", delay: "1.6s" },
  { left: "46%", top: "12%", delay: "0.3s" },
  { left: "64%", top: "42%", delay: "2s" },
];

export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="bg-grid bg-grid-fade absolute inset-0" />
      <div className="absolute left-1/2 top-[-18%] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
      <div className="absolute left-[10%] top-[28%] h-[380px] w-[380px] rounded-full bg-violet/10 blur-[150px]" />
      <div className="absolute bottom-[-12%] right-[8%] h-[420px] w-[420px] rounded-full bg-teal/10 blur-[150px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(255,255,255,0.9)_0%,transparent_55%)]" />
      {nodePositions.map((node, i) => (
        <span
          key={i}
          className="float-tag absolute hidden rounded-lg border border-line/80 bg-white/60 px-2 py-1 font-mono text-[11px] text-ink-3 shadow-sm backdrop-blur-sm md:inline-block"
          style={{ left: node.left, top: node.top, animationDelay: node.delay }}
        >
          {nodes[i]}
        </span>
      ))}
    </div>
  );
}