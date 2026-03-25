import { motion, type Variants } from 'framer-motion';
import { ArrowRight, BarChart3, TrendingUp, CheckCircle2, Play } from 'lucide-react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-12 pb-24 flex flex-col items-center mt-8">
      {/* Text Content */}
      <div className="text-center max-w-3xl mb-16 relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -left-12 top-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400"
        >
          <TrendingUp size={14} />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -right-8 bottom-12 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-brand-900"
        >
          <CheckCircle2 size={12} />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-brand-900 tracking-tight leading-[1.1] mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Transforming Institutions with{" "}
          <span className="text-yellow-400">Smart Technology</span>
        </motion.h1>

        <motion.p
          className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          From comprehensive school management and flexible fee payments to
          custom software and CCTV surveillance. Experience the iPyramidTech
          advantage.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button className="bg-accent hover:bg-yellow-400 text-brand-900 px-8 py-4 rounded-full font-medium transition-all shadow-xl shadow-accent/20 flex items-center gap-2 w-full sm:w-auto justify-center">
            Explore Products <ArrowRight size={18} />
          </button>
          <button className="bg-white border border-slate-200 hover:bg-slate-50 text-brand-900 px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            View Services
          </button>

          <div className="flex items-center gap-3 ml-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold ${i === 4 ? "bg-slate-100 text-slate-600" : "bg-slate-200"}`}
                >
                  {i === 4 ? "5.0" : ""}
                </div>
              ))}
            </div>
            <div className="text-left text-xs">
              <div className="flex text-yellow-400">★★★★★</div>
              <span className="text-slate-500 font-medium">
                Over 2k+ reviews
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 h-auto md:h-[400px]"
      >
        {/* Card 1: Image (Tall) */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-1 rounded-3xl overflow-hidden relative h-64 md:h-full bg-slate-200"
        >
          <img
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop"
            alt="African student using technology"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Card 2: 100+ Manufacturers (Dark Green, Tall-ish) */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-1 rounded-3xl bg-brand-900 text-white p-6 flex flex-col justify-end h-64 md:h-full relative overflow-hidden group"
        >
          {/* Faint Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/sewing.jpg"
              alt="A man is working on a sewing machine"
              className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/80 to-transparent"></div>
          </div>
          
          <div className="absolute -right-4 -top-4 w-32 h-32 bg-brand-400 rounded-full opacity-20 blur-2xl z-0"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-2">100+</h3>
            <p className="text-brand-accent/80 text-sm leading-tight text-slate-300">
              Institutions trust I-PYRAMIDTECH
            </p>
          </div>
        </motion.div>

        {/* Center column stacked */}
        <div className="md:col-span-2 grid grid-rows-2 gap-4 h-64 md:h-full">
          {/* Card 3: Total Projects (White) */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl bg-white border border-slate-100 p-6 flex flex-col justify-between shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-900">
                <BarChart3 size={20} />
              </div>
              <span className="text-xs font-semibold text-brand-400 bg-brand-50 px-2 py-1 rounded-full">
                +12%
              </span>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium mb-1">
                Active Students
              </p>
              <h3 className="text-3xl font-bold text-brand-900">50,000+</h3>
              <p className="text-xs text-brand-400 mt-2 flex items-center gap-1">
                <CheckCircle2 size={12} /> Managed via School Assistant
              </p>
            </div>
          </motion.div>

          {/* Card 4: 6M Revenue (Light Green) */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl bg-accent p-6 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center text-brand-900">
              <span className="font-bold">$</span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-brand-900 mb-1">
                100<span className="text-2xl">%</span>
              </h3>
              <p className="text-brand-900/70 text-sm font-medium">
                Integrated Fee Payments via Feemap
              </p>
            </div>
          </motion.div>
        </div>

        {/* Card 5: Enhance Efficiency (Dark Green, Tall) */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-1 rounded-3xl bg-brand-950 text-white p-6 flex flex-col justify-between h-64 md:h-full relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-48 h-48 bg-brand-800 rounded-full opacity-50 -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
            <Play size={16} className="text-white ml-1" fill="currentColor" />
          </div>

          <div>
            <h3 className="text-xl font-bold leading-snug mb-2">
              Seamless Integration: School Assistant & Feemap
            </h3>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
