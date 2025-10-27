import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bot, Mail, Lock, User } from "lucide-react";

const Signup = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setMessage("Please fill in all fields");
      return;
    }
    // Store user data in localStorage (demo purposes)
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setMessage("Account created successfully! Please login.");
    setTimeout(() => window.location.href = "/login", 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <div className="bg-card border-2 border-primary rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col items-center mb-8">
              <Bot className="h-16 w-16 text-primary mb-4" />
              <h1 className="text-3xl font-bold text-foreground">{t("signUpFree")}</h1>
              <p className="text-muted-foreground mt-2">{t("createAccount")}</p>
            </div>
            
            {message && (
              <div className={`text-center p-3 rounded-lg ${message.includes("success") ? "bg-primary/20 text-primary" : "bg-destructive/20 text-destructive"}`}>
                {message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">{t("name")}</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="pl-10 bg-background border-border"
                  />
                </div>
              </div>
              
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
                {t("signUpFree")}
              </Button>
            </form>
            
            <p className="text-center text-muted-foreground mt-6">
              {t("alreadyAccount")}{" "}
              <Link to="/login" className="text-primary hover:underline font-semibold">
                {t("login")}
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Signup;
