import { motion } from 'framer-motion';
import { CheckCircle2, CreditCard, RefreshCw } from 'lucide-react';

export default function Products() {
  const schoolFeatures = [
    "Student Registration & Admission",
    "Course & Result Management",
    "Fee & Payment Tracking",
    "Role-based Dashboards",
    "Parent & Student Portals"
  ];

  const feemapFeatures = [
    "Installment-based Fee Payment",
    "Parent Payment Portal",
    "School Financial Reporting",
    "POS & Bank Integration",
    "Automatic Receipts"
  ];

  return (
    <section id='products' className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-900 font-semibold text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span> Flagship Products
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-brand-900 mb-4"
          >
            Purpose-Built for Modern Institutions
          </motion.h2>
        </div>

        {/* Product 1: School Assistant */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
          {/* Mockup/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="rounded-3xl bg-slate-50 p-2 sm:p-4 shadow-inner overflow-hidden relative border border-slate-200">
              <img 
                src="/schoolassist.png" 
                alt="School Assistant Dashboard preview" 
                className="w-full h-auto rounded-2xl shadow-sm border border-slate-100 object-cover"
              />
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-3xl font-bold text-brand-900 mb-4">School Assistant</h3>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              A complete school management system designed for secondary schools and tertiary institutions. Automate operations, reduce paperwork, and centralize academic records seamlessly.
            </p>
            <ul className="space-y-4">
              {schoolFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Product 2: Feemap */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-16 mb-24">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-3xl font-bold text-brand-900 mb-4">Feemap</h3>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              A flexible fee payment platform that empowers parents and students. Break down financial barriers by allowing gradual, installment-based fee payments.
            </p>
            <ul className="space-y-4">
              {feemapFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-400 mt-1 flex-shrink-0" size={20} fill="currentColor" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mockup/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-brand-50 p-8 overflow-hidden flex flex-col justify-end relative shadow-inner">
              <div className="w-64 h-80 bg-white absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-3xl shadow-xl border-x border-t border-slate-200 p-6 flex flex-col items-center">
                <div className="w-16 h-1 rounded-full bg-slate-200 mb-8"></div>
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-brand-900 mb-4">
                  <CreditCard size={32} />
                </div>
                <h4 className="font-bold text-xl text-center mb-1">Make a Payment</h4>
                <p className="text-sm text-slate-500 text-center mb-6">Installment #2</p>
                <div className="w-full h-12 bg-brand-900 rounded-xl mt-auto shadow-md"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strong Advantage Highlight (Integration) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full rounded-3xl bg-brand-900 text-white p-8 md:p-16 text-center shadow-xl relative overflow-hidden"
        >
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="w-16 h-16 mx-auto bg-brand-800 rounded-2xl flex items-center justify-center mb-6 text-brand-400 border border-white/10">
            <RefreshCw size={32} />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">The iPyramidTech Advantage</h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            <strong>Feemap integrates directly with School Assistant.</strong> Students registered in our management system can pay fees through Feemap, and payments <span className="text-white under">automatically reflect</span> in the school's financial records in real-time.
          </p>
          <p className="text-accent font-semibold tracking-wide">
  One Connected Ecosystem
</p>
        </motion.div>

      </div>
    </section>
  );
}
