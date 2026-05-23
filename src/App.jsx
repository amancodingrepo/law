// Veristas Advocates — App root
import { useState, useEffect } from 'react';
import { Cursor, useLenis } from './primitives.jsx';
import {
  Navbar, MobileMenu, Hero, Marquee, Stats, Practice,
  About, Process, Testimonials, CTABanner, Insights, Footer,
  FloatingStack, ConsultModal, BookingModal,
} from './sections.jsx';

// Production defaults (TweaksPanel removed — these are fixed)
const ACCENT = '#c8a96b';
const ESTABLISHED = 2003;
const HERO_OVERLAY = 'balanced';
const SHOW_POPUP = true;

function App() {
  useLenis();
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  // Apply accent color globally
  useEffect(() => {
    document.documentElement.style.setProperty('--gold', ACCENT);
    const hex = ACCENT.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16);
    const d = (c) => Math.max(0, Math.round(c * 0.78));
    const hover = `rgb(${d(r)}, ${d(g)}, ${d(b)})`;
    document.documentElement.style.setProperty('--gold-hover', hover);
  }, []);

  // Apply hero overlay style
  useEffect(() => {
    document.documentElement.setAttribute('data-hero-overlay', HERO_OVERLAY);
  }, []);

  // Smart popup after 9 seconds
  useEffect(() => {
    if (!SHOW_POPUP) return;
    const tm = setTimeout(() => {
      if (!bookOpen) setConsultOpen(true);
    }, 9000);
    return () => clearTimeout(tm);
  }, []);

  const openBook = () => { setConsultOpen(false); setBookOpen(true); };

  return (
    <>
      <Cursor />
      <Navbar onBook={openBook} onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onBook={openBook} />
      <main>
        <Hero onBook={openBook} established={ESTABLISHED} />
        <Marquee />
        <Stats />
        <Practice />
        <About established={ESTABLISHED} />
        <Process />
        <Testimonials />
        <CTABanner onBook={openBook} />
        <Insights />
      </main>
      <Footer />
      <FloatingStack onBook={openBook} />
      <ConsultModal open={consultOpen} onClose={() => setConsultOpen(false)} onBook={openBook} />
      <BookingModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  );
}

export default App;
