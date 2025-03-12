
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink } from "lucide-react";

interface AboutProps {
  menuMakerUrl: string;
}

const About = ({ menuMakerUrl }: AboutProps) => {
  return (
    <section id="about" className="py-20 container mx-auto relative">
      <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">About Restaurant Menu Maker GPT</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 mb-6">
              Restaurant Menu Maker GPT is an AI-powered assistant designed specifically for restaurant owners, chefs, and food entrepreneurs who want to create professional, eye-catching menus that drive sales and enhance customer experience.
            </p>
            <p className="text-gray-300 mb-6">
              Unlike generic design tools, our AI understands the psychology of menu design, optimal pricing strategies, and cuisine-specific terminology that can make your offerings stand out from the competition.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                <span className="text-gray-300">Step-by-step menu creation</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                <span className="text-gray-300">Brand-aligned design</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                <span className="text-gray-300">Smart pricing strategy</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                <span className="text-gray-300">Expert dish descriptions</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                <span className="text-gray-300">Digital menu options</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                <span className="text-gray-300">Print-ready formats</span>
              </div>
            </div>
            <div className="mt-8">
              <Button
                className="bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-opacity flex items-center gap-2"
                data-url={menuMakerUrl}
                openInNewWindow={true}
              >
                Try It Now <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 p-1 rounded-xl neon-border">
            <img 
              src="https://ideogram.ai/assets/image/lossless/response/_Oji1L9IRriUnvRvi6YE5Q" 
              alt="Restaurant Menu Example" 
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
