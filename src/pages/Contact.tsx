import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 border border-primary rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">support@acs-platform.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 border border-primary rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 border border-primary rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">123 AI Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border-2 border-primary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
              <form className="space-y-4">
                <Input placeholder="Your Name" className="bg-background border-border" />
                <Input type="email" placeholder="Your Email" className="bg-background border-border" />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-background border-border"
                />
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;
