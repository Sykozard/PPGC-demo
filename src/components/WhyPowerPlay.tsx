import { motion } from 'framer-motion';
import { Rocket, Shield, Crosshair, MapPin, Wind, Sparkles } from 'lucide-react';

const reasons = [
  { icon: Rocket, title: "Fast Gaming Experience", desc: "Latest gen consoles with SSDs. Zero load times." },
  { icon: Shield, title: "Premium Consoles", desc: "Meticulously maintained hardware and controllers." },
  { icon: Crosshair, title: "Competitive Events", desc: "Regular tournaments with real cash prizes." },
  { icon: MapPin, title: "Prime Location", desc: "Easily accessible in the heart of Bilaspur." },
  { icon: Wind, title: "Air Conditioned", desc: "Cool environment even during intense matches." },
  { icon: Sparkles, title: "Friendly Community", desc: "Meet players who share your passion." },
];

export function WhyPowerPlay() {
  return (
    <section className="py-24 relative z-20 bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-wider mb-4">
            Why Choose <span className="text-primary">PowerPlay?</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="mt-1 p-3 rounded-xl bg-white/5 border border-white/10 text-accent">
                <reason.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-white/90">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
