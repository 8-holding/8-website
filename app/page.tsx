import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import Approach from '@/components/Approach';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <WhatWeDo />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
