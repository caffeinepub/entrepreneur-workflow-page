import { useEffect, useState } from "react";
import CTASection from "./components/CTASection";
import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";
import SkillsSection from "./components/SkillsSection";
import WorkflowSection from "./components/WorkflowSection";

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
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <span
          className="text-xl font-bold text-[#1A1A1A]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Entrepreneur
        </span>
        <div className="flex items-center gap-8">
          <a
            data-ocid="nav.link.1"
            href="#skills"
            className="text-sm font-medium text-[#6B5B45] hover:text-[#B8960C] transition-colors duration-200"
          >
            Services
          </a>
          <a
            data-ocid="nav.link.2"
            href="#packages"
            className="text-sm font-medium text-[#6B5B45] hover:text-[#B8960C] transition-colors duration-200"
          >
            Packages
          </a>
          <a
            data-ocid="nav.link.3"
            href="#workflow"
            className="text-sm font-medium text-[#6B5B45] hover:text-[#B8960C] transition-colors duration-200"
          >
            Process
          </a>
          <a
            data-ocid="nav.link.4"
            href="#contact"
            className="text-sm font-medium text-white bg-[#C4A882] hover:bg-[#B8960C] px-5 py-2 rounded-full transition-colors duration-200"
          >
            Contact
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
    </div>
  );
}
