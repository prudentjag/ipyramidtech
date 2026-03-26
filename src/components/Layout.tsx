import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-brand-900 selection:text-white pb-0">
      {/* Subtle top background glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand-50 to-transparent -z-10"></div>
      
      <Navbar />
      <div className="flex-1 w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
