import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ParticleField } from './ParticleField';
import { LiveStatus } from './LiveStatus';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      <ParticleField />
      
      {/* Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ y, opacity }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <LiveStatus />

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mt-8 mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-foreground to-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
              Level Up Your
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
              Game
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            Bilaspur's Ultimate Gaming Experience. Premium consoles, competitive esports, and a community of champions. Step into the arena.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <button 
              onClick={scrollToBooking}
              className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Book Your Session</span>
            </button>
            <button 
              onClick={() => document.querySelector('#stations')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              Explore Stations
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
