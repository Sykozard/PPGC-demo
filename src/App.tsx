import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

// Components
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { GamingStations } from './components/GamingStations';
import { PricingSection } from './components/PricingSection';
import { TournamentSection } from './components/TournamentSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { GallerySection } from './components/GallerySection';
import { WhyPowerPlay } from './components/WhyPowerPlay';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <GamingStations />
        <PricingSection />
        <TournamentSection />
        <AtmosphereSection />
        <GallerySection />
        <WhyPowerPlay />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base="">
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
