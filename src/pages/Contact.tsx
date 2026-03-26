import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-20 bg-white overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-50" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', 
          backgroundSize: '4rem 4rem',
          backgroundPosition: 'center center'
        }}
      ></div>
      {/* Top subtle fading for grid */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6 tracking-tight">
            Contact our team
          </h2>
          <p className="text-lg text-slate-600">
            Got any questions about the product or scaling on our platform? We're here to help. <br className="hidden md:block"/>
            Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Form */}
          <div className="flex-1">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">First name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    placeholder="First name" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">Last name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Last name" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="you@company.com" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone number</label>
                <div className="flex border border-slate-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-brand-500 focus-within:border-brand-500 transition-shadow">
                  <select className="bg-slate-50 border-r border-slate-300 px-3 py-3 text-slate-600 outline-none">
                    <option>US</option>
                    <option>UK</option>
                    <option>CA</option>
                  </select>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+1 (555) 000-0000" 
                    className="flex-1 px-4 py-3 outline-none w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Leave us a message..." 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow resize-y"
                ></textarea>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-slate-700">Services</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {['Website design', 'Content creation', 'UX design', 'Strategy & consulting', 'User research', 'Other'].map((service) => (
                    <label key={service} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="w-5 h-5 border border-slate-300 rounded-md peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-colors"></div>
                        <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-600 group-hover:text-slate-900 transition-colors">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-yellow-500 hover:bg-slate-800 text-brand-900 font-semibold py-3.5 px-6 rounded-lg transition-colors mt-4"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:w-[380px] space-y-10 rounded-xl bg-brand-950 p-8 shadow-xl">
            {/* Chat with us */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Chat with us</h3>
              <p className="text-brand-100/70 mb-6">Speak to our friendly team via live chat.</p>
              
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-white font-medium hover:text-yellow-400 transition-colors underline decoration-white/20 hover:decoration-yellow-400/50 underline-offset-4">
                  <MessageCircle className="w-5 h-5 text-yellow-500" />
                  Start a live chat
                </a>
                <a href="#" className="flex items-center gap-3 text-white font-medium hover:text-yellow-400 transition-colors underline decoration-white/20 hover:decoration-yellow-400/50 underline-offset-4">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  Shoot us an email
                </a>
                <a href="#" className="flex items-center gap-3 text-white font-medium hover:text-yellow-400 transition-colors underline decoration-white/20 hover:decoration-yellow-400/50 underline-offset-4">
                  <FaXTwitter className="w-5 h-5 text-yellow-500" />
                  Message us on X
                </a>
              </div>
            </div>

            {/* Call us */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Call us</h3>
              <p className="text-brand-100/70 mb-4">Call our team Mon-Sat from 8am to 9pm.</p>
              <a href="tel:+2348149370159" className="flex items-center gap-3 text-white font-medium hover:text-yellow-400 transition-colors underline decoration-white/20 hover:decoration-yellow-400/50 underline-offset-4">
                <Phone className="w-5 h-5 text-yellow-500" />
                08149370159
              </a>
            </div>

            {/* Visit us */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Visit us</h3>
              <p className="text-brand-100/70 mb-4">Chat to us in person at;</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white font-medium hover:text-yellow-400 transition-colors underline decoration-white/20 hover:decoration-yellow-400/50 underline-offset-4">
                <MapPin className="w-5 h-5 text-yellow-500" />
                Plot 70a Agbama Housing Estate, Umuahia, Abia State
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
