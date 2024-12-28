import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, Github, Twitter, MessageCircle as DiscordIcon } from 'lucide-react';
import { NavLink } from './NavLink';
import { SocialIcon } from './SocialIcon';

const Navigation = ({ toggleSound, isSoundOn }: { toggleSound: () => void; isSoundOn: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
            NexusGaming
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" current={location.pathname}>Home</NavLink>
            <NavLink to="/about" current={location.pathname}>About</NavLink>
            <NavLink to="/games" current={location.pathname}>Games</NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSound}
              className="text-white hover:text-purple-400 transition-colors"
            >
              {isSoundOn ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </motion.button>
            
            <div className="flex space-x-4">
              <SocialIcon icon={<Github size={20} />} href="https://github.com" />
              <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com" />
              <SocialIcon icon={<DiscordIcon size={20} />} href="https://discord.com" />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;