import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">About ACS</h1>
          
          <div className="space-y-8">
            <div className="bg-card border-2 border-primary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                ACS (AI Customer Service) is a cutting-edge platform that revolutionizes customer support
                through advanced artificial intelligence technology. We're dedicated to making customer 
                service accessible, efficient, and delightful for businesses of all sizes.
              </p>
            </div>
            
            <div className="bg-card border-2 border-primary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">What We Offer</h2>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li>✓ 24/7 AI-powered customer support</li>
                <li>✓ Instant responses to customer queries</li>
                <li>✓ Multi-language support (English, Hindi, Kannada, Tamil, Telugu)</li>
                <li>✓ Retail-focused knowledge base</li>
                <li>✓ Seamless integration with your business</li>
                <li>✓ Scalable solution for businesses of any size</li>
              </ul>
            </div>
            
            <div className="bg-card border-2 border-primary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                We believe in the power of AI to transform how companies interact with their customers.
                By breaking down language barriers and providing instant, accurate responses, we're 
                helping businesses deliver exceptional customer experiences that build loyalty and drive growth.
              </p>
            </div>
            
            <div className="bg-card border-2 border-primary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Why Choose ACS?</h2>
              <p className="text-lg text-muted-foreground">
                Unlike traditional customer service solutions, ACS combines cutting-edge AI technology
                with deep retail industry knowledge. Our platform understands your customers' needs and
                provides accurate, helpful responses in their preferred language. With zero setup time
                and no technical expertise required, you can start improving your customer service today.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default About;
