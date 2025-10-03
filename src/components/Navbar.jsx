import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-lg">
          <nav className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 text-white shadow-md">
                <Rocket className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-tight text-slate-800 text-lg">Loopwork</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-slate-700">
              <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
              <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            </div>
            <div className="flex items-center gap-2">
              <button className="hidden sm:inline-flex h-10 items-center rounded-xl border border-slate-200 bg-white px-4 text-slate-700 hover:border-slate-300 hover:shadow-sm transition">Sign in</button>
              <button className="inline-flex h-10 items-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 text-white shadow-md hover:shadow-lg transition">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
