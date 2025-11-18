import { CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Scan & Unlock",
      description: "Use the O Mama app to scan the QR code and unlock the smart fridge instantly."
    },
    {
      number: "02",
      title: "Pick Your Items",
      description: "Choose from fresh fruits, salads, snacks, drinks, and more—all at MRP pricing."
    },
    {
      number: "03",
      title: "Detect and Pay",
      description: "SOHUB's intelligent computer-vision technology detects your selections. Close the door and payment processes automatically."
    },
    {
      number: "04",
      title: "Enjoy Fresh Food",
      description: "That's it! Fresh, hygienic food delivered 24/7 with zero hassle."
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            How <span className="text-primary">O-MAMA</span> Works
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground px-2 sm:px-0">
            Getting fresh food has never been easier. Just four simple steps to access healthy meals anytime, anywhere.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left: Steps */}
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 sm:gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-xl sm:text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <div className="pt-1 sm:pt-2">
                  <h3 className="text-base sm:text-xl font-bold mb-1.5 sm:mb-2 flex items-center gap-2">
                    {step.title}
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </h3>
                  <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-muted">
              <iframe
                src="https://www.youtube.com/embed/o8ahmgEQtZU"
                title="How O Mama Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            
            {/* Decorative element */}
            <div className="hidden lg:block absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
