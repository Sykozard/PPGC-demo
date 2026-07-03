import { motion } from 'framer-motion';
import { MonitorPlay, Joystick, Gamepad } from 'lucide-react';

const stations = [
  {
    name: "PlayStation 5",
    badge: "PRO",
    icon: MonitorPlay,
    features: ["4K Gaming at 60fps+", "Haptic Feedback", "Ultra HD Blu-ray", "Adaptive Triggers"],
    players: "Up to 4 Players",
    controller: "DualSense",
    available: true,
    color: "primary"
  },
  {
    name: "PlayStation 4",
    badge: "CLASSIC",
    icon: Gamepad,
    features: ["1080p HD Gaming", "Vast Game Library", "HDR Support", "VR Compatible"],
    players: "Up to 4 Players",
    controller: "DualShock 4",
    available: true,
    color: "secondary"
  },
  {
    name: "PlayStation 2",
    badge: "RETRO",
    icon: Joystick,
    features: ["Nostalgic Classics", "Zero Lag CRT Feel", "Original Memory Cards", "Split-screen Co-op"],
    players: "Up to 2 Players",
    controller: "DualShock 2",
    available: false,
    color: "accent"
  }
];

export function GamingStations() {
  return (
    <section id="stations" className="py-24 relative z-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider mb-4">
            Gaming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Stations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the evolution of gaming with our meticulously maintained console setups.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stations.map((station, i) => (
            <motion.div
              key={station.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-white/5 rounded-3xl p-8 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-${station.color}`} />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/40 transition-colors" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 text-${station.color} group-hover:scale-110 transition-transform`}>
                    <station.icon className="w-10 h-10" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-white/10 text-white uppercase border border-white/5">
                    {station.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold mb-6">{station.name}</h3>

                <ul className="space-y-3 mb-8">
                  {station.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-2 mb-8 p-4 rounded-xl bg-background/50 border border-white/5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Multiplayer</span>
                    <span className="font-medium text-white">{station.players}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Controller</span>
                    <span className="font-medium text-white">{station.controller}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  {station.available ? (
                    <span className="inline-flex items-center text-sm font-medium text-green-400">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2" />
                      Available Now
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-sm font-medium text-orange-400">
                      <span className="w-2 h-2 rounded-full bg-orange-400 mr-2" />
                      In Use
                    </span>
                  )}
                  
                  <button 
                    className={`p-2 rounded-lg bg-white/5 hover:bg-${station.color} transition-colors border border-white/10`}
                    onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="sr-only">Book {station.name}</span>
                    <MonitorPlay className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
