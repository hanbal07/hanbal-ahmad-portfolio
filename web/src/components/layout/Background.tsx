export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="bg-grid bg-grid-fade absolute inset-0" />
      <div className="absolute left-1/2 top-[-16%] h-[480px] w-[840px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[130px]" />
      <div className="absolute right-[6%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-accent-2/[0.06] blur-[150px]" />
    </div>
  );
}
