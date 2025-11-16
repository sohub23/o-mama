import smartFridge from "@/assets/hero-smart-fridge.jpg";
export const Benefits = () => {
  return <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Elevate Your Business with <span className="text-primary">O Mama</span> Smart Stores
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-background rounded-xl p-6 shadow-sm space-y-3">
                <h3 className="text-xl font-bold text-foreground">Supercharge Your Revenue</h3>
                <p className="text-sm text-muted-foreground">
                  Maximize profitability with increased sales, reduced costs, and at half the investment of typical vending machines.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm space-y-3">
                <h3 className="text-xl font-bold text-foreground">Market Your Products</h3>
                <p className="text-sm text-muted-foreground">
                  Harness the power of digital displays to captivate your audience and promote your products.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm space-y-3">
                <h3 className="text-xl font-bold text-foreground">Gain Real-Time Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Use real-time data to track performance, optimize inventory, and make smarter business decisions.
                </p>
              </div>
            </div>

            {/* Center - Fridge Image */}
            <div className="flex items-center justify-center lg:py-12">
              <div className="relative">
                <img src={smartFridge} alt="O Mama Smart Fridge with fresh products" className="w-full max-w-md mx-auto rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-lg whitespace-nowrap">
                  Next Generation Vending Experience   
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-background rounded-xl p-6 shadow-sm space-y-3">
                <h3 className="text-xl font-bold text-foreground">Attract Customers</h3>
                <p className="text-sm text-muted-foreground">
                  Create standout experiences with Smart Stores to turn passersby into loyal customers.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm space-y-3">
                <h3 className="text-xl font-bold text-foreground">Expand Your Footprint</h3>
                <p className="text-sm text-muted-foreground">
                  Reach untapped markets with plug & play Smart Stores that thrive in any environment.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm space-y-3">
                <h3 className="text-xl font-bold text-foreground">Ensure Security</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced vision sensors and secure payment systems prevent theft and ensure peace of mind for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};