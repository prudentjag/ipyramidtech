import Hero from '../components/Hero';
import Services from '../components/Services';
import Products from '../components/Products';
import Integrations from '../components/Integrations';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Products />
        <Integrations />
      </main>
      
      <CTA />
    </>
  );
}
