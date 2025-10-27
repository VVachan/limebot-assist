import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">About ACS</h1>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              ACS (AI Customer Service) is a cutting-edge platform that revolutionizes customer support
              through advanced artificial intelligence technology.
            </p>
            
            <p>
              Our mission is to make customer service accessible, efficient, and delightful for businesses
              of all sizes. We believe in the power of AI to transform how companies interact with their
              customers.
            </p>
            
            <p>
              With support for multiple languages including English, Hindi, Kannada, Tamil, and Telugu,
              we're committed to breaking down language barriers in customer service.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default About;
