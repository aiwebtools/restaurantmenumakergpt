
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";

interface FloatingActionButtonProps {
  menuMakerUrl: string;
}

const FloatingActionButton = ({ menuMakerUrl }: FloatingActionButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        className="rounded-full w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-opacity flex items-center justify-center"
        data-url={menuMakerUrl}
        openInNewWindow={true}
        aria-label="Create menu"
      >
        <ChefHat className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default FloatingActionButton;
