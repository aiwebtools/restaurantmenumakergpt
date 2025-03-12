
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink, Star } from "lucide-react";

interface TestimonialsProps {
  menuMakerUrl: string;
}

const Testimonials = ({ menuMakerUrl }: TestimonialsProps) => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`} />
    ));
  };

  return (
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
          data-url={menuMakerUrl}
          openInNewWindow={true}
        >
          Join Thousands of Satisfied Users <ExternalLink className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
