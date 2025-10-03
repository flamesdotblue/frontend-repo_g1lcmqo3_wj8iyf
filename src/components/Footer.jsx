export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-16">
      <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-center backdrop-blur">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Loopwork. Built for bright teams who ship.
        </p>
      </div>
    </footer>
  );
}
