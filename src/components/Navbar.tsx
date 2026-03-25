import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-50 relative">
      <div className="flex items-center gap-3">
        {/* Geometric I-PYRAMIDTECH Logo Mark */}
        <img src="/logo1.png" alt="Logo" className="h-10" />
        <span className="font-medium text-2xl tracking-widest text-brand-900" style={{ fontFamily: 'Georgia, serif' }}>
          I-PYRAMIDTECH
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#" className="text-brand-900 font-semibold hover:text-brand-800 transition-colors">Home</a>
        <a href="#" className="hover:text-brand-900 transition-colors">About</a>
        <a href="#" className="hover:text-brand-900 transition-colors">Services</a>
        <a href="#" className="hover:text-brand-900 transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:block bg-accent hover:bg-yellow-400 text-brand-900 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">
          Sign Up
        </button>
        <button className="md:hidden text-brand-900 p-2">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
