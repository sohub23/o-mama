import smartFridge from "@/assets/O mama.jpg";
export const Benefits = () => {
  return <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Elevate Your Business with <span className="text-primary">O Mama</span> Smart Stores
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-8 items-center" style={{ gridTemplateColumns: window.innerWidth >= 1024 ? undefined : '1fr 1.5fr 1fr' }}>
            {/* Left Column */}
            <div className="space-y-3 sm:space-y-6 lg:space-y-8">
              <div className="bg-background rounded-lg sm:rounded-xl p-2 sm:p-6 shadow-sm space-y-1 sm:space-y-3">
                <h3 className="text-[10px] sm:text-xl font-bold text-foreground">Supercharge Your Revenue</h3>
                <p className="text-[8px] sm:text-sm text-muted-foreground">
                  Boost profits with more sales, reduced costs, and just half the usual investment.
                </p>
              </div>

              <div className="bg-background rounded-lg sm:rounded-xl p-2 sm:p-6 shadow-sm space-y-1 sm:space-y-3">
                <h3 className="text-[10px] sm:text-xl font-bold text-foreground">Market Your Products</h3>
                <p className="text-[8px] sm:text-sm text-muted-foreground">
                  Engage your audience and showcase products through digital displays.
                </p>
              </div>

              <div className="bg-background rounded-lg sm:rounded-xl p-2 sm:p-6 shadow-sm space-y-1 sm:space-y-3">
                <h3 className="text-[10px] sm:text-xl font-bold text-foreground">Gain Real-Time Insights</h3>
                <p className="text-[8px] sm:text-sm text-muted-foreground">
                 Use real-time data to track, optimize, and decide smarter.
                </p>
              </div>
            </div>

            {/* Center - Fridge Image */}
            <div className="flex items-center justify-center py-4 sm:py-12 px-1 lg:px-0">
              <div className="relative">
                <img src={smartFridge} alt="O Mama Smart Fridge with fresh products" className="w-full lg:max-w-[250px] mx-auto rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-1.5 sm:px-6 py-0.5 sm:py-3 rounded-full font-bold shadow-lg whitespace-nowrap text-[7px] sm:text-base">
                  Next Generation Dispensing Experience   
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3 sm:space-y-6 lg:space-y-8">
              <div className="bg-background rounded-lg sm:rounded-xl p-2 sm:p-6 shadow-sm space-y-1 sm:space-y-3">
                <h3 className="text-[10px] sm:text-xl font-bold text-foreground">Attract Customers</h3>
                <p className="text-[8px] sm:text-sm text-muted-foreground">
                 Smart Stores create experiences that turn passersby into loyal customers.
                </p>
              </div>

              <div className="bg-background rounded-lg sm:rounded-xl p-2 sm:p-6 shadow-sm space-y-1 sm:space-y-3">
                <h3 className="text-[10px] sm:text-xl font-bold text-foreground">Expand Your Footprint</h3>
                <p className="text-[8px] sm:text-sm text-muted-foreground">
                  Plug-and-play Smart Stores help you tap new markets anywhere.
                </p>
              </div>

              <div className="bg-background rounded-lg sm:rounded-xl p-2 sm:p-6 shadow-sm space-y-1 sm:space-y-3">
                <h3 className="text-[10px] sm:text-xl font-bold text-foreground">Ensure Security</h3>
                <p className="text-[8px] sm:text-sm text-muted-foreground">
                  Smart sensors and secure payments ensure theft protection and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};