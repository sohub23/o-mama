import { useState } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const navLinks = [
  { href: "#the-big-fix", label: "The Big Fix" },
  { href: "#meet-o-mama", label: "Meet O-Mama" },
  { href: "#whats-inside", label: "What's Inside" },
  { href: "#quick-answers", label: "Quick Answers" },
];

interface HeaderProps {
  activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const NavLinkItems = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleLinkClick(e, link.href)}
          className={clsx(
            "text-lg font-medium text-muted-foreground transition-colors hover:text-foreground",
            { "active-link": activeSection === link.href.substring(1) }
          )}
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <a href="#" className="text-xl font-bold">
          Logo
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          <NavLinkItems />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-14 left-0 z-40 h-[calc(100vh-3.5rem)] w-full animate-in fade-in-20 slide-in-from-top-5 md:hidden"
          style={{ backgroundColor: "inherit" }}
        >
          <nav className="container flex flex-col items-start space-y-6 pt-8">
            <NavLinkItems />
          </nav>
        </div>
      )}
    </header>
  );
}