import { Smartphone, Monitor, Zap } from "lucide-react";

export const SeamlessControl = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-2 text-4xl md:text-5xl font-bold">
            <Smartphone className="w-12 h-12 text-primary" />
            <Zap className="w-8 h-8 text-accent" />
            <span>Seamless Control — From Pocket to HQ</span>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One platform that connects your customers, your machines, and your entire business.
          </p>
          
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-border/50">
            <p className="text-lg md:text-xl font-medium text-foreground mb-4">
              O Mama isn't just a smart fridge.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              It's a complete smart retail ecosystem — powered by a mobile app for users and a powerful dashboard for operators.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Mobile App Experience</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Instant QR scan & purchase</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Real-time inventory visibility</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Seamless payment integration</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Operator Dashboard</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <span>Live sales & analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <span>Remote machine monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <span>Automated alerts & maintenance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};