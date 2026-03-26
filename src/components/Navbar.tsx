import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-50 relative">
      <div className="flex items-center gap-3">
        {/* Geometric I-PYRAMIDTECH Logo Mark */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo1.png" alt="Logo" className="h-10" />
          <span className="font-medium text-2xl tracking-widest text-brand-900" style={{ fontFamily: 'Georgia, serif' }}>
            I-PYRAMIDTECH
          </span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <Link to="/" className="text-brand-900 font-semibold hover:text-brand-800 transition-colors">Home</Link>
        <a href="/#about" className="hover:text-brand-900 transition-colors">About</a>
        <Link to="/service" className="hover:text-brand-900 transition-colors">Services</Link>
        <Link to="/contact" className="hover:text-brand-900 transition-colors">Contact</Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:block bg-accent hover:bg-yellow-400 text-brand-900 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">
          Sign Up
        </button>
        <button 
          className="md:hidden text-brand-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-6 right-6 bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-5 border border-slate-100 md:hidden z-50 animate-in fade-in slide-in-from-top-4">
          <Link to="/" className="text-brand-900 font-semibold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <a href="/#about" className="text-slate-600 hover:text-brand-900 font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <Link to="/service" className="text-slate-600 hover:text-brand-900 font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/contact" className="text-slate-600 hover:text-brand-900 font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          
          <div className="h-px bg-slate-100 my-2"></div>
          
          <button className="bg-accent text-brand-900 px-6 py-3.5 rounded-full text-sm font-bold text-center w-full">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
