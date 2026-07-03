import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { id: 1, title: "Main Arena", span: "md:col-span-2 md:row-span-2", gradient: "from-purple-900 to-indigo-900" },
  { id: 2, title: "PS5 Lounge", span: "md:col-span-1 md:row-span-1", gradient: "from-blue-900 to-cyan-900" },
  { id: 3, title: "Tournament Setup", span: "md:col-span-1 md:row-span-2", gradient: "from-emerald-900 to-teal-900" },
  { id: 4, title: "Retro Corner", span: "md:col-span-1 md:row-span-1", gradient: "from-orange-900 to-red-900" },
  { id: 5, title: "Chill Zone", span: "md:col-span-2 md:row-span-1", gradient: "from-pink-900 to-rose-900" },
];

export function GallerySection() {
  const [selectedImg, setSelectedImg] = useState<typeof images[0] | null>(null);

  return (
    <section id="gallery" className="py-24 relative z-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider mb-4">
            Inside the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Arena</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at Bilaspur's most premium gaming lounge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedImg(img)}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              {/* Abstract Placeholder Image */}
              <div className={`absolute inset-0 bg-gradient-to-br ${img.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Texture Overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L3N2Zz4=')] mix-blend-overlay" />
              
              {/* Hover Content */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white mb-2 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                <span className="text-white font-bold tracking-wider uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`w-full max-w-5xl aspect-video rounded-2xl bg-gradient-to-br ${selectedImg.gradient} relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L3N2Zz4=')] mix-blend-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-3xl font-display font-bold uppercase text-white">{selectedImg.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
