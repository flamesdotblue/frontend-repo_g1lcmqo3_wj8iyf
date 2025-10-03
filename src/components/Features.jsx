import { LayoutDashboard, Palette, Mic, Users } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Adaptive Kanban",
    desc: "Snap tasks into swimlanes, annotate with stickers, and turn clusters into sprints in one click.",
  },
  {
    icon: Palette,
    title: "Shared Moodboards",
    desc: "Drop images, colors, and references. Auto-generate palettes and typographic scales.",
  },
  {
    icon: Mic,
    title: "Audio Huddles",
    desc: "Spin up low-latency rooms with spatial audio while you co-edit the board.",
  },
  {
    icon: Users,
    title: "Figma-like Presence",
    desc: "Cursors, comments, and multiplayer selection make work feel alive.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">All in one creative OS</h2>
        <p className="mt-3 text-slate-600">Designed for bright, playful collaboration inspired by Figma's aesthetic.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 text-white shadow-md">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-600">{desc}</p>
    </div>
  );
}
