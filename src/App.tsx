import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Integrations from './components/Integrations';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-brand-900 selection:text-white pb-0">
      {/* Subtle top background glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand-50 to-transparent -z-10"></div>
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Integrations />
      </main>
      
      {/* Footer/CTA section placed at the bottom */}
      <CTA />
      <Footer />
    </div>
  )
}

export default App
