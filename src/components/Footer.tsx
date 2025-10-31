import { Bot } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">ACS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered customer service platform providing 24/7 support for retail businesses worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <Link to="/login" className="hover:text-primary transition-colors">Login</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-3">Support</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Help Center</a>
              <a href="#" className="hover:text-primary transition-colors">FAQs</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-3">Contact Info</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Email: support@acs.com</p>
              <p>Phone: 1800-XXX-XXXX</p>
              <p>Available 24/7</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 ACS - AI Customer Service. All rights reserved. Powered by advanced AI technology.
          </p>
        </div>
      </div>
    </footer>
  );
};
