"use client";
import React, { useState, useEffect, useRef } from "react";
import { Instagram, Music, Calendar, Facebook, ArrowUp, BookOpen, Home } from "lucide-react";


export default function GuidedByEddie() {
  const [scrolled, setScrolled] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const [hoveredArchive, setHoveredArchive] = useState(null);
  const [filterType, setFilterType] = useState('ALL');
  const [footerQuoteIndex, setFooterQuoteIndex] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const colors = {
    bg: '#000000',
    text: '#FFFFFF',
    rippleBlue: '#0654BA',
    purple: '#4C1D95',
    red: '#DC2626',
    border: '#1A1A1A',
    muted: '#666666'
  };

  const manifestoQuotes = [
  { text: "The wound is the place where the light enters you.", author: "Rumi" },
    { text: "Love is logistics.", author: "Eddie Ortiz" },
    { text: "I don't sell houses. I restore trust.", author: "Eddie Ortiz" },
    { text: "He has the most who is most content with the least.", author: "Diogenes" },
    { text: "Do not be overcome by evil, but overcome evil with good.", author: "Romans 12:21" },
     { text: "Proximity beats theory. Always.", author: "Eddie Ortiz" },
    { text: "When character is lost, all is lost.", author: "Chinese Proverb" },
    { text: "The Tao that can be spoken is not the eternal Tao.", author: "Tao Te Ching" }
  ];

  const rotatingTruths = [
    "Real estate isn't homes, it's people.",
    "Every closing is restoration, not transaction.",
    "Proximity beats theory.",
    "I serve, not perform.",
    "Trust restored, not numbers on a page.",
    "Love is logistics."
  ];

  const footerQuotes = [
    "No suits, no masks.",
    "Love is logistics.",
    "Real estate isn't homes, it's people.",
    "Every closing is restoration, not transaction.",
    "Proximity beats theory."
  ];

  const archiveItems = [
    { title: "Wake Up Eddie", type: "JOURNAL", date: "09.28", snippet: "Sometimes the world whispers: wake up. Every conversation reminds me of who I already am.", color: colors.rippleBlue },
    { title: "Chaos Is a Mirror", type: "MIRROR", date: "09.25", snippet: "People think chaos means you're lost. I know it shows you your reflection.", color: colors.red },
    { title: "Silent Walls", type: "MIRROR", date: "09.19", snippet: "What I witnessed at the ICE facility. The gap between policy and humanity.", color: colors.red },
    { title: "The Trust Economy", type: "CONVERSATION", date: "09.15", snippet: "Why relationships outlast transactions in real estate and life.", color: colors.purple },
    { title: "Proximity Over Theory", type: "JOURNAL", date: "09.12", snippet: "I don't learn from books. I learn from being there. Food banks, streets, presence.", color: colors.rippleBlue },
    { title: "Building Legacy", type: "CONVERSATION", date: "09.08", snippet: "What it really means to create generational wealth with purpose.", color: colors.purple }
  ];

  const filteredArchive = filterType === 'ALL' 
    ? archiveItems 
    : archiveItems.filter(item => item.type === filterType);

  useEffect(() => {
    setTimeout(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 2000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);

    const quoteTimer = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % manifestoQuotes.length);
    }, 6000);

    const glitchTimer = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 13000);

    const footerQuoteTimer = setInterval(() => {
      setFooterQuoteIndex(prev => (prev + 1) % footerQuotes.length);
    }, 7000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(quoteTimer);
      clearInterval(glitchTimer);
      clearInterval(footerQuoteTimer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: 'Inter, system-ui, sans-serif' }}>
      <style>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); text-shadow: 2px -2px 0 ${colors.rippleBlue}, -2px 2px 0 ${colors.red}; }
          40% { transform: translate(-2px, -2px); text-shadow: -2px 2px 0 ${colors.rippleBlue}, 2px -2px 0 ${colors.red}; }
          60% { transform: translate(2px, 2px); text-shadow: 2px 2px 0 ${colors.rippleBlue}, -2px -2px 0 ${colors.red}; }
          80% { transform: translate(2px, -2px); text-shadow: -2px -2px 0 ${colors.rippleBlue}, 2px 2px 0 ${colors.red}; }
          100% { transform: translate(0); text-shadow: none; }
        }
        
        .glitch-text {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94);
        }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .ticker-scroll {
          animation: scroll-ticker 20s linear infinite;
        }

        .gradient-text {
          background: linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.3) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <title>Guided by Eddie | Chicago Real Estate with Ripple Impact</title>
      <meta name="description" content="Eddie Ortiz. Realtor, philosopher, and community builder. Every closing heals: 10% funds meals, schools, and shelters across Chicago." />
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md' : ''}`}
        style={{ 
          backgroundColor: scrolled ? `${colors.bg}F5` : 'transparent',
          borderBottom: scrolled ? `1px solid ${colors.border}` : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">
          <div 
            className={`text-sm font-bold tracking-tight ${glitchActive ? 'glitch-text' : ''}`}
            style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
          >
            GUIDED BY EDDIE™
          </div>
          <div className="flex gap-5 items-center text-xs">
            <a href="#about" className="tracking-wider hover:opacity-60 transition-opacity hidden lg:block">WHO I AM</a>
            <a href="#ripple" className="tracking-wider hover:opacity-60 transition-opacity hidden lg:block">RIPPLE</a>
            <a href="#archive" className="tracking-wider hover:opacity-60 transition-opacity hidden lg:block">ARCHIVES</a>
            <a href="#resources" className="tracking-wider hover:opacity-60 transition-opacity hidden lg:block">RESOURCES</a>
            <a href="#contact" className="tracking-wider hover:opacity-60 transition-opacity hidden lg:block">CONTACT</a>
            <a href="https://instagram.com/guidedbyeddie" target="_blank" rel="noopener noreferrer" className="hover:opacity-60" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://tiktok.com/@relatablefool" target="_blank" rel="noopener noreferrer" className="hover:opacity-60" aria-label="TikTok">
              <Music size={20} />
            </a>
            <a href="https://facebook.com/guidedbyeddie" target="_blank" rel="noopener noreferrer" className="hover:opacity-60" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://calendly.com/guidedbyeddie" target="_blank" rel="noopener noreferrer" className="hover:opacity-60" aria-label="Calendar">
              <Calendar size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 py-24">
        <div className="max-w-5xl w-full">
          <blockquote 
            className={`text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 ${glitchActive ? 'glitch-text' : ''}`}
            style={{ fontWeight: 800, letterSpacing: '-0.02em', fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
            key={currentQuote}
          >
            "{manifestoQuotes[currentQuote].text}"
          </blockquote>
          
          <cite className="text-base md:text-lg block mb-12 not-italic" style={{ color: colors.muted }}>
            {manifestoQuotes[currentQuote].author}
          </cite>

          <p className="text-lg md:text-xl mb-12">
            Every closing fuels restoration.
          </p>

          <a 
            href="https://calendly.com/guidedbyeddie" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-center font-bold tracking-tight transition-all hover:opacity-90"
            style={{ backgroundColor: colors.text, color: colors.bg }}
          >
            Work With Me
          </a>
        </div>
      </section>

      {/* Ripple Impact */}
      <section id="ripple" className="px-6 md:px-8 py-20 md:py-28 border-y fade-in-section" style={{ borderColor: colors.border }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs md:text-sm tracking-widest mb-8 md:mb-12" style={{ color: colors.muted }}>RIPPLE IMPACT</h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-16 mb-12 md:mb-16">
            <div>
              <div 
                className="text-5xl md:text-7xl font-bold mb-3"
                style={{ color: colors.text, fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
              >
                5
              </div>
              <div className="text-sm tracking-wide mb-2 font-bold">HOMES HEALED</div>
              <p className="text-xs leading-relaxed italic mt-2" style={{ color: colors.rippleBlue }}>
                Every closing is restoration, not transaction.
              </p>
            </div>
            
            <div>
              <div 
                className="text-5xl md:text-7xl font-bold mb-3"
                style={{ color: colors.text, fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
              >
                15
              </div>
              <div className="text-sm tracking-wide mb-2 font-bold">MEALS SHARED</div>
              <p className="text-xs leading-relaxed italic mt-2" style={{ color: colors.rippleBlue }}>
                Love is logistics. Presence is food on the table.
              </p>
            </div>
            
            <div>
              <div 
                className="text-5xl md:text-7xl font-bold mb-3"
                style={{ color: colors.text, fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
              >
                $500
              </div>
              <div className="text-sm tracking-wide mb-2 font-bold">RESOURCES GIVEN</div>
              <p className="text-xs leading-relaxed italic mt-2" style={{ color: colors.rippleBlue }}>
                Every dollar is presence. Survival moves through trust.
              </p>
            </div>
          </div>

          <div className="max-w-2xl mb-8">
            <p className="text-base md:text-xl leading-relaxed mb-4">
              10% of every commission fuels The Ripple. Reinvested into meals, school supplies, crisis response.
            </p>
            <p className="text-sm md:text-base">
              Each deal becomes restoration: feeding someone, healing someone, loving someone forgotten.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Am */}
      <section id="about" className="px-6 md:px-8 py-20 md:py-28 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs md:text-sm tracking-widest mb-8 md:mb-12" style={{ color: colors.muted }}>WHO I AM</h2>
          
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
            <div className="md:col-span-2">
              <div className="aspect-[3/4] border" style={{ borderColor: colors.border, backgroundColor: colors.border }}>
                <div className="w-full h-full flex items-center justify-center text-xs" style={{ color: colors.muted }}>
                  [Portrait]
                </div>
              </div>
              <p className="text-xs mt-3 text-center italic" style={{ color: colors.rippleBlue }}>
                No suits, no masks.
              </p>
            </div>
            
            <div className="md:col-span-3 space-y-4 md:space-y-6 text-base md:text-xl leading-relaxed">
              <p>I am Eddie Ortiz. Realtor by trade, philosopher by nature, fool by choice.</p>
              <p>I serve, not perform. Presence over performance, people over pockets.</p>
              <p>Every transaction is restoration, not transaction.</p>
              <a 
                href="https://calendly.com/guidedbyeddie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 mt-4 font-bold tracking-tight transition-all hover:opacity-90"
                style={{ backgroundColor: colors.text, color: colors.bg }}
              >
                Work With Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <section className="py-6 md:py-8 border-y overflow-hidden" style={{ borderColor: colors.border }}>
        <div className="flex whitespace-nowrap ticker-scroll">
          {[...rotatingTruths, ...rotatingTruths].map((truth, i) => (
            <span key={i} className="inline-block px-8 md:px-12 text-base md:text-xl font-bold gradient-text">
              {truth}
            </span>
          ))}
        </div>
      </section>

      {/* Archives */}
      <section id="archive" className="px-6 md:px-8 py-20 md:py-28 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs md:text-sm tracking-widest mb-6 md:mb-8" style={{ color: colors.muted }}>ECHO ARCHIVES</h2>

          <div className="flex gap-3 md:gap-4 mb-8 md:mb-12 text-xs overflow-x-auto">
            {['ALL', 'JOURNAL', 'CONVERSATION', 'MIRROR'].map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className="px-3 md:px-4 py-2 tracking-wider transition-all whitespace-nowrap"
                style={{
                  backgroundColor: filterType === type ? colors.text : 'transparent',
                  color: filterType === type ? colors.bg : colors.muted,
                  border: `1px solid ${filterType === type ? colors.text : colors.border}`
                }}
              >
                {type}
              </button>
            ))}
          </div>
          
          <div className="space-y-px" style={{ backgroundColor: colors.border }}>
            {filteredArchive.map((item, i) => (
              <a 
                key={i}
                href="#"
                className="block bg-black transition-all"
                onMouseEnter={() => setHoveredArchive(i)}
                onMouseLeave={() => setHoveredArchive(null)}
                style={{ paddingLeft: hoveredArchive === i ? '1rem' : '0', transition: 'padding-left 0.3s' }}
              >
                <div className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="text-xs tracking-wider font-bold" style={{ color: item.color }}>{item.type}</span>
                      <span className="text-sm md:text-base font-medium">{item.title}</span>
                    </div>
                    <span className="text-xs font-mono" style={{ color: colors.muted }}>{item.date}</span>
                  </div>
                  {hoveredArchive === i && <p className="text-xs md:text-sm mt-2 md:mt-3 leading-relaxed">{item.snippet}</p>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="px-6 md:px-8 py-20 md:py-28 border-t fade-in-section" style={{ borderColor: colors.border }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
            Resources
          </h2>
          <p className="text-base md:text-xl mb-8 md:mb-12" style={{ color: colors.muted }}>
            Get access to checklists, real estate guides, and more.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12 max-w-3xl mx-auto">
            <div className="p-5 md:p-6 border text-left" style={{ borderColor: colors.border }}>
              <Home size={18} className="mb-3" style={{ color: colors.rippleBlue }} />
              <h3 className="text-base md:text-lg font-bold mb-2">First Time Homebuyer Guide</h3>
              <p className="text-xs md:text-sm" style={{ color: colors.muted }}>Navigate your first purchase with clarity.</p>
            </div>
            <div className="p-5 md:p-6 border text-left" style={{ borderColor: colors.border }}>
              <BookOpen size={18} className="mb-3" style={{ color: colors.rippleBlue }} />
              <h3 className="text-base md:text-lg font-bold mb-2">Rental Readiness Checklist</h3>
              <p className="text-xs md:text-sm" style={{ color: colors.muted }}>Everything you need before signing.</p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 mb-4 border text-black text-sm md:text-base"
              style={{ borderColor: colors.border }}
            />
            <button 
              className="w-full px-8 py-4 font-bold tracking-tight transition-all hover:opacity-90"
              style={{ backgroundColor: colors.text, color: colors.bg }}
            >
              Get Resources
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 md:px-8 py-20 md:py-28 fade-in-section" style={{ backgroundColor: colors.text, color: colors.bg }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className={`text-2xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight ${glitchActive ? 'glitch-text' : ''}`}
            style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
          >
            Let's build something that matters.
          </h2>
          <p className="text-base md:text-xl mb-8 md:mb-12 opacity-70">
            Whether you're buying, selling, or just want to talk — I'm here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/guidedbyeddie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 md:px-10 py-4 font-bold tracking-tight transition-all hover:opacity-90 flex items-center justify-center gap-3"
              style={{ backgroundColor: colors.bg, color: colors.text }}
            >
              <Calendar size={20} />
              Book a Call
            </a>
            <a 
              href="https://instagram.com/guidedbyeddie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 md:px-10 py-4 font-bold tracking-tight border-2 transition-all hover:bg-black hover:text-white flex items-center justify-center gap-3"
              style={{ borderColor: colors.bg, color: colors.bg }}
            >
              <Instagram size={20} />
              Follow the Journey
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-8 py-10 md:py-12 border-t" style={{ borderColor: colors.border }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6 md:mb-8">
            <div 
              className="text-sm font-bold tracking-tight group cursor-help relative"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
            >
              GUIDED BY EDDIE
              <div 
                className="absolute -bottom-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity text-xs italic font-normal whitespace-nowrap" 
                style={{ color: colors.rippleBlue }}
                key={footerQuoteIndex}
              >
                {footerQuotes[footerQuoteIndex]}
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <a href="https://instagram.com/guidedbyeddie" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://tiktok.com/@relatablefool" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <Music size={18} />
              </a>
              <a href="https://facebook.com/guidedbyeddie" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://calendly.com/guidedbyeddie" target="_blank" rel="noopener noreferrer" aria-label="Calendar">
                <Calendar size={18} />
              </a>
            </div>
          </div>
          <div className="text-center text-xs tracking-wide" style={{ color: colors.muted }}>
            GUIDED BY EDDIE™ | RAISED IN CHI™ | RELATABLE FOOL™
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:opacity-80 z-50"
          style={{ backgroundColor: colors.rippleBlue, color: colors.text }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
