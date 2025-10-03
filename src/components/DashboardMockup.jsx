export default function DashboardMockup() {
  return (
    <section id="demo" className="relative z-10 mx-auto max-w-7xl px-4 pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">A playful dashboard that feels alive</h2>
        <p className="mt-3 text-slate-600">Boards, moodboards, and huddles in one canvas. Here’s a lightweight mockup.</p>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="text-sm font-medium text-slate-700">Loopwork Project — Spring Sprint</div>
          <div className="w-16" />
        </div>

        <div className="grid grid-cols-1 gap-3 p-3 md:grid-cols-5">
          <div className="md:col-span-3 rounded-xl border border-slate-200 p-3">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold text-slate-800">Kanban</h3>
              <div className="text-xs text-slate-500">Swimlanes</div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {['Backlog','In Progress','Review'].map((col) => (
                <div key={col} className="rounded-lg bg-slate-50 p-2">
                  <div className="mb-2 text-xs font-medium text-slate-600">{col}</div>
                  {[1,2,3].map((i)=> (
                    <div key={i} className="mb-2 rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
                      <div className="text-sm font-medium text-slate-800">Card {i}</div>
                      <div className="text-xs text-slate-500">Small description</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 grid gap-3">
            <div className="rounded-xl border border-slate-200 p-3">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold text-slate-800">Moodboard</h3>
                <div className="text-xs text-slate-500">Palette</div>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {["#7C3AED","#06B6D4","#F43F5E","#22C55E","#F59E0B","#0EA5E9"].map((c)=> (
                  <div key={c} className="h-12 rounded-lg" style={{ background: c }} />
                ))}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[1,2,3,4,5,6].map((n)=> (
                  <div key={n} className="h-16 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200" />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-3">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold text-slate-800">Audio Huddle</h3>
                <div className="text-xs text-slate-500">Live</div>
              </div>
              <div className="flex -space-x-2">
                {["A","B","C","D"].map((l)=> (
                  <div key={l} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white text-xs font-semibold">
                    {l}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <button className="inline-flex h-9 items-center rounded-lg bg-slate-900 px-3 text-white">Join</button>
                <button className="inline-flex h-9 items-center rounded-lg border border-slate-200 px-3 text-slate-700">Record</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
