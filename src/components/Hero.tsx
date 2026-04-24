import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/hero_chai.png')" }}
      />
      
      {/* Radial Ember Glow */}
      <div className="absolute inset-0 z-0" 
           style={{ background: 'radial-gradient(circle at 50% 60%, rgba(212, 126, 48, 0.35) 0%, transparent 65%)' }} />

      <div className="z-10 text-center flex flex-col items-center px-4">
        <motion.span
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-ember text-sm md:text-base tracking-[0.3em] uppercase mb-6 block"
        >
          An Ancient Ritual
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-serif italic text-[4.5rem] md:text-[8rem] lg:text-[11rem] text-cream leading-none tracking-tight"
        >
          Chai
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.2 }}
          className="font-body text-cream/60 text-base md:text-lg mt-6 tracking-[0.08em] max-w-md"
        >
          Where earth meets fire. Where spice tells the story.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center z-10"
      >
        <span className="font-body text-cream/40 text-[10px] tracking-[0.3em] uppercase mb-4">Scroll</span>
        <div className="w-[1px] h-16 bg-cream/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute inset-0 bg-ember"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
