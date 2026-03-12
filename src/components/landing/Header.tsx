
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Menu, X } from "lucide-react";

interface HeaderProps {
  menuMakerUrl: string;
  aiWebToolsUrl: string;
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#disclaimer", label: "Disclaimer" },
];

const Header = ({ menuMakerUrl, aiWebToolsUrl }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [closeMenu]);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo - constrained for mobile */}
        <div className="flex flex-col min-w-0 flex-shrink">
          <a href={menuMakerUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="text-base sm:text-xl md:text-2xl font-bold text-gradient leading-tight truncate">
            Restaurant Menu Maker GPT
          </a>
          <a href={aiWebToolsUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="text-[10px] sm:text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors mt-0.5">
            Presented By AIWebTools.AI
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-foreground hover:text-primary p-2 -mr-2 touch-manipulation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 lg:gap-6 items-center flex-shrink-0">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}
               onClick={(e) => handleNavClick(e, link.href)}
               className="text-foreground hover:text-primary transition-colors text-sm lg:text-base whitespace-nowrap">
              {link.label}
            </a>
          ))}
          <a href={aiWebToolsUrl} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-foreground hover:text-primary transition-colors text-sm lg:text-base whitespace-nowrap">
            More AI Tools
          </a>
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity flex items-center gap-2 text-sm"
            data-url={menuMakerUrl}
            openInNewWindow={true}
          >
            Try It Now <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden fixed inset-x-0 top-[56px] bottom-0 bg-background/98 backdrop-blur-xl z-50 flex flex-col overflow-y-auto transition-all duration-200 ease-out ${
            isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="flex flex-col py-4 px-6">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href}
                 onClick={(e) => handleNavClick(e, link.href)}
                 className="text-foreground hover:text-primary transition-colors text-lg py-3.5 border-b border-border/50 touch-manipulation active:bg-accent/20">
                {link.label}
              </a>
            ))}
            <a href={aiWebToolsUrl} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-foreground hover:text-primary transition-colors text-lg py-3.5 border-b border-border/50 touch-manipulation active:bg-accent/20">
              More AI Tools
            </a>
            <div className="pt-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity flex items-center gap-2 w-full justify-center touch-manipulation"
                data-url={menuMakerUrl}
                openInNewWindow={true}
              >
                Try It Now <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
