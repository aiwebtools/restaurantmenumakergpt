
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink } from "lucide-react";

interface TransformSectionProps {
  menuMakerUrl: string;
}

const TransformSection = ({ menuMakerUrl }: TransformSectionProps) => {
  return (
    <section className="py-20 container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gradient">Transform Your Menu</h2>
          <p className="text-gray-300 mb-8">
            See how Restaurant Menu Maker GPT can transform your menu from ordinary to extraordinary. Our AI understands the psychology of menu design and helps you create a menu that not only looks professional but also drives sales.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-neon-purple mr-3 mt-1" />
              <div>
                <p className="text-white font-medium">Enhanced Visual Appeal</p>
                <p className="text-gray-400">Professional formatting that catches the eye and guides customers to high-margin items</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-neon-purple mr-3 mt-1" />
              <div>
                <p className="text-white font-medium">Compelling Descriptions</p>
                <p className="text-gray-400">Mouth-watering dish descriptions that increase desire and order value</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-neon-purple mr-3 mt-1" />
              <div>
                <p className="text-white font-medium">Strategic Organization</p>
                <p className="text-gray-400">Menu layout optimized for maximum visibility of your most profitable items</p>
              </div>
            </li>
          </ul>
          <div className="mt-8">
            <Button
              className="bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-opacity flex items-center gap-2"
              data-url={menuMakerUrl}
              openInNewWindow={true}
            >
              Transform Your Menu Now <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 p-1 rounded-xl neon-border">
          <img 
            src="https://ideogram.ai/assets/image/lossless/response/9QaTNH2QQNuu0nEaEedBPg" 
            alt="Menu Transformation" 
            className="rounded-xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
