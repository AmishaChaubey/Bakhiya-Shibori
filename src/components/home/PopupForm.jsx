import React, { useEffect } from "react";
import { X, Send, Sparkles } from "lucide-react";
import logo from "../../assets/bs logo.png";

const injectFonts = () => {
  if (typeof document === "undefined") return;
  const id = "popup-fonts";
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,600&family=Cormorant+Garamond:wght@400;500;600;700&display=swap";
  document.head.appendChild(link);
};

const PopupForm = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    injectFonts();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
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

        @keyframes pf-bg {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pf-rise {
          from { opacity: 0; transform: translateY(32px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        @keyframes pf-shimmer {
          0%   { background-position: -500px 0; }
          100% { background-position:  500px 0; }
        }
        @keyframes pf-float1 {
          0%,100% { transform: translateY(0)   rotate(-8deg); }
          50%     { transform: translateY(-9px) rotate(-8deg); }
        }
        @keyframes pf-float2 {
          0%,100% { transform: translateY(0)   rotate(10deg); }
          50%     { transform: translateY(-6px) rotate(10deg); }
        }

        .pf-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          background: rgba(5, 10, 22, 0.75);
          backdrop-filter: blur(7px);
          -webkit-backdrop-filter: blur(7px);
          animation: pf-bg 0.25s ease forwards;
        }

        .pf-card {
          position: relative;
          width: 100%;
          max-width: 520px;
          border-radius: 22px;
          overflow: hidden;
          background: var(--cream);
          box-shadow:
            0 30px 80px rgba(20, 38, 76, 0.32),
            0 8px 24px rgba(0,0,0,0.15);
          animation: pf-rise 0.34s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        /* ── Header ── */
        .pf-header {
          position: relative;
          background: linear-gradient(135deg, var(--blue-deep) 0%, var(--blue) 55%, var(--blue-mid) 100%);
          padding: 36px 32px 30px;
          overflow: hidden;
          text-align: center;
        }

        .pf-deco {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .pf-deco-1 {
          width: 160px; height: 160px;
          background: var(--gold);
          opacity: 0.07;
          top: -55px; left: -55px;
        }
        .pf-deco-2 {
          width: 100px; height: 100px;
          background: var(--gold-light);
          opacity: 0.08;
          bottom: -35px; right: 10px;
        }
        .pf-deco-3 {
          width: 55px; height: 55px;
          background: var(--cream);
          opacity: 0.05;
          top: 12px; right: 90px;
        }

        .pf-swatch {
          position: absolute;
          border-radius: 6px;
          pointer-events: none;
        }
        .pf-swatch-1 {
          width: 32px; height: 48px;
          background: linear-gradient(160deg, var(--gold-light), var(--gold));
          opacity: 0.22;
          top: 20px; left: 24px;
          animation: pf-float1 3.8s ease-in-out infinite;
        }
        .pf-swatch-2 {
          width: 28px; height: 42px;
          background: linear-gradient(160deg, var(--gold-pale), var(--gold-light));
          opacity: 0.18;
          bottom: 14px; right: 28px;
          animation: pf-float2 4.2s ease-in-out infinite;
        }

        .pf-shimmer-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--gold) 35%,
            var(--gold-pale) 50%,
            var(--gold) 65%,
            transparent 100%
          );
          background-size: 500px 100%;
          animation: pf-shimmer 2.6s linear infinite;
        }

        .pf-close {
          position: absolute;
          top: 14px; right: 14px;
          width: 34px; height: 34px;
          border-radius: 50%;
          background: rgba(240, 230, 214, 0.10);
          border: 1px solid rgba(169, 128, 79, 0.35);
          color: var(--gold-pale);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          z-index: 2;
          transition: background 0.2s, transform 0.25s;
        }
        .pf-close:hover {
          background: rgba(169, 128, 79, 0.20);
          transform: rotate(90deg);
        }

        .pf-logo {
          position: relative;
          z-index: 2;
          display: inline-block;
          margin-bottom: 14px;
        }
        .pf-logo img {
          height: 50px;
          width: auto;
          filter: brightness(0) invert(1);
          opacity: 0.90;
        }

        .pf-title {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(20px, 5vw, 26px);
          font-weight: 700;
          color: var(--cream);
          letter-spacing: 0.02em;
          line-height: 1.25;
          position: relative;
          z-index: 2;
        }
        .pf-title em {
          font-style: italic;
          color: var(--gold-light);
        }

        .pf-subtitle {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(240, 230, 214, 0.50);
          margin-top: 7px;
          position: relative;
          z-index: 2;
        }

        /* ── Divider ── */
        .pf-divider {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 32px;
          margin-top: 22px;
        }
        .pf-divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(to right, transparent, rgba(169,128,79,0.28), transparent);
        }
        .pf-divider-diamond {
          width: 6px; height: 6px;
          background: var(--gold);
          transform: rotate(45deg);
          opacity: 0.65;
          flex-shrink: 0;
        }

        /* ── Form ── */
        .pf-form {
          padding: 18px 32px 30px;
          display: grid;
          gap: 13px;
        }

        .pf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
        }

        .pf-label {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: var(--blue);
          display: block;
          margin-bottom: 5px;
          padding-left: 2px;
        }

        .pf-input,
        .pf-textarea,
        .pf-select {
          width: 100%;
          box-sizing: border-box;
          background: #ffffff;
          border: 1.5px solid rgba(20, 38, 76, 0.16);
          border-radius: 10px;
          padding: 0 15px;
          height: 44px;
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: 14px;
          color: var(--blue);
          outline: none;
          transition: border-color 0.22s, box-shadow 0.22s;
          -webkit-appearance: none;
        }
        .pf-input::placeholder,
        .pf-textarea::placeholder {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-style: italic;
          color: rgba(20, 38, 76, 0.28);
        }
        .pf-input:focus,
        .pf-textarea:focus,
        .pf-select:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(169, 128, 79, 0.12);
        }

        .pf-textarea {
          height: auto;
          padding: 11px 15px;
          resize: none;
          line-height: 1.55;
        }

        .pf-select {
          cursor: pointer;
          color: rgba(20, 38, 76, 0.55);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M1 1l4.5 4.5L10 1' stroke='%23a9804f' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }
        .pf-select option { color: var(--blue); }

        /* ── Submit ── */
        .pf-submit {
          margin-top: 2px;
          height: 48px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--blue-deep) 0%, var(--blue) 60%, var(--blue-mid) 100%);
          border: 1.5px solid rgba(169, 128, 79, 0.38);
          color: var(--cream);
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.25s, border-color 0.25s;
          box-shadow: 0 6px 22px rgba(20, 38, 76, 0.26);
        }
        .pf-submit::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(169,128,79,0.14) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .pf-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(20, 38, 76, 0.34);
          border-color: var(--gold);
        }
        .pf-submit:hover::before { opacity: 1; }
        .pf-submit:active { transform: translateY(0); }

        .pf-submit-icon { color: var(--gold-light); }

        .pf-note {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 12px;
          color: rgba(20, 38, 76, 0.36);
          text-align: center;
          letter-spacing: 0.06em;
          margin-top: 2px;
        }

        /* ── Responsive ── */
        @media (max-width: 440px) {
          .pf-row     { grid-template-columns: 1fr; }
          .pf-header  { padding: 28px 20px 24px; }
          .pf-form    { padding: 14px 20px 24px; }
          .pf-divider { padding: 0 20px; }
        }
      `}</style>

      <div
        className="pf-backdrop"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div className="pf-card" role="dialog" aria-modal="true" aria-label="Get Estimate">

          {/* Header */}
          <div className="pf-header">

            <button className="pf-close" onClick={onClose} aria-label="Close">
              <X size={15} strokeWidth={2} />
            </button>

            <div className="pf-logo">
              <img src={logo} alt="Bakhiya Shibori" />
            </div>

            <h2 className="pf-title">
              Begin Your <em>Fabric</em> Journey
            </h2>
            <p className="pf-subtitle">
              <Sparkles size={9} style={{ display:"inline", marginRight:5, verticalAlign:"middle", color:"#c9a06f" }} />
              Premium Dye &amp; Weave Estimates
              <Sparkles size={9} style={{ display:"inline", marginLeft:5,  verticalAlign:"middle", color:"#c9a06f" }} />
            </p>

            <div className="pf-shimmer-bar" />
          </div>

          {/* Divider */}
          <div className="pf-divider">
            <div className="pf-divider-line" />
            <div className="pf-divider-diamond" />
            <div className="pf-divider-line" />
          </div>

          {/* Form */}
          <div className="pf-form">

            <div className="pf-row">
              <div>
                <label className="pf-label">Full Name</label>
                <input type="text" className="pf-input" placeholder="Your name" />
              </div>
              <div>
                <label className="pf-label">Phone</label>
                <input type="tel" className="pf-input" placeholder="+91 00000 00000" />
              </div>
            </div>

            <div>
              <label className="pf-label">Email Address</label>
              <input type="email" className="pf-input" placeholder="you@example.com" />
            </div>

            <div>
              <label className="pf-label">Service Required</label>
              <select className="pf-select" defaultValue="">
                <option value="" disabled>Select a service…</option>
                <option>Shibori Dyeing</option>
                <option>Block Printing</option>
                <option>Bakhiya Embroidery</option>
                <option>Custom Fabric Order</option>
                <option>Wholesale Inquiry</option>
              </select>
            </div>

            <div>
              <label className="pf-label">Message</label>
              <textarea
                className="pf-textarea"
                rows={3}
                placeholder="Tell us about your fabric requirements…"
              />
            </div>

            <button className="pf-submit">
              <Send size={14} strokeWidth={2} className="pf-submit-icon" />
              Send Enquiry
            </button>

            <p className="pf-note">We typically respond within 24 hours</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupForm;