import { Facebook, Instagram, Linkedin, Youtube, Download } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">O Mama</h3>
            <p className="text-background/70 mb-4">
              Fresh Food, Smart Life
            </p>
            <p className="text-sm text-background/60 mb-6">
              Making Bangladesh healthier, one smart fridge at a time.
            </p>
            
            {/* Social Media Buttons */}
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/share/14XEqBQSVWX/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-background/70 group-hover:text-background" />
              </a>
              <a 
                href="https://www.instagram.com/solutionhubtechnologies/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-background/70 group-hover:text-background" />
              </a>
              <a 
                href="https://www.linkedin.com/company/solution-hub-technologie-sohub" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-background/70 group-hover:text-background" />
              </a>
              <a 
                href="https://www.youtube.com/@solutionhubtechnologysohub" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-background/70 group-hover:text-background" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="/#business-models" className="hover:text-background transition-colors">
                  Install Machine
                </a>
              </li>
              <li>
                <a href="/#business-models" className="hover:text-background transition-colors">
                  Become Operator
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-background transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="/privacy-policy" className="hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-background transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/franchise-agreement" className="hover:text-background transition-colors">
                  Franchise Agreement
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Brochure</h4>
            <div className="space-y-2">
              <a 
                href="/Introduce-O-Mama.pdf"
                download="Introduce-O-Mama.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Introduce O Mama
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; Solution Hub Technologies 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
