import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import bracLogo from "@/assets/brac-logo-big.png";
import robiLogo from "@/assets/robi.png";
import grameenLogo from "@/assets/grameen.png";
import squareLogo from "@/assets/square.png";
import buetLogo from "@/assets/buet.png";
import duLogo from "@/assets/DU.png";

// Add CSS for animation
const scrollAnimation = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    animation: scroll 15s linear infinite;
  }
`;

// Inject CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = scrollAnimation;
  document.head.appendChild(style);
}
export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="w-full mx-auto px-2 sm:px-6 py-12 sm:py-20 md:py-32 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <div className="space-y-5 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent/10 rounded-full">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap">
                Next Generation Vending Experience                                        
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Fresh Food,
              <br />
              <span className="text-primary">Smart Life</span>
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Smart fridges delivering fresh, hygienic food 24/7. Install at your workspaces or become a franchise operator.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center lg:justify-start items-center">
              <Button size="lg" className="text-xs sm:text-lg px-6 sm:px-8 py-3 sm:py-6 group w-auto" onClick={() => scrollToSection("business-models")}>
                Install Machine
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" className="text-xs sm:text-lg px-6 sm:px-8 py-3 sm:py-6 w-auto" onClick={() => scrollToSection("contact")}>
                Book a Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-border">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">1000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Year 3 Target</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Always Open</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Fresh & Safe</div>
              </div>
            </div>
          </div>

          {/* Right: Video */}
          <div className="relative px-2 sm:px-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <iframe src="https://www.youtube-nocookie.com/embed/o8ahmgEQtZU?modestbranding=1&controls=0&rel=0&showinfo=0&iv_load_policy=3&disablekb=1" title="O Mama Smart Fridge Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-3 sm:-bottom-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 sm:px-6 py-1.5 sm:py-3 rounded-full shadow-lg">
              <p className="text-[10px] sm:text-sm font-semibold whitespace-nowrap">Trusted by Leading Organizations</p>
            </div>
            
            {/* Corporate Logos Carousel */}
            <div className="mt-6 sm:mt-8 bg-secondary/50 rounded-xl p-4 sm:p-6 border border-border">
              <div className="flex items-center justify-center gap-6 sm:gap-8 overflow-hidden">
                <div className="flex animate-scroll gap-6 sm:gap-8">
                  <img src={bracLogo} alt="BRAC" className="flex-shrink-0 h-8 sm:h-10 w-auto object-contain mix-blend-multiply opacity-80" />
                  <img src={grameenLogo} alt="Grameenphone" className="flex-shrink-0 h-8 sm:h-10 w-auto object-contain mix-blend-multiply opacity-80" />
                  <img src={squareLogo} alt="Square" className="flex-shrink-0 h-10 sm:h-12 w-auto object-contain mix-blend-multiply opacity-80" />
                  <img src={robiLogo} alt="Robi" className="flex-shrink-0 h-10 sm:h-12 w-auto object-contain mix-blend-multiply opacity-80" />
                  <img src={buetLogo} alt="BUET" className="flex-shrink-0 h-10 sm:h-12 w-auto object-contain mix-blend-multiply opacity-80" />
                  <img src={duLogo} alt="Dhaka University" className="flex-shrink-0 h-12 sm:h-14 w-auto object-contain mix-blend-multiply opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};