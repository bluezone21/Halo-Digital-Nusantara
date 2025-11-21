import { useState, useEffect } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FeaturedInsights } from "../components/FeaturedInsights";
import { Services } from "../components/Services";
import { Products } from "../components/Products";
import { Industries } from "../components/Industries";
import { LatestThinking } from "../components/LatestThinking";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";
import { WhatWeDo } from "../components/WhatWeDo";
import { WhoWeAre } from "../components/WhoWeAre";
import { Insights } from "../components/Insights";
import { Careers } from "../components/Careers";
import { IndustriesAllPage } from "../components/IndustriesAllPage";
import { Newsroom } from "../components/Newsroom";
import { InvestorRelations } from "../components/InvestorRelations";
import { ContactUs } from "../components/ContactUs";
import { PrivacyStatement } from "../components/PrivacyStatement";
import { TermsOfUse } from "../components/TermsOfUse";
import { CookiePolicy } from "../components/CookiePolicy";
import { Sitemap } from "../components/Sitemap";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { OTPVerification } from "../components/OTPVerification";
import { Profile } from "../components/Profile";
import { CMSDashboard } from "../components/CMSDashboard";
import { Toaster } from "../components/ui/sonner";
import favicon from "figma:asset/b3f7df4655dfe89f0ceb527c39188b4b968cbaeb.png";

type PageType =
  | "home"
  | "what-we-do"
  | "who-we-are"
  | "insights"
  | "careers"
  | "industries"
  | "newsroom"
  | "investor-relations"
  | "contact"
  | "privacy"
  | "terms"
  | "cookies"
  | "sitemap"
  | "login"
  | "register"
  | "otp-verification"
  | "profile"
  | "cms-dashboard";

export default function App() {
  const [currentPage, setCurrentPage] =
    useState<PageType>("home");
  const [registrationEmail, setRegistrationEmail] = useState(
    "user@example.com",
  );
  const [registrationData, setRegistrationData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  // Set favicon
  useEffect(() => {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/png";
    link.rel = "icon";
    link.href = favicon;
    document.getElementsByTagName("head")[0].appendChild(link);

    // Set page title based on current page
    const titles: Record<PageType, string> = {
      home: "Halo Digital Nusantara | Digital Transformation Consulting",
      "what-we-do": "What We Do | Halo Digital Nusantara",
      "who-we-are": "Who We Are | Halo Digital Nusantara",
      insights: "Insights | Halo Digital Nusantara",
      careers: "Careers | Halo Digital Nusantara",
      industries: "Industries | Halo Digital Nusantara",
      newsroom: "Newsroom | Halo Digital Nusantara",
      "investor-relations":
        "Investor Relations | Halo Digital Nusantara",
      contact: "Contact Us | Halo Digital Nusantara",
      privacy: "Privacy Statement | Halo Digital Nusantara",
      terms: "Terms of Use | Halo Digital Nusantara",
      cookies: "Cookie Policy | Halo Digital Nusantara",
      sitemap: "Sitemap | Halo Digital Nusantara",
      login: "Login | Halo Digital Nusantara",
      register: "Register | Halo Digital Nusantara",
      "otp-verification":
        "OTP Verification | Halo Digital Nusantara",
      profile: "Profile | Halo Digital Nusantara",
      "cms-dashboard": "CMS Dashboard | Halo Digital Nusantara",
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  // Simple router function
  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <main>
            <Hero />
            <FeaturedInsights />
            <Services />
            <Products />
            <Industries navigateTo={navigateTo} />
            <LatestThinking />
            <CallToAction />
          </main>
        );
      case "what-we-do":
        return (
          <main className="pt-16">
            <WhatWeDo />
          </main>
        );
      case "who-we-are":
        return (
          <main className="pt-16">
            <WhoWeAre />
          </main>
        );
      case "insights":
        return (
          <main className="pt-16">
            <Insights />
          </main>
        );
      case "careers":
        return (
          <main className="pt-16">
            <Careers />
          </main>
        );
      case "industries":
        return (
          <main className="pt-16">
            <IndustriesAllPage />
          </main>
        );
      case "newsroom":
        return (
          <main className="pt-16">
            <Newsroom />
          </main>
        );
      case "investor-relations":
        return (
          <main className="pt-16">
            <InvestorRelations />
          </main>
        );
      case "contact":
        return (
          <main className="pt-16">
            <ContactUs />
          </main>
        );
      case "privacy":
        return (
          <main className="pt-16">
            <PrivacyStatement />
          </main>
        );
      case "terms":
        return (
          <main className="pt-16">
            <TermsOfUse />
          </main>
        );
      case "cookies":
        return (
          <main className="pt-16">
            <CookiePolicy />
          </main>
        );
      case "sitemap":
        return (
          <main className="pt-16">
            <Sitemap navigateTo={navigateTo} />
          </main>
        );
      case "login":
        return (
          <main>
            <Login navigateTo={navigateTo} />
          </main>
        );
      case "register":
        return (
          <main>
            <Register
              navigateTo={navigateTo}
              setRegistrationEmail={setRegistrationEmail}
              setRegistrationData={setRegistrationData}
            />
          </main>
        );
      case "otp-verification":
        return (
          <main>
            <OTPVerification
              navigateTo={navigateTo}
              email={registrationEmail}
              registrationData={registrationData}
            />
          </main>
        );
      case "profile":
        return (
          <main>
            <Profile navigateTo={navigateTo} />
          </main>
        );
      case "cms-dashboard":
        return (
          <main>
            <CMSDashboard navigateTo={navigateTo} />
          </main>
        );
      default:
        return null;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-black">
        {![
          "login",
          "register",
          "otp-verification",
          "cms-dashboard",
        ].includes(currentPage) && (
          <Header navigateTo={navigateTo} />
        )}
        {renderPage()}
        {![
          "login",
          "register",
          "otp-verification",
          "cms-dashboard",
        ].includes(currentPage) && (
          <Footer navigateTo={navigateTo} />
        )}
        <Toaster />
      </div>
    </AuthProvider>
  );
}
