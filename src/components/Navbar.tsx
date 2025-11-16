import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsScrolling(true);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
    setIsOpen(false);
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const menuItems = [
/*     { label: "Home", id: "home" }, */
    { label: "The Big Fix", id: "why-we-started" },
    { label: "Meet O-MAMA", id: "about" },
/*     { label: "Benefits", id: "benefits" }, */
    { label: "What's Inside", id: "menu" },
    { label: "Behind the Magic", id: "how-it-works" },
/*     { label: "Business Models", id: "business-models" }, */
/*     { label: "Gallery", id: "gallery" }, */
    { label: "Quick Answers", id: "faq" },
/*     { label: "Contact", id: "contact" }, */
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/"
              className="text-lg sm:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              O-MAMA
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted ${
                  activeSection === item.id ? "text-primary bg-muted" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button onClick={() => scrollToSection("business-models")}>
              Your First Step
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-md text-foreground hover:bg-muted"
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-left text-xs sm:text-sm font-medium rounded-md transition-colors hover:bg-muted ${
                    activeSection === item.id ? "text-primary bg-muted" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("business-models")}
                className="mt-4"
              >
                Your First Step
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
