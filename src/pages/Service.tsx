import ServicesComponent from '../components/Services';
import CTA from '../components/CTA';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Service() {
  return (
    <div className="w-full">
      {/* Service Page Header */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-100 text-brand-900 text-sm font-semibold tracking-wide border border-brand-200">
            What We Do
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Services</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            We provide comprehensive digital solutions, from web and mobile development to IT consulting and CCTV installations. 
            Discover how iPyramidTech can transform your organization's digital workflow.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-brand-900 text-white hover:bg-brand-800 px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl group"
            >
              Get a Quote 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-300 blur-[120px] rounded-full opacity-20 -z-10 pointer-events-none"></div>
      </section>

      {/* Services Grid (reusing the existing component) */}
      <ServicesComponent />

      {/* Reusing CTA */}
      <CTA />
    </div>
  );
}
