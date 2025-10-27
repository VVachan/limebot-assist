import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Bot, Zap, Shield, MessageSquare } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Large Lime Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/20 blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/20 border border-primary rounded-full">
                <span className="text-primary font-semibold">AI-Powered Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                {t("aiPoweredService")}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {t("heroSubtitle")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                  {t("getStarted")}
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-card border-2 border-primary rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full blur-2xl" />
                <Bot className="h-32 w-32 text-primary mx-auto mb-6 animate-pulse" />
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                    <span className="text-foreground">Lightning Fast Responses</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="text-foreground">Secure & Private</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <span className="text-foreground">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Why Choose ACS?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "AI-Powered",
                description: "Advanced AI technology for accurate and helpful responses",
              },
              {
                icon: Zap,
                title: "Fast & Efficient",
                description: "Get instant answers to your queries 24/7",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Your data is protected with enterprise-grade security",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-background border-2 border-border hover:border-primary rounded-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
