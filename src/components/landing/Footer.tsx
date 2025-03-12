
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, MoreHorizontal, Phone } from "lucide-react";

interface FooterProps {
  menuMakerUrl: string;
  aiWebToolsUrl: string;
}

const Footer = ({ menuMakerUrl, aiWebToolsUrl }: FooterProps) => {
  return (
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
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <a href={menuMakerUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-xl font-bold text-gradient">
                Restaurant Menu Maker GPT
              </a>
              <a href={aiWebToolsUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-sm text-gray-300 hover:text-neon-purple transition-colors mt-1">
                Presented By AIWebTools.AI
              </a>
            </div>
            <a href="https://openai.com/policies/privacy-policy" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="block text-gray-300 hover:text-neon-purple mb-2">
              Privacy Policy
            </a>
            <a href="https://aiwebtools.ai/terms-of-services" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="block text-gray-300 hover:text-neon-purple">
              Terms of Service
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-opacity flex items-center gap-2 mb-4"
              data-url={menuMakerUrl}
              openInNewWindow={true}
            >
              Try Restaurant Menu Maker GPT <ExternalLink className="w-4 h-4" />
            </Button>
            <a href={aiWebToolsUrl} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 transition-opacity">
              More AI Tools
              <MoreHorizontal className="ml-2" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href={aiWebToolsUrl} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-gray-400 hover:text-neon-purple">
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
