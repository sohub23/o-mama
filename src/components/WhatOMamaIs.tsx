export const WhatOMamaIs = () => {
  return (
    <section className="py-12 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* What O Mama Really Is */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-10 space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-center">🚀 What O Mama Really Is</h2>
            
            <p className="text-base sm:text-2xl font-semibold text-center text-foreground">
              A next-generation food platform that brings hygienic, nutritious, affordable food closer to people, not the other way around.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 text-center">
              {[
                "Fresh fruit",
                "Cut salad",
                "Healthy snacks",
                "Yogurt and doi",
                "Juice",
                "Clean, portioned, ready to eat — available instantly"
              ].map((item, index) => (
                <div key={index} className="bg-background rounded-lg p-3 sm:p-4">
                  <p className="font-semibold text-foreground text-xs sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
              <p className="text-base sm:text-xl font-bold text-center text-foreground">
                We are building a next-generation <span className="text-primary">Autonomous Smart Food Network</span> where:
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "people don't search for food",
                  "food comes to them",
                  "with hygiene, nutrition, transparency, and trust built in"
                ].map((point, index) => (
                  <div key={index} className="flex items-center justify-center gap-2 sm:gap-3">
                    <span className="text-primary text-base sm:text-xl">✓</span>
                    <p className="text-sm sm:text-lg text-foreground font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-xl text-center font-semibold text-muted-foreground mt-4 sm:mt-6">
             This is not just an automated solution. <span className="text-primary">This is a new category of food access.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
