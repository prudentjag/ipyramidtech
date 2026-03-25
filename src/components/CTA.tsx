import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative w-full bg-brand-950 overflow-hidden py-32 px-6">
      {/* Perspective Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none perspective-1000">
        <div className="absolute inset-x-[-50%] top-[-50%] bottom-0 transform rotate-x-60">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="perspective-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#2dd4bf" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#perspective-grid)" />
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
        >
          From Idea to Production in Days
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-200 text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          Accelerate your production with our technology. Reduce downtime and optimize costs. Get a special offer now!
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-accent hover:bg-yellow-400 text-brand-900 px-8 py-3 rounded-full font-bold transition-colors shadow-lg shadow-black/20"
        >
          Work With Us
        </motion.button>
      </div>

      {/* Top inline gradient mask to blend with whitespace above if necessary */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-brand-950 to-transparent pointer-events-none"></div>
    </section>
  );
}
