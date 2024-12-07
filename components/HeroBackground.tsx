import React from 'react';
import '../public/background.png';

interface HeroBackgroundProps {
  children: React.ReactNode;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ children }) => {
  return (
    <div
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-600/90" />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};