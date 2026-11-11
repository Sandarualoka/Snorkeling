import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import OurJourney from './components/OurJourney';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <OurJourney />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
