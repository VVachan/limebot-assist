import React, { createContext, useContext, useState } from "react";

type Language = "en" | "hi" | "kn" | "ta" | "te";

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  home: { en: "Home", hi: "होम", kn: "ಮುಖಪುಟ", ta: "முகப்பு", te: "హోమ్" },
  about: { en: "About", hi: "के बारे में", kn: "ನಮ್ಮ ಬಗ್ಗೆ", ta: "பற்றி", te: "గురించి" },
  contact: { en: "Contact", hi: "संपर्क करें", kn: "ಸಂಪರ್ಕಿಸಿ", ta: "தொடர்பு", te: "సంప్రదించండి" },
  login: { en: "Login", hi: "लॉगिन", kn: "ಲಾಗಿನ್", ta: "உள்நுழைய", te: "లాగిన్" },
  signUpFree: { en: "Sign Up Free", hi: "मुफ्त साइन अप करें", kn: "ಉಚಿತ ಸೈನ್ ಅಪ್", ta: "இலவச பதிவு", te: "ఉచిత సైన్ అప్" },
  signup: { en: "Sign Up", hi: "साइन अप करें", kn: "ಸೈನ್ ಅಪ್", ta: "பதிவு செய்", te: "సైన్ అప్" },
  welcomeBack: { en: "Welcome Back", hi: "वापसी पर स्वागत है", kn: "ಮತ್ತೆ ಸ್ವಾಗತ", ta: "மீண்டும் வரவேற்கிறோம்", te: "తిరిగి స్వాగతం" },
  aiPoweredService: { 
    en: "AI-Powered Customer Service", 
    hi: "एआई-संचालित ग्राहक सेवा", 
    kn: "AI-ಚಾಲಿತ ಗ್ರಾಹಕ ಸೇವೆ", 
    ta: "AI-இயங்கும் வாடிக்கையாளர் சேவை", 
    te: "AI-శక్తితో కస్టమర్ సేవ" 
  },
  heroSubtitle: {
    en: "Join thousands of businesses using our AI-powered platform for superior customer support",
    hi: "बेहतर ग्राहक सहायता के लिए हमारे एआई-संचालित प्लेटफॉर्म का उपयोग करने वाले हजारों व्यवसायों से जुड़ें",
    kn: "ಉತ್ತಮ ಗ್ರಾಹಕ ಬೆಂಬಲಕ್ಕಾಗಿ ನಮ್ಮ AI-ಚಾಲಿತ ವೇದಿಕೆಯನ್ನು ಬಳಸುವ ಸಾವಿರಾರು ವ್ಯವಹಾರಗಳನ್ನು ಸೇರಿಕೊಳ್ಳಿ",
    ta: "சிறந்த வாடிக்கையாளர் ஆதரவிற்காக எங்கள் AI-இயங்கும் தளத்தைப் பயன்படுத்தும் ஆயிரக்கணக்கான வணிகங்களுடன் சேரவும்",
    te: "మెరుగైన కస్టమర్ సపోర్ట్ కోసం మా AI-శక్తితో ప్లాట్‌ఫారమ్‌ను ఉపయోగిస్తున్న వేలాది వ్యాపారాలతో చేరండి"
  },
  getStarted: { en: "Get Started", hi: "शुरू करें", kn: "ಪ್ರಾರಂಭಿಸಿ", ta: "தொடங்கு", te: "ప్రారంభించండి" },
  chatWithAI: { en: "Chat with AI", hi: "एआई से बात करें", kn: "AI ಜೊತೆ ಚಾಟ್ ಮಾಡಿ", ta: "AI உடன் அரட்டை", te: "AI తో చాట్ చేయండి" },
  typeMessage: { en: "Type your message...", hi: "अपना संदेश टाइप करें...", kn: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...", ta: "உங்கள் செய்தியை தட்டச்சு செய்யவும்...", te: "మీ సందేశాన్ని టైప్ చేయండి..." },
  send: { en: "Send", hi: "भेजें", kn: "ಕಳುಹಿಸು", ta: "அனுப்பு", te: "పంపించు" },
  close: { en: "Close", hi: "बंद करें", kn: "ಮುಚ್ಚಿ", ta: "மூடு", te: "మూసివేయి" },
  email: { en: "Email", hi: "ईमेल", kn: "ಇಮೇಲ್", ta: "மின்னஞ்சல்", te: "ఇమెయిల్" },
  password: { en: "Password", hi: "पासवर्ड", kn: "ಪಾಸ್‌ವರ್ಡ್", ta: "கடவுச்சொல்", te: "పాస్‌వర్డ్" },
  name: { en: "Name", hi: "नाम", kn: "ಹೆಸರು", ta: "பெயர்", te: "పేరు" },
  alreadyAccount: { en: "Already have an account?", hi: "पहले से खाता है?", kn: "ಈಗಾಗಲೇ ಖಾತೆ ಹೊಂದಿದ್ದೀರಾ?", ta: "ஏற்கனவே கணக்கு உள்ளதா?", te: "ఇప్పటికే ఖాతా ఉందా?" },
  noAccount: { en: "Don't have an account?", hi: "खाता नहीं है?", kn: "ಖಾತೆ ಇಲ್ಲವೇ?", ta: "கணக்கு இல்லையா?", te: "ఖాతా లేదా?" },
  createAccount: { en: "Create your account", hi: "अपना खाता बनाएं", kn: "ನಿಮ್ಮ ಖಾತೆಯನ್ನು ರಚಿಸಿ", ta: "உங்கள் கணக்கை உருவாக்கவும்", te: "మీ ఖాతాను సృష్టించండి" },
  loginAccount: { en: "Login to your account", hi: "अपने खाते में लॉगिन करें", kn: "ನಿಮ್ಮ ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡಿ", ta: "உங்கள் கணக்கில் உள்நுழையவும்", te: "మీ ఖాతాలోకి లాగిన్ అవ్వండి" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
