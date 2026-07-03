import { Instagram, Youtube, Twitter, Gamepad2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5 relative z-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-6 h-6 text-primary" />
          <span className="font-display font-bold text-xl tracking-widest text-white/90">
            POWERPLAY
          </span>
        </div>
        
        <p className="text-xs text-muted-foreground text-center md:text-left">
          © 2025 PowerPlay Gaming Cafe, Bilaspur. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href="#" className="p-2 text-muted-foreground hover:text-accent hover:bg-white/5 rounded-full transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 text-muted-foreground hover:text-[#FF0000] hover:bg-white/5 rounded-full transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 text-muted-foreground hover:text-blue-400 hover:bg-white/5 rounded-full transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
