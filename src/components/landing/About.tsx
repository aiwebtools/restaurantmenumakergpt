
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
        <header>
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">About AI Web Tools - Free Restaurant AI Solutions</h2>
        </header>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Leading Provider of Free AI Tools for Restaurants</h3>
            <p className="text-gray-300 mb-6">
              AI Web Tools (AIWebTools.AI) is the premier destination for free AI tools designed specifically for restaurant owners, chefs, and food entrepreneurs. Our Restaurant Menu Maker GPT represents the cutting edge of AI web tools, helping businesses create professional, sales-driving menus at no cost.
            </p>
            <p className="text-gray-300 mb-6">
              Unlike generic design tools or expensive software, our AI tools understand restaurant psychology, optimal pricing strategies, and cuisine-specific requirements. We're committed to providing completely free AI web tools that deliver professional results for the restaurant industry.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                <span className="text-gray-300">Free AI menu creation tools</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                <span className="text-gray-300">Advanced brand alignment AI</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                <span className="text-gray-300">Smart AI pricing optimization</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                <span className="text-gray-300">AI-powered dish descriptions</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                <span className="text-gray-300">Free digital menu AI tools</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                <span className="text-gray-300">Print-ready AI formats</span>
              </div>
            </div>
            <div className="mt-8">
              <Button
                className="bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-opacity flex items-center gap-2"
                data-url={menuMakerUrl}
                openInNewWindow={true}
                aria-label="Try free AI web tools for restaurants"
              >
                Try Our Free AI Tools <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 p-1 rounded-xl neon-border">
            <img 
              src="https://ideogram.ai/assets/image/lossless/response/_Oji1L9IRriUnvRvi6YE5Q" 
              alt="AI Web Tools Restaurant Menu Example - Free AI Tools" 
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
        
        {/* Additional SEO content */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Why AI Web Tools is #1 for Restaurant AI Solutions</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">100% Free AI Tools</h4>
              <p className="text-gray-300 text-sm">All our AI web tools are completely free to use with no hidden costs or subscriptions.</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Restaurant-Specific AI</h4>
              <p className="text-gray-300 text-sm">Our AI tools are specifically designed for the restaurant industry with deep understanding of food service needs.</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
              <p className="text-gray-300 text-sm">Over 5,000 restaurants worldwide have improved their menus and increased sales using our free AI tools.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
