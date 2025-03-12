
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface HeroProps {
  menuMakerUrl: string;
}

const Hero = ({ menuMakerUrl }: HeroProps) => {
  return (
    <section className="pt-32 pb-20 container mx-auto text-center relative">
      <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
      <div className="stars-container">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <div className="relative z-10">
        <h1 className="text-6xl font-bold mb-6 text-gradient animate-float">
          Restaurant Menu Maker GPT
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Create professionally formatted, fully customized restaurant menus that perfectly align with your brand, cuisine style, and pricing strategy.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 transition-opacity flex items-center gap-2"
            data-url={menuMakerUrl}
            openInNewWindow={true}
          >
            Create Your Menu <ExternalLink className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-neon-purple text-white hover:bg-neon-purple/10"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
