// Veristas & Partners — Page sections
import { useState, useEffect, useRef } from 'react';
import I from './icons.jsx';
import { Reveal, Magnetic, Counter, useLenis } from './primitives.jsx';

/* ============================================================
   TOP BAR + NAVBAR
   ============================================================ */
function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <I.Phone size={13} stroke={1.8} />
              <a href="tel:+97144000000">+971 4 400 0000</a>
            </span>
            <span className="hide-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <I.Mail size={13} stroke={1.8} />
              <a href="mailto:counsel@veristas.law">counsel@veristas.law</a>
            </span>
          </div>
          <div className="topbar-right">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span className="dot" />
              <span>Consultations available · Sun–Thu · 9:00–18:00 GST</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar({ onBook, onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={'nav-wrap ' + (scrolled ? 'scrolled' : '')}>
      <div className="container">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <div className="brand-mark">V</div>
            <span>Veristas <span className="amp">·</span> Advocates</span>
          </a>
          <nav className="nav-links">
            <a href="#practice" className="active">Practice</a>
            <a href="#about">Our Firm</a>
            <a href="#process">Process</a>
            <a href="#insights">Insights</a>
            <a href="#contact" className="has-dot">Contact</a>
          </nav>
          <div className="nav-cta">
            <a href="#cta" className="btn btn-ghost">
              <I.Phone size={14} /> Call
            </a>
            <Magnetic strength={0.18}>
              <button className="btn btn-primary" onClick={onBook}>
                Book Consultation <I.ArrowRight size={14} className="arr" />
              </button>
            </Magnetic>
            <button className="mobile-toggle" onClick={onOpenMenu} aria-label="Open menu">
              <I.Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose, onBook }) {
  return (
    <div className={'mobile-menu ' + (open ? 'on' : '')}>
      <div className="container">
        <div style={{ position: 'absolute', top: 24, right: 24 }}>
          <button className="mobile-toggle" onClick={onClose} aria-label="Close">
            <I.Close size={20} />
          </button>
        </div>
        <nav>
          <a href="#practice" onClick={onClose}>Practice</a>
          <a href="#about" onClick={onClose}>Our Firm</a>
          <a href="#process" onClick={onClose}>Process</a>
          <a href="#insights" onClick={onClose}>Insights</a>
          <a href="#contact" onClick={onClose}>Contact</a>
        </nav>
        <div style={{ marginTop: 32 }}>
          <button className="btn btn-primary" onClick={() => { onClose(); onBook(); }}>
            Book Consultation <I.ArrowRight size={14} className="arr" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero({ onBook, established = 2003 }) {
  const bgRef = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      if (!bgRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      const img = bgRef.current.querySelector('img');
      if (img) img.style.transform = `scale(1.06) translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-bg" ref={bgRef}>
        <img alt="Dubai skyline — Veristas Advocates"
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=2400&q=85&auto=format&fit=crop"
          onError={(e) => {
            const fallbacks = [
              'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=2400&q=85&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1546412414-e1885259563a?w=2400&q=85&auto=format&fit=crop',
            ];
            const i = Number(e.target.dataset.fb || 0);
            if (i < fallbacks.length) {
              e.target.dataset.fb = i + 1;
              e.target.src = fallbacks[i];
            }
          }} />
      </div>
      <div className="hero-overlay" />

      <div className="container">
        <div className="hero-grid hero-grid-single" style={{ textAlign: 'center' }}>
          <div>
            <Reveal>
              <span className="hero-eyebrow" style={{ textAlign: 'center' }}>
                Your legal counsel across the UAE, Saudi Arabia &amp; the wider GCC
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="hero-headline">
                Strategic <em>Counsel</em>
                <span className="hero-line-break"></span>
                Trusted <em>Advisors</em>
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="hero-sub">
                A Dubai-headquartered firm advising regional and international clients on
                cross-border transactions, regulatory matters, and the moments that shape
                the next decade of a business.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="hero-ctas">
                <Magnetic strength={0.18}>
                  <button className="btn btn-primary" onClick={onBook}>
                    Book Your Consultation <I.ArrowRight size={14} className="arr" />
                  </button>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MARQUEE
   ============================================================ */
function Marquee() {
  const items = [
    'Licensed · UAE Ministry of Justice',
    'DIFC Courts Registered Practitioners',
    'ADGM Recognised',
    'Chambers Global · Band 2',
    'Legal 500 EMEA · Tier 1',
    'Saudi Bar Association',
    'IFLR1000 Ranked Firm',
    'Dubai International Arbitration Centre',
  ];

  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {doubled.map((t, i) =>
          <span className="item" key={i}>{t}</span>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   TRUST / STATS
   ============================================================ */
function Stats() {
  const stats = [
    { ico: <I.Clock size={20} />, num: 22, suffix: '+', lbl: 'Years advising clients across the GCC region.' },
    { ico: <I.Trophy size={20} />, num: 1800, suffix: '+', lbl: 'Transactions and disputes closed across sectors.' },
    { ico: <I.Heart size={20} />, num: 97, suffix: '%', lbl: 'Of mandates referred or renewed by existing clients.' },
    { ico: <I.Scales size={20} />, num: 9, suffix: '', lbl: 'Core practices · UAE and KSA jurisdictions.' },
  ];

  return (
    <section className="stats" id="trust">
      <div className="container">
        <div className="stats-grid">
          <div>
            <Reveal><span className="eyebrow">Why clients return</span></Reveal>
            <Reveal delay={80}>
              <h2 className="section-title" style={{ marginTop: 24 }}>
                A record built<br />quietly, <em>mandate by mandate.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="lede">
              We measure ourselves not by press clippings but by the outcomes our clients
              live with afterwards — the deal that closes, the dispute that ends, the
              regulator that signs off, the structure that holds for the next decade.
            </p>
          </Reveal>
        </div>

        <div className="stat-cards">
          {stats.map((s, i) =>
            <Reveal className="stat-card" key={i} delay={i * 100}>
              <div className="ico">{s.ico}</div>
              <div className="num"><Counter to={s.num} suffix={s.suffix} /></div>
              <div className="lbl">{s.lbl}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRACTICE AREAS
   ============================================================ */
function Practice() {
  const areas = [
    { ico: <I.Building size={22} />, t: 'Corporate & Commercial', d: 'M&A, joint ventures, governance, and cross-border structuring for regional and international groups.' },
    { ico: <I.Briefcase size={22} />, t: 'Financial Services', d: 'Banking, fund formation, fintech licensing, and regulatory advisory across DIFC, ADGM, and SAMA.' },
    { ico: <I.Home size={22} />, t: 'Real Estate', d: 'Acquisitions, off-plan structuring, leasing, and high-value freehold transactions in the UAE and KSA.' },
    { ico: <I.Court size={22} />, t: 'Infrastructure & Construction', d: 'FIDIC contracts, EPC arrangements, and construction disputes across Gulf megaprojects.' },
    { ico: <I.Sparkle size={22} />, t: 'Private Equity', d: 'Buyouts, growth investments, and exits — advising sponsors, family offices, and management teams.' },
    { ico: <I.Lightbulb size={22} />, t: 'Venture Capital', d: 'Seed through late-stage rounds, founder counsel, ESOPs, and regional cap-table strategy.' },
    { ico: <I.Globe size={22} />, t: 'Digital Assets', d: 'VARA, ADGM and DFSA licensing, token structuring, custody, and digital-asset compliance.' },
    { ico: <I.Shield size={22} />, t: 'General Counsel Services', d: 'Outsourced in-house counsel — contracts, employment, IP, and dispute resolution on retainer.' },
  ];

  return (
    <section className="practice" id="practice">
      <div className="container">
        <div className="practice-head">
          <div>
            <Reveal><span className="eyebrow">Practice areas</span></Reveal>
            <Reveal delay={80}>
              <h2 className="section-title" style={{ marginTop: 24 }}>
                Counsel across the<br /><em>matters that move lives.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="lede" style={{ maxWidth: 42 + 'ch' }}>
              Nine dedicated practice groups, advising founders, family offices, banks,
              sovereigns and multinationals — under one roof in Dubai and Riyadh.
            </p>
          </Reveal>
        </div>

        <div className="practice-grid">
          {areas.map((a, i) =>
            <Reveal className="practice-card" key={i} delay={i % 4 * 80}>
              <div className="pc-num">{String(i + 1).padStart(2, '0')} / {String(areas.length).padStart(2, '0')}</div>
              <div className="pc-ico">{a.ico}</div>
              <div className="pc-title">{a.t}</div>
              <p className="pc-desc">{a.d}</p>
              <div className="pc-arrow"><I.ArrowUpRight size={16} /></div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT
   ============================================================ */
function About({ established = 2003 }) {
  const years = Math.max(1, new Date().getFullYear() - established);
  const decadesWord = years >= 30 ? 'Three decades' : years >= 20 ? 'Two decades' : years >= 10 ? 'A decade' : 'Years';
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal>
            <div className="about-visual">
              <div className="since">
                Established
                <strong>{established}</strong>
              </div>
              <div className="main">
                <img alt="Founding partner Khalid Al-Mansoori"
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1100&q=80&auto=format&fit=crop" />
              </div>
              <div className="quote-card">
                <div className="mark">"</div>
                <div className="q">A good advocate reads the law. A great one understands the business — and the region — that the law is about to touch.</div>
                <div className="who"><strong>Khalid Al-Mansoori</strong> · Founding Partner</div>
              </div>
            </div>
          </Reveal>

          <div className="about-copy">
            <Reveal><span className="eyebrow">Our firm</span></Reveal>
            <Reveal delay={80}>
              <h2 className="section-title">
                {decadesWord} of<br /><em>counsel held in confidence.</em>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="body">
                <p>
                  Veristas was founded in DIFC in {established} on a simple proposition: that
                  international clients in the Gulf deserved counsel that combined Magic
                  Circle rigour with on-the-ground regional fluency.
                  <strong> {years} years on, that conviction has not changed.</strong>
                </p>
                <p>
                  Today we are a firm of thirty-eight advocates and consultants across Dubai
                  and Riyadh — advising sovereigns, family offices, banks, founders and
                  multinationals through the matters that shape their region.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="milestones">
                <div className="milestone">
                  <div className="y">{established}</div>
                  <div className="t">Founded in DIFC by Khalid Al-Mansoori.</div>
                </div>
                <div className="milestone">
                  <div className="y">2017</div>
                  <div className="t">Riyadh office opened under Vision 2030.</div>
                </div>
                <div className="milestone">
                  <div className="y">2024</div>
                  <div className="t">Chambers Global Band 2 · Corporate / M&A.</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="signature">
                <svg viewBox="0 0 200 60" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                  <path d="M5 38 C 15 18, 25 18, 30 36 C 32 44, 28 50, 24 46 C 22 44, 26 38, 38 30 C 50 22, 58 28, 60 38 C 62 46, 56 50, 54 44 C 52 38, 60 30, 72 28 C 80 27, 84 34, 80 42 C 78 46, 84 46, 92 36 C 100 26, 108 26, 110 38 C 112 46, 108 50, 106 44 C 104 38, 116 30, 132 28 C 148 26, 158 36, 160 42 C 162 48, 156 50, 154 44 C 152 38, 168 30, 188 30" />
                </svg>
                <div className="name">
                  <strong>Khalid Al-Mansoori</strong><br />
                  Founding Partner, Veristas Advocates &amp; Legal Consultants
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROCESS
   ============================================================ */
function Process() {
  const steps = [
    { n: 'I', t: 'Consultation', d: 'A confidential first conversation — no clock, no obligation.' },
    { n: 'II', t: 'Case Evaluation', d: 'A senior partner reviews the file and outlines what is on the table.' },
    { n: 'III', t: 'Strategic Planning', d: 'We agree on objectives, costs, and the path most likely to reach them.' },
    { n: 'IV', t: 'Legal Representation', d: 'Our team acts — in negotiations, filings, hearings, and the courtroom.' },
    { n: 'V', t: 'Resolution', d: 'Closure, written clearly, with follow-through long after the matter ends.' },
  ];

  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height + window.innerHeight * 0.4;
      const passed = Math.max(0, Math.min(total, window.innerHeight - r.top));
      setProgress(Math.max(0, Math.min(1, passed / total)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeIdx = Math.floor(progress * steps.length);

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="practice-head">
          <div>
            <Reveal><span className="eyebrow">How we work</span></Reveal>
            <Reveal delay={80}>
              <h2 className="section-title" style={{ marginTop: 24 }}>
                A measured path<br /><em>from first call to closure.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="lede" style={{ maxWidth: '42ch' }}>
              Every matter is different. The shape of our work is not. Five stages,
              each with its own discipline — designed to leave nothing to chance.
            </p>
          </Reveal>
        </div>

        <div className="process-grid" ref={ref}>
          <div className="process-line">
            <div className="fill" style={{
              [typeof window !== 'undefined' && window.innerWidth >= 880 ? 'width' : 'height']: `${progress * 100}%`
            }} />
          </div>
          <div className="process-steps">
            {steps.map((s, i) =>
              <Reveal key={i} className={'p-step ' + (i <= activeIdx ? 'on' : '')} delay={i * 100}>
                <span className="dot" />
                <div className="step-num">Step {s.n}</div>
                <div className="step-t">{s.t}</div>
                <p className="step-d">{s.d}</p>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
function Testimonials() {
  const items = [
    {
      q: 'They closed our regional acquisition across three jurisdictions in a window no one else would touch. Direct, exacting, and on the side of the deal getting done.',
      who: 'Dr. Yusuf Al-Hashimi', role: 'Group CEO, Hashimi Holdings',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop',
      video: true,
    },
    {
      q: 'We engaged Veristas for a VARA licence and stayed for everything that followed. They understand the regulator, the market, and the founder in the room.',
      who: 'Layla Haddad', role: 'Founder, Mirath Digital Assets',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&auto=format&fit=crop',
    },
    {
      q: 'Quiet, exacting, and very well prepared. The kind of counsel a family office hopes never to need — and is grateful for when it does.',
      who: 'Ahmed Bin Saeed', role: 'Principal, Al Mazroui Family Office',
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&q=80&auto=format&fit=crop',
      video: true,
    },
    {
      q: 'They handled our DIFC fund structuring and KSA expansion as one piece of work. The continuity across borders is what brought us back.',
      who: 'Priya Raman', role: 'GC, Northwind Capital Partners',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop',
    },
    {
      q: "Khalid kept his word, kept the deal alive, and kept the family business in the family.",
      who: 'Thomas Whittaker', role: 'President, Whittaker MENA',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop',
    },
  ];

  const [idx, setIdx] = useState(0);
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w < 680 ? 1 : w < 980 ? 2 : 3);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);
  const maxIdx = Math.max(0, items.length - perView);
  const next = () => setIdx((i) => Math.min(maxIdx, i + 1));
  const prev = () => setIdx((i) => Math.max(0, i - 1));

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testi-head">
          <div>
            <Reveal><span className="eyebrow">In their words</span></Reveal>
            <Reveal delay={80}>
              <h2 className="section-title" style={{ marginTop: 24 }}>
                Clients who came once,<br /><em>and stayed.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} className="testi-controls">
            <button className="t-btn" onClick={prev} disabled={idx === 0}><I.ChevronLeft size={18} /></button>
            <button className="t-btn" onClick={next} disabled={idx >= maxIdx}><I.ChevronRight size={18} /></button>
          </Reveal>
        </div>

        <div className="testi-track-wrap">
          <div className="testi-track" style={{ transform: `translateX(calc(${-idx} * (100% / ${perView} + 28px / ${perView} * (${perView} - 1) / ${perView})))` }}>
            {items.map((t, i) =>
              <div className="testi-card" key={i}>
                <div className="mark">"</div>
                <div className="stars">★★★★★</div>
                <blockquote>{t.q}</blockquote>
                <div className="author">
                  <img src={t.img} alt={t.who} />
                  <div>
                    <div className="who">{t.who}</div>
                    <div className="role">{t.role}</div>
                  </div>
                  {t.video &&
                    <button className="play" aria-label="Play video testimonial">
                      <I.Play size={14} />
                    </button>
                  }
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="testi-dots">
          {Array.from({ length: maxIdx + 1 }).map((_, i) =>
            <button key={i} className={'d ' + (i === idx ? 'on' : '')} onClick={() => setIdx(i)} aria-label={`Go to ${i + 1}`} />
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA Banner
   ============================================================ */
function CTABanner({ onBook }) {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-streaks">
            <span /><span /><span />
          </div>
          <div className="cta-grid">
            <div>
              <Reveal><span className="eyebrow" style={{ color: 'var(--gold)' }}>An invitation</span></Reveal>
              <Reveal delay={80}>
                <h2 style={{ marginTop: 22 }}>
                  Speak with senior counsel<br /><em>across the GCC today.</em>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="cta-sub">
                  Most of our clients meet us at a turning point — a transaction, a regulator,
                  a dispute that can no longer wait. Our job is to make sure that turning point
                  becomes a story they tell with confidence. A first conversation is on us
                  — confidential, without obligation.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="cta-ctas">
                  <Magnetic strength={0.2}>
                    <button className="btn btn-gold" onClick={onBook}>
                      <I.Calendar size={14} /> Schedule a Consultation <I.ArrowRight size={14} className="arr" />
                    </button>
                  </Magnetic>
                  <a href="tel:+97144000000" className="btn btn-light-outline">
                    <I.Phone size={14} /> +971 4 400 0000
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="cta-side">
                <div className="h">Direct lines</div>
                <div className="row">
                  <div className="ico"><I.Phone size={16} /></div>
                  <div><div className="lbl">Dubai · Main Office</div><div className="val">+971 4 400 0000</div></div>
                </div>
                <div className="row">
                  <div className="ico"><I.Mail size={16} /></div>
                  <div><div className="lbl">Counsel Desk</div><div className="val">counsel@veristas.law</div></div>
                </div>
                <div className="row">
                  <div className="ico"><I.Clock size={16} /></div>
                  <div><div className="lbl">Available</div><div className="val">Sun–Thu · 9:00–18:00 GST</div></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   INSIGHTS / BLOG
   ============================================================ */
function Insights() {
  const posts = [
    {
      cat: 'Digital Assets', t: "What VARA's revised rulebook means for token issuers in 2026",
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80&auto=format&fit=crop',
      time: '8 min read', date: 'Mar 14', featured: true,
      ex: "A practical reading of the latest VARA amendments — what genuinely changes for VASPs operating from Dubai, what is merely codified, and where compliance teams should be looking before the next renewal window.",
    },
    {
      cat: 'Corporate', t: 'Cross-border M&A in the GCC: five clauses we almost never see, and wish we did',
      img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&auto=format&fit=crop',
      time: '5 min', date: 'Mar 02',
    },
    {
      cat: 'Saudi Arabia', t: 'Doing business in KSA after the 2026 foreign investment reforms.',
      img: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=900&q=80&auto=format&fit=crop',
      time: '6 min', date: 'Feb 18',
    },
    {
      cat: 'Construction', t: 'FIDIC disputes on Gulf megaprojects: when to escalate, when to settle.',
      img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format&fit=crop',
      time: '9 min', date: 'Feb 04',
    },
    {
      cat: 'Real Estate', t: "The quiet rewrite of Dubai's off-plan closing process.",
      img: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&q=80&auto=format&fit=crop',
      time: '4 min', date: 'Jan 22',
    },
  ];

  return (
    <section className="insights" id="insights">
      <div className="container">
        <div className="ins-head">
          <div>
            <Reveal><span className="eyebrow">Insights</span></Reveal>
            <Reveal delay={80}>
              <h2 className="section-title" style={{ marginTop: 24 }}>
                Plain-spoken writing<br /><em>on complicated matters.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <a href="#" className="btn btn-ink-outline">All Insights <I.ArrowRight size={14} className="arr" /></a>
          </Reveal>
        </div>

        <div className="ins-grid">
          {posts.slice(0, 5).map((p, i) =>
            <Reveal key={i} className={'ins-card ' + (i === 0 ? 'feat' : '')} delay={i % 3 * 90}>
              <div className="ins-thumb">
                <img src={p.img} alt={p.t} />
                <div className="badge">{p.cat}</div>
                <div className="reveal">
                  <div className="read">
                    Read article
                    <span className="arr"><I.ArrowUpRight size={14} /></span>
                  </div>
                </div>
              </div>
              <div className="ins-meta">
                <span>{p.date}</span>
                <span className="dot" />
                <span>{p.time}</span>
              </div>
              <h3 className="ins-title">{p.t}</h3>
              {p.ex && <p className="ins-excerpt">{p.ex}</p>}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <div className="brand-mark">V</div>
              <span className="brand" style={{ padding: 0 }}>Veristas <span className="amp">·</span> Advocates</span>
            </div>
            <p className="foot-statement">
              Veristas Advocates &amp; Legal Consultants. A modern law firm in the older
              sense of the word — quiet, exacting, and on your side when it matters.
              Headquartered in Dubai, with offices in Riyadh.
            </p>
            <div className="foot-social">
              <a href="#" aria-label="LinkedIn"><I.Linkedin size={16} /></a>
              <a href="#" aria-label="X"><I.Twitter size={16} /></a>
              <a href="#" aria-label="Instagram"><I.Instagram size={16} /></a>
              <a href="#" aria-label="YouTube"><I.Youtube size={16} /></a>
            </div>
          </div>

          <div className="foot-col">
            <h4>Practice</h4>
            <ul>
              <li><a href="#">Corporate &amp; Commercial <I.ArrowRight size={12} className="arr" /></a></li>
              <li><a href="#">Financial Services <I.ArrowRight size={12} className="arr" /></a></li>
              <li><a href="#">Real Estate <I.ArrowRight size={12} className="arr" /></a></li>
              <li><a href="#">Infrastructure &amp; Construction <I.ArrowRight size={12} className="arr" /></a></li>
              <li><a href="#">Private Equity &amp; VC <I.ArrowRight size={12} className="arr" /></a></li>
              <li><a href="#">Digital Assets <I.ArrowRight size={12} className="arr" /></a></li>
              <li><a href="#">General Counsel <I.ArrowRight size={12} className="arr" /></a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Firm</h4>
            <ul>
              <li><a href="#about">Our Story <I.ArrowRight size={12} className="arr" /></a></li>
              <li><a href="#">Attorneys <I.ArrowRight size={12} className="arr" /></a></li>
              <li><a href="#process">How We Work <I.ArrowRight size={12} className="arr" /></a></li>
              <li><a href="#insights">Insights <I.ArrowRight size={12} className="arr" /></a></li>
              <li><a href="#">Careers <I.ArrowRight size={12} className="arr" /></a></li>
              <li><a href="#">Press <I.ArrowRight size={12} className="arr" /></a></li>
            </ul>
          </div>

          <div className="foot-col foot-contact">
            <h4>Contact</h4>
            <div className="row">
              <div className="ico"><I.MapPin size={16} /></div>
              <div>
                <div className="lbl">Dubai · Headquarters</div>
                <div className="val">Gate Village 10, Level 4<br />DIFC, Dubai · U.A.E.</div>
              </div>
            </div>
            <div className="row">
              <div className="ico"><I.MapPin size={16} /></div>
              <div>
                <div className="lbl">Riyadh Office</div>
                <div className="val">King Fahd Road, Olaya<br />Riyadh · K.S.A.</div>
              </div>
            </div>
            <div className="row">
              <div className="ico"><I.Phone size={16} /></div>
              <div>
                <div className="lbl">Telephone</div>
                <div className="val">+971 4 400 0000</div>
              </div>
            </div>
            <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Subscribe to Insights" aria-label="Email" />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        <div className="foot-bottom">
          <div>© 2026 Veristas Advocates &amp; Legal Consultants. Licensed by the Government of Dubai · Legal Affairs Department. Prior results do not guarantee a similar outcome.</div>
          <div className="links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Disclaimer</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   FLOATING WIDGETS + MODALS
   ============================================================ */
function FloatingStack({ onBook }) {
  return (
    <div className="float-stack">
      <a className="float-btn wa" href="https://wa.me/97144000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <span className="b-ico"><I.WhatsApp size={16} /></span>
        <span className="lbl">WhatsApp Us</span>
      </a>
      <button className="float-btn help" onClick={onBook}>
        <span className="b-ico"><I.MessageDots size={16} /></span>
        <span className="lbl">Need legal help?</span>
      </button>
    </div>
  );
}

function ConsultModal({ open, onClose, onBook }) {
  return (
    <div className={'modal-backdrop ' + (open ? 'on' : '')} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close"><I.Close size={18} /></button>
        <div className="ico-big"><I.MessageDots size={22} /></div>
        <h3>Would you like a legal<br />representative to <em>assist you?</em></h3>
        <p>
          A senior attorney is available for a brief, confidential conversation about your
          matter. There is no charge and no obligation — only a clearer picture of your options.
        </p>
        <div className="actions">
          <button className="btn btn-primary" onClick={() => { onClose(); onBook(); }}>
            <I.Calendar size={14} /> Yes, schedule a call
          </button>
          <button className="btn btn-ghost" onClick={onClose}>Not right now</button>
        </div>
        <div className="trust-row">
          <span className="stars">★★★★★</span>
          <span>4.9 / 5 · 850+ verified mandates across the GCC</span>
        </div>
      </div>
    </div>
  );
}

function ModalInput({ label, value, onChange, placeholder }) {
  return (
    <label style={{ display: 'grid', gap: 6 }}>
      <span style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        style={{
          padding: '12px 14px', border: '1px solid var(--line)', borderRadius: 12,
          fontSize: 14, fontFamily: 'var(--sans)', outline: 'none', background: 'white',
          color: 'var(--ink)', transition: 'border-color .2s ease',
        }}
        onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
        onBlur={(e) => e.target.style.borderColor = 'var(--line)'} />
    </label>
  );
}

function BookingModal({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ matter: '', name: '', email: '', phone: '', note: '', slot: '' });
  useEffect(() => { if (!open) setStep(0); }, [open]);
  const matters = ['Corporate & Commercial', 'Financial Services', 'Real Estate', 'Infrastructure & Construction', 'Private Equity', 'Venture Capital', 'Digital Assets', 'General Counsel'];
  const slots = ['Tomorrow · 10:00 GST', 'Tomorrow · 14:30 GST', 'Wednesday · 09:00 GST', 'Wednesday · 16:00 GST', 'Thursday · 11:00 GST'];
  const valid = step === 0 ? !!form.matter : step === 1 ? form.name && /\S+@\S+/.test(form.email) : true;
  return (
    <div className={'modal-backdrop ' + (open ? 'on' : '')} onClick={onClose}>
      <div className="modal" style={{ maxWidth: 540 }} onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close"><I.Close size={18} /></button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          {[0, 1, 2].map((i) =>
            <div key={i} style={{ display: 'contents' }}>
              <div style={{
                width: 22, height: 22, borderRadius: 999,
                background: step >= i ? 'var(--gold)' : 'var(--line)',
                color: step >= i ? 'white' : 'var(--muted)',
                display: 'grid', placeItems: 'center',
                fontSize: 11, fontWeight: 600, transition: 'all .3s ease', flexShrink: 0,
              }}>{i + 1}</div>
              {i < 2 && <div style={{ flex: 1, height: 1, background: step > i ? 'var(--gold)' : 'var(--line)', transition: 'all .3s ease' }} />}
            </div>
          )}
        </div>

        {step === 0 &&
          <>
            <h3>What kind of <em>matter</em> brings you in?</h3>
            <p>So we can route you to the right partner for the first call.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 22 }}>
              {matters.map((m) =>
                <button key={m}
                  onClick={() => setForm((f) => ({ ...f, matter: m }))}
                  style={{
                    textAlign: 'left', padding: '12px 14px',
                    border: '1px solid ' + (form.matter === m ? 'var(--gold)' : 'var(--line)'),
                    background: form.matter === m ? 'rgba(200,169,107,.08)' : 'white',
                    borderRadius: 12, fontSize: 13, fontWeight: 500,
                    color: 'var(--ink)', transition: 'all .2s ease', cursor: 'pointer',
                  }}>
                  {m}
                </button>
              )}
            </div>
          </>
        }

        {step === 1 &&
          <>
            <h3>How can we <em>reach you?</em></h3>
            <p>The first call is private and unrecorded.</p>
            <div style={{ display: 'grid', gap: 12, marginTop: 22 }}>
              <ModalInput label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Jane Doe" />
              <ModalInput label="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="jane@example.com" />
              <ModalInput label="Phone (optional)" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+1 (212) 555-0100" />
            </div>
          </>
        }

        {step === 2 &&
          <>
            <h3>Choose a <em>time.</em></h3>
            <p>A senior attorney will confirm within the hour.</p>
            <div style={{ display: 'grid', gap: 8, marginTop: 22 }}>
              {slots.map((s) =>
                <button key={s}
                  onClick={() => setForm((f) => ({ ...f, slot: s }))}
                  style={{
                    textAlign: 'left', padding: '14px 16px',
                    border: '1px solid ' + (form.slot === s ? 'var(--gold)' : 'var(--line)'),
                    background: form.slot === s ? 'rgba(200,169,107,.08)' : 'white',
                    borderRadius: 12, fontSize: 14, fontWeight: 500,
                    color: 'var(--ink)', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    cursor: 'pointer',
                  }}>
                  <span>{s}</span>
                  {form.slot === s && <I.Check size={16} stroke={2.2} />}
                </button>
              )}
            </div>
          </>
        }

        {step === 3 &&
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div className="ico-big" style={{ margin: '0 auto 20px' }}><I.Check size={28} stroke={2.4} /></div>
            <h3>Consultation <em>requested.</em></h3>
            <p>{form.name?.split(' ')[0]}, a partner will call you at {form.slot?.toLowerCase()} to confirm.</p>
          </div>
        }

        <div className="actions" style={{ marginTop: 26 }}>
          {step > 0 && step < 3 &&
            <button className="btn btn-ghost" onClick={() => setStep(step - 1)}>Back</button>
          }
          {step < 2 &&
            <button className="btn btn-primary" disabled={!valid} onClick={() => setStep(step + 1)}
              style={{ opacity: valid ? 1 : .4, cursor: valid ? 'pointer' : 'not-allowed' }}>
              Continue <I.ArrowRight size={14} className="arr" />
            </button>
          }
          {step === 2 &&
            <button className="btn btn-primary" disabled={!form.slot} onClick={() => setStep(3)}
              style={{ opacity: form.slot ? 1 : .4, cursor: form.slot ? 'pointer' : 'not-allowed' }}>
              Confirm booking <I.Check size={14} />
            </button>
          }
          {step === 3 &&
            <button className="btn btn-primary" onClick={onClose} style={{ flex: 1, justifyContent: 'center' }}>Done</button>
          }
        </div>
      </div>
    </div>
  );
}

export {
  TopBar, Navbar, MobileMenu, Hero, Marquee, Stats, Practice,
  About, Process, Testimonials, CTABanner, Insights, Footer,
  FloatingStack, ConsultModal, BookingModal,
};
