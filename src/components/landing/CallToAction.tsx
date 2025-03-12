
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface CallToActionProps {
  menuMakerUrl: string;
}

const CallToAction = ({ menuMakerUrl }: CallToActionProps) => {
  return (
    <section className="py-20 container mx-auto text-center">
      <div className="glass p-12 rounded-2xl max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gradient mb-6">Ready to Transform Your Restaurant Menu?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of restaurant owners who have enhanced their menus and increased their profits with Restaurant Menu Maker GPT.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 transition-opacity flex items-center gap-2"
          data-url={menuMakerUrl}
          openInNewWindow={true}
        >
          Create Your Menu Now <ExternalLink className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
