import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardMockup from './components/DashboardMockup';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardMockup />
      </main>
    </div>
  );
}
