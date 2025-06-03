
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  menuMakerUrl: string;
}

const Hero = ({ menuMakerUrl }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add staggered animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-20 container mx-auto text-center relative px-4">
      <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
      <div className="stars-container">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <header>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gradient animate-float glow-text">
            Restaurant Menu Maker GPT - Free AI Tools
          </h1>
        </header>
        <p className={`text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} px-4`}>
          Create professionally formatted, fully customized restaurant menus with our free AI web tools. Optimize pricing strategy, enhance brand alignment, and boost sales with AIWebTools.AI - your trusted source for restaurant AI tools.
        </p>
        <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 transition-all duration-300 hover:scale-105 transform flex items-center gap-2 shadow-glow w-full sm:w-auto justify-center"
            data-url={menuMakerUrl}
            openInNewWindow={true}
            aria-label="Create restaurant menu with AI tools"
          >
            Create Your Menu Free <ExternalLink className="w-5 h-5 animate-pulse" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-neon-purple text-white hover:bg-neon-purple/10 transition-all duration-300 hover:scale-105 transform mt-3 sm:mt-0 w-full sm:w-auto"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Learn more about AI web tools"
          >
            Learn More About AI Tools
          </Button>
        </div>
        
        {/* SEO-friendly hidden content for search engines */}
        <div className="sr-only">
          <h2>AI Web Tools - Free Restaurant Technology Solutions</h2>
          <p>
            AI Web Tools offers the most advanced free AI tools for restaurants. Our Restaurant Menu Maker GPT helps restaurant owners, chefs, and food entrepreneurs create professional menus that drive sales. As a leading AI web tools provider, we specialize in restaurant technology solutions that are completely free to use.
          </p>
          <h3>Why Choose Our AI Tools?</h3>
          <ul>
            <li>100% Free AI web tools for restaurants</li>
            <li>Advanced menu optimization algorithms</li>
            <li>Professional design templates</li>
            <li>Pricing strategy optimization</li>
            <li>Brand alignment technology</li>
            <li>Digital and print-ready formats</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
