import React from 'react';
import { motion } from 'framer-motion';

const spices = [
  { id: 1, title: 'Cardamom', hindi: 'इलायची', origin: 'Kerala, India', desc: 'The queen of spices. Floral, warm, and unmistakably chai.', image: '/images/Cardamom.png' },
  { id: 2, title: 'Ginger', hindi: 'अदरक', origin: 'South Asia', desc: 'Raw heat that cuts through the milk and wakes every sense.', image: '/images/Ginger.png' },
  { id: 3, title: 'Cinnamon', hindi: 'दालचीनी', origin: 'Sri Lanka', desc: 'Bark coiled in sweetness. A whisper of the tropics.', image: '/images/Cinnamon.png' },
  { id: 4, title: 'Clove', hindi: 'लौंग', origin: 'Maluku Islands', desc: 'Intense and medicinal. The anchor of the spice chorus.', image: '/images/Clove.png' },
  { id: 5, title: 'Black Pepper', hindi: 'काली मिर्च', origin: 'Western Ghats', desc: 'The quiet fire. Subtle until you notice it everywhere.', image: '/images/BlackPepper.png' },
  { id: 6, title: 'Tulsi', hindi: 'तुलसी', origin: 'Indian Subcontinent', desc: 'Sacred basil. The soul of the masala, the one that heals.', image: '/images/Tulsi.png' },
];

const SpiceGrid: React.FC = () => {
  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-24 bg-cinema relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-serif italic text-ember/40 text-lg block mb-1">मसाले</span>
          <span className="font-display text-bark tracking-[0.25em] text-xs uppercase block mb-4">The Masala</span>
          <h2 className="font-serif italic text-4xl md:text-5xl text-cream mb-4">Six spices.<br/>One perfect cup.</h2>
          <div className="w-12 h-[1px] bg-ember"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bark/10">
          {spices.map((spice, index) => (
            <motion.div
              key={spice.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              className="group relative bg-cinema p-8 cursor-pointer h-72 flex flex-col justify-end z-10 hover:z-50"
            >
              {/* Overflow hidden container for background layers */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Hover background warmth */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              </div>

              {/* 3D Image Overlay */}
              <div className="absolute -top-6 -left-6 w-48 h-48 md:-top-8 md:-left-8 md:w-56 md:h-56 lg:-top-12 lg:-left-12 lg:w-64 lg:h-64 z-20 pointer-events-none opacity-100 md:opacity-15 md:group-hover:opacity-100 transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:-translate-y-2 md:group-hover:-translate-x-2 md:group-hover:scale-105">
                <img src={spice.image} alt={spice.title} className="w-full h-full object-contain drop-shadow-2xl" />
              </div>

              {/* Number */}
              <div className="absolute top-6 right-8 font-display text-bark/20 text-6xl group-hover:text-ember/30 transition-all duration-500 z-10">
                0{spice.id}
              </div>
              
              <div className="relative z-30">
                <p className="font-body text-bark text-xs tracking-[0.2em] uppercase mb-2 transform -translate-y-0 group-hover:-translate-y-1 transition-transform duration-400 flex items-center gap-3">
                  <span>{spice.origin}</span>
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-cream mb-3 group-hover:text-ember transition-all duration-300">
                  {spice.title} <span className="text-sm md:text-lg font-serif italic ml-2 opacity-40">- {spice.hindi}</span>
                </h3>
                <p className="font-body text-cream/50 text-sm leading-relaxed group-hover:text-cream/75 transition-colors duration-300">
                  {spice.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpiceGrid;
