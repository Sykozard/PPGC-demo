import { useEffect, useRef } from 'react';

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; size: number; speedX: number; speedY: number; color: string; alpha: number }[] = [];
    // Deep purple, electric blue, cyan
    const colors = ['#8A2BE2', '#00FFFF', '#007BFF'];
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const createParticles = () => {
      particles = [];
      const numParticles = Math.floor((w * h) / 12000);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.6 - 0.3,
          speedY: Math.random() * 0.6 - 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.1
        });
      }
    };

    let rafId: number;

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > w) p.x = 0;
        else if (p.x < 0) p.x = w;
        if (p.y > h) p.y = 0;
        else if (p.y < 0) p.y = h;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;
      rafId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      createParticles();
    };

    createParticles();
    rafId = requestAnimationFrame(animate);

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-50" />;
}
