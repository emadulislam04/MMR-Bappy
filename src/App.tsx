/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Sparkles, 
  Anchor,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Check,
  Globe,
  Award,
  Shield,
  FileSpreadsheet,
  TrendingUp,
  Cpu,
  Layers,
  Phone,
  Linkedin,
  Send,
  Calendar,
  DollarSign,
  Calculator,
  Clock,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { PERSONAL_INFO, EXPERIENCES, SKILLS, PROJECTS } from "./data";
import ContactForm from "./components/ContactForm";

// REAL SOURCING COMPANY LOGOS DIRECT FROM USER DEPLOYMENT REQUEST
const CROSSLINE_LOGO_BASE64 = "data:image/jpeg;base64,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";

const ECO_SOURCING_LOGO_URL = "https://media.licdn.com/dms/image/v2/C560BAQGUWBpPkt5UNg/company-logo_100_100/company-logo_100_100/0/1630672755623/ecosourcingltd_logo?e=1782950400&v=beta&t=hO-yVuNKuDXiOMbtCoNDlxudVXZIPtiN3PGnElswUfo";

// Creative textile weave design touch for a senior apparel professional
const TextileLogoTouch = () => (
  <div className="inline-flex items-center justify-center p-2 rounded-xl bg-gradient-to-br from-[#142D95] to-[#050F40] shadow-sm text-white scale-95 hover:rotate-6 transition-transform duration-300">
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="1.5" className="opacity-70" />
      <path d="M6 3v18M12 3v18M18 3v18" strokeWidth="1.5" strokeDasharray="2 2" className="opacity-70" />
      <circle cx="12" cy="12" r="4.5" fill="#FCEF74" stroke="#ffffff" strokeWidth="1" />
      <path d="M12 10v4M10 12h4" stroke="#ffffff" strokeWidth="1" />
    </svg>
  </div>
);

// Ultra-clean high-polish uniform section header
const SectionHeader = ({ badgeText, title, subTitle }: { badgeText: string; title: string; subTitle?: string }) => (
  <div className="max-w-4xl mx-auto text-center mb-12 px-4 relative flex flex-col items-center animate-none animate-fade-in">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#142D95]/5 rounded-full text-[10px] font-mono text-[#142D95] uppercase tracking-widest border border-[#142D95]/10 shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-[#142D95] animate-pulse" />
      <span className="font-bold">{badgeText}</span>
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-[#050F40] tracking-tight mt-4">
      {title}
    </h2>
    {subTitle && (
      <p className="mt-3 text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto font-normal leading-relaxed">
        {subTitle}
      </p>
    )}
  </div>
);

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeExpModal, setActiveExpModal] = useState<typeof EXPERIENCES[0] | null>(null);
  const [activeSkillCat, setActiveSkillCat] = useState("merchandising");
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // Monitor scroll for header solidifying
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stop body scrolling when popup/modal is open
  useEffect(() => {
    if (activeExpModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeExpModal]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Primary list of client logos based on instructions
  // 1. DistriCenter
  // 2. Michelson Partner (zZwWEuC)
  // 3. TAO Collective
  // 4. Camaieu
  // 5. Promod
  // 6. Gemo
  const CLIENT_LOGOS = [
    { url: "https://media.licdn.com/dms/image/v2/C4E0BAQHUdmQJ3KVcHw/company-logo_200_200/company-logo_200_200/0/1630602595537?e=2147483647&v=beta&t=r1KGPZlxUlcAhxiF3tj69mlBk0onc0mDrM40g2Q5AsE", name: "Michelson Emmanuel Sourcing" },
    { url: "https://cdn.shopify.com/s/files/1/0288/4757/1028/files/North_Gentlemen_s_Clothing_Logo.jpg?height=628&pad_color=fff&v=1613677922&width=1200", name: "North Clothing" },
    { url: "https://i.imgur.com/gHOUhwV.png", name: "Gemo Casual" },
    { url: "https://i.imgur.com/lbaVQCD.png", name: "Promod France" },
    { url: "https://i.imgur.com/WtXCPfK.png", name: "Camaieu" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURzVpMX7dt3pwpZ6JUjvhPzs4nAdb5Tgoqg&s", name: "Five Brothers" },
    { url: "https://www.pointzero.ca/cdn/shop/files/pz-logo_1200x628_91bbf093-d05e-4dce-b473-24f5bdbdc938.jpg?v=1630005052", name: "Point Zero" },
    { url: "https://www.taokids.com//medias/HP-LOGO-DESK.jpg?context=bWFzdGVyfGltYWdlc3w3NTk5fGltYWdlL2pwZWd8YURWbUwyaGxNQzh4TWpRM01EazBNRFF6TkRRMk1pOUlVRjlNVDBkUFgwUkZVMHN1YW5CbnxhOTMzMTc4N2ViODNhMWQ3N2M3MGE4MTIyYzIzOWQ0ODk1NDI5ZjQzMTg5ZmI5ZjllY2E0N2U1YjhkYjQzNThi", name: "TAO Kids" },
    { url: "https://teeshoppen.co.uk/cdn/shop/collections/Tailored_Originals_Logo.jpg?v=1654254132", name: "Tailored Originals" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbe1tU-zVyPpSya0bGf9Bk9xOuNAfZDJ50PA&s", name: "Selected Brand" }
  ];

  // Repeat logos for premium dual-directional seamless look
  const CONTINUOUS_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  // Render a creative representative vector brand logo shield with vibrant colors (No grayscale)
  const renderCompanyLogo = (companyName: string) => {
    const lowerName = companyName.toLowerCase();
    let logoSrc = "";
    
    if (lowerName.includes("crossline")) {
      logoSrc = "https://i.imgur.com/B4pRaF7.png";
    } else if (lowerName.includes("eco sourcing")) {
      logoSrc = "https://i.imgur.com/cxr0S9M.png";
    } else if (lowerName.includes("michelson") || lowerName.includes("emmanuel")) {
      logoSrc = "https://i.imgur.com/Tnchk0d.png";
    } else if (lowerName.includes("linkon")) {
      logoSrc = "https://cdn.dribbble.com/userupload/31833242/file/original-51b8428be95ea654f178d691a98c3fcf.jpg?resize=752x&vertical=center";
    }

    if (logoSrc) {
      return (
        <div className="w-12 h-12 rounded-xl bg-white overflow-hidden flex items-center justify-center p-1 shadow-[0_4px_12px_rgba(20,45,149,0.06)] relative group-hover:scale-110 transition-transform duration-300">
          <img src={logoSrc} alt={companyName} className="max-h-full max-w-full object-contain" />
        </div>
      );
    }

    return (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#142D95] to-[#050F40] shadow-sm flex items-center justify-center text-white font-mono font-bold text-base select-none relative group-hover:scale-110 transition-transform duration-300 border border-white/10">
        {companyName.charAt(0)}
      </div>
    );
  };

  return (
    <div 
      className="relative min-h-screen bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] text-slate-800 overflow-x-hidden selection:bg-[#142D95]/20 selection:text-slate-900 font-sans"
    >
      
      {/* Absolute Dynamic Colored Light Orbs - Subtle, glowing, high-blur light cyan/royal blue gradients */}
      <div className="absolute top-[3%] left-[10%] w-[320px] h-[320px] sm:w-[550px] sm:h-[550px] bg-sky-200/40 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-[25%] right-[5%] w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] bg-blue-100/30 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[8%] w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-indigo-100/30 rounded-full filter blur-[140px] pointer-events-none" />
      
      {/* 100VH COMBINED HERO & HEADER CONTAINER WITH DELICATE LIGHT GRID ACCENTS */}
      <div 
        className="relative min-h-screen lg:h-screen lg:max-h-[960px] flex flex-col justify-between overflow-hidden" 
        id="hero-and-header-container"
        style={{ 
          backgroundImage: `
            radial-gradient(rgba(20, 45, 149, 0.02) 1.5px, transparent 1.5px),
            linear-gradient(to right, rgba(20, 45, 149, 0.015) 1.2px, transparent 1.2px),
            linear-gradient(to bottom, rgba(20, 45, 149, 0.015) 1.2px, transparent 1.2px)
          `,
          backgroundSize: "32px 32px, 16px 16px, 16px 16px",
        }}
      >
        {/* ULTRA-DENSE GLASSMORPHIC SCROLLED HEADER (FLOATS GRACEFULLY AT 100% WIDTH) */}
        <header 
          className={`fixed z-50 transition-all duration-300 ease-in-out top-0 left-0 right-0 w-full border-b bg-white/90 backdrop-blur-2xl ${
            scrolled 
              ? "border-slate-200/80 shadow-md py-2" 
              : "border-slate-200/40 shadow-sm py-2.5"
          }`}
          id="main-app-header"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
            
            {/* Brand Logo with Rounded Photo, static green dot, and exact Name */}
            <a href="#hero" className="flex items-center gap-3 py-1 group select-none" id="header-profile-link">
              <div className="relative">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-white">
                  <img 
                    src={PERSONAL_INFO.photoUrl} 
                    alt={PERSONAL_INFO.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full rounded-full object-cover scale-100 origin-center transition-transform duration-300 group-hover:scale-110"
                    id="pfp-thumbnail"
                  />
                </div>
                {/* Perfectly steady green active status dot */}
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" id="active-pfp-dot" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-sm sm:text-base tracking-tight text-[#050F40] group-hover:text-[#142D95] transition-colors" id="nav-brand-name">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  Senior Merchandiser
                </span>
              </div>
            </a>

             {/* Center-Right / Right Aligned Header Choices */}
            <div className="flex items-center gap-6 sm:gap-8">
              
              {/* Nav Choices */}
              <nav className="hidden lg:flex items-center gap-8" id="desktop-nav-menu">
                <a 
                  href="#hero" 
                  className="text-xs uppercase font-poppins font-black tracking-widest text-[#142D95] hover:text-blue-600 transition-colors"
                  id="link-home"
                >
                  Home
                </a>
                <a 
                  href="#about-me" 
                  className="text-xs uppercase font-poppins font-black tracking-widest text-slate-600 hover:text-[#142D95] transition-colors"
                  id="link-about"
                >
                  About
                </a>
                <a 
                  href="#experience-timeline" 
                  className="text-xs uppercase font-poppins font-black tracking-widest text-slate-600 hover:text-[#142D95] transition-colors"
                  id="link-experience"
                >
                  Experience
                </a>
                <a 
                  href="#clients-managed" 
                  className="text-xs uppercase font-poppins font-black tracking-widest text-slate-600 hover:text-[#142D95] transition-colors"
                  id="link-clients"
                >
                  managed buyer
                </a>
              </nav>

              {/* Premium CTA and Menu */}
              <div className="flex items-center gap-3">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="hidden sm:inline-flex items-center gap-2 px-6 py-3 text-xs text-white bg-gradient-to-r from-[#142D95] via-[#3B52D4] to-[#142D95] bg-[length:200%_auto] hover:bg-[right_center] font-poppins font-black uppercase tracking-wider rounded-lg transition-all duration-150 hover:translate-y-[-1px] active:translate-y-[1px] cursor-pointer relative overflow-hidden group"
                  id="header-cta"
                >
                  <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" style={{ transform: "skewX(-20deg)" }} />
                  <span>Email Me</span>
                  <Send className="w-3 h-3 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Mobile menu toggle */}
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
                  aria-label="Toggle Menu"
                  id="mobile-menu-toggle-btn"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6 animate-none" /> : <Menu className="w-6 h-6 animate-none" />}
                </button>
              </div>
            </div>

          </div>

          {/* MOBILE DRAWER: Sliding smoothly from the top */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-start" id="mobile-menu-drawer-portal">
                {/* Overlay Backdrop */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-[#020617]/40 backdrop-blur-xs"
                  onClick={() => setMobileMenuOpen(false)}
                />
                
                {/* Drawer Container - Sliding gracefully from the top */}
                <motion.div 
                  initial={{ y: -60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative w-full bg-white shadow-2xl rounded-b-[20px] border-b border-slate-200/80 p-6 flex flex-col z-50"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                    <span className="font-poppins font-black text-xs text-[#142D95] uppercase tracking-widest">Navigation</span>
                    <button 
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 transition-colors focus:outline-none"
                      id="close-mobile-menu-btn"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    <a 
                      href="#hero" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-poppins font-black uppercase tracking-widest text-slate-700 hover:text-[#142D95] py-2 transition-colors border-b border-slate-50"
                    >
                      Home
                    </a>
                    <a 
                      href="#about-me" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-poppins font-black uppercase tracking-widest text-slate-700 hover:text-[#142D95] py-2 transition-colors border-b border-slate-50"
                    >
                      About
                    </a>
                    <a 
                      href="#experience-timeline" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-poppins font-black uppercase tracking-widest text-slate-700 hover:text-[#142D95] py-2 transition-colors border-b border-slate-50"
                    >
                      Experience
                    </a>
                    <a 
                      href="#clients-managed" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-poppins font-black uppercase tracking-widest text-slate-700 hover:text-[#142D95] py-2 transition-colors"
                    >
                      managed buyer
                    </a>
                  </nav>
                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs text-white bg-[#142D95] hover:bg-[#122780] font-poppins font-black uppercase tracking-wider rounded-lg transition-all duration-150 hover:translate-y-[-1px] active:translate-y-[1px]"
                    >
                      <span>Email me</span>
                      <Send className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </header>

        {/* HERO CONTENT SECTION - STYLED IN ELEVATED WHITE BG & BLUE GRADIENT */}
        <section 
          id="hero" 
          className="relative w-full flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 pt-24 pb-12 sm:pt-28 md:pt-32 animate-fade-in-up"
        >
          {/* Core Hero Content */}
          <div className="flex flex-col items-center justify-center text-center max-w-none w-full xl:max-w-6xl mx-auto animate-fade-in-up animation-delay-200">
            
            {/* Centered Pill Badge */}
            <div className="flex justify-center mb-6 transform hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 bg-blue-50 border border-blue-200/50 rounded-full text-[10px] sm:text-xs font-sans font-bold text-[#142D95] shadow-sm select-none">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#142D95]" />
                <span className="text-[#050F40]">8+ Years Sourcing Woven, Denim &amp; Knits</span>
              </div>
            </div>

            {/* Hero Title with Dual Accent Gradients - White & Light Blue */}
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-sans font-black text-slate-900 tracking-tighter leading-[1.12]" id="hero-main-title">
                Garment Merchandising &amp; Sourcing Professional <span className="bg-gradient-to-r from-[#142D95] via-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">Ensuring Quality.</span>
              </h1>
              
              {/* Highly Competent Technical Bio - No line breaks */}
              <p className="text-slate-600 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-3xl mx-auto font-poppins" id="hero-bio-short">
                Sourcing elite apparel collections under absolute Time &amp; Action controls, formulating complex CMT estimates, fabric recipes, and global logistics.
              </p>
            </div>

            {/* Metric Badges - No space between them */}
            <div className="flex items-center justify-center pt-8 pb-2 w-full max-w-xs sm:max-w-sm mx-auto border-t border-slate-200 mt-10" id="hero-unified-metrics">
              
              <div className="flex-1 flex flex-col items-center text-center">
                <span className="text-base sm:text-lg md:text-xl font-sans font-black text-[#142D95] font-mono leading-none">
                  905+
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono text-slate-500 font-bold uppercase tracking-wider mt-1.5 block leading-tight">
                  Orders
                </span>
              </div>

              {/* Vertical Separator | with minimal spacing */}
              <div className="text-slate-300 font-normal select-none px-0.5 text-xs sm:text-sm">|</div>

              <div className="flex-1 flex flex-col items-center text-center">
                <span className="text-base sm:text-lg md:text-xl font-sans font-black text-[#142D95] font-mono leading-none">
                  2400+
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono text-slate-500 font-bold uppercase tracking-wider mt-1.5 block leading-tight">
                  Samples
                </span>
              </div>

              {/* Vertical Separator | with minimal spacing */}
              <div className="text-slate-300 font-normal select-none px-0.5 text-xs sm:text-sm">|</div>

              <div className="flex-1 flex flex-col items-center text-center">
                <span className="text-base sm:text-lg md:text-xl font-sans font-black text-[#10b981] font-mono leading-none">
                  98%+
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono text-slate-500 font-bold uppercase tracking-wider mt-1.5 block leading-tight">
                  On-Time Delivery
                </span>
              </div>

            </div>

            {/* Action Callouts */}
            <div className="relative flex flex-row items-center justify-center gap-4 pt-6 w-full max-w-sm mx-auto" id="hero-two-buttons">
              
              {/* Primary Action: Official WhatsApp Connection */}
              <a 
                href={PERSONAL_INFO.whatsapp}
                target="_blank" 
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-0 py-3.5 bg-[#25D366] hover:bg-[#1fbe58] text-white font-poppins font-black text-[9.5px] sm:text-xs rounded-lg uppercase tracking-wider transition-all duration-150 hover:translate-y-[-1px] active:translate-y-[1px] shadow-[3px_3px_0px_#050F40] cursor-pointer border-2 border-[#050F40] select-none"
                id="hero-whatsapp-button"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="truncate">WhatsApp</span>
              </a>

              {/* Secondary Action: Direct email copy */}
              <button 
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-0 py-3.5 bg-white text-[#142D95] border-2 border-[#050F40] hover:bg-slate-50 font-poppins font-black text-[9.5px] sm:text-xs rounded-lg uppercase tracking-wider transition-all duration-150 hover:translate-y-[-1px] active:translate-y-[1px] shadow-[3px_3px_0px_#050F40] focus:outline-none cursor-pointer select-none"
                id="hero-copy-email-button"
              >
                <Mail className="w-3.5 h-3.5 text-[#142D95]" />
                <span className="truncate">{copiedEmail ? "Copied" : "Email"}</span>
              </button>

            </div>

          </div>

          <div className="h-2" />
        </section>
      </div>

      {/* 2. ABOUT ME SECTION - CONVERTED TO PREMIUM LIGHT INTUITIVE WHITE BG */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 animate-fade-in-up" id="about-me">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 sm:gap-16">
          
          {/* Left Column: REAL portrait photo with zero outer border */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group max-w-sm w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl bg-slate-100" id="about-portrait-card-container">
              <img 
                src={PERSONAL_INFO.photoUrl} 
                alt={PERSONAL_INFO.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-100 origin-center transition-transform duration-500 hover:scale-105"
                id="about-portrait-img"
              />
            </div>
          </div>

          {/* Right Column: Detailed Biography & Academic profile with beautiful dark text */}
          <div className="w-full lg:w-3/5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-[10px] font-poppins text-[#142D95] uppercase tracking-widest font-extrabold block">
                Academic &amp; Professional Profile
              </span>
              <h2 className="text-3xl font-sans font-black text-slate-900 tracking-tight">
                Md Muhyminur Rahman Bappy
              </h2>
              <span className="text-xs font-poppins text-slate-500 uppercase tracking-wider block font-bold">
                B.Sc in Textile Engineering · Senior Merchandiser
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm font-poppins">
              I am a comprehensive garment industry professional specializing in high-volume apparel operations. Leveraging over 8 sterling years in Bangladesh's top-tier apparel sourcing centers, I have managed robust knitted, woven, and sustainable washing denim collections for leading European fashion lines.
            </p>

            <blockquote className="border-l-4 border-[#142D95]/40 pl-4 py-2 italic text-slate-700 font-poppins font-medium text-xs sm:text-sm bg-slate-50">
              "To translate technical fabric weaves, dye chemistry, and trim bookings into a reliable product schedule that exceeds international compliance benchmarks."
            </blockquote>

            {/* Structured Education Grid - 2 boxes side by side in one row on wider screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-poppins text-slate-800 animate-none">
              
              <div className="space-y-1.5 p-4 bg-slate-50 rounded-xl border border-slate-200/50 flex flex-col justify-between shadow-xs">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4.5 h-4.5 text-[#142D95]" />
                  <span className="text-slate-500 uppercase text-[9px] font-extrabold tracking-wider block">Education &middot; 2012 - 2015</span>
                </div>
                <div>
                  <span className="text-slate-900 font-bold block text-xs">B.Sc in Textile Engineering</span>
                  <span className="text-slate-700 block text-[11px] leading-tight mt-1">University of South Asia</span>
                </div>
              </div>

              <div className="space-y-1.5 p-4 bg-slate-50 rounded-xl border border-slate-200/50 flex flex-col justify-between shadow-xs">
                <div className="flex items-center gap-2">
                  <Award className="w-4.5 h-4.5 text-emerald-600" />
                  <span className="text-slate-500 uppercase text-[9px] font-extrabold tracking-wider block">Diploma &middot; 2008 - 2012</span>
                </div>
                <div>
                  <span className="text-slate-900 font-bold block text-xs">Diploma in Textile Engineering</span>
                  <span className="text-slate-700 block text-[11px] leading-tight mt-1">Mymensingh Textile Eng. Institute</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

       {/* 3. WORK EXPERIENCE TIMELINE SECTION - NO CARD HOVER EFFECT & CREATIVE DOUBLE TIMELINE SPINE */}
      <section className="bg-slate-50/50 py-24 border-t border-b border-slate-200/60 animate-fade-in-up" id="experience-timeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader 
            badgeText="Employment History"
            title="Professional Chronological Experience"
            subTitle="Proven eight-year record across top-tier buying houses, textile-industrial departments, and global manufacturing operations."
          />

          {/* Timeline Wrapper Grid */}
          <div className="max-w-3xl mx-auto relative pl-12 sm:pl-16 space-y-8 font-poppins">
            
            {/* Google-style dotted connecting timeline line */}
            <div className="absolute left-[20px] sm:left-[24px] top-6 bottom-6 w-0 border-l-2 border-dotted border-slate-300 pointer-events-none" id="timeline-stitch-spine" />

            {EXPERIENCES.map((exp, index) => {
              const isMichaelson = exp.id === "exp-michaelson";
              return (
                <div 
                  key={exp.id} 
                  className="relative bg-white p-5 sm:p-7 rounded-xl border border-slate-200/60 shadow-xs transition-all duration-300"
                  id={`experience-card-${exp.id}`}
                >
                
                {/* Responsive Layout: Logo left/top, Title-Details right */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  
                  {/* Decorative Company Badge Logo  */}
                  <div className="flex-shrink-0">
                    {renderCompanyLogo(exp.company)}
                  </div>

                  {/* Main Role info */}
                  <div className="flex-1 space-y-3.5">
                    
                    {/* Header: Role, Company, Location, Period Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <h3 className="text-base font-sans font-black text-slate-950">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-xs">
                          <span className="font-poppins font-extrabold text-[#142D95]">{exp.company}</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-[10px] text-slate-500 font-poppins">{exp.location}</span>
                        </div>
                      </div>
                      
                      {/* Period Badge - Pure Poppins, crisp, small font */}
                      <span className={`inline-block px-3 py-1.5 rounded bg-slate-50 text-slate-700 text-[10px] font-poppins font-bold self-start border border-slate-200 uppercase tracking-wider whitespace-nowrap flex-shrink-0 ${
                        isMichaelson ? "sm:px-5 sm:py-2" : ""
                      }`}>
                        {exp.period}
                      </span>
                    </div>

                    {/* 1 Full & 1 Half Responsibilities bullet layout */}
                    <div className="space-y-3 pt-1 font-poppins text-xs text-slate-600 leading-relaxed font-normal">
                      {/* 1 Full Responsibility */}
                      <div className="flex items-start gap-2.5">
                        <span className="text-emerald-500 font-black text-sm leading-none mt-0.5">•</span>
                        <p className="flex-1">{exp.description[0]}</p>
                      </div>

                      {/* 1 Half with concise display without inline link */}
                      {exp.description[1] && (
                        <div className="flex items-start gap-2.5">
                          <span className="text-emerald-500 font-black text-sm leading-none mt-0.5">•</span>
                          <p className="flex-1">
                            {exp.description[1].length > 120 ? `${exp.description[1].slice(0, 120)}...` : exp.description[1]}
                          </p>
                        </div>
                      )}
                    </div>

                  </div>

                </div>

                {/* Right Aligned spec button aligned to the right inside the employee box */}
                <div className="flex justify-end mt-4">
                  <button 
                    onClick={() => setActiveExpModal(exp)}
                    className="px-4 py-2 bg-slate-50 hover:bg-[#142D95] text-slate-700 hover:text-white transition-all text-[11px] font-sans font-extrabold rounded-lg border border-slate-200/80 hover:border-transparent flex items-center gap-1.5 cursor-pointer shadow-2xs hover:shadow-xs active:scale-95 duration-200"
                  >
                    <span>See Full</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Metal milestone marker along the creative spine */}
                <div className="absolute left-[-36px] sm:left-[-48px] top-[26px] w-[16px] h-[16px] rounded-full bg-white border-2 border-[#142D95] shadow-xs flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>

              </div>
            );})}

          </div>

        </div>
      </section>

      {/* 4. CLIENTS MANAGED - MAJOR BRAND PORTFOLIO EXPORT ROW */}
      <section className="bg-white py-24 border-b border-slate-200/60 animate-fade-in-up" id="clients-managed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader 
            badgeText="Client Portfolio"
            title="International Retail Accounts Managed"
            subTitle="Successfully directing merchandising costings, accessories sourcing, and bulk production logistics for dominant global fashion networks."
          />

          {/* 5 items per row on desktop/laptop, 4 items per row on mobile, completely borderless with no box shadow */}
          <div className="grid grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-6 max-w-5xl mx-auto">
            {CLIENT_LOGOS.map((logo, idx) => (
              <div 
                key={`buyer-portfolio-${idx}`} 
                className={`w-full aspect-[4/3] bg-slate-50/30 rounded-xl p-2 sm:p-3 items-center justify-center select-none animate-none border-0 shadow-none ${
                  idx >= 8 ? "hidden lg:flex" : "flex"
                }`}
                id={`brand-logo-card-${idx}`}
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  referrerPolicy="no-referrer"
                  className="max-h-[85%] max-w-[85%] object-contain filter grayscale opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-200" 
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PROFESSIONAL INDEX SECTION - REFACTORED INTO AN IMMERSIVE INTERACTIVE ACCORDION WITH IMAGE LOADING */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-t border-b border-slate-200/60 animate-fade-in-up" id="professional-index">
        <div className="max-w-7xl mx-auto">
          
          <SectionHeader 
            badgeText="Professional Index"
            title="Engineering &amp; Merchandising Skills Matrix"
          />

          {/* PROFESSIONAL INDEX MATRICES IN A HIGHLY VISUAL 2-COLUMN, 2-ROW GRID OVERALL */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12" id="skills-grid-index">
            {[
              {
                id: "merchandising",
                title: "Apparel Merchandising & Costing",
                icon: <FileSpreadsheet className="w-5 h-5 text-white" />,
                desc: "Formulating high-precision costings (CMA/CMT), fabric consumption, and managing sample development with global buyers.",
                image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
                footer: "Cost Sheet Analytics & Budgets",
                color: "bg-[#142D95]"
              },
              {
                id: "sourcing",
                title: "Sourcing & Trim Supply Chain",
                icon: <Globe className="w-5 h-5 text-white" />,
                desc: "Negotiating directly with elite spinning and weaving mills to source premium yarn types, eco fibers, and accessories.",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
                footer: "Spinning Yards & Raw Fibers",
                color: "bg-amber-500"
              },
              {
                id: "compliance",
                title: "Quality Assurance & Compliance Index",
                icon: <Shield className="w-5 h-5 text-white" />,
                desc: "Directing factory compliance audits and strict quality controls under GOTS, Oeko-Tex, and AQL 1.5 standards.",
                image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
                footer: "Oeko-Tex Standard 100 Certified",
                color: "bg-emerald-500"
              },
              {
                id: "technical",
                title: "Core Textile Engineering Specialty",
                icon: <Cpu className="w-5 h-5 text-white" />,
                desc: "In-depth textile engineering expertise in yarn counts, dyestuff chemistry, shrinkage, and fabric finishing.",
                image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=800&q=80",
                footer: "Wet Chemical Processing & Weaves",
                color: "bg-indigo-500"
              }
            ].map((item) => (
              <div 
                key={`skills-grid-item-${item.id}`}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col justify-between"
                id={`skill-card-block-${item.id}`}
              >
                {/* Image Section with Instant Loading */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-100 overflow-hidden group">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-all duration-700 relative z-10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none z-20" />
                  <span className="absolute bottom-4 left-4 text-white text-[9px] font-sans font-extrabold tracking-widest uppercase bg-[#142D95] px-3 py-1.5 rounded-md shadow-xs pointer-events-none z-30">
                    {item.footer}
                  </span>
                </div>

                {/* Info and skill metrics */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#142D95] text-white rounded-xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="font-sans font-black text-sm sm:text-base text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 font-poppins text-xs leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Filtered skill set lists inside custom bars */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    {SKILLS.filter(s => s.category === item.id).map((s, idx) => (
                      <div key={`skill-card-bar-${item.id}-${idx}`} className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] font-poppins font-medium">
                          <span className="text-slate-700 font-bold">{s.name}</span>
                          <span className="font-bold text-[#142D95]">{s.level}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/40">
                          <div className={`${item.color} h-full rounded-full`} style={{ width: `${s.level}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. ENGINEERING PRECISION - STEP-BY-STEP APPAREL PIPELINE - STYLED IN DEEP LIGHT GRADIENT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-slate-200/60 animate-fade-in-up" id="engineering-precision">
        
        <SectionHeader 
          badgeText="Engineering Precision"
          title="End-to-End Merchandising Pipeline"
          subTitle="Implementing highly organized processes to manage multi-million unit bulk collections from costing to client release."
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal connectors for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 border-t-2 border-dotted border-[#142D95]/15 z-0 pointer-events-none" />
          
          {/* Vertical connectors for mobile */}
          <div className="lg:hidden absolute left-[36px] top-12 bottom-12 w-0.5 border-l-2 border-dotted border-[#142D95]/15 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 shadow-xs relative group flex flex-col lg:block pl-16 lg:pl-6 animate-none" id="step-costing">
              {/* Number bubble centered on the vertical line on mobile, normal on desktop */}
              <div className="absolute left-4 lg:left-auto lg:relative w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#142D95] font-poppins font-black mb-4 group-hover:bg-[#142D95] group-hover:text-white transition-colors z-10 border border-[#142D95]/10 shadow-xs">
                01
              </div>
              <div>
                <h4 className="font-sans font-black text-slate-950 text-sm md:text-base leading-tight mb-1.5">Costing &amp; Booking</h4>
                <p className="text-slate-600 font-poppins text-xs leading-relaxed font-normal">
                  Formulating precise consumptions for yarn dyeing, yardages, and pattern grading layouts to hit buyer costing targets.
                </p>
              </div>
              <div className="absolute top-6 right-6 text-slate-400 font-poppins text-[8px] uppercase font-extrabold hidden lg:block">
                Phase I
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 shadow-xs relative group flex flex-col lg:block pl-16 lg:pl-6 animate-none" id="step-sampling">
              <div className="absolute left-4 lg:left-auto lg:relative w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 font-poppins font-black mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors z-10 border border-amber-500/10 shadow-xs">
                02
              </div>
              <div>
                <h4 className="font-sans font-black text-slate-950 text-sm md:text-base leading-tight mb-1.5">Sampling &amp; Lab-Dips</h4>
                <p className="text-slate-600 font-poppins text-xs leading-relaxed font-normal">
                  Managing spectrophotometer dye trials, shrinkage adjustments, and sample fit iterations with global retail partner offices.
                </p>
              </div>
              <div className="absolute top-6 right-6 text-slate-400 font-poppins text-[8px] uppercase font-extrabold hidden lg:block">
                Phase II
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 shadow-xs relative group flex flex-col lg:block pl-16 lg:pl-6 animate-none" id="step-t-and-a">
              <div className="absolute left-4 lg:left-auto lg:relative w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 font-poppins font-black mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors z-10 border border-indigo-600/10 shadow-xs">
                03
              </div>
              <div>
                <h4 className="font-sans font-black text-slate-950 text-sm md:text-base leading-tight mb-1.5">T&amp;A Quality Control</h4>
                <p className="text-slate-600 font-poppins text-xs leading-relaxed font-normal">
                  Directing strict line controls to minimize downtime, auditing raw fabrics, and testing trims for Oeko-Tex clearance.
                </p>
              </div>
              <div className="absolute top-6 right-6 text-slate-400 font-poppins text-[8px] uppercase font-extrabold hidden lg:block">
                Phase III
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 shadow-xs relative group flex flex-col lg:block pl-16 lg:pl-6 animate-none" id="step-logistics">
              <div className="absolute left-4 lg:left-auto lg:relative w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-poppins font-black mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors z-10 border border-emerald-600/10 shadow-xs">
                04
              </div>
              <div>
                <h4 className="font-sans font-black text-slate-950 text-sm md:text-base leading-tight mb-1.5">Shipping &amp; Delivery</h4>
                <p className="text-slate-600 font-poppins text-xs leading-relaxed font-normal">
                  Reviewing carton volumetric data, preparing shipping documents, and fulfilling bulk container deliveries.
                </p>
              </div>
              <div className="absolute top-6 right-6 text-slate-400 font-poppins text-[8px] uppercase font-extrabold hidden lg:block">
                Phase IV
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 7. STRATEGIC INQUIRY DESK - CONTACT FORM SECTION */}
      <section className="bg-slate-50/50 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100 relative animate-fade-in-up" id="contact-form-section">
        {/* Beautiful Orbs flowing below low transparency left box */}
        <div className="absolute right-[10%] bottom-[5%] w-[380px] h-[380px] bg-[#6A9DF7]/10 rounded-full filter blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <SectionHeader 
            badgeText="Inquiry Desk"
            title="Strategic Apparel Sourcing Desk"
            subTitle="Submit physical yarn specifications, accessories/trims bookings, or design parameters. Fast secure responses direct to Dhaka."
          />

          <ContactForm />

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050F40] text-slate-400 py-16 text-xs font-poppins border-t border-[#020518]" id="main-app-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* Big Text with Gradient BG (bottom-to-top) */}
          <div className="py-2">
            <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-widest select-none animate-none uppercase bg-gradient-to-t from-[#050F40] via-[#102476] to-[#3459e6] bg-clip-text text-transparent block md:whitespace-nowrap px-2 leading-relaxed sm:leading-none">
              <span className="block sm:inline">Md Muhyminur</span> <span className="block sm:inline mt-1 sm:mt-0">Rahman Bappy</span>
            </h2>
          </div>

          {/* 20% Width Border Horizontal Divider */}
          <div className="w-[20%] mx-auto border-t border-slate-700/60 my-6" id="footer-separator" />

          {/* Social Media Links row */}
          <div className="flex justify-center items-center gap-6 text-slate-400 pb-2" id="footer-social-links">
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-800/40 hover:bg-[#142D95]/40 hover:text-white transition-all border border-slate-700/50 hover:border-[#38bdf8]/40"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-800/40 hover:bg-emerald-950/30 hover:text-emerald-400 transition-all border border-slate-700/50 hover:border-emerald-500/30"
              aria-label="WhatsApp Helpline"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-slate-800/40 hover:bg-sky-900/30 hover:text-sky-450 transition-all border border-slate-700/50 hover:border-sky-500/30"
              aria-label="Email direct"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-5 text-center px-4 space-y-1.5">
            <p className="text-[10.5px] sm:text-xs text-slate-400 font-semibold font-sans tracking-tight sm:tracking-wide">
              © 2026 Md Muhyminur Rahman Bappy. All rights reserved.
            </p>
            <p className="text-[10.5px] sm:text-xs text-slate-500 font-semibold font-sans tracking-tight sm:tracking-wide">
              Developed by <span className="text-slate-300 font-bold font-sans">Emadul Islam Akash</span>
            </p>
          </div>
        </div>
      </footer>
      
      {/* PROFESSIONAL POPUP MODAL FOR DETAILED JOBS PROFILE */}
      {activeExpModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md transition-all duration-300"
          onClick={() => setActiveExpModal(null)}
          id="experience-popup-backdrop"
        >
          <div 
            className="w-full max-w-xl bg-white text-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-h-[92vh] flex flex-col scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
            id="experience-popup-modal"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between bg-white gap-4">
              <div className="flex gap-3 items-start sm:items-center">
                <div className="flex-shrink-0 mt-1 sm:mt-0">
                  {renderCompanyLogo(activeExpModal.company)}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#142D95] block uppercase mb-1">
                    Job Spec // {activeExpModal.id.toUpperCase()}
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg font-sans font-black text-slate-900 leading-snug">
                    {activeExpModal.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 text-[11px] sm:text-xs text-slate-500">
                    <span className="font-bold text-[#142D95]">{activeExpModal.company}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setActiveExpModal(null)}
                className="p-1 sm:p-1.5 rounded-lg text-slate-400 hover:text-slate-850 hover:bg-slate-50 transition-colors focus:outline-none flex-shrink-0 cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scroll Zone */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-700">
              
              {/* Compact Key Parameters Visual Grid */}
              <div className="grid grid-cols-2 gap-3" id="modal-visual-parameter-grid">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex flex-col justify-between">
                  <span className="text-[8.5px] sm:text-[9px] font-mono text-slate-500 uppercase tracking-wider block mb-1">Workplace Location</span>
                  <span className="text-[11px] sm:text-xs font-sans font-extrabold text-[#142D95] truncate">{activeExpModal.location}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex flex-col justify-between">
                  <span className="text-[8.5px] sm:text-[9px] font-mono text-slate-500 uppercase tracking-wider block mb-1">Tenure Window</span>
                  <span className="text-[11px] sm:text-xs font-mono font-extrabold text-[#142D95] truncate">{activeExpModal.period}</span>
                </div>
              </div>

              {/* Bullet highlights */}
              <div className="space-y-3">
                <h4 className="text-[8.5px] sm:text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#142D95]">Core Accomplishments</h4>
                <div className="divide-y divide-slate-100">
                  {activeExpModal.description.map((bullet, index) => (
                    <div 
                      key={`modal-bullet-${index}`} 
                      className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buyers list */}
              {activeExpModal.buyers && (
                <div className="space-y-2">
                  <div className="text-[9px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                    Assigned Global Brands
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                      {activeExpModal.buyers}
                    </p>
                  </div>
                </div>
              )}

              {/* Technical Domain competencies */}
              <div className="space-y-2.5">
                <h4 className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500">Utilized Competency Tags</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeExpModal.skills.map((skill, sIdx) => (
                    <span 
                      key={`modal-skill-${sIdx}`}
                      className="px-2.5 py-1 bg-slate-100/70 text-slate-700 text-[10px] font-mono rounded-md border border-slate-200/60 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
