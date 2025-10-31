import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिन्दी" },
    { code: "kn", name: "ಕನ್ನಡ" },
    { code: "ta", name: "தமிழ்" },
    { code: "te", name: "తెలుగు" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-foreground hover:text-primary transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link to="/" className="flex items-center gap-2">
                <Bot className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-primary">ACS</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                {t("home")}
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                {t("about")}
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                {t("contact")}
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card border-border">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as any)}
                      className={`cursor-pointer ${
                        language === lang.code ? "bg-primary text-primary-foreground" : ""
                      }`}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/login">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  {t("login")}
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  {t("signUpFree")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)} />
        <div
          className={`absolute left-0 top-0 bottom-0 w-64 bg-white/10 backdrop-blur-md border-r border-white/20 transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">ACS</span>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="text-foreground hover:text-primary">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="p-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted hover:text-primary transition-colors"
            >
              {t("home")}
            </Link>
            <Link
              to="/about"
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted hover:text-primary transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted hover:text-primary transition-colors"
            >
              {t("contact")}
            </Link>
            <Link
              to="/login"
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted hover:text-primary transition-colors"
            >
              {t("login")}
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {t("signUpFree")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
