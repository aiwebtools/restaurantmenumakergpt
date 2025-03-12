
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface HeaderProps {
  menuMakerUrl: string;
  aiWebToolsUrl: string;
}

const Header = ({ menuMakerUrl, aiWebToolsUrl }: HeaderProps) => {
  return (
    <header className="glass fixed top-0 w-full z-50 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <a href={menuMakerUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="text-2xl font-bold text-gradient">
            Restaurant Menu Maker GPT
          </a>
          <a href={aiWebToolsUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="text-sm text-gray-300 hover:text-neon-purple transition-colors mt-1">
            Presented By AIWebTools.AI
          </a>
        </div>
        <div className="flex gap-6 items-center">
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
      </nav>
    </header>
  );
};

export default Header;
