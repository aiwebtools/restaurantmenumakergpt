
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";

interface FAQProps {
  menuMakerUrl: string;
}

const FAQ = ({ menuMakerUrl }: FAQProps) => {
  return (
    <section id="faq" className="py-20 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Restaurant Menu Maker GPT?</AccordionTrigger>
          <AccordionContent>
            Restaurant Menu Maker GPT is an AI-powered tool that helps restaurant owners create professional, customized menus. It takes into account your restaurant's branding, cuisine style, and pricing strategy to generate the perfect menu.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>How does the menu creation process work?</AccordionTrigger>
          <AccordionContent>
            Our AI works step-by-step, page-by-page, ensuring each section is fully optimized and formatted before proceeding to the next part. It starts by gathering information about your restaurant, then helps refine menu ideas, and finally generates a professionally formatted menu with your approval at each stage.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>Do I need design skills to use this tool?</AccordionTrigger>
          <AccordionContent>
            Not at all! Restaurant Menu Maker GPT is designed to handle all the design work for you. Simply provide information about your restaurant and preferences, and the AI will guide you through the entire process, handling all the formatting and design elements.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger>Can I customize the menu design to match my restaurant's branding?</AccordionTrigger>
          <AccordionContent>
            Absolutely! The AI will ask for your branding materials including logos, colors, and fonts. If you don't have these, it can generate a clean, high-quality design from scratch that aligns with your restaurant's theme and cuisine.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger>How does pricing strategy optimization work?</AccordionTrigger>
          <AccordionContent>
            Restaurant Menu Maker GPT can analyze your menu items and suggest optimal pricing strategies that maximize profitability while remaining competitive. It uses principles of menu psychology and pricing theory to position items strategically throughout your menu.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-6">
          <AccordionTrigger>What format will my final menu be in?</AccordionTrigger>
          <AccordionContent>
            Your menu will be provided as a downloadable file, ready for print or digital display. If requested, the AI can also generate a QR code for digital menu access, making it easy for customers to view your menu on their devices.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-7">
          <AccordionTrigger>Can I make changes to my menu after it's been created?</AccordionTrigger>
          <AccordionContent>
            Yes! The tool allows you to review and provide feedback on each section before final compilation. Even after the menu is compiled, you can request modifications to ensure it perfectly meets your needs.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-8">
          <AccordionTrigger>Is there a limit to how many menu sections or items I can include?</AccordionTrigger>
          <AccordionContent>
            There are no hard limits on the number of sections or items. However, for optimal menu psychology and customer experience, the AI may suggest organizing your offerings in a way that enhances readability and sales potential.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-9">
          <AccordionTrigger>Can the tool help with seasonal or special menus?</AccordionTrigger>
          <AccordionContent>
            Definitely! Restaurant Menu Maker GPT can create seasonal menus, special event menus, holiday offerings, tasting menus, or any other special menu formats you need for your restaurant.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-10">
          <AccordionTrigger>How long does it take to create a complete menu?</AccordionTrigger>
          <AccordionContent>
            The process varies depending on the complexity of your menu and how quickly you provide feedback, but most restaurants can have a complete, professionally designed menu within 30-60 minutes of interaction with the AI.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="flex justify-center mt-12">
        <Button
          size="lg"
          className="bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-opacity flex items-center gap-2"
          data-url={menuMakerUrl}
          openInNewWindow={true}
        >
          Get Answers to Your Questions <ExternalLink className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default FAQ;
