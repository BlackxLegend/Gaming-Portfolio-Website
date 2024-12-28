import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedGames from './components/FeaturedGames';
import About from './components/About';

// Ambient background music URL
const bgMusic = 'https://github.com/jarif098/cdn/raw/refs/heads/main/1.mp3';

function App() {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [play, { stop }] = useSound(bgMusic, { loop: true });

  const toggleSound = () => {
    if (isSoundOn) {
      stop();
    } else {
      play();
    }
    setIsSoundOn(!isSoundOn);
  };

  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navigation toggleSound={toggleSound} isSoundOn={isSoundOn} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Hero />
                <FeaturedGames />
              </motion.div>
            } />
            
            <Route path="/about" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <About />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
