import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;