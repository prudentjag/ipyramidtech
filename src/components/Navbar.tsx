
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // Reusable active navigation styling
  const activeClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 ${
      isActive
        ? 'text-brand-900 font-bold'
        : 'text-slate-600 hover:text-brand-900'
    }`;

  // Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when near the top
      if (currentScrollY < 80) {
        setIsNavbarVisible(true);
      }

      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY + 5) {
        setIsNavbarVisible(false);
      }

      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY - 5) {
        setIsNavbarVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when a navigation link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/70 shadow-sm transition-transform duration-300 ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo1.webp" alt="iPyramidTech Logo" className="h-10" />

            <span
              className="font-medium text-2xl tracking-widest text-brand-900"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              I-PYRAMIDTECH
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" end className={activeClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={activeClass}>
            About
          </NavLink>

          <NavLink to="/service" className={activeClass}>
            Services
          </NavLink>

          <NavLink to="/contact" className={activeClass}>
            Contact
          </NavLink>
        </div>

        {/* Desktop Get a Quote + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/contact"
            className="hidden md:block bg-accent hover:bg-yellow-400 text-brand-900 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
          >
            Get a Quote
          </NavLink>

          <button
            className="md:hidden text-brand-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-24 left-6 right-6 bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-5 border border-slate-100 md:hidden z-50 animate-in fade-in slide-in-from-top-4">

            <NavLink
              to="/"
              end
              className={activeClass}
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={activeClass}
              onClick={closeMobileMenu}
            >
              About
            </NavLink>

            <NavLink
              to="/service"
              className={activeClass}
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className={activeClass}
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>

            <div className="h-px bg-slate-100 my-2"></div>

            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
              className="bg-accent hover:bg-yellow-400 text-brand-900 px-6 py-3.5 rounded-full text-sm font-bold text-center w-full transition-colors"
            >
              Get a Quote
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
