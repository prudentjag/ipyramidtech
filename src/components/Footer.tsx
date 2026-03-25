import { FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#0b1716] text-white pt-20 pb-8 px-6 border-t border-brand-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo1.png" alt="iPyramidTech Logo" className="h-8" />
              <span className="font-bold text-xl tracking-tight">I-PYRAMIDTECH</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Our digital solutions make production faster, institutions smarter, and payments seamless. Contact us for more information.
            </p>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Customers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Newsroom</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Events</a></li>
            </ul>
          </div>

          {/* Services Links (Replaces Industries from mockup) */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Web Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Mobile Applications</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">CCTV Operations</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">IT Consulting</a></li>
            </ul>
          </div>

          {/* Products Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">School Assistant</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Feemap Payments</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Result Management</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">CBT Infrastructure</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-6">Get In Touch</h4>
            <a href="mailto:ipyramidtech@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm block mb-6">
              ipyramidtech@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/ipyramidtech/" target='blank' className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <FiLinkedin size={18} />
              </a>
              <a href="https://www.instagram.com/ipyramid_tech/" target='blank' className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <FiInstagram size={18} />
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <FiFacebook size={18} />
              </a> */}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} iPyramidTech, All rights reserved
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Terms & Conditions</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
