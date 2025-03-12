
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 container mx-auto">
      <Card className="glass">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-gradient">Legal Disclaimer</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p className="mb-4">Restaurant Menu Maker GPT is an AI-assisted tool designed to help with menu creation. While we strive for accuracy and quality, users are responsible for verifying all content, pricing, and compliance with local regulations. We make no warranties regarding the accuracy, completeness, or reliability of the generated content.</p>
          <p>By using this tool, you acknowledge that any business decisions, financial outcomes, or legal issues related to menus created with Restaurant Menu Maker GPT are solely your responsibility. This tool is provided "as is" without any guarantees of continuous availability or absence of errors.</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Disclaimer;
