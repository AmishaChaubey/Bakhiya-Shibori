import React, { useEffect } from "react";
import { Palette, Droplets, Sparkles, Shirt, Waves } from "lucide-react";

const injectFonts = () => {
  if (typeof document === "undefined") return;
  const id = "service-fonts";
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,600&family=Cormorant+Garamond:wght@400;500;600;700&display=swap";
  document.head.appendChild(link);
};

const services = [
  {
    icon: <Palette size={26} />,
    title: "Shibori Dye",
    tag: "Handcrafted",
    image: "https://i.pinimg.com/1200x/d1/26/27/d12627865dc380b4023ded5ac2298d90.jpg",
    desc: "Luxury handcrafted Shibori patterns with premium textures and elegant artistic finishing.",
  },
  {
    icon: <Droplets size={26} />,
    title: "Tie Dye",
    tag: "Trending",
    image: "https://i.pinimg.com/736x/e0/92/4c/e0924c9844ac2fd9154004f981b389da.jpg",
    desc: "Creative tie dye solutions designed for trendy fashion collections and modern apparel.",
  },
  {
    icon: <Sparkles size={26} />,
    title: "Plain Dye",
    tag: "Premium",
    image: "https://i.pinimg.com/1200x/77/c9/c4/77c9c42e250b95b3aea8b6ff129935e2.jpg",
    desc: "Smooth and vibrant plain dyeing available in premium shades and luxury quality finish.",
  },
  {
    icon: <Shirt size={26} />,
    title: "Zip Dye",
    tag: "Streetwear",
    image: "https://i.pinimg.com/1200x/47/75/d4/4775d4254e817582f006f7d6a11d6735.jpg",
    desc: "Unique zip dye artwork specially crafted for premium streetwear and fashion brands.",
  },
  {
    icon: <Waves size={26} />,
    title: "Fabric Washing",
    tag: "Professional",
    image: "https://i.pinimg.com/736x/d1/a6/4a/d1a64afd9b06189d5854fe99862e5c46.jpg",
    desc: "Professional fabric washing process for softness, durability and premium comfort feel.",
  },
  {
    icon: <Palette size={26} />,
    title: "Custom Colours",
    tag: "Bespoke",
    image: "https://i.pinimg.com/1200x/22/79/4d/22794d1b56af4a9b9ab9f158fd10584e.jpg",
    desc: "Unlimited trendy and customized colour options available for every fabric style.",
  },
];

const Service = () => {
  useEffect(() => { injectFonts(); }, []);

  return (
    <section id="service">
      <style>{`
        :root {
          --blue:       #14264c;
          --blue-deep:  #0d1b38;
          --blue-mid:   #1c3460;
          --gold:       #a9804f;
          --gold-light: #c9a06f;
          --gold-pale:  #f0e6d6;
          --cream:      #fdf8f2;
        }

        /* ── Section ── */
        .sv-section {
          position: relative;
          padding: 100px 20px;
          overflow: hidden;
         background: rgba(0, 0, 0, 0.9);
  z-index: 1;
        }

        /* Background image */
        .sv-bg-img {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1800&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          opacity: 0.10;
          z-index: 0;
        }

        /* Decorative blobs — gold tones only */
        .sv-blob {
          position: absolute;
          
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .sv-blob-1 {
          width: 420px; height: 420px;
          background: rgba(169,128,79,0.13);
          top: -80px; left: -80px;
        }
        .sv-blob-2 {
          width: 380px; height: 380px;
          background: rgba(169,128,79,0.10);
          bottom: -80px; right: -60px;
        }
        .sv-blob-3 {
          width: 250px; height: 250px;
          background: rgba(201,160,111,0.08);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        /* ── Header ── */
        .sv-head {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto 72px;
          text-align: center;
        }

        .sv-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 18px;
          border: 1px solid rgba(169,128,79,0.40);
       
          background: rgba(169,128,79,0.08);
          backdrop-filter: blur(8px);
          margin-bottom: 22px;
        }
        .sv-badge-dot {
          position: relative;
          width: 8px; height: 8px;
          flex-shrink: 0;
        }
        .sv-badge-dot span {
          position: absolute;
          inset: 0;
        
          background: var(--gold);
        }
        .sv-badge-dot span:first-child {
          animation: sv-ping 1.4s cubic-bezier(0,0,0.2,1) infinite;
          opacity: 0.6;
        }
        @keyframes sv-ping {
          75%,100% { transform: scale(2); opacity: 0; }
        }
        .sv-badge-text {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold-light);
        }

        .sv-title {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(32px, 6vw, 60px);
          font-weight: 700;
          line-height: 1.15;
          color: var(--cream);
          letter-spacing: -0.01em;
        }
        .sv-title em {
          font-style: italic;
          color: var(--gold-light);
        }

        /* Gold underline accent */
        .sv-title-line {
          display: block;
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, var(--gold), var(--gold-light));
          margin: 18px auto 0;
       
        }

        .sv-desc {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: clamp(15px, 2vw, 18px);
          font-weight: 400;
          color: rgba(240,230,214,0.65);
          max-width: 600px;
          margin: 16px auto 0;
          line-height: 1.75;
          letter-spacing: 0.01em;
        }

        /* ── Grid ── */
        .sv-grid {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        @media (max-width: 1024px) {
          .sv-grid { grid-template-columns: repeat(2, 1fr); gap: 22px; }
        }
        @media (max-width: 600px) {
          .sv-grid { grid-template-columns: 1fr; gap: 20px; }
          .sv-section { padding: 72px 16px; }
          .sv-head { margin-bottom: 48px; }
        }

        /* ── Card ── */
        .sv-card {
          position: relative;
         
          overflow: hidden;
          background: rgba(20,38,76,0.35);
          border: 1px solid rgba(169,128,79,0.18);
          box-shadow: 0 12px 40px rgba(0,0,0,0.35);
          transition: transform 0.55s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.55s ease,
                      border-color 0.4s ease;
          cursor: pointer;
        }
        .sv-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.45),
                      0 0 0 1px rgba(169,128,79,0.35);
          border-color: rgba(169,128,79,0.45);
        }

        /* Image container */
        .sv-img-wrap {
          position: relative;
          height: 400px;
          overflow: hidden;
        }
        @media (max-width: 600px) {
          .sv-img-wrap { height: 340px; }
        }

        .sv-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .sv-card:hover .sv-img { transform: scale(1.08); }

        /* Gradient overlays */
        .sv-grad-default {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(8,14,30,0.96) 0%,
            rgba(8,14,30,0.45) 45%,
            rgba(8,14,30,0.10) 100%
          );
          transition: opacity 0.5s ease;
        }
        .sv-card:hover .sv-grad-default { opacity: 0; }

        .sv-grad-hover {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(13,27,56,0.92) 0%,
            rgba(20,38,76,0.88) 100%
          );
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 3;
        }
        .sv-card:hover .sv-grad-hover { opacity: 1; }

        /* Gold glow bottom-right */
        .sv-glow {
          position: absolute;
          bottom: -60px; right: -60px;
          width: 180px; height: 180px;
          background: rgba(169,128,79,0.30);
          border-radius: 50%;
          filter: blur(40px);
          z-index: 1;
          transition: opacity 0.5s;
        }
        .sv-card:hover .sv-glow { opacity: 0.6; }

        /* Icon badge — top left */
        .sv-icon-badge {
          position: absolute;
          top: 18px; left: 18px;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sv-icon-box {
          width: 50px; height: 50px;
        
          background: linear-gradient(135deg, var(--blue-deep), var(--blue));
          border: 1px solid rgba(169,128,79,0.45);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold-light);
          box-shadow: 0 4px 16px rgba(0,0,0,0.35);
          flex-shrink: 0;
          transition: background 0.4s, border-color 0.4s;
        }
        .sv-card:hover .sv-icon-box {
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          border-color: var(--gold-pale);
          color: var(--blue-deep);
        }

        /* Tag chip — top right */
        .sv-tag {
          position: absolute;
          top: 18px; right: 18px;
          z-index: 4;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: var(--gold-light);
          background: rgba(13,27,56,0.75);
          border: 1px solid rgba(169,128,79,0.35);
         
          padding: 4px 12px;
          backdrop-filter: blur(6px);
        }

        /* Normal content — bottom, fades out on hover */
        .sv-content-normal {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 24px;
          z-index: 4;
          transition: opacity 0.4s ease, transform 0.45s ease;
        }
        .sv-card:hover .sv-content-normal {
          opacity: 0;
          transform: translateY(16px);
          pointer-events: none;
        }

        .sv-card-title {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--cream);
          letter-spacing: -0.01em;
          margin-bottom: 8px;
          line-height: 1.2;
        }
        .sv-card-title-gold {
          color: var(--gold-light);
        }

        .sv-card-desc {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 15px;
          color: rgba(240,230,214,0.72);
          line-height: 1.65;
        }

        /* Thin gold line above title */
        .sv-card-rule {
          width: 32px; height: 1.5px;
          background: var(--gold);
          border-radius: 2px;
          margin-bottom: 10px;
          opacity: 0.75;
        }

        /* Hover content — centered, fades in */
        .sv-content-hover {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 32px 28px;
          z-index: 5;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.45s ease, transform 0.48s ease;
          pointer-events: none;
        }
        .sv-card:hover .sv-content-hover {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .sv-hover-tag {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
        }

        .sv-hover-title {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(24px, 4vw, 34px);
          font-weight: 700;
          color: var(--cream);
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .sv-hover-title em {
          font-style: italic;
          color: var(--gold-light);
        }

        .sv-hover-desc {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 16px;
          color: rgba(240,230,214,0.75);
          line-height: 1.70;
          margin-bottom: 26px;
          max-width: 280px;
        }

        /* CTA button */
        .sv-hover-btn {
          position: relative;
          overflow: hidden;
          padding: 11px 28px;
          background: transparent;
          border: 1.5px solid var(--gold);
          color: var(--gold-light);
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .sv-hover-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.32s ease;
          z-index: 0;
       
        }
        .sv-hover-btn:hover::before { transform: scaleX(1); }
        .sv-hover-btn:hover { color: var(--blue-deep); }
        .sv-hover-btn span { position: relative; z-index: 1; }

        /* Decorative corner lines on hover */
        .sv-corner {
          position: absolute;
          width: 20px; height: 20px;
          z-index: 6;
          opacity: 0;
          transition: opacity 0.4s 0.1s;
        }
        .sv-card:hover .sv-corner { opacity: 1; }
        .sv-corner-tl { top: 12px; left: 12px; border-top: 1.5px solid var(--gold); border-left: 1.5px solid var(--gold); }
        .sv-corner-tr { top: 12px; right: 12px; border-top: 1.5px solid var(--gold); border-right: 1.5px solid var(--gold); }
        .sv-corner-bl { bottom: 12px; left: 12px; border-bottom: 1.5px solid var(--gold); border-left: 1.5px solid var(--gold); }
        .sv-corner-br { bottom: 12px; right: 12px; border-bottom: 1.5px solid var(--gold); border-right: 1.5px solid var(--gold); }
      `}</style>

      <div className="sv-section">
        <div className="sv-bg-img" />
        <div className="sv-blob sv-blob-1" />
        <div className="sv-blob sv-blob-2" />
        <div className="sv-blob sv-blob-3" />

        {/* ── Heading ── */}
        <div className="sv-head">
          <div className="sv-badge">
            <div className="sv-badge-dot">
              <span />
              <span />
            </div>
            <span className="sv-badge-text">Our Services</span>
          </div>

          <h2 className="sv-title">
            Creative <em>Dyeing</em> Excellence
            <span className="sv-title-line" />
          </h2>

          <p className="sv-desc">
            Premium fabric dyeing crafted with artistic textures, modern fashion
            trends and luxurious finishing for brands and custom collections.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="sv-grid">
          {services.map((item, index) => (
            <div key={index} className="sv-card">
              <div className="sv-img-wrap">
                <img src={item.image} alt={item.title} className="sv-img" />

                {/* Overlays */}
                <div className="sv-grad-default" />
                <div className="sv-grad-hover" />
                <div className="sv-glow" />

                {/* Corner decorations */}
                <div className="sv-corner sv-corner-tl" />
                <div className="sv-corner sv-corner-tr" />
                <div className="sv-corner sv-corner-bl" />
                <div className="sv-corner sv-corner-br" />


                {/* Tag chip */}
                <div className="sv-tag">{item.tag}</div>

                {/* Normal content */}
                <div className="sv-content-normal">
                  <div className="sv-card-rule" />
                  <h3 className="sv-card-title">
                    {item.title.split(" ")[0]}{" "}
                    <span className="sv-card-title-gold">
                      {item.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>
                  <p className="sv-card-desc">{item.desc}</p>
                </div>

                {/* Hover content */}
                <div className="sv-content-hover">
                  <p className="sv-hover-tag">Premium Quality</p>
                  <h3 className="sv-hover-title">
                    {item.title.split(" ")[0]}{" "}
                    <em>{item.title.split(" ").slice(1).join(" ")}</em>
                  </h3>
                  <p className="sv-hover-desc">{item.desc}</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;