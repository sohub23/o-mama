import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Store, CheckCircle2, TrendingUp } from "lucide-react";
export const BusinessModels = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="py-12 sm:py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold px-2">
            Dual Revenue Models Built for Bangladesh
          </h2>
          <p className="text-sm sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Two powerful engines — same machine, same app, same intelligent system. Together, we scale faster than ever.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* O Mama Point */}
          <Card id="point" className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary text-primary-foreground px-2 py-0.5 sm:px-4 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold">
              MOST POPULAR
            </div>
            
            <CardContent className="p-4 sm:p-8 space-y-4 sm:space-y-6">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
              </div>

              <div>
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">🏢 O Mama Point</h3>
                <p className="text-xs sm:text-base text-muted-foreground">
                  Zero-Risk Corporate Plan – We install, stock, maintain. You enjoy happy employees.
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm">
                    <strong>Zero upfront cost</strong> - 100% free installation, no capex
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm">
                    <strong>MRP pricing</strong> - Always market price, no markup
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm">
                    <strong>All-in service</strong> - Stocking, cleaning, 24/7 maintenance
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm"><strong>50% Sales + Branding profit share</strong> - You pay O Mama around BDT 10K/Month (TBD)
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm">
                    <strong>Just 3×3 feet space</strong> - Wi-Fi + power connection
                  </p>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Perfect for: Offices, universities, hospitals, co-working spaces</span>
                </div>
                
                <Button className="w-full text-sm sm:text-base" size="lg" onClick={scrollToContact}>
                  Install O Mama Point
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* O Mama Biz */}
          <Card id="biz" className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-accent text-accent-foreground px-2 py-0.5 sm:px-4 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold">
              ENTREPRENEUR FUEL
            </div>
            
            <CardContent className="p-4 sm:p-8 space-y-4 sm:space-y-6">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <Store className="w-5 h-5 sm:w-7 sm:h-7 text-accent" />
              </div>

              <div>
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">🚀 O Mama Biz</h3>
                <p className="text-xs sm:text-base text-muted-foreground">
                  Own your machine. Build your local business. Scale fast.
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm">
                    <strong>BDT 49K one-time</strong> - O Mama kit (buy your own freezer)
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm">
                    <strong>Full control</strong> - Manage inventory & local sourcing
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm">
                    <strong>Keep maximum profit</strong> - Only BDT 7.5 per transaction
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm">
                    <strong>Lifetime access</strong> - Cloud, app, dashboard & free updates
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm">
                    <strong>Co-branding allowed</strong> - Keep 100% of extra branding revenue
                  </p>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Perfect for: Entrepreneurs, hotel chains, campus operators</span>
                </div>
                
                <Button className="w-full text-sm sm:text-base" size="lg" variant="outline" onClick={scrollToContact}>
                  Start O Mama Biz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
