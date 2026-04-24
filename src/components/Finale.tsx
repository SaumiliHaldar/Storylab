import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const AromaParticle = ({ mouseX, mouseY }: { mouseX: any; mouseY: any }) => {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 5;
  const randomSize = 10 + Math.random() * 40;
  
  // Parallax based on mouse
  const px = useTransform(mouseX, [0, window.innerWidth], [5, -5]);
  const py = useTransform(mouseY, [0, window.innerHeight], [5, -5]);

  return (
    <motion.div
      initial={{ opacity: 0, y: '110vh', x: `${randomX}vw`, scale: 0 }}
      animate={{ 
        opacity: [0, 0.15, 0], 
        y: '-20vh',
        scale: [0.5, 1.5, 2],
        x: [`${randomX}vw`, `${randomX + (Math.random() * 10 - 5)}vw`]
      }}
      transition={{ 
        duration: 8 + Math.random() * 4, 
        repeat: Infinity, 
        delay: randomDelay,
        ease: "linear"
      }}
      className="absolute rounded-full bg-cream blur-3xl pointer-events-none"
      style={{ 
        x: px, 
        y: py,
        width: randomSize, 
        height: randomSize,
        left: 0,
        top: 0
      }}
    />
  );
};

const Finale: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax transforms
  const bgX = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [15, -15]);
  const bgY = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [15, -15]);
  
  const spice1X = useTransform(smoothX, [0, 1920], [40, -40]);
  const spice1Y = useTransform(smoothY, [0, 1080], [40, -40]);
  const spice1Rotate = useTransform(smoothX, [0, 1920], [-10, 10]);

  const spice2X = useTransform(smoothX, [0, 1920], [-60, 60]);
  const spice2Y = useTransform(smoothY, [0, 1080], [-60, 60]);
  const spice2Rotate = useTransform(smoothY, [0, 1080], [15, -15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen flex flex-col justify-center items-center bg-cinema overflow-hidden z-10"
    >
      {/* Background Layer with Parallax */}
      <motion.div 
        style={{ x: bgX, y: bgY, scale: 1.1 }}
        className="absolute inset-0 z-0 opacity-40 grayscale-[0.2] contrast-[1.1]"
      >
        <img 
          src="/images/finale_bg.png" 
          alt="Steeping Chai" 
          className="w-full h-full object-cover"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinema via-transparent to-cinema opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cinema via-transparent to-cinema opacity-40"></div>
      </motion.div>

      {/* Aroma Particle System */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <AromaParticle key={i} mouseX={smoothX} mouseY={smoothY} />
        ))}
      </div>

      {/* Floating Spices */}
      <motion.div 
        style={{ x: spice1X, y: spice1Y, rotate: spice1Rotate }}
        className="absolute top-[15%] right-[10%] w-64 h-64 z-2 pointer-events-none opacity-20 blur-[2px]"
      >
        <img src="/images/Cardamom.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div 
        style={{ x: spice2X, y: spice2Y, rotate: spice2Rotate }}
        className="absolute bottom-[10%] left-[5%] w-80 h-80 z-2 pointer-events-none opacity-15 blur-[4px]"
      >
        <img src="/images/Cinnamon.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center flex flex-col items-center px-6"
      >
        <motion.span 
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          whileInView={{ opacity: 0.4, letterSpacing: '0.4em' }}
          transition={{ duration: 2, delay: 0.5 }}
          className="font-display text-cream tracking-[0.4em] text-xs uppercase block mb-8"
        >
          The Last Drop
        </motion.span>
        
        <h2 className="font-serif italic text-6xl md:text-8xl lg:text-9xl text-cream mb-6 leading-tight select-none">
          Your cup<br/>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-ember inline-block"
          >
            is waiting.
          </motion.span>
        </h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-body text-cream text-base md:text-lg mb-14 max-w-md leading-relaxed"
        >
          The story of CHAI never truly ends. It just settles, deep and warm, waiting for the next pour.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="group relative px-14 py-6 overflow-hidden border border-cream/10 bg-transparent text-cream font-display tracking-[0.3em] uppercase text-sm md:text-base cursor-pointer z-20"
        >
          <span className="relative z-10 group-hover:text-cinema transition-colors duration-500">Steep the Experience</span>
          
          {/* Liquid Brewing Effect */}
          <div className="absolute inset-0 bg-ember transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
          
          {/* Subtle glow on hover */}
          <div className="absolute -inset-1 bg-ember/0 group-hover:bg-ember/20 blur-xl transition-all duration-700 -z-10"></div>
        </motion.button>
      </motion.div>

      {/* Refined Footer */}
      <div className="absolute bottom-10 w-full px-12 flex justify-between items-center z-10 pointer-events-none">
        <div className="font-body text-cream/20 text-[10px] tracking-[0.3em] uppercase">
          CHAI © {new Date().getFullYear()} · EST. IN TRADITION
        </div>
        
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="font-serif italic text-2xl text-ember/40 lowercase tracking-widest"
        >
          फिर मिलेंगे
        </motion.div>

        <div className="hidden md:block font-body text-cream/20 text-[10px] tracking-[0.3em] uppercase">
          CRAFTED WITH SOUL
        </div>
      </div>

      {/* Screen edge grain/texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
    </section>
  );
};

export default Finale;
