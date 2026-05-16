import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSlideText, setShowSlideText] = useState(false);
  const [slideTextIndex, setSlideTextIndex] = useState(0);

  const slides = [
    {
      image: "https://images.pexels.com/photos/6851281/pexels-photo-6851281.jpeg",
      label: "Pure & Natural",
      title: "100% Natural",
      subtitle: "Chemical-Free Dyes",
      description: "Pure, sustainable, and eco-friendly coloring solutions crafted with tradition.",
    },
    {
      image: "https://images.pexels.com/photos/6851284/pexels-photo-6851284.jpeg",
      label: "Rich Pigments",
      title: "Vibrant Colors",
      subtitle: "Rich & Long-Lasting",
      description: "Intense pigments that stand the test of time, season after season.",
    },
    {
      image: "https://images.pexels.com/photos/6851164/pexels-photo-6851164.jpeg",
      label: "Industrial Grade",
      title: "Industrial Grade",
      subtitle: "Mass Production Ready",
      description: "Scalable solutions for modern manufacturing without compromising craft.",
    },
    {
      image: "https://images.pexels.com/photos/6851149/pexels-photo-6851149.jpeg",
      label: "Eco Responsible",
      title: "Sustainable",
      subtitle: "Eco-Friendly Process",
      description: "Reducing carbon footprint with every batch, for a greener tomorrow.",
    },
    {
      image: "https://images.pexels.com/photos/6850542/pexels-photo-6850542.jpeg",
      label: "Certified Quality",
      title: "Global Standards",
      subtitle: "Certified Quality",
      description: "Meeting international industry requirements with every thread.",
    },
    {
      image: "https://images.pexels.com/photos/6851176/pexels-photo-6851176.jpeg",
      label: "R&D Excellence",
      title: "Innovation Hub",
      subtitle: "R&D Excellence",
      description: "Pioneering the future of natural dyes through relentless research.",
    },
    {
      image: "https://images.pexels.com/photos/6850760/pexels-photo-6850760.jpeg",
      label: "Join Us",
      title: "Partner With Us",
      subtitle: "Join The Revolution",
      description: "Together, let's colour the world sustainably and beautifully.",
    },
  ];

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(slides.map((slide) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = resolve;
        })
      ));
      setImagesLoaded(true);
    };
    preloadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    const rotateSlides = setInterval(() => {
      setShowSlideText(false);
      setSlideTextIndex(0);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % slides.length);
        setShowSlideText(true);
      }, 200);
    }, 5500);
    return () => clearInterval(rotateSlides);
  }, [imagesLoaded, slides.length]);

  useEffect(() => {
    if (showSlideText) {
      const timers = [
        setTimeout(() => setSlideTextIndex(1), 150),
        setTimeout(() => setSlideTextIndex(2), 400),
        setTimeout(() => setSlideTextIndex(3), 700),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [showSlideText]);

  useEffect(() => {
    if (imagesLoaded) setTimeout(() => setShowSlideText(true), 150);
  }, [imagesLoaded]);

  const goToSlide = (idx) => {
    setShowSlideText(false);
    setSlideTextIndex(0);
    setTimeout(() => {
      setCurrentImageIndex(idx);
      setShowSlideText(true);
    }, 200);
  };

  if (!imagesLoaded) {
    return (
      <div id="home" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#14264c' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: 48, height: 48,
            border: '2px solid rgba(169,128,79,0.3)',
            borderTop: '2px solid #a9804f',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ fontFamily: 'Georgia, serif', color: '#a9804f', fontSize: 14, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Loading
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

        :root {
          --blue: #14264c;
          --gold: #a9804f;
          --gold-light: #c9a06f;
          --gold-pale: #f0e6d6;
          --cream: #fdf8f2;
        }

        .hero-section {
          position: relative;
     
          min-height: 100vh;
          overflow: hidden;
    
        }
.hero-container {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
}
        /* Slide images */
        .slide-bg {
          position: absolute;
          inset: 0;
          transition: opacity 1.2s ease, transform 1.4s ease;
        }
        .slide-bg.active { opacity: 1; transform: scale(1); }
        .slide-bg.inactive { opacity: 0; transform: scale(1.06); }

        .slide-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          display: block;
        }

   /* Dark overlay — black */
.slide-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      110deg,
      rgba(0,0,0,0.82) 0%,
      rgba(0,0,0,0.65) 55%,
      rgba(0,0,0,0.2) 100%
    ),
    linear-gradient(
      to top,
      rgba(0,0,0,0.65) 0%,
      transparent 50%
    );
}

        /* Subtle gold corner accent */
        .corner-accent-tl {
          position: absolute;
          top: 100px;
          left: 32px;
          width: 60px;
          height: 60px;
          border-top: 1px solid rgba(169,128,79,0.5);
          border-left: 1px solid rgba(169,128,79,0.5);
          pointer-events: none;
          z-index: 2;
        }

        .corner-accent-br {
          position: absolute;
          bottom: 60px;
          right: 32px;
          width: 60px;
          height: 60px;
          border-bottom: 1px solid rgba(169,128,79,0.3);
          border-right: 1px solid rgba(169,128,79,0.3);
          pointer-events: none;
          z-index: 2;
        }

     

        /* Content */
        .hero-content {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 40px;
        }

        @media (max-width: 640px) {
          .hero-content { padding: 0 20px; }
          .gold-vert-line { display: none; }
          .corner-accent-tl { left: 16px; }
        }

        .hero-content-inner {
          max-width: 820px;
          padding-top: 80px;
        }

        /* Eyebrow pill */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 18px;
          border: 1px solid rgba(169,128,79,0.55);
          background: rgba(20,38,76,0.4);
          backdrop-filter: blur(8px);
          margin-bottom: 28px;
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .hero-eyebrow.show { opacity: 1; transform: translateY(0); }
        .hero-eyebrow.hide { opacity: 0; transform: translateY(16px); }

        .eyebrow-dot {
          width: 5px; height: 5px;
          background: var(--gold);
          border-radius: 50%;
          animation: eyebrow-pulse 2.2s infinite;
        }
        @keyframes eyebrow-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.35; transform:scale(0.5); }
        }

        .eyebrow-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .eyebrow-sep { color: rgba(169,128,79,0.4); font-size: 10px; }

        .eyebrow-slide-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(240,230,214,0.65);
        }

        /* Main title */
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(52px, 8vw, 100px);
          font-weight: 900;
          line-height: 1.0;
          color: var(--gold-pale);
          margin-bottom: 10px;
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }
        .hero-title.show { opacity: 1; transform: translateY(0); }
        .hero-title.hide { opacity: 0; transform: translateY(22px); }

        /* Subtitle */
        .hero-subtitle {
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 3.5vw, 40px);
          font-weight: 400;
          font-style: italic;
          color: var(--gold);
          margin-bottom: 22px;
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .hero-subtitle.show { opacity: 1; transform: translateY(0); }
        .hero-subtitle.hide { opacity: 0; transform: translateY(18px); }

        /* Gold divider under subtitle */
        .hero-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
          transition: opacity 0.7s ease 0.3s;
        }
        .hero-rule.show { opacity: 1; }
        .hero-rule.hide { opacity: 0; }
        .hero-rule-line { width: 48px; height: 1px; background: var(--gold); opacity: 0.55; }
        .hero-rule-diamond { width: 6px; height: 6px; background: var(--gold); transform: rotate(45deg); }

        /* Description */
        .hero-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(16px, 2vw, 20px);
          font-weight: 300;
          font-style: italic;
          color: rgba(240,230,214,0.75);
          line-height: 1.75;
          max-width: 560px;
          margin-bottom: 44px;
          transition: opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s;
        }
        .hero-desc.show { opacity: 1; transform: translateY(0); }
        .hero-desc.hide { opacity: 0; transform: translateY(14px); }

        /* Buttons */
        .hero-btns {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          transition: opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s;
        }
        .hero-btns.show { opacity: 1; transform: translateY(0); }
        .hero-btns.hide { opacity: 0; transform: translateY(14px); }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: var(--gold);
          color: var(--blue);
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease, transform 0.2s ease;
        }

        .btn-primary-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--blue);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.35s ease;
          z-index: 0;
        }

        .btn-primary-hero:hover::before { transform: scaleX(1); }
        .btn-primary-hero:hover { color: var(--gold); }
        .btn-primary-hero span, .btn-primary-hero svg { position: relative; z-index: 1; }

        .btn-secondary-hero {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 28px;
          background: transparent;
          border: 1px solid rgba(240,230,214,0.35);
          color: rgba(240,230,214,0.85);
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 0.3s ease, color 0.3s ease;
        }

        .btn-secondary-hero:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        .play-circle {
          width: 34px; height: 34px;
          border: 1px solid rgba(169,128,79,0.5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s, border-color 0.3s;
        }

        .btn-secondary-hero:hover .play-circle {
          background: rgba(169,128,79,0.15);
          border-color: var(--gold);
        }

        /* Slide dots */
        .slide-dots {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .slide-dot {
          height: 2px;
          border-radius: 2px;
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
          background: rgba(240,230,214,0.35);
          width: 24px;
        }

        .slide-dot.active {
          background: var(--gold);
          width: 48px;
        }

        .slide-dot:hover:not(.active) {
          background: rgba(169,128,79,0.6);
        }

        /* Scroll hint */
        .scroll-hint {
          position: absolute;
          bottom: 36px;
          right: 40px;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 640px) { .scroll-hint { display: none; } }

        .scroll-hint-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(169,128,79,0.5);
          writing-mode: vertical-rl;
        }

        .scroll-hint-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(169,128,79,0.5), transparent);
          animation: scroll-line 2s ease-in-out infinite;
        }

        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        /* Slide counter */
        .slide-counter {
          position: absolute;
          bottom: 40px;
          left: 40px;
          z-index: 20;
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        @media (max-width: 640px) { .slide-counter { display: none; } }

        .counter-current {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
        }

        .counter-sep {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          color: rgba(169,128,79,0.4);
          margin: 0 2px;
        }

        .counter-total {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          color: rgba(240,230,214,0.4);
        }
      `}</style>

      <section id="home" className="hero-section">


        {/* BG Images */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`slide-bg ${idx === currentImageIndex ? 'active' : 'inactive'}`}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="slide-overlay" />
            </div>
          ))}
        </div>



        {/* Content */}
        <div className="hero-content">
        <div className='hero-container'>
          <div className="hero-content-inner">
            {slides.map((slide, idx) => (
              idx === currentImageIndex && (
                <div key={idx}>

                  {/* Eyebrow */}
                  <div className={`hero-eyebrow ${slideTextIndex >= 1 ? 'show' : 'hide'}`}>
                    <div className="eyebrow-dot" />
                    <span className="eyebrow-brand">Bakhiya Shibori</span>
                    <span className="eyebrow-sep">—</span>
                    <span className="eyebrow-slide-label">{slide.label}</span>
                  </div>

                  {/* Title */}
                  <h1 className={`hero-title ${slideTextIndex >= 1 ? 'show' : 'hide'}`}>
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className={`hero-subtitle ${slideTextIndex >= 2 ? 'show' : 'hide'}`}>
                    {slide.subtitle}
                  </p>

                  {/* Rule */}
                  <div className={`hero-rule ${slideTextIndex >= 2 ? 'show' : 'hide'}`}>
                    <div className="hero-rule-line" />
                    <div className="hero-rule-diamond" />
                  </div>

                  {/* Description */}
                  <p className={`hero-desc ${slideTextIndex >= 3 ? 'show' : 'hide'}`}>
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className={`hero-btns ${slideTextIndex >= 3 ? 'show' : 'hide'}`}>
                    <a href='#about'><button className="btn-primary-hero">
                      <span>Discover More</span>
                      <ArrowRight size={15} strokeWidth={2} />
                    </button></a>
                  <a href='#contact'>  <button className="btn-secondary-hero">
                  
                     Get In Touch
                    </button></a>
                  </div>

                </div>
              )
            ))}
          </div>
        </div>
        </div>

        {/* Slide counter bottom-left */}
        <div className="slide-counter">
          <span className="counter-current">
            {String(currentImageIndex + 1).padStart(2, '0')}
          </span>
          <span className="counter-sep">/</span>
          <span className="counter-total">
            {String(slides.length).padStart(2, '0')}
          </span>
        </div>

        {/* Dots */}
        <div className="slide-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`slide-dot ${idx === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Scroll hint bottom-right */}
        <div className="scroll-hint">
          <span className="scroll-hint-text">Scroll</span>
          <div className="scroll-hint-line" />

        </div>

      </section>
    </>
  );
};

export default Hero;