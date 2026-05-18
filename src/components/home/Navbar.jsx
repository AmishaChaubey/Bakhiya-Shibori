import React, { useState, useEffect } from 'react';
import PopupForm from '../../components/home/PopupForm';
import logo from '../../assets/logo.png';
import { Menu, X } from 'lucide-react';


const injectFonts = () => {
  if (typeof document === 'undefined') return;
  const id = 'bakhiya-fonts';
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href =
'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Cormorant+Garamond:wght@400;500;600;700;800;900&display=swap';  document.head.appendChild(link);
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Font inject on mount
  useEffect(() => { injectFonts(); }, []);

  const navigate = (path) => {
    setActivePath(path);
    setIsMobileMenuOpen(false);
    window.location.hash = path;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.hash.slice(1) || '/';
      setActivePath(path);
    };
    window.addEventListener('hashchange', handleHashChange);
    if (!window.location.hash) window.location.hash = '/';
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home',    path: '/'        },
    { name: 'About',   path: '#about'   },
    { name: 'Service', path: '#service' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <>
      <style>{`
        /* ─── CSS Variables ─────────────────────────────── */
        :root {
          --blue:       #14264c;
          --gold:       #a9804f;
          --gold-light: #c9a06f;
          --gold-pale:  #f0e6d6;
          --cream:      #fdf8f2;
        }

        /* ─── Navbar Shell ──────────────────────────────── */
        .nb-root {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          transition: background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .nb-root.top {
          background: rgba(253, 248, 242, 0.93);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(169, 128, 79, 0.20);
          box-shadow: 0 2px 20px rgba(20, 38, 76, 0.06);
        }

        .nb-root.scrolled {
          background: rgba(253, 248, 242, 0.99);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(169, 128, 79, 0.38);
          box-shadow: 0 4px 28px rgba(20, 38, 76, 0.10);
        }

        /* ─── Inner Container — max-w-7xl (1280px) ──────── */
        .nb-inner {
          max-width: 1280px;           /* Tailwind max-w-7xl = 80rem = 1280px */
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }

        /* ─── Logo ──────────────────────────────────────── */
        .nb-logo {
          cursor: pointer;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .nb-logo img {
          height: 80px;
          width: auto;
          object-fit: contain;
        }

        /* ─── Desktop Nav ───────────────────────────────── */
        .nb-desktop {
          display: none;
          align-items: center;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .nb-desktop  { display: flex; }
          .nb-mob-btn  { display: none !important; }
        }

        /* ─── Nav Link ──────────────────────────────────── */
        .nb-link {
          position: relative;
          /* ✅ Font explicitly set — fallback serif agar Google Fonts load na ho */
          font-family:  serif;
          font-size: 15px;
          font-weight:800;
          line-height: 1;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(20, 38, 76, 0.78);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 0 6px;
          white-space: nowrap;
          transition: color 0.25s ease;
        }
        .nb-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1.5px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .nb-link:hover       { color: var(--blue); }
        .nb-link:hover::after { width: 100%; }
        .nb-link.active      { color: var(--gold); }
        .nb-link.active::after { width: 100%; }

        /* ─── Divider ───────────────────────────────────── */
        .nb-divider {
          width: 2px; height: 20px;
          background: rgba(169, 128, 79, 0.40);
        }

        /* ─── CTA Button ────────────────────────────────── */
        .nb-cta {
          font-family: 'serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 10px 24px;
          background: transparent;
          border: 1.5px solid var(--gold);
          color: var(--gold);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease;
          white-space: nowrap;
        }
        .nb-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.32s ease;
          z-index: 0;
        }
        .nb-cta:hover::before { transform: scaleX(1); }
        .nb-cta:hover         { color: var(--cream); }
        .nb-cta span          { position: relative; z-index: 1; }

        /* ─── Mobile Toggle Button ──────────────────────── */
        .nb-mob-btn {
          background: none;
          border: none;
          color: var(--blue);
          cursor: pointer;
          padding: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: background 0.2s;
        }
        .nb-mob-btn:hover { background: rgba(169,128,79,0.10); }

        /* ─── Mobile Overlay ────────────────────────────── */
        .nb-mob-overlay {
          position: fixed;
          inset: 0;
          top: 76px;
          background: rgba(10, 18, 35, 0.55);
          z-index: 40;
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
        }

        /* ─── Mobile Panel ──────────────────────────────── */
        .nb-mob-panel {
          position: fixed;
          top: 76px;
          left: 0;
          right: 0;
          background: var(--blue);
          border-bottom: 2px solid var(--gold);
          z-index: 50;
          padding: 0 0 20px;
          animation: slideDown 0.22s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nb-mob-panel::before {
          content: '';
          display: block;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
          margin-bottom: 4px;
        }

        /* ─── Mobile Nav Item ───────────────────────────── */
        .nb-mob-item {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          background: none;
          border: none;
          border-left: 2px solid transparent;
          cursor: pointer;
          padding: 15px 28px;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(240, 230, 214, 0.78);
          transition: color 0.2s, background 0.2s, border-color 0.2s;
          text-align: left;
        }
        .nb-mob-item:hover {
          color: var(--gold-light);
          background: rgba(169, 128, 79, 0.08);
        }
        .nb-mob-item.active {
          color: var(--gold);
          border-left-color: var(--gold);
          background: rgba(169, 128, 79, 0.10);
        }

        /* ─── Mobile Dot Indicator ──────────────────────── */
        .nb-mob-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0;
          transition: opacity 0.2s;
          flex-shrink: 0;
        }
        .nb-mob-item.active .nb-mob-dot { opacity: 1; }

        /* ─── Mobile CTA ────────────────────────────────── */
        .nb-mob-cta {
          display: block;
          margin: 14px 28px 0;
          padding: 14px;
          background: var(--gold);
          color: var(--blue);
          border: none;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          cursor: pointer;
          width: calc(100% - 56px);
          transition: background 0.3s;
          text-align: center;
        }
        .nb-mob-cta:hover { background: var(--gold-light); }

        /* ─── Responsive tweaks ─────────────────────────── */
        @media (max-width: 480px) {
          .nb-inner { padding: 0 16px; }
          .nb-logo img { height: 72px; }
        }
      `}</style>

      <header className={`nb-root ${isScrolled ? 'scrolled' : 'top'}`}>
        <div className="nb-inner">

          {/* Logo */}
        <a href='#home'>  <div className="nb-logo" onClick={() => navigate('/')} role="button" aria-label="Go to homepage">
            <img src={logo} alt="Bakhiya Shibori Logo" />
          </div></a>

          {/* Desktop Navigation */}
          <nav className="nb-desktop" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`nb-link${activePath === item.path ? ' active' : ''}`}
                aria-current={activePath === item.path ? 'page' : undefined}
              >
                {item.name}
              </button>
            ))}
            <div className="nb-divider" aria-hidden="true" />
            <button className="nb-cta" onClick={() => setIsPopupOpen(true)}>
              <span>Get Estimate</span>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="nb-mob-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen
              ? <X size={22} strokeWidth={1.5} color="var(--gold-pale)" />
              : <Menu size={22} strokeWidth={1.5} color="var(--blue)" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && windowWidth < 768 && (
          <>
            <div
              className="nb-mob-overlay"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <nav className="nb-mob-panel" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`nb-mob-item${activePath === item.path ? ' active' : ''}`}
                  aria-current={activePath === item.path ? 'page' : undefined}
                >
                  <span className="nb-mob-dot" aria-hidden="true" />
                  {item.name}
                </button>
              ))}
              <button
                className="nb-mob-cta"
                onClick={() => { setIsPopupOpen(true); setIsMobileMenuOpen(false); }}
              >
                Get Estimate
              </button>
            </nav>
          </>
        )}
      </header>

      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default Navbar;