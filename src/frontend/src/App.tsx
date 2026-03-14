import { useEffect, useState } from "react";
import CTASection from "./components/CTASection";
import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";
import SkillsSection from "./components/SkillsSection";
import WorkflowSection from "./components/WorkflowSection";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-7 h-7"
      role="img"
      aria-label="WhatsApp"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      data-ocid="whatsapp.primary_button"
      href="https://wa.me/923068449319?text=Hi%20I%20am%20interested%20in%20your%20product"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white transition-transform duration-200 hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#EDE8DE]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <span
          className="text-xl font-bold text-[#1A1A1A]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Entrepreneur
        </span>
        <div className="flex items-center gap-4 md:gap-8">
          <a
            data-ocid="nav.link.1"
            href="#skills"
            className="hidden md:block text-sm font-medium text-[#6B5B45] hover:text-[#B8960C] transition-colors duration-200"
          >
            Services
          </a>
          <a
            data-ocid="nav.link.2"
            href="#packages"
            className="hidden md:block text-sm font-medium text-[#6B5B45] hover:text-[#B8960C] transition-colors duration-200"
          >
            Packages
          </a>
          <a
            data-ocid="nav.link.3"
            href="#workflow"
            className="hidden md:block text-sm font-medium text-[#6B5B45] hover:text-[#B8960C] transition-colors duration-200"
          >
            Process
          </a>
          <a
            data-ocid="nav.link.4"
            href="#contact"
            className="flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-full transition-all duration-200 shadow-md"
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppIcon />
            <span className="hidden sm:inline">Get in Touch</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer className="bg-[#F5F0E8] border-t border-[#EDE8DE] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <p className="text-sm text-[#9A8570]">
          &copy; {year} Entrepreneur. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <span className="text-xs text-[#9A8570]">Privacy</span>
          <span className="text-xs text-[#9A8570]">Terms</span>
        </div>
        <p className="text-xs text-[#9A8570]">
          Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#6B5B45] transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <PackagesSection />
        <WorkflowSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
