import { motion, type Variants } from 'framer-motion';
import { Monitor, Smartphone, Video, LineChart, ShieldCheck, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="text-yellow-400" size={24} />,
    title: "Web Development",
    description: "Custom, responsive websites and web applications tailored to your organizational needs."
  },
  {
    icon: <Smartphone className="text-yellow-400" size={24} />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that engage your audience anywhere."
  },
  {
    icon: <Video className="text-yellow-400" size={24} />,
    title: "CCTV Installation & Surveillance",
    description: "State-of-the-art security systems to ensure the safety of your premises."
  },
  {
    icon: <Monitor className="text-yellow-400" size={24} />, // Reusing icon for software
    title: "Software Solutions",
    description: "End-to-end software systems designed specifically for modern institutions."
  },
  {
    icon: <LineChart className="text-yellow-400" size={24} />,
    title: "IT Consulting & Digital Transformation",
    description: "Expert guidance to modernize your workflows and integrate new technologies."
  },
  {
    icon: <ShieldCheck className="text-yellow-400" size={24} />,
    title: "IT Support & Maintenance",
    description: "Reliable, ongoing technical support to keep your operations running smoothly."
  }
];

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="bg-brand-950 py-24 px-6 mt-12 text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Core IT & Digital Services
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-200 max-w-2xl mx-auto text-lg"
          >
            Empowering institutions with tailored digital solutions, robust security, and seamless technical integration.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-brand-800 rounded-2xl p-8 hover:bg-brand-800/80 transition-colors group cursor-pointer border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 text-brand-400">
                <ArrowUpRight size={24} />
              </div>
              <div className="mb-6 w-12 h-12 text-yellow-400 rounded-lg bg-white/5 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
