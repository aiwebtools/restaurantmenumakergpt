
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface CallToActionProps {
  menuMakerUrl: string;
}

const CallToAction = ({ menuMakerUrl }: CallToActionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 container mx-auto text-center">
      <div className={`glass p-12 rounded-2xl max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-4xl font-bold text-gradient mb-6 glow-text">Ready to Transform Your Restaurant Menu?</h2>
        <p className={`text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Join thousands of restaurant owners who have enhanced their menus and increased their profits with Restaurant Menu Maker GPT.
        </p>
        <Button
          size="lg"
          className={`bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-glow flex items-center gap-2 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          data-url={menuMakerUrl}
          openInNewWindow={true}
        >
          Create Your Menu Now <ExternalLink className="w-5 h-5 animate-pulse" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
