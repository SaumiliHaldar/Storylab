import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import ChapterIntro from './components/ChapterIntro';
import VisualBlocks from './components/VisualBlocks';
import SpiceGrid from './components/SpiceGrid';
import Timeline from './components/Timeline';

import Finale from './components/Finale';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-cinema text-cream min-h-screen">
      <Hero />
      <ChapterIntro />
      <VisualBlocks />
      <SpiceGrid />
      <Timeline />
      <Finale />
    </main>
  );
}

export default App;
