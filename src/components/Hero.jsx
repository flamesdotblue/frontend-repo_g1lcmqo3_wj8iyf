import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Loopwork hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
        <p className="text-sm font-medium tracking-wide text-violet-700/80">A productivity OS for creative teams</p>
        <h1 className="mt-3 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Blend Kanban, moodboards, and audio huddles
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-700/90">
          Loopwork brings the joy of a studio and the clarity of a roadmap into one playful, collaborative canvas.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="#demo" className="inline-flex h-11 items-center rounded-xl bg-slate-900 px-5 text-white shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition">See Live Demo</a>
          <a href="#signup" className="inline-flex h-11 items-center rounded-xl border border-slate-200 bg-white px-5 text-slate-800 hover:bg-slate-50 transition">Start Free Trial</a>
        </div>

        {/* Dashboard mockup in hero */}
        <div className="mt-10 w-full max-w-5xl">
          <div className="rounded-2xl border border-white/40 bg-white/70 p-3 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between rounded-xl bg-slate-50/80 p-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="text-sm font-medium text-slate-700">Loopwork — Team Canvas</div>
              <div className="w-16" />
            </div>
            <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-3">
              {['Backlog','In Progress','Review'].map((col) => (
                <div key={col} className="rounded-xl bg-gradient-to-b from-white to-slate-50 p-2 ring-1 ring-slate-200">
                  <div className="mb-2 text-xs font-medium text-slate-600">{col}</div>
                  {[1,2].map((i)=> (
                    <div key={i} className="mb-2 rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
                      <div className="h-4 w-3/4 rounded bg-slate-100" />
                      <div className="mt-2 h-3 w-2/3 rounded bg-slate-100" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          <Stat number="2x" label="Faster from idea to ship" />
          <Stat number="40%" label="Less tool switching" />
          <Stat number="98%" label="Happier teammates" />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl border border-white/30 bg-white/60 p-4 backdrop-blur-xl text-left">
      <div className="text-2xl font-semibold text-slate-900">{number}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}
