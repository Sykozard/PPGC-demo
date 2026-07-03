import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Instagram } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider mb-6">
              Find <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Us</span>
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Ready to play? Drop by our lounge or reach out to reserve your spot.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl text-accent border border-white/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">Near City Mall, VIP Road<br />Bilaspur, CG 495001</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/50 rounded-lg hover:bg-[#25D366] hover:text-white transition-all shadow-[0_0_15px_rgba(37,211,102,0.2)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)]">
                <MessageCircle className="w-5 h-5" />
                <span className="font-bold">WhatsApp</span>
              </button>
              
              <button className="flex items-center gap-2 px-6 py-3 bg-secondary/20 text-secondary border border-secondary/50 rounded-lg hover:bg-secondary hover:text-white transition-all shadow-[0_0_15px_hsl(var(--secondary)/0.2)] hover:shadow-[0_0_25px_hsl(var(--secondary)/0.5)]">
                <Phone className="w-5 h-5" />
                <span className="font-bold">Call Us</span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 group"
          >
            {/* Abstract Map Placeholder */}
            <div className="absolute inset-0 bg-card">
              {/* Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
              
              {/* Fake Roads */}
              <div className="absolute top-1/2 left-0 right-0 h-4 bg-white/5 transform -translate-y-1/2 rotate-12" />
              <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-white/5 transform -translate-x-1/2 -rotate-12" />
              
              {/* Location Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:scale-110 transition-transform duration-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50" />
                  <MapPin className="w-12 h-12 text-primary relative z-10 drop-shadow-[0_0_10px_hsl(var(--primary))]" fill="currentColor" />
                </div>
                <div className="mt-2 px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/10 rounded-md text-xs font-bold whitespace-nowrap">
                  PowerPlay Gaming Cafe
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
