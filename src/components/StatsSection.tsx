import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Trophy, Star, Gamepad2 } from 'lucide-react';

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const stats = [
    { icon: Users, value: 5000, suffix: "+", label: "Happy Gamers" },
    { icon: Trophy, value: 100, suffix: "+", label: "Tournaments Hosted" },
    { icon: Star, value: 4.9, suffix: "★", label: "Customer Rating", decimals: 1 },
    { icon: Gamepad2, value: 3, suffix: "", label: "Gaming Platforms" },
  ];

  return (
    <section className="py-20 bg-background border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-4 bg-white/5 rounded-full mb-4 group-hover:scale-110 group-hover:text-primary transition-all">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-4xl font-display font-bold mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
