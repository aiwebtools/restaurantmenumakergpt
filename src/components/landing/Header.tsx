
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Menu, X } from "lucide-react";

interface HeaderProps {
  menuMakerUrl: string;
  aiWebToolsUrl: string;
}

const Header = ({ menuMakerUrl, aiWebToolsUrl }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="glass fixed top-0 w-full z-50 py-4">
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex flex-col">
          <a href={menuMakerUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="text-xl md:text-2xl font-bold text-gradient">
            Restaurant Menu Maker GPT
          </a>
          <a href={aiWebToolsUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="text-xs md:text-sm text-gray-300 hover:text-neon-purple transition-colors mt-1">
            Presented By AIWebTools.AI
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-neon-purple"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#about" className="text-white hover:text-neon-purple transition-colors">About</a>
          <a href="#how-it-works" className="text-white hover:text-neon-purple transition-colors">How It Works</a>
          <a href="#testimonials" className="text-white hover:text-neon-purple transition-colors">Testimonials</a>
          <a href="#faq" className="text-white hover:text-neon-purple transition-colors">FAQ</a>
          <a href="#disclaimer" className="text-white hover:text-neon-purple transition-colors">Disclaimer</a>
          <a href={aiWebToolsUrl} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-white hover:text-neon-purple transition-colors">
            More AI Tools
          </a>
          <Button 
            className="bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-opacity flex items-center gap-2"
            data-url={menuMakerUrl}
            openInNewWindow={true}
          >
            Try It Now <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-cyber-dark/95 backdrop-blur-lg z-50 flex flex-col items-center pt-8 animate-fadeIn">
            <div className="flex flex-col items-center gap-6 w-full px-4">
              <a href="#about" 
                 className="text-white hover:text-neon-purple transition-colors text-lg w-full text-center py-3 border-b border-white/10"
                 onClick={toggleMenu}>
                About
              </a>
              <a href="#how-it-works" 
                 className="text-white hover:text-neon-purple transition-colors text-lg w-full text-center py-3 border-b border-white/10"
                 onClick={toggleMenu}>
                How It Works
              </a>
              <a href="#testimonials" 
                 className="text-white hover:text-neon-purple transition-colors text-lg w-full text-center py-3 border-b border-white/10"
                 onClick={toggleMenu}>
                Testimonials
              </a>
              <a href="#faq" 
                 className="text-white hover:text-neon-purple transition-colors text-lg w-full text-center py-3 border-b border-white/10"
                 onClick={toggleMenu}>
                FAQ
              </a>
              <a href="#disclaimer" 
                 className="text-white hover:text-neon-purple transition-colors text-lg w-full text-center py-3 border-b border-white/10"
                 onClick={toggleMenu}>
                Disclaimer
              </a>
              <a href={aiWebToolsUrl} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-white hover:text-neon-purple transition-colors text-lg w-full text-center py-3 border-b border-white/10">
                More AI Tools
              </a>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-opacity flex items-center gap-2 w-full justify-center mt-4"
                data-url={menuMakerUrl}
                openInNewWindow={true}
              >
                Try It Now <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
