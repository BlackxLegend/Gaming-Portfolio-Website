import React from 'react';
import { motion } from 'framer-motion';

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

export const SocialIcon = ({ icon, href }: SocialIconProps) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-purple-400 transition-colors"
  >
    {icon}
  </motion.a>
);