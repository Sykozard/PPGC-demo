import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, ChevronRight } from 'lucide-react';

const tournaments = [
  {
    game: "EA FC 25 Championship",
    prize: "₹5,000",
    date: "Next Saturday, 5 PM",
    slots: 8,
    imageStyle: "from-blue-900 to-indigo-900"
  },
  {
    game: "Tekken 8 Throwdown",
    prize: "₹3,500",
    date: "Sunday, 2 PM",
    slots: 4,
    imageStyle: "from-red-900 to-orange-900"
  },
  {
    game: "Call of Duty Warzone",
    prize: "₹10,000",
    date: "End of Month",
    slots: 12,
    imageStyle: "from-green-900 to-emerald-900"
  }
];

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ d: 4, h: 12, m: 30, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        if (prev.d > 0) return { ...prev, d: prev.d - 1, h: 23, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center md:justify-start">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-16 h-16 bg-black/50 backdrop-blur-sm border border-accent/30 rounded-lg flex items-center justify-center text-2xl font-bold font-mono text-accent shadow-[0_0_15px_rgba(0,255,255,0.2)]">
            {value.toString().padStart(2, '0')}
          </div>
          <span className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{unit}</span>
        </div>
      ))}
    </div>
  );
}

export function TournamentSection() {
  return (
    <section id="tournaments" className="py-24 relative z-20">
      <div className="container mx-auto px-6">
        {/* Featured Tournament Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full rounded-3xl overflow-hidden relative mb-20 border border-primary/30 shadow-[0_0_50px_hsl(var(--primary)/0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNGg0di0yaC0yeiIgZmlsbD0iIzlhM2FmOSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9nPjwvc3ZnPg==')] z-0 opacity-20" />
          
          <div className="relative z-20 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/50 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                Featured Event
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4 text-white">
                PowerPlay <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Pro League</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The biggest EA FC 25 tournament in Bilaspur. Show your skills, win the grand prize, and earn the title of Champion.
              </p>
              
              <div className="mb-10">
                <p className="text-sm uppercase tracking-widest text-white/50 mb-3">Registrations close in:</p>
                <Countdown />
              </div>

              <button className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] hover:-translate-y-1 transition-all duration-300 w-full md:w-auto">
                Register Now — ₹500
              </button>
            </div>

            <div className="hidden md:flex flex-col items-end gap-6 text-right">
              <div className="bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Prize Pool</p>
                <p className="text-5xl font-display font-bold text-accent">₹25,000</p>
              </div>
              <div className="bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Total Slots</p>
                <p className="text-4xl font-display font-bold text-white">32<span className="text-2xl text-muted-foreground">/64</span></p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Regular Tournaments Grid */}
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h3 className="text-3xl font-display font-bold uppercase tracking-wider mb-2">Upcoming Events</h3>
            <p className="text-muted-foreground">Weekly challenges for everyone.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tournaments.map((t, i) => (
            <motion.div
              key={t.game}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent/50 transition-colors"
            >
              <div className={`h-32 bg-gradient-to-br ${t.imageStyle} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-accent border border-accent/30">
                  {t.prize} Pool
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{t.game}</h4>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-3" />
                    {t.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-3" />
                    {t.slots} Slots Remaining
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm font-bold uppercase tracking-wider text-primary group-hover:text-accent transition-colors">
                  View Details
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
