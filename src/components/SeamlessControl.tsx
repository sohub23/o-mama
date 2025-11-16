import { Smartphone, Monitor, Zap } from "lucide-react";

export const SeamlessControl = () => {
  return (
    <section className="py-12 sm:py-24 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center gap-2 text-2xl sm:text-4xl md:text-5xl font-bold">
          
            <span>Seamless Control — From Pocket to HQ</span>
          </div>
          
          <p className="text-sm sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
            One platform that connects your customers, your machines, and your entire business.
          </p>
          
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-4 sm:p-8 max-w-4xl mx-auto border border-border/50">
            <p className="text-sm sm:text-lg md:text-xl font-medium text-foreground mb-3 sm:mb-4">
              O Mama isn't just a smart fridge.
            </p>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground">
              It's a complete smart retail ecosystem — powered by a mobile app for users and a powerful dashboard for operators.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto justify-items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold">Mobile App Experience</h3>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Instant QR scan & purchase</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Real-time inventory visibility</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Seamless payment integration</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold">Operator Dashboard</h3>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Live sales & analytics</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Remote machine monitoring</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Automated alerts & maintenance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};