import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChefHat, FileText, HelpCircle, MoreHorizontal, Mail, Phone } from "lucide-react";

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    const hasAgreed = localStorage.getItem('disclaimerAgreement');
    if (hasAgreed) {
      setShowDisclaimer(false);
    }
  }, []);

  const handleDisclaimerAgreement = () => {
    localStorage.setItem('disclaimerAgreement', 'true');
    setShowDisclaimer(false);
  };

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Header */}
      <header className="glass fixed top-0 w-full z-50 py-4">
        <nav className="container mx-auto flex items-center justify-between">
          <a href="https://chatgpt.com/g/g-67d19b9603b88191b06af94c143439ce-restaurant-menu-maker-gpt" 
             className="text-2xl font-bold text-gradient">
            Restaurant Menu Maker GPT
          </a>
          <div className="flex gap-6">
            <a href="#faq" className="text-white hover:text-neon-purple transition-colors">FAQ</a>
            <a href="#disclaimer" className="text-white hover:text-neon-purple transition-colors">Disclaimer</a>
            <a href="https://www.aiwebtools.ai" className="text-white hover:text-neon-purple transition-colors">
              More AI Tools
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto text-center relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-6 text-gradient animate-float">
            Restaurant Menu Maker GPT
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Create professionally formatted, fully customized restaurant menus that perfectly align with your brand, cuisine style, and pricing strategy.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 transition-opacity"
            onClick={() => window.location.href = 'https://chatgpt.com/g/g-67d19b9603b88191b06af94c143439ce-restaurant-menu-maker-gpt'}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto">
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
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Restaurant Menu Maker GPT?</AccordionTrigger>
            <AccordionContent>
              Restaurant Menu Maker GPT is an AI-powered tool that helps restaurant owners create professional, customized menus. It takes into account your restaurant's branding, cuisine style, and pricing strategy to generate the perfect menu.
            </AccordionContent>
          </AccordionItem>
          {/* Add more FAQ items here */}
        </Accordion>
      </section>

      {/* Disclaimer Section */}
      <section id="disclaimer" className="py-20 container mx-auto">
        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gradient">Legal Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>Restaurant Menu Maker GPT is an AI-assisted tool designed to help with menu creation. While we strive for accuracy and quality, users are responsible for verifying all content, pricing, and compliance with local regulations. We make no warranties regarding the accuracy, completeness, or reliability of the generated content.</p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="glass mt-20 py-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Contact Us</h3>
              <a href="tel:4758008096" className="flex items-center text-gray-300 hover:text-neon-purple mb-2">
                <Phone className="w-4 h-4 mr-2" />
                (475) 800-8096
              </a>
              <a href="mailto:Contact@ai-webtools.com" className="flex items-center text-gray-300 hover:text-neon-purple">
                <Mail className="w-4 h-4 mr-2" />
                Contact@ai-webtools.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Legal</h3>
              <a href="https://openai.com/policies/privacy-policy" className="block text-gray-300 hover:text-neon-purple mb-2">
                Privacy Policy
              </a>
              <a href="https://aiwebtools.ai/terms-of-services" className="block text-gray-300 hover:text-neon-purple">
                Terms of Service
              </a>
            </div>
            <div>
              <a href="https://www.aiwebtools.ai" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 transition-opacity">
                More AI Tools
                <MoreHorizontal className="ml-2" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="https://www.aiwebtools.ai" className="text-gray-400 hover:text-neon-purple">
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </div>
        </div>
      </footer>

      {/* Disclaimer Dialog */}
      <Dialog open={showDisclaimer} onOpenChange={setShowDisclaimer}>
        <DialogContent className="glass border-neon-purple">
          <DialogHeader>
            <DialogTitle className="text-2xl text-gradient">Important Disclaimer</DialogTitle>
            <DialogDescription className="text-gray-300 pt-2">
              Restaurant Menu Maker GPT is provided for informational and creative purposes only. By using this tool, you acknowledge that:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm text-gray-300">
            <p>• We do not guarantee the accuracy, completeness or reliability of any content generated.</p>
            <p>• You are responsible for reviewing and verifying all menu content before professional use.</p>
            <p>• We are not liable for any business decisions, financial outcomes, or legal issues related to menus created with this tool.</p>
            <p>• We use cookies and similar technologies to enhance your experience and analyze site usage.</p>
          </div>
          <Button 
            onClick={handleDisclaimerAgreement} 
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 transition-opacity w-full mt-2"
          >
            I Understand and Agree
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
