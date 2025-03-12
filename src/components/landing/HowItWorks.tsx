
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ChefHat, FileCode, FileText, HelpCircle, MessageSquare, User, ExternalLink } from "lucide-react";

interface HowItWorksProps {
  menuMakerUrl: string;
}

const HowItWorks = ({ menuMakerUrl }: HowItWorksProps) => {
  return (
    <section id="how-it-works" className="py-20 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gradient">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <ChefHat className="w-8 h-8 text-neon-purple" />,
            title: "Customized Menu Creation",
            description: "Professionally formatted menus tailored to your restaurant's unique style and brand."
          },
          {
            icon: <FileText className="w-8 h-8 text-neon-blue" />,
            title: "Smart Pricing Strategy",
            description: "Optimize your menu pricing for maximum profitability while staying competitive."
          },
          {
            icon: <HelpCircle className="w-8 h-8 text-neon-pink" />,
            title: "Expert Guidance",
            description: "Step-by-step assistance in creating the perfect menu for your establishment."
          }
        ].map((feature, index) => (
          <Card key={index} className="glass hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-10 text-gradient">Our Detailed Process</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass hover:border-neon-purple/50 transition-colors">
            <CardHeader>
              <div className="bg-neon-purple/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6 text-neon-purple" />
              </div>
              <CardTitle className="text-center">1. Information Gathering</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-neon-purple mr-2 mt-1 flex-shrink-0" />
                  <span>Restaurant name, concept, cuisine</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-neon-purple mr-2 mt-1 flex-shrink-0" />
                  <span>Design preferences & target audience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-neon-purple mr-2 mt-1 flex-shrink-0" />
                  <span>Pricing strategy & existing items</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-neon-purple mr-2 mt-1 flex-shrink-0" />
                  <span>Branding materials & special sections</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass hover:border-neon-blue/50 transition-colors">
            <CardHeader>
              <div className="bg-neon-blue/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-neon-blue" />
              </div>
              <CardTitle className="text-center">2. Menu Refinement</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-neon-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Optimize dish names & descriptions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-neon-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Balance pricing & section organization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-neon-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Menu flow & structure optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-neon-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Food pairing recommendations</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass hover:border-neon-pink/50 transition-colors">
            <CardHeader>
              <div className="bg-neon-pink/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCode className="w-6 h-6 text-neon-pink" />
              </div>
              <CardTitle className="text-center">3. Menu Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-neon-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Page-by-page creation & approval</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-neon-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Professional formatting & design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-neon-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Final compilation & document export</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-neon-pink mr-2 mt-1 flex-shrink-0" />
                  <span>Digital menu QR code (optional)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-opacity flex items-center gap-2"
            data-url={menuMakerUrl}
            openInNewWindow={true}
          >
            Start Creating Your Menu <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
