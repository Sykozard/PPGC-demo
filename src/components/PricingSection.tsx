import { motion } from 'framer-motion';

const plans = [
  {
    name: "Hourly",
    price: "₹60",
    period: "/hour",
    description: "Perfect for quick sessions",
    features: ["Access to PS4/PS2", "Standard Controllers", "Basic Support"],
    popular: false,
    color: "secondary"
  },
  {
    name: "Weekend Pack",
    price: "₹400",
    period: "/4 hours",
    description: "The ultimate weekend grind",
    features: ["Access to PS5", "Priority Seating", "Free Drink", "Tournament Entry -10%"],
    popular: false,
    color: "accent"
  },
  {
    name: "Membership",
    price: "₹1,500",
    period: "/month",
    description: "Unlimited gaming access",
    features: ["Unlimited Hours*", "Any Console", "Free Tournament Entry", "Pro Controllers", "Locker Space"],
    popular: true,
    color: "primary"
  },
  {
    name: "Tournament",
    price: "₹100",
    period: "/event",
    description: "Compete and win cash prizes",
    features: ["Guaranteed Slot", "Warm-up Time", "Refreshments", "Live Stream Feature"],
    popular: false,
    color: "destructive"
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative z-20 bg-background/50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Plan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Affordable rates for premium gaming. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative bg-card rounded-3xl p-8 border ${
                plan.popular ? 'border-primary shadow-[0_0_30px_hsl(var(--primary)/0.2)]' : 'border-white/5'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_10px_hsl(var(--primary))]">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm text-foreground/80">
                    <svg className={`w-4 h-4 mr-3 text-${plan.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:-translate-y-1' 
                    : 'bg-white/5 text-white hover:bg-white/10 hover:-translate-y-1'
                }`}
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
