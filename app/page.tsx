'use client';

import React from 'react';
import Hero from './components/Hero';
import CurrentSituation from './components/CurrentSituation';
import Advantages from './components/Advantages';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CurrentSituation />
      <Advantages />
      <Process />
      <FAQ />
      <Footer />
    </main>
  );
} 