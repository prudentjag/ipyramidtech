
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Users,
  Award,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: <Lightbulb size={25} />,
    title: 'Innovation',
    description:
      'We embrace new ideas and technologies to build smarter solutions to real-world problems.',
  },
  {
    icon: <ShieldCheck size={25} />,
    title: 'Integrity',
    description:
      'We believe in honesty, transparency, and building lasting relationships through trust.',
  },
  {
    icon: <Award size={25} />,
    title: 'Excellence',
    description:
      'We are committed to delivering quality solutions and continuously improving our work.',
  },
  {
    icon: <Users size={25} />,
    title: 'Customer Focus',
    description:
      'We put our clients first, understanding their needs and creating solutions that serve them.',
  },
];

export default function About() {
  return (
    <main className="w-full overflow-hidden">

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-900 font-semibold tracking-widest uppercase text-sm mb-5"
          >
            About iPyramidTech
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-brand-950 leading-tight mb-7"
          >
            Building Technology.
            <br />
            <span className="text-brand-900">
              Creating Possibilities.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            iPyramidTech is a technology company focused on building digital
            solutions, developing software, and helping organizations use
            technology to work smarter and achieve more.
          </motion.p>
        </div>

        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-100 blur-[120px] rounded-full opacity-60 -z-10" />
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-900 font-semibold uppercase tracking-widest text-sm mb-4">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-brand-950 mb-6">
              Technology That Moves Businesses Forward
            </h2>

            <p className="text-slate-600 leading-relaxed mb-5">
              We believe technology should do more than simply exist. It
              should solve problems, improve processes, and create meaningful
              opportunities for businesses and institutions.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Through software development, digital services, and technology
              support, we work to provide practical solutions that help our
              clients adapt, grow, and stay connected in an evolving digital
              world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-brand-950 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-brand-400/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                  <Lightbulb size={30} />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-5">
                  Turning Ideas Into Digital Solutions
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  From identifying challenges to developing practical
                  technology solutions, we are driven by the possibilities
                  technology creates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-900 font-semibold uppercase tracking-widest text-sm mb-4">
              Our Purpose
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-950">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-9 md:p-12">
              <div className="w-14 h-14 bg-brand-50 text-brand-900 rounded-2xl flex items-center justify-center mb-7">
                <Target size={28} />
              </div>

              <h3 className="text-2xl font-bold text-brand-950 mb-4">
                Our Mission
              </h3>

              <p className="text-slate-600 leading-relaxed">
                To deliver innovative, reliable, and practical technology
                solutions that empower businesses and institutions to
                overcome challenges and achieve their goals.
              </p>
            </div>

            <div className="bg-brand-950 rounded-3xl p-9 md:p-12 text-white">
              <div className="w-14 h-14 bg-white/10 text-accent rounded-2xl flex items-center justify-center mb-7">
                <Eye size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="text-slate-300 leading-relaxed">
                To become a trusted technology partner, creating impactful
                digital solutions that contribute to a smarter, more
                connected, and technologically empowered society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-900 font-semibold uppercase tracking-widest text-sm mb-4">
              What Guides Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-brand-950 mb-5">
              Our Core Values
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto">
              The principles that shape how we work, build relationships,
              and deliver technology solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-slate-200 rounded-2xl p-7 hover:border-brand-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-900 flex items-center justify-center mb-6">
                  {value.icon}
                </div>

                <h3 className="text-xl font-bold text-brand-950 mb-3">
                  {value.title}
                </h3>

                <p className="text-slate-500 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-brand-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something Meaningful.
          </h2>

          <p className="text-slate-300 text-lg mb-9">
            Have an idea, a challenge, or a project in mind? Let's explore
            how technology can help you move forward.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent text-brand-950 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Get In Touch
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

    </main>
  );
}
