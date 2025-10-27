import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bot, Mail, Lock } from "lucide-react";

const Login = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <div className="bg-card border-2 border-primary rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col items-center mb-8">
              <Bot className="h-16 w-16 text-primary mb-4" />
              <h1 className="text-3xl font-bold text-foreground">{t("welcomeBack")}</h1>
              <p className="text-muted-foreground mt-2">{t("loginAccount")}</p>
            </div>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">{t("email")}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="pl-10 bg-background border-border"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">{t("password")}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 bg-background border-border"
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
                {t("login")}
              </Button>
            </form>
            
            <p className="text-center text-muted-foreground mt-6">
              {t("noAccount")}{" "}
              <Link to="/signup" className="text-primary hover:underline font-semibold">
                {t("signup")}
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
