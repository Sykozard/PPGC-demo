import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Gamepad2, User, Phone, CheckCircle2 } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

export function BookingSection() {
  const [date, setDate] = useState<Date>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="booking" className="py-24 relative z-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="grid md:grid-cols-2">
            
            {/* Left side - Info */}
            <div className="p-10 md:p-16 bg-gradient-to-br from-primary/10 to-transparent relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              
              <h2 className="text-4xl font-display font-bold uppercase tracking-wider mb-6">
                Reserve Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Station</span>
              </h2>
              
              <p className="text-muted-foreground mb-10">
                Skip the wait. Book your console in advance and guarantee your playtime. Especially recommended for weekends and tournaments.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Opening Hours</h4>
                    <p className="text-xs text-muted-foreground">Mon-Sun: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Instant Booking</h4>
                    <p className="text-xs text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="p-10 md:p-16">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Booking Request Sent!</h3>
                  <p className="text-muted-foreground text-sm">We'll confirm your slot via WhatsApp shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm text-primary hover:text-accent transition-colors underline"
                  >
                    Book another session
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white" placeholder="John Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input required type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white" placeholder="+91" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Console</label>
                    <div className="relative">
                      <Gamepad2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <select required defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white appearance-none cursor-pointer">
                        <option value="" disabled>Select Console</option>
                        <option value="ps5">PlayStation 5 (₹100/hr)</option>
                        <option value="ps4">PlayStation 4 (₹60/hr)</option>
                        <option value="ps2">PlayStation 2 (₹40/hr)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <button type="button" className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm flex items-center text-left text-white/80 hover:border-primary transition-colors">
                            <CalendarIcon className="w-4 h-4 mr-2 text-muted-foreground" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-card border-white/10" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="bg-card text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Time Slot</label>
                      <select required defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white appearance-none cursor-pointer">
                        <option value="" disabled>Select Time</option>
                        <option value="10am">10:00 AM - 12:00 PM</option>
                        <option value="12pm">12:00 PM - 02:00 PM</option>
                        <option value="2pm">02:00 PM - 04:00 PM</option>
                        <option value="4pm">04:00 PM - 06:00 PM</option>
                        <option value="6pm">06:00 PM - 08:00 PM</option>
                        <option value="8pm">08:00 PM - 11:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="w-full py-4 mt-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10">Confirm Booking</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
