import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, Eye, Maximize2 } from 'lucide-react';

const injectFonts = () => {
  if (typeof document === 'undefined') return;
  const id = 'gallery-fonts';
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,600&family=Cormorant+Garamond:wght@400;500;600;700&display=swap';
  document.head.appendChild(link);
};

const galleryItems = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/2171218/pexels-photo-2171218.jpeg',
    title: 'Premium Dyed Fabrics',
    description: 'Exquisite colors on premium quality textiles crafted with care.',
    tag: 'Featured',
    span: 'tall',   // col 1, rows 1-2
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/6876896/pexels-photo-6876896.jpeg',
    title: 'Silk Collection',
    description: 'Luxurious silk with perfect color depth and finish.',
    tag: 'Silk',
    span: 'normal',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/17042445/pexels-photo-17042445.jpeg',
    title: 'Dyeing Process',
    description: 'Professional dyeing techniques applied with precision.',
    tag: 'Process',
    span: 'normal',
  },
  {
    id: 4,
    image: 'https://i.pinimg.com/1200x/72/75/1a/72751aeb19f391544b67f675087b1d79.jpg',
    title: 'Finished Products',
    description: 'Beautifully dyed products ready for delivery.',
    tag: 'Premium',
    span: 'wide',   // col 2-3, row 3
  },
  {
    id: 5,
    image: 'https://i.pinimg.com/1200x/39/8a/85/398a85f3718622977c3cdc66a81aa69a.jpg',
    title: 'Cotton Masterpieces',
    description: 'Soft cotton with long-lasting vibrant colors.',
    tag: 'Cotton',
    span: 'normal',
  },
  {
    id: 6,
    image: 'https://i.pinimg.com/736x/2f/36/20/2f36205ba469bf31eb59322087d334d7.jpg',
    title: 'Modern Studio',
    description: 'State-of-the-art dyeing facility for quality output.',
    tag: 'Studio',
    span: 'normal',
  },
  {
    id: 7,
    image: 'https://i.pinimg.com/736x/a1/47/a5/a147a5269184bfdfa5eadc447689a521.jpg',
    title: 'Quality Assurance',
    description: 'Ensuring perfect color consistency across every batch.',
    tag: 'Quality',
    span: 'normal',
  },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => { injectFonts(); }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selected]);

  return (
    <section id="gallery" ref={sectionRef}>
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
        .gl-section {
          position: relative;
          padding: 100px 20px 80px;
          background: var(--cream);
          overflow: hidden;
        }

        /* Subtle background texture dots */
        .gl-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(169,128,79,0.12) 1px, transparent 1px);
          background-size: 32px 32px;
          z-index: 0;
        }

        /* Blobs */
        .gl-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          z-index: 0;
        }
        .gl-blob-1 {
          width: 380px; height: 380px;
          background: rgba(169,128,79,0.10);
          top: -80px; right: -80px;
        }
        .gl-blob-2 {
          width: 300px; height: 300px;
          background: rgba(20,38,76,0.07);
          bottom: -60px; left: -60px;
        }

        /* Floating dots */
        .gl-dot {
          position: absolute;
          border-radius: 50%;
          background: var(--gold);
          pointer-events: none;
          z-index: 1;
          animation: gl-float 4s ease-in-out infinite;
        }
        .gl-dot-1 { width:8px; height:8px; top:12%; left:8%;   opacity:0.35; animation-delay:0s; }
        .gl-dot-2 { width:5px; height:5px; top:35%; right:6%;  opacity:0.25; animation-delay:0.8s; }
        .gl-dot-3 { width:6px; height:6px; bottom:20%; left:14%; opacity:0.30; animation-delay:1.4s; }
        .gl-dot-4 { width:4px; height:4px; bottom:35%; right:12%; opacity:0.20; animation-delay:0.4s; }
        @keyframes gl-float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-14px); }
        }

        /* ── Header ── */
        .gl-head {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto 64px;
          text-align: center;
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .gl-head.hidden { opacity:0; transform:translateY(24px); }
        .gl-head.shown  { opacity:1; transform:translateY(0); }

        .gl-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 18px;
          border: 1px solid rgba(169,128,79,0.38);
          
          background: rgba(169,128,79,0.08);
          margin-bottom: 22px;
        }
        .gl-badge-dot { position:relative; width:8px; height:8px; flex-shrink:0; }
        .gl-badge-dot span {
          position:absolute; inset:0;
          border-radius:50%; background:var(--gold);
        }
        .gl-badge-dot span:first-child {
          animation: gl-ping 1.4s cubic-bezier(0,0,0.2,1) infinite;
          opacity:0.55;
        }
        @keyframes gl-ping {
          75%,100% { transform:scale(2.2); opacity:0; }
        }
        .gl-badge-text {
          font-family: 'Cormorant Garamond','Georgia',serif;
          font-size: 11px; font-weight:700;
          letter-spacing:0.25em; text-transform:uppercase;
          color: var(--gold);
        }

        .gl-title {
          font-family: 'Playfair Display','Georgia',serif;
          font-size: clamp(32px,6vw,58px);
          font-weight: 700;
          color: var(--blue);
          line-height: 1.15;
          letter-spacing: -0.01em;
        }
        .gl-title em { font-style:italic; color:var(--gold-light); }

        .gl-rule {
          display:flex; align-items:center; justify-content:center;
          gap:10px; margin:18px auto 16px;
        }
        .gl-rule-line {
          width:48px; height:1.5px;
          background:linear-gradient(to right,transparent,var(--gold));
        }
        .gl-rule-line:last-child {
          background:linear-gradient(to left,transparent,var(--gold));
        }
        .gl-rule-diamond {
          width:7px; height:7px;
          background:var(--gold); transform:rotate(45deg);
          opacity:0.75;
        }

        .gl-subtitle {
          font-family: 'Cormorant Garamond','Georgia',serif;
          font-size: clamp(15px,2vw,18px);
          color: rgba(20,38,76,0.60);
          max-width:580px; margin:0 auto;
          line-height:1.75; letter-spacing:0.01em;
        }

        /* ── Masonry Grid ── */
        .gl-grid {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto;
          gap: 20px;
        }

        /* Span rules */
        .gl-item-tall  { grid-row: span 2; }
        .gl-item-wide  { grid-column: span 2; }
        .gl-item-normal {}

        @media (max-width: 1024px) {
          .gl-grid { grid-template-columns: repeat(2,1fr); }
          .gl-item-tall  { grid-row: span 2; }
          .gl-item-wide  { grid-column: span 2; }
        }
        @media (max-width: 600px) {
          .gl-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .gl-item-tall,
          .gl-item-wide { grid-row:unset; grid-column:unset; }
          .gl-section { padding: 72px 16px 60px; }
          .gl-head { margin-bottom: 44px; }
        }

        /* ── Card ── */
        .gl-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          background: var(--blue-deep);
          min-height: 280px;
          box-shadow: 0 8px 32px rgba(20,38,76,0.14);
          border: 1px solid rgba(169,128,79,0.12);
          transition:
            transform 0.55s cubic-bezier(0.22,1,0.36,1),
            box-shadow 0.55s ease,
            border-color 0.4s ease,
            opacity 0.8s ease;
        }
        .gl-card.hidden { opacity:0; transform:translateY(28px); }
        .gl-card.shown  { opacity:1; transform:translateY(0); }
        .gl-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 24px 60px rgba(20,38,76,0.22),
                      0 0 0 1px rgba(169,128,79,0.35);
          border-color: rgba(169,128,79,0.40);
        }

        .gl-card-tall   { min-height:580px; }
        .gl-card-wide   { min-height:280px; }
        .gl-card-normal { min-height:280px; }

        @media (max-width:600px) {
          .gl-card-tall,
          .gl-card-wide,
          .gl-card-normal { min-height:240px; }
        }

        .gl-img {
          position:absolute; inset:0;
          width:100%; height:100%;
          object-fit:cover;
          transition: transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .gl-card:hover .gl-img { transform:scale(1.08); }

        /* Base gradient */
        .gl-grad {
          position:absolute; inset:0;
          background:linear-gradient(
            to top,
            rgba(8,14,30,0.92) 0%,
            rgba(8,14,30,0.35) 45%,
            rgba(8,14,30,0.05) 100%
          );
          transition: opacity 0.45s;
        }
        .gl-card:hover .gl-grad { opacity:0.5; }

        /* Hover overlay */
        .gl-hover-overlay {
          position:absolute; inset:0;
          background:linear-gradient(160deg,rgba(13,27,56,0.88) 0%,rgba(20,38,76,0.82) 100%);
          backdrop-filter:blur(4px);
          -webkit-backdrop-filter:blur(4px);
          opacity:0;
          transition:opacity 0.45s;
          z-index:2;
        }
        .gl-card:hover .gl-hover-overlay { opacity:1; }

        /* Gold glow */
        .gl-glow {
          position:absolute;
          bottom:-50px; right:-50px;
          width:160px; height:160px;
          background:rgba(169,128,79,0.25);
          border-radius:50%; filter:blur(36px);
          z-index:1; transition:opacity 0.5s;
          opacity:0;
        }
        .gl-card:hover .gl-glow { opacity:1; }

        /* Tag — top left */
        .gl-tag {
          position:absolute; top:16px; left:16px; z-index:4;
          font-family:'Cormorant Garamond','Georgia',serif;
          font-size:10px; font-weight:700;
          letter-spacing:0.22em; text-transform:uppercase;
          color:var(--gold-light);
          background:rgba(13,27,56,0.78);
          border:1px solid rgba(169,128,79,0.38);
          border-radius:100px;
          padding:4px 12px;
          backdrop-filter:blur(6px);
        }

        /* Eye icon — top right */
        .gl-eye {
          position:absolute; top:14px; right:14px; z-index:4;
          width:36px; height:36px; border-radius:50%;
          background:rgba(13,27,56,0.70);
          border:1px solid rgba(169,128,79,0.35);
          display:flex; align-items:center; justify-content:center;
          color:var(--gold-light);
          opacity:0;
          transform:scale(0.7);
          transition:opacity 0.35s, transform 0.35s;
        }
        .gl-card:hover .gl-eye { opacity:1; transform:scale(1); }

        /* Bottom normal content */
        .gl-bottom {
          position:absolute; bottom:0; left:0; right:0;
          padding:22px 22px 20px;
          z-index:3;
          transition:opacity 0.4s, transform 0.4s;
        }
        .gl-card:hover .gl-bottom { opacity:0; transform:translateY(12px); pointer-events:none; }

        .gl-bottom-rule {
          width:28px; height:1.5px;
          background:var(--gold); border-radius:2px;
          margin-bottom:8px; opacity:0.8;
        }
        .gl-card-title {
          font-family:'Playfair Display','Georgia',serif;
          font-size:clamp(16px,2vw,21px);
          font-weight:700;
          color:var(--cream);
          line-height:1.25;
          margin-bottom:5px;
        }
        .gl-card-title span { font-style:italic; color:var(--gold-light); }
        .gl-card-desc {
          font-family:'Cormorant Garamond','Georgia',serif;
          font-size:13px;
          color:rgba(240,230,214,0.68);
          line-height:1.55;
        }

        /* Hover center content */
        .gl-hover-content {
          position:absolute; inset:0; z-index:4;
          display:flex; flex-direction:column;
          align-items:center; justify-content:center;
          text-align:center; padding:28px 24px;
          opacity:0; transform:translateY(14px);
          transition:opacity 0.45s, transform 0.48s;
          pointer-events:none;
        }
        .gl-card:hover .gl-hover-content { opacity:1; transform:translateY(0); pointer-events:auto; }

        .gl-hover-label {
          font-family:'Cormorant Garamond','Georgia',serif;
          font-size:10px; font-weight:700;
          letter-spacing:0.28em; text-transform:uppercase;
          color:var(--gold); margin-bottom:10px;
        }
        .gl-hover-title {
          font-family:'Playfair Display','Georgia',serif;
          font-size:clamp(20px,3vw,28px);
          font-weight:700;
          color:var(--cream); line-height:1.2;
          margin-bottom:10px;
        }
        .gl-hover-title em { font-style:italic; color:var(--gold-light); }
        .gl-hover-desc {
          font-family:'Cormorant Garamond','Georgia',serif;
          font-size:15px;
          color:rgba(240,230,214,0.72);
          line-height:1.65; margin-bottom:22px;
          max-width:260px;
        }
        .gl-hover-btn {
          position:relative; overflow:hidden;
          padding:9px 24px;
          background:transparent;
          border:1.5px solid var(--gold);
          color:var(--gold-light);
          font-family:'Cormorant Garamond','Georgia',serif;
          font-size:11px; font-weight:700;
          letter-spacing:0.20em; text-transform:uppercase;
          cursor:pointer;
          transition:color 0.3s;
        }
        .gl-hover-btn::before {
          content:''; position:absolute; inset:0;
          background:var(--gold);
          transform:scaleX(0); transform-origin:left;
          transition:transform 0.32s ease;
          z-index:0;
        }
        .gl-hover-btn:hover::before { transform:scaleX(1); }
        .gl-hover-btn:hover { color:var(--blue-deep); }
        .gl-hover-btn span { position:relative; z-index:1; }

        /* Corner brackets */
        .gl-corner {
          position:absolute; width:18px; height:18px; z-index:5;
          opacity:0; transition:opacity 0.4s 0.08s;
        }
        .gl-card:hover .gl-corner { opacity:1; }
        .gl-c-tl { top:10px;    left:10px;    border-top:1.5px solid var(--gold); border-left:1.5px solid var(--gold); }
        .gl-c-tr { top:10px;    right:10px;   border-top:1.5px solid var(--gold); border-right:1.5px solid var(--gold); }
        .gl-c-bl { bottom:10px; left:10px;    border-bottom:1.5px solid var(--gold); border-left:1.5px solid var(--gold); }
        .gl-c-br { bottom:10px; right:10px;   border-bottom:1.5px solid var(--gold); border-right:1.5px solid var(--gold); }

        /* ── CTA ── */
        .gl-cta-wrap {
          position:relative; z-index:2;
          text-align:center; margin-top:56px;
          transition:opacity 0.9s 0.4s, transform 0.9s 0.4s;
        }
        .gl-cta-wrap.hidden { opacity:0; transform:translateY(16px); }
        .gl-cta-wrap.shown  { opacity:1; transform:translateY(0); }

        .gl-cta {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 36px;
          background:var(--blue);
          border:1.5px solid rgba(169,128,79,0.40);
          border-radius:100px;
          color:var(--cream);
          font-family:'Playfair Display','Georgia',serif;
          font-size:14px; font-weight:700;
          letter-spacing:0.12em; text-transform:uppercase;
          cursor:pointer;
          position:relative; overflow:hidden;
          transition:transform 0.25s, box-shadow 0.25s, border-color 0.25s;
          box-shadow:0 6px 24px rgba(20,38,76,0.22);
        }
        .gl-cta::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(169,128,79,0.16) 0%,transparent 60%);
          opacity:0; transition:opacity 0.3s;
        }
        .gl-cta:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(20,38,76,0.30); border-color:var(--gold); }
        .gl-cta:hover::before { opacity:1; }
        .gl-cta:active { transform:translateY(0); }
        .gl-cta-icon { color:var(--gold-light); transition:transform 0.3s; }
        .gl-cta:hover .gl-cta-icon { transform:translateX(5px); }

        /* ── Lightbox ── */
        .gl-lb-backdrop {
          position:fixed; inset:0; z-index:9999;
          display:flex; align-items:center; justify-content:center;
          padding:16px;
          background:rgba(5,10,22,0.92);
          backdrop-filter:blur(10px);
          -webkit-backdrop-filter:blur(10px);
          animation:gl-fade 0.25s ease;
        }
        @keyframes gl-fade { from{opacity:0} to{opacity:1} }

        .gl-lb-card {
          position:relative;
          width:100%; max-width:900px;
          background:linear-gradient(135deg,rgba(20,38,76,0.95),rgba(13,27,56,0.98));
          border:1px solid rgba(169,128,79,0.30);
          border-radius:22px; overflow:hidden;
          box-shadow:0 32px 80px rgba(0,0,0,0.55);
          animation:gl-rise 0.32s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes gl-rise {
          from{opacity:0;transform:translateY(28px) scale(0.96)}
          to  {opacity:1;transform:translateY(0) scale(1)}
        }

        .gl-lb-inner {
          display:grid;
          grid-template-columns:1fr 1fr;
          min-height:480px;
        }
        @media(max-width:640px){
          .gl-lb-inner { grid-template-columns:1fr; min-height:unset; }
        }

        .gl-lb-img-wrap {
          position:relative;
          min-height:320px;
          overflow:hidden;
        }
        .gl-lb-img {
          width:100%; height:100%;
          object-fit:cover;
        }
        .gl-lb-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to right,transparent 60%,rgba(13,27,56,0.80) 100%);
        }
        @media(max-width:640px){
          .gl-lb-img-overlay {
            background:linear-gradient(to top,rgba(13,27,56,0.85) 0%,transparent 50%);
          }
        }

        .gl-lb-info {
          padding:36px 32px;
          display:flex; flex-direction:column; justify-content:center;
        }
        @media(max-width:640px){
          .gl-lb-info { padding:24px 20px; }
        }

        .gl-lb-badge {
          display:inline-flex; align-items:center; gap:6px;
          padding:5px 14px;
          border-radius:100px;
          background:rgba(169,128,79,0.12);
          border:1px solid rgba(169,128,79,0.32);
          margin-bottom:16px;
          width:fit-content;
        }
        .gl-lb-badge-dot {
          width:6px; height:6px; border-radius:50%;
          background:var(--gold); animation:gl-ping 1.4s infinite;
        }
        @keyframes gl-ping {
          75%,100%{transform:scale(2.2);opacity:0}
        }
        .gl-lb-badge-text {
          font-family:'Cormorant Garamond','Georgia',serif;
          font-size:10px; font-weight:700;
          letter-spacing:0.25em; text-transform:uppercase;
          color:var(--gold-light);
        }

        .gl-lb-title {
          font-family:'Playfair Display','Georgia',serif;
          font-size:clamp(22px,3vw,32px);
          font-weight:700;
          color:var(--cream); line-height:1.2;
          margin-bottom:14px;
        }
        .gl-lb-title em { font-style:italic; color:var(--gold-light); }

        .gl-lb-rule {
          width:40px; height:1.5px;
          background:linear-gradient(to right,var(--gold),var(--gold-light));
          border-radius:2px; margin-bottom:14px;
        }

        .gl-lb-desc {
          font-family:'Cormorant Garamond','Georgia',serif;
          font-size:16px; color:rgba(240,230,214,0.68);
          line-height:1.70; margin-bottom:24px;
        }

        .gl-lb-features {
          display:flex; flex-direction:column; gap:14px;
          margin-bottom:28px;
        }
        .gl-lb-feat {
          display:flex; align-items:center; gap:12px;
        }
        .gl-lb-feat-icon {
          width:38px; height:38px; border-radius:12px;
          background:rgba(20,38,76,0.60);
          border:1px solid rgba(169,128,79,0.30);
          display:flex; align-items:center; justify-content:center;
          font-size:17px; flex-shrink:0;
        }
        .gl-lb-feat-title {
          font-family:'Playfair Display','Georgia',serif;
          font-size:14px; font-weight:600;
          color:var(--cream);
        }
        .gl-lb-feat-sub {
          font-family:'Cormorant Garamond','Georgia',serif;
          font-size:12px; color:rgba(240,230,214,0.48);
          letter-spacing:0.04em;
        }

        .gl-lb-btn {
          display:inline-flex; align-items:center; gap:8px;
          padding:12px 28px; border-radius:100px;
          background:var(--gold);
          border:none; cursor:pointer;
          font-family:'Playfair Display','Georgia',serif;
          font-size:13px; font-weight:700;
          letter-spacing:0.12em; text-transform:uppercase;
          color:var(--blue-deep);
          transition:background 0.3s,transform 0.2s,box-shadow 0.25s;
          box-shadow:0 6px 20px rgba(169,128,79,0.30);
          width:fit-content;
        }
        .gl-lb-btn:hover {
          background:var(--gold-light);
          transform:translateY(-2px);
          box-shadow:0 10px 28px rgba(169,128,79,0.40);
        }

        .gl-lb-close {
          position:absolute; top:14px; right:14px; z-index:10;
          width:36px; height:36px; border-radius:50%;
          background:rgba(240,230,214,0.10);
          border:1px solid rgba(169,128,79,0.30);
          color:var(--gold-pale);
          display:flex; align-items:center; justify-content:center;
          cursor:pointer;
          transition:background 0.2s,transform 0.25s;
        }
        .gl-lb-close:hover {
          background:rgba(169,128,79,0.20);
          transform:rotate(90deg);
        }

        /* Shimmer bar */
        .gl-lb-shimmer {
          position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(
            90deg,transparent 0%,var(--gold) 35%,var(--gold-pale) 50%,var(--gold) 65%,transparent 100%
          );
          background-size:500px 100%;
          animation:gl-shimmer 2.6s linear infinite;
        }
        @keyframes gl-shimmer {
          0%{background-position:-500px 0} 100%{background-position:500px 0}
        }
      `}</style>

      <div className="gl-section">
        <div className="gl-blob gl-blob-1" />
        <div className="gl-blob gl-blob-2" />
        <div className="gl-dot gl-dot-1" />
        <div className="gl-dot gl-dot-2" />
        <div className="gl-dot gl-dot-3" />
        <div className="gl-dot gl-dot-4" />

        {/* ── Header ── */}
        <div className={`gl-head ${visible ? 'shown' : 'hidden'}`}>
          <div className="gl-badge">
            <div className="gl-badge-dot"><span /><span /></div>
            <span className="gl-badge-text">Our Gallery</span>
          </div>

          <h2 className="gl-title">
            Colors That <em>Tell a Story</em>
          </h2>

          <div className="gl-rule">
            <div className="gl-rule-line" />
            <div className="gl-rule-diamond" />
            <div className="gl-rule-line" />
          </div>

          <p className="gl-subtitle">
            Explore our exquisite collection of dyed fabrics where every piece
            showcases the perfect blend of artistry and precision.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="gl-grid">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`gl-item-${item.span}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`gl-card gl-card-${item.span} ${visible ? 'shown' : 'hidden'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => setSelected(item)}
              >
                <img src={item.image} alt={item.title} className="gl-img" />

                <div className="gl-grad" />
                <div className="gl-hover-overlay" />
                <div className="gl-glow" />

                {/* Corner brackets */}
                <div className="gl-corner gl-c-tl" />
                <div className="gl-corner gl-c-tr" />
                <div className="gl-corner gl-c-bl" />
                <div className="gl-corner gl-c-br" />

                {/* Tag */}
                <div className="gl-tag">{item.tag}</div>

                {/* Eye icon */}
                <div className="gl-eye"><Eye size={15} strokeWidth={1.8} /></div>

                {/* Normal bottom content */}
                <div className="gl-bottom">
                  <div className="gl-bottom-rule" />
                  <h3 className="gl-card-title">
                    {item.title.split(' ').slice(0,-1).join(' ')}{' '}
                    <span>{item.title.split(' ').slice(-1)}</span>
                  </h3>
                  <p className="gl-card-desc">{item.description}</p>
                </div>

                {/* Hover center content */}
                <div className="gl-hover-content">
                  <p className="gl-hover-label">Premium Craft</p>
                  <h3 className="gl-hover-title">
                    {item.title.split(' ').slice(0,-1).join(' ')}{' '}
                    <em>{item.title.split(' ').slice(-1)}</em>
                  </h3>
                  <p className="gl-hover-desc">{item.description}</p>
                  <button className="gl-hover-btn">
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Lightbox ── */}
      {selected && (
        <div
          className="gl-lb-backdrop"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="gl-lb-card">
            <div className="gl-lb-shimmer" />

            <button className="gl-lb-close" onClick={() => setSelected(null)} aria-label="Close">
              <X size={15} strokeWidth={2} />
            </button>

            <div className="gl-lb-inner">
              {/* Image */}
              <div className="gl-lb-img-wrap">
                <img src={selected.image} alt={selected.title} className="gl-lb-img" />
                <div className="gl-lb-img-overlay" />
              </div>

              {/* Info */}
              <div className="gl-lb-info">
                <div className="gl-lb-badge">
                  <div className="gl-lb-badge-dot" />
                  <span className="gl-lb-badge-text">Premium Quality</span>
                </div>

                <h3 className="gl-lb-title">
                  {selected.title.split(' ').slice(0,-1).join(' ')}{' '}
                  <em>{selected.title.split(' ').slice(-1)}</em>
                </h3>

                <div className="gl-lb-rule" />

                <p className="gl-lb-desc">{selected.description}</p>

                <div className="gl-lb-features">
                  <div className="gl-lb-feat">
                    <div className="gl-lb-feat-icon">🎨</div>
                    <div>
                      <p className="gl-lb-feat-title">Premium Quality Dyes</p>
                      <p className="gl-lb-feat-sub">Long-lasting vibrant colors</p>
                    </div>
                  </div>
                  <div className="gl-lb-feat">
                    <div className="gl-lb-feat-icon">✨</div>
                    <div>
                      <p className="gl-lb-feat-title">Expert Craftsmanship</p>
                      <p className="gl-lb-feat-sub">Professional dyeing process</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;