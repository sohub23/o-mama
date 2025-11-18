import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const GetStartedToday = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get Started Today
          </h2>
          
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Ready to revolutionize your space with fresh, smart food solutions? Choose your path and let's make it happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 group" 
              onClick={() => scrollToSection("business-models")}
            >
              Install Machine
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 text-black bg-white hover:bg-black hover:text-white" 
              onClick={() => scrollToSection("contact")}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};