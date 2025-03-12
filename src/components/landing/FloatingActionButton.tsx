
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";
import { useState, useEffect } from "react";

interface FloatingActionButtonProps {
  menuMakerUrl: string;
}

const FloatingActionButton = ({ menuMakerUrl }: FloatingActionButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add a small delay before showing the button
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
      <Button
        className="rounded-full w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-all duration-300 hover:scale-110 shadow-glow flex items-center justify-center"
        data-url={menuMakerUrl}
        openInNewWindow={true}
        aria-label="Create menu"
      >
        <ChefHat className="w-6 h-6 md:w-8 md:h-8 animate-pulse" />
      </Button>
    </div>
  );
};

export default FloatingActionButton;
