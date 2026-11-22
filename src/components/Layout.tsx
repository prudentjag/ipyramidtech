
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [pathname]);
  return (
    <div className="min-h-screen bg-background relative selection:bg-brand-900 selection:text-white pb-0">
      {/* Subtle top background glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand-50 to-transparent -z-10"></div>
      
      <Navbar />
      <div className="flex-1 w-full pt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
