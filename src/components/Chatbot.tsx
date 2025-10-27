import { useState } from "react";
import { Bot, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { t } = useLanguage();

  const retailFAQ = [
    { q: "store hours", a: "Our stores are open Monday-Saturday 9 AM to 9 PM, Sunday 10 AM to 8 PM." },
    { q: "return policy", a: "We accept returns within 30 days with receipt. Items must be unused and in original packaging." },
    { q: "shipping", a: "Standard shipping takes 5-7 business days. Express shipping available for 2-3 days delivery." },
    { q: "payment methods", a: "We accept all major credit cards, debit cards, UPI, net banking, and cash on delivery." },
    { q: "track order", a: "You can track your order using the tracking number sent to your email or check 'My Orders' section." },
    { q: "cancel order", a: "Orders can be cancelled within 24 hours of placement. Go to 'My Orders' and select cancel." },
    { q: "customer support", a: "Our customer support is available 24/7. Call us at 1800-XXX-XXXX or email support@acs.com" },
    { q: "exchange", a: "Exchanges are available within 15 days. Product must be in original condition with tags attached." },
    { q: "discount", a: "Check our website for ongoing offers. Sign up for our newsletter to get exclusive discount codes." },
    { q: "membership", a: "Join our loyalty program for free and earn points on every purchase. Points can be redeemed for discounts." },
    { q: "gift card", a: "Gift cards are available in denominations of ₹500, ₹1000, ₹2000, and ₹5000. They never expire." },
    { q: "size guide", a: "Visit our size guide page for detailed measurements. We also offer free size exchanges if needed." },
    { q: "wholesale", a: "For wholesale inquiries, please contact our B2B team at wholesale@acs.com or call 1800-XXX-1111" },
    { q: "franchise", a: "We're expanding! For franchise opportunities, email franchise@acs.com with your location details." },
    { q: "warranty", a: "All electronics come with manufacturer warranty. Clothing and accessories have quality guarantee." },
  ];

  const findAnswer = (question: string) => {
    const lowerQ = question.toLowerCase();
    for (const faq of retailFAQ) {
      if (lowerQ.includes(faq.q)) {
        return faq.a;
      }
    }
    return "I'm here to help! Please ask about store hours, returns, shipping, payments, orders, or any other retail questions.";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userInput = input;
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        text: findAnswer(userInput),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse"
        >
          <Bot className="h-8 w-8" />
        </button>
      )}

      {/* Chat Window - Large Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-card border-2 border-primary rounded-2xl shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="h-8 w-8" />
                <div>
                  <h3 className="text-xl font-bold">{t("chatWithAI")}</h3>
                  <p className="text-sm opacity-90">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-black/20 p-2 rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-6 bg-background">
              <div className="space-y-4">
                {messages.map((message, idx) => (
                  <div
                    key={idx}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] p-4 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-muted text-foreground rounded-bl-none"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground p-4 rounded-2xl rounded-bl-none">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t("typeMessage")}
                  className="flex-1 bg-background border-border text-foreground"
                />
                <Button
                  onClick={handleSend}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
