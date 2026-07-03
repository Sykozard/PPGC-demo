import { motion } from 'framer-motion';
import { Lightbulb, Armchair, Zap, Wifi, Users2, Coffee } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: "RGB Setup",
    desc: "Immersive reactive lighting"
  },
  {
    icon: Armchair,
    title: "Comfortable Seating",
    desc: "Ergonomic gaming chairs"
  },
  {
    icon: Zap,
    title: "Competitive Gaming",
    desc: "Zero-lag environment"
  },
  {
    icon: Wifi,
    title: "High Speed Internet",
    desc: "Gigabit fiber connection"
  },
  {
    icon: Users2,
    title: "Multiplayer Fun",
    desc: "Local & online co-op"
  },
  {
    icon: Coffee,
    title: "Chill Zone",
    desc: "Lounge and refreshments"
  }
];

export function AtmosphereSection() {
  return (
    <section className="py-24 relative z-20 bg-background/50 border-y border-white/5 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider mb-4">
            The PowerPlay <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every detail designed to keep you in the zone.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                <feature.icon className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold mb-2 text-white/90">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
