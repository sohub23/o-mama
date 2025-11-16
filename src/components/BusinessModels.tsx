import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Store, CheckCircle2, TrendingUp } from "lucide-react";
export const BusinessModels = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Dual Revenue Models Built for Bangladesh
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Two powerful engines — same machine, same app, same intelligent system. Together, we scale faster than ever.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* O Mama Point */}
          <Card id="point" className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
              MOST POPULAR
            </div>
            
            <CardContent className="p-8 space-y-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-primary" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">🏢 O Mama Point</h3>
                <p className="text-muted-foreground">
                  Zero-Risk Corporate Plan – We install, stock, maintain. You enjoy happy employees.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Zero upfront cost</strong> - 100% free installation, no capex
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>MRP pricing</strong> - Always market price, no markup
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>All-in service</strong> - Stocking, cleaning, 24/7 maintenance
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm"><strong>50% Sales + Branding profit share</strong> - You pay O Mama around BDT 10K/Month (TBD)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Just 3×3 feet space</strong> - Wi-Fi + power connection
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>Perfect for: Offices, universities, hospitals, co-working spaces</span>
                </div>
                
                <Button className="w-full" size="lg" onClick={scrollToContact}>
                  Install O Mama Point
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* O Mama Biz */}
          <Card id="biz" className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold">
              ENTREPRENEUR FUEL
            </div>
            
            <CardContent className="p-8 space-y-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <Store className="w-7 h-7 text-accent" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">🚀 O Mama Biz</h3>
                <p className="text-muted-foreground">
                  Own your machine. Build your local business. Scale fast.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>BDT 49K one-time</strong> - O Mama kit (buy your own freezer)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Full control</strong> - Manage inventory & local sourcing
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Keep maximum profit</strong> - Only BDT 7.5 per transaction
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Lifetime access</strong> - Cloud, app, dashboard & free updates
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Co-branding allowed</strong> - Keep 100% of extra branding revenue
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>Perfect for: Entrepreneurs, hotel chains, campus operators</span>
                </div>
                
                <Button className="w-full" size="lg" variant="outline" onClick={scrollToContact}>
                  Start O Mama Biz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};