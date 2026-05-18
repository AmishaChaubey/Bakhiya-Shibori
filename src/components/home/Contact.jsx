import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Send, Sparkles } from 'lucide-react';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [focused, setFocused] = useState('');

    useEffect(() => {
        const t = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

                :root {
                    --blue: #14264c;
                    --gold: #a9804f;
                    --gold-light: #c9a06f;
                    --gold-pale: #f0e6d6;
                    --cream: #fdf8f2;
                }

                .contact-section {
                    position: relative;
                    background: var(--cream);
                    overflow: hidden;
                    font-family: 'Cormorant Garamond', serif;
                }

                /* Fabric weave texture */
                .contact-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image:
                        repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(169,128,79,0.03) 3px, rgba(169,128,79,0.03) 4px),
                        repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(20,38,76,0.02) 3px, rgba(20,38,76,0.02) 4px);
                    pointer-events: none;
                    z-index: 0;
                }

                .contact-orb-1 {
                    position: absolute;
                    top: -150px; right: -150px;
                    width: 500px; height: 500px;
                    background: radial-gradient(circle, rgba(169,128,79,0.07) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                }

                .contact-orb-2 {
                    position: absolute;
                    bottom: -150px; left: -150px;
                    width: 500px; height: 500px;
                    background: radial-gradient(circle, rgba(20,38,76,0.07) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                }

                .contact-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 100px 24px;
                }

                /* ── Header ── */
                .contact-header {
                    text-align: center;
                    margin-bottom: 72px;
                    opacity: 0;
                    transform: translateY(28px);
                    transition: opacity 0.9s ease, transform 0.9s ease;
                }
                .contact-header.visible { opacity: 1; transform: translateY(0); }

                .eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 22px;
                    border: 1px solid var(--gold);
                    margin-bottom: 24px;
                }

                .eyebrow-dot {
                    width: 6px; height: 6px;
                    background: var(--gold);
                    border-radius: 50%;
                    animation: dot-pulse 2s infinite;
                }

                @keyframes dot-pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.35; transform: scale(0.55); }
                }

                .eyebrow-text {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    color: var(--gold);
                }

                .contact-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(36px, 5.5vw, 68px);
                    font-weight: 800;
                    line-height: 1.1;
                    color: var(--blue);
                    margin-bottom: 12px;
                }

                .contact-title .gold-italic {
                    font-style: italic;
                    color: var(--gold);
                }

                .contact-tagline {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(16px, 2vw, 20px);
                    font-weight: 300;
                    font-style: italic;
                    color: var(--blue);
                    opacity: 0.55;
                    margin-top: 10px;
                    max-width: 560px;
                    margin-left: auto;
                    margin-right: auto;
                    line-height: 1.7;
                }

                .divider {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    margin-top: 24px;
                }
                .divider-line { width: 70px; height: 1px; background: linear-gradient(to right, transparent, var(--gold)); }
                .divider-line.r { background: linear-gradient(to left, transparent, var(--gold)); }
                .divider-diamond { width: 7px; height: 7px; background: var(--gold); transform: rotate(45deg); }

                /* ── Grid ── */
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.15fr;
                    gap: 48px;
                    align-items: start;
                }

                @media (max-width: 900px) {
                    .contact-grid { grid-template-columns: 1fr; gap: 40px; }
                }

                /* ── Info Card ── */
                .info-card {
                    opacity: 0;
                    transform: translateX(-36px);
                    transition: opacity 1s ease 0.2s, transform 1s ease 0.2s;
                }
                .info-card.visible { opacity: 1; transform: translateX(0); }

                .info-card-inner {
                    border: 1px solid rgba(169,128,79,0.25);
                    background: #fff;
                    padding: 44px 40px;
                    position: relative;
                    overflow: hidden;
                }

                /* top gold bar */
                .info-card-inner::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(to right, var(--blue), var(--gold));
                }

                .info-heading {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(22px, 3vw, 34px);
                    font-weight: 700;
                    color: var(--blue);
                    margin-bottom: 8px;
                }

                .info-sub {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 15px;
                    font-style: italic;
                    color: var(--gold);
                    margin-bottom: 36px;
                    letter-spacing: 0.04em;
                }

                /* Contact rows */
                .contact-row {
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                    padding: 20px 0;
                    border-bottom: 1px solid rgba(169,128,79,0.15);
                    transition: background 0.2s;
                    cursor: default;
                }
                .contact-row:last-of-type { border-bottom: none; }
                .contact-row:hover .row-icon-wrap { background: var(--blue); color: var(--gold); }

                .row-icon-wrap {
                    flex-shrink: 0;
                    width: 48px; height: 48px;
                    border: 1px solid rgba(169,128,79,0.4);
                    background: rgba(169,128,79,0.08);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--gold);
                    transition: background 0.3s, color 0.3s;
                }

                .row-label {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.22em;
                    text-transform: uppercase;
                    color: var(--gold);
                    margin-bottom: 5px;
                }

                .row-value {
                    font-family:serif;
                    font-size: 16px;
                    color: var(--blue);
                    line-height: 1.55;
                }

                /* Brand block */
                .brand-block {
                    margin-top: 36px;
                    background: var(--blue);
                    padding: 32px 36px;
                    position: relative;
                    overflow: hidden;
                }

                .brand-block::before {
                    content: '';
                    position: absolute;
                    top: -40px; right: -40px;
                    width: 140px; height: 140px;
                    border: 1px solid rgba(169,128,79,0.2);
                    border-radius: 50%;
                }

                .brand-block::after {
                    content: '';
                    position: absolute;
                    bottom: -30px; left: -30px;
                    width: 100px; height: 100px;
                    border: 1px solid rgba(169,128,79,0.15);
                    border-radius: 50%;
                }

                .brand-icon-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 14px;
                    position: relative;
                    z-index: 1;
                }

                .brand-icon {
                    color: var(--gold);
                }

                .brand-name {
                    font-family: 'Playfair Display', serif;
                    font-size: 22px;
                    font-weight: 700;
                    color: var(--gold-pale);
                    letter-spacing: 0.03em;
                }

                .brand-tagline {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 15px;
                    font-style: italic;
                    color: rgba(240,230,214,0.7);
                    line-height: 1.65;
                    position: relative;
                    z-index: 1;
                }

                /* ── Form Card ── */
                .form-card {
                    opacity: 0;
                    transform: translateX(36px);
                    transition: opacity 1s ease 0.35s, transform 1s ease 0.35s;
                }
                .form-card.visible { opacity: 1; transform: translateX(0); }

                .form-card-inner {
                    border: 1px solid rgba(169,128,79,0.25);
                    background: #fff;
                    padding: 44px 40px;
                    position: relative;
                    overflow: hidden;
                }

                .form-card-inner::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(to right, var(--gold), var(--blue));
                }

                .form-heading {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(22px, 3vw, 34px);
                    font-weight: 700;
                    color: var(--blue);
                    margin-bottom: 8px;
                }

                .form-sub {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 15px;
                    font-style: italic;
                    color: var(--gold);
                    margin-bottom: 36px;
                    letter-spacing: 0.04em;
                }

                .field-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 16px;
                }

                @media (max-width: 540px) {
                    .field-row { grid-template-columns: 1fr; }
                    .info-card-inner, .form-card-inner { padding: 32px 24px; }
                    .contact-inner { padding: 64px 20px; }
                }

                .field-wrap {
                    position: relative;
                    margin-bottom: 16px;
                }

                .field-label {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: var(--blue);
                    opacity: 0.55;
                    display: block;
                    margin-bottom: 8px;
                }

                .field-input {
                    width: 100%;
                    padding: 14px 18px;
                    border: 1px solid rgba(169,128,79,0.3);
                    background: var(--cream);
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 16px;
                    color: var(--blue);
                    outline: none;
                    transition: border-color 0.3s ease, box-shadow 0.3s ease;
                    border-radius: 0;
                    -webkit-appearance: none;
                    box-sizing: border-box;
                }

                .field-input::placeholder {
                    color: rgba(20,38,76,0.3);
                    font-style: italic;
                }

                .field-input:focus {
                    border-color: var(--gold);
                    box-shadow: 0 0 0 3px rgba(169,128,79,0.08);
                    background: #fff;
                }

                .field-textarea {
                    resize: none;
                    height: 130px;
                }

                .submit-btn {
                    width: 100%;
                    padding: 16px 32px;
                    background: var(--blue);
                    color: var(--gold-pale);
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 15px;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    position: relative;
                    overflow: hidden;
                    transition: color 0.3s ease, transform 0.2s ease;
                    margin-top: 8px;
                }

                .submit-btn::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: var(--gold);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.35s ease;
                }

                .submit-btn:hover::after { transform: scaleX(1); }
                .submit-btn:hover { color: var(--blue); transform: translateY(-2px); }
                .submit-btn span, .submit-btn svg { position: relative; z-index: 1; }
            `}</style>

            <section id="contact" className="contact-section">
                <div className="contact-orb-1" />
                <div className="contact-orb-2" />

                <div className="contact-inner">

                    {/* ── Header ── */}
                    <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
                        <div className="eyebrow">
                            <div className="eyebrow-dot" />
                            <span className="eyebrow-text">Contact Us</span>
                            <div className="eyebrow-dot" />
                        </div>

                        <h2 className="contact-title">
                            Let's Create Something
                            <br />
                            <span className="gold-italic">Beautiful Together</span>
                        </h2>

                        <p className="contact-tagline">
                            Connect with Bakhiya Shibori for custom designs, creative patterns,
                            and luxury textile solutions crafted with elegance.
                        </p>

                        <div className="divider">
                            <div className="divider-line" />
                            <div className="divider-diamond" />
                            <div className="divider-line r" />
                        </div>
                    </div>

                    {/* ── Grid ── */}
                    <div className="contact-grid">

                        {/* Info Card */}
                        <div className={`info-card ${isVisible ? 'visible' : ''}`}>
                            <div className="info-card-inner">
                                <h3 className="info-heading">Get In Touch</h3>
                                <p className="info-sub">We'd love to hear from you</p>

                                <div className="contact-row">
                                    <div className="row-icon-wrap">
                                        <Phone size={18} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <div className="row-label">Phone Number</div>
                                        <div className="row-value">+91 97173 37683</div>
                                    </div>
                                </div>

                                <div className="contact-row">
                                    <div className="row-icon-wrap">
                                        <Mail size={18} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <div className="row-label">Email Address</div>
                                        <div className="row-value">bakhiyaishibori@gmail.com</div>
                                    </div>
                                </div>

                                <div className="contact-row">
                                    <div className="row-icon-wrap">
                                        <MapPin size={18} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <div className="row-label">Studio Address</div>
                                        <div className="row-value">B-128,B Block,<br />Sector 2,Noida,Uttar Pradesh</div>
                                    </div>
                                </div>

                                {/* Brand block */}
                                <div className="brand-block">
                                    <div className="brand-icon-row">
                                        <Sparkles size={18} className="brand-icon" strokeWidth={1.5} />
                                        <span className="brand-name">Bakhiya Shibori</span>
                                    </div>
                                    <p className="brand-tagline">
                                        Threads of tradition, crafted with elegance — where ancient artistry
                                        meets modern textile precision.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Form Card */}
                        <div className={`form-card ${isVisible ? 'visible' : ''}`}>
                            <div className="form-card-inner">
                                <h3 className="form-heading">Send a Message</h3>
                                <p className="form-sub">We'll respond within 24 hours</p>

                                <div className="field-row">
                                    <div className="field-wrap" style={{ marginBottom: 0 }}>
                                        <label className="field-label">Your Name</label>
                                        <input type="text" placeholder="e.g. Aanya Sharma" className="field-input" />
                                    </div>
                                    <div className="field-wrap" style={{ marginBottom: 0 }}>
                                        <label className="field-label">Email Address</label>
                                        <input type="email" placeholder="you@example.com" className="field-input" />
                                    </div>
                                </div>

                                <div className="field-wrap">
                                    <label className="field-label">Subject</label>
                                    <input type="text" placeholder="e.g. Custom Shibori Design Inquiry" className="field-input" />
                                </div>

                                <div className="field-wrap">
                                    <label className="field-label">Phone (Optional)</label>
                                    <input type="tel" placeholder="+91 00000 00000" className="field-input" />
                                </div>

                                <div className="field-wrap">
                                    <label className="field-label">Your Message</label>
                                    <textarea placeholder="Tell us about your project, requirements, or any questions..." className="field-input field-textarea" />
                                </div>

                                <button className="submit-btn">
                                    <span>Send Message</span>
                                    <Send size={15} strokeWidth={1.8} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;