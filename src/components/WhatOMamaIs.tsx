export const WhatOMamaIs = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* What O Mama Really Is */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-10 space-y-8">
            <h2 className="text-4xl font-bold text-center">🚀 What O Mama Really Is</h2>
            
            <p className="text-2xl font-semibold text-center text-foreground">
              A next-generation food platform that brings hygienic, nutritious, affordable food closer to people, not the other way around.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                "Fresh fruit",
                "Cut salad",
                "Healthy snacks",
                "Yogurt and doi",
                "Juice",
                "Clean, portioned, ready to eat — available instantly"
              ].map((item, index) => (
                <div key={index} className="bg-background rounded-lg p-4">
                  <p className="font-semibold text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 mt-8">
              <p className="text-xl font-bold text-center text-foreground">
                We are building Bangladesh's first <span className="text-primary">Autonomous Smart Food Network</span> where:
              </p>
              <div className="space-y-3">
                {[
                  "people don't search for food",
                  "food comes to them",
                  "with hygiene, nutrition, transparency, and trust built in"
                ].map((point, index) => (
                  <div key={index} className="flex items-center justify-center gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <p className="text-lg text-foreground font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xl text-center font-semibold text-muted-foreground mt-6">
              This is not just a vending machine. <span className="text-primary">This is a new category of food access.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
