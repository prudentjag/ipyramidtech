import { motion } from 'framer-motion';
import { Database, Cloud, Shield, Activity, Users, Smartphone, Monitor, Lock } from 'lucide-react';

export default function Integrations() {
  const floatingIcons = [
    { icon: <Database size={20} className="text-blue-500" />, top: "15%", left: "20%" },
    { icon: <Cloud size={20} className="text-brand-900" />, top: "10%", left: "60%" },
    { icon: <Shield size={20} className="text-emerald-500" />, top: "30%", left: "85%" },
    { icon: <Activity size={20} className="text-purple-500" />, top: "80%", left: "75%" },
    { icon: <Users size={20} className="text-orange-500" />, top: "85%", left: "30%" },
    { icon: <Smartphone size={20} className="text-red-500" />, top: "50%", left: "10%" },
    { icon: <Monitor size={20} className="text-brand-400" />, top: "50%", left: "40%" },
    { icon: <Lock size={20} className="text-yellow-500" />, top: "35%", left: "55%" },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-5/12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-900 mb-6 leading-tight">
            Empowering Top Companies with Seamless Integrations
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-8">
            Experience seamless connections with our innovative solutions, designed to effortlessly integrate with your existing systems, enhance productivity, and drive your business towards greater success.
          </p>
          <button className="bg-accent hover:bg-yellow-400 text-brand-900 px-8 py-3 rounded-full font-bold transition-colors shadow-sm">
            Work With Us
          </button>
        </motion.div>

        {/* Visual Content (Concentric Circles) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-7/12"
        >
          <div className="w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] bg-brand-50 rounded-[40px] relative overflow-hidden flex items-center justify-center border border-brand-100/50">
            {/* Outer Circle */}
            <div className="w-[80%] aspect-square rounded-full border border-brand-400/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            {/* Inner Circle */}
            <div className="w-[45%] aspect-square rounded-full border border-brand-400/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Center Node */}
            <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center z-10 border border-slate-100 p-2">
              <svg className="w-full h-full text-brand-900" viewBox="0 0 400 300" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 280 L180 20 H240 L320 280 H260 L210 100 L160 280 Z" />
                <path d="M165 280 L210 130 H250 L295 280 H250 L230 200 L210 280 Z" />
              </svg>
            </div>

            {/* Floating Icons */}
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  delay: index * 0.5 
                }}
                className="absolute w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center z-10"
                style={{ top: item.top, left: item.left }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
