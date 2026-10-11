import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { AreasOfWork } from './components/AreasOfWork';
import { WhoSheSupports } from './components/WhoSheSupports';
import { TrainingProgrammes } from './components/TrainingProgrammes';
import { Approach } from './components/Approach';
import { Background } from './components/Background';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AreasOfWork />
        <WhoSheSupports />
        <TrainingProgrammes />
        <Approach />
        <Background />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

