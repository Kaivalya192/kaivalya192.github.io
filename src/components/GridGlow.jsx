function GridGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-slate-950">
      <div className="absolute inset-0 bg-grid-glow opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(15,23,42,0)_0%,rgba(2,6,23,0.95)_60%,rgba(2,6,23,1)_100%)]" />
    </div>
  );
}

export default GridGlow;
