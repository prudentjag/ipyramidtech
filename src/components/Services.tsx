
import { motion, type Variants } from 'framer-motion';


import {
  Code,
  Smartphone,
  Camera,
  Blocks,
  Lightbulb,
  Headset,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: <Code size={24} />,
    title: 'Web Development',
    description:
      'Custom, responsive websites and web applications tailored to your organizational needs.',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile experiences that engage your audience anywhere.',
  },
  {
    icon: <Camera size={24} />,
    title: 'CCTV Installation & Surveillance',
    description:
      'Professional security camera installations and surveillance systems to help protect your premises.',
  },
  {
    icon: <Blocks size={24} />,
    title: 'Software Solutions',
    description:
      'End-to-end software systems designed specifically for modern businesses and institutions.',
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'IT Consulting & Digital Transformation',
    description:
      'Expert guidance to modernize your workflows and integrate technology into your operations.',
  },
  {
    icon: <Headset size={24} />,
    title: 'IT Support & Maintenance',
    description:
      'Reliable technical support and maintenance to keep your systems and operations running smoothly.',
  },
];

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
      },
    },
  };

  return (
    <section id='services' className="bg-brand-950 py-24 px-6 mt-12 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-semibold uppercase tracking-widest text-sm mb-4"
          >
            What We Offer
          </motion.p>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-5 tracking-tight"
          >
            Core IT & Digital Services
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Empowering institutions and businesses with tailored digital
            solutions, reliable technology and seamless technical integration.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-400/10 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-300" />

              {/* Icon */}
              <div className="relative mb-7 w-14 h-14 text-accent rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-brand-950 transition-all duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="relative text-xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative text-slate-300 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Decorative Arrow */}
              <div className="absolute bottom-8 right-8 text-accent opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
