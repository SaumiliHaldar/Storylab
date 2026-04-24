import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VisualBlocks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="w-full flex flex-col relative z-10">
      {/* Block 1 - The Fire */}
      <div className="relative h-[80vh] w-full overflow-hidden flex items-center px-6 md:px-24">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-55"
          style={{ 
            backgroundImage: "url('/images/spice_block.png')",
            y: y1
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cinema via-cinema/60 to-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl"
        >
          <span className="font-display text-ember tracking-[0.3em] text-xs uppercase mb-4 block">The Heat</span>
          <h3 className="font-serif italic text-4xl md:text-6xl text-cream leading-tight">
            "Fire is not a villain. It is the alchemist that transforms leaves into legend."
          </h3>
        </motion.div>
      </div>

      {/* Block 2 - The Time */}
      <div className="relative h-[80vh] w-full overflow-hidden flex items-center justify-end px-6 md:px-24">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-55"
          style={{ 
            backgroundImage: "url('/images/hero_chai.png')",
            y: y2
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-cinema via-cinema/60 to-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl text-right"
        >
          <span className="font-display text-ember tracking-[0.3em] text-xs uppercase mb-4 block">The Wait</span>
          <h3 className="font-serif italic text-4xl md:text-6xl text-cream leading-tight">
            "Good chai cannot be rushed. It steeps on its own time, like every story worth telling."
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualBlocks;
