
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
import { ChefHat, FileText, HelpCircle, MoreHorizontal, Mail, Phone, Star, CheckCircle, User, FileCode, MessageSquare, Award, ExternalLink } from "lucide-react";

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

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`} />
    ));
  };

  // Function to navigate to the Restaurant Menu Maker GPT URL
  const goToMenuMakerGPT = () => {
    window.location.href = 'https://chatgpt.com/g/g-67d19b9603b88191b06af94c143439ce-restaurant-menu-maker-gpt';
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
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-white hover:text-neon-purple transition-colors">About</a>
            <a href="#how-it-works" className="text-white hover:text-neon-purple transition-colors">How It Works</a>
            <a href="#testimonials" className="text-white hover:text-neon-purple transition-colors">Testimonials</a>
            <a href="#faq" className="text-white hover:text-neon-purple transition-colors">FAQ</a>
            <a href="#disclaimer" className="text-white hover:text-neon-purple transition-colors">Disclaimer</a>
            <a href="https://www.aiwebtools.ai" className="text-white hover:text-neon-purple transition-colors">
              More AI Tools
            </a>
            <Button 
              className="bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-opacity flex items-center gap-2"
              onClick={goToMenuMakerGPT}
            >
              Try It Now <ExternalLink className="w-4 h-4" />
            </Button>
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
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 transition-opacity flex items-center gap-2"
              onClick={goToMenuMakerGPT}
            >
              Create Your Menu <ExternalLink className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neon-purple text-white hover:bg-neon-purple/10"
              onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About This AI Tool Section */}
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
                  onClick={goToMenuMakerGPT}
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

      {/* How It Works Section */}
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
              onClick={goToMenuMakerGPT}
            >
              Start Creating Your Menu <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">What Restaurant Owners Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Michael Johnson",
              role: "Owner, Bistro Provençal",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
              testimonial: "This AI tool transformed our outdated menu into something modern and professional in just minutes. Our customers have noticed the difference, and we've seen a 15% increase in orders of our high-margin items.",
              rating: 5
            },
            {
              name: "Sarah Martinez",
              role: "Chef & Co-owner, Fusion Kitchen",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
              testimonial: "I was skeptical about using AI for our menu design, but Restaurant Menu Maker GPT exceeded all my expectations. It understood our fusion concept perfectly and suggested dish descriptions that really captivate our customers.",
              rating: 5
            },
            {
              name: "David Chen",
              role: "Manager, Eastern Delights",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
              testimonial: "As someone with no design skills, creating a professional menu was always a struggle. This tool guided me step by step and created a menu that perfectly represents our authentic cuisine and brand identity.",
              rating: 4
            }
          ].map((testimonial, index) => (
            <Card key={index} className="glass overflow-hidden hover:bg-black/40 transition-colors">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neon-purple">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-300 text-center italic mb-4">"{testimonial.testimonial}"</p>
                <div className="text-center">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="glass inline-block px-8 py-4 max-w-2xl">
            <CardContent className="flex items-center pt-4">
              <Award className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0" />
              <p className="text-gray-300 italic">
                "Restaurant Menu Maker GPT has helped over 5,000 restaurants worldwide create menus that increase sales and enhance customer experience."
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-opacity flex items-center gap-2"
            onClick={goToMenuMakerGPT}
          >
            Join Thousands of Satisfied Users <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Showcase Section */}
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
                onClick={goToMenuMakerGPT}
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
            onClick={goToMenuMakerGPT}
          >
            Get Answers to Your Questions <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 container mx-auto text-center">
        <div className="glass p-12 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Ready to Transform Your Restaurant Menu?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of restaurant owners who have enhanced their menus and increased their profits with Restaurant Menu Maker GPT.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 transition-opacity flex items-center gap-2"
            onClick={goToMenuMakerGPT}
          >
            Create Your Menu Now <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Disclaimer Section */}
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
            <div className="flex flex-col items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-opacity flex items-center gap-2 mb-4"
                onClick={goToMenuMakerGPT}
              >
                Try Restaurant Menu Maker GPT <ExternalLink className="w-4 h-4" />
              </Button>
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

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="rounded-full w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-orange hover:opacity-90 transition-opacity flex items-center justify-center"
          onClick={goToMenuMakerGPT}
        >
          <ChefHat className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
