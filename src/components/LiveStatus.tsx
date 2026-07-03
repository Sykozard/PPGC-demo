import { motion } from 'framer-motion';

export function LiveStatus() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
    >
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
      </div>
      <span className="text-sm font-medium tracking-wide text-foreground/90">
        Gaming Stations Available: <span className="text-accent font-bold">12/15</span>
      </span>
    </motion.div>
  );
}
