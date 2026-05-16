import React, { useEffect, useState, useRef } from 'react';
import { Leaf, Gem, FlaskConical, ArrowRight, PlayCircle, Award, Palette, Users, Globe } from 'lucide-react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [countersStarted, setCountersStarted] = useState(false);
    const [counts, setCounts] = useState({ years: 0, colors: 0, clients: 0, countries: 0 });
    const sectionRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !countersStarted) {
                    setCountersStarted(true);
                    animateCounters();
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [countersStarted]);

    const animateCounters = () => {
        const targets = { years: 15, colors: 150, clients: 500, countries: 25 };
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;
        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            setCounts({
                years: Math.floor(eased * targets.years),
                colors: Math.floor(eased * targets.colors),
                clients: Math.floor(eased * targets.clients),
                countries: Math.floor(eased * targets.countries),
            });
            if (step >= steps) clearInterval(timer);
        }, interval);
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

                :root {
                    --blue: #14264c;
                    --gold: #a9804f;
                    --gold-light: #c9a06f;
                    --gold-pale: #f0e6d6;
                    --cream: #fdf8f2;
                    --white: #ffffff;
                }

                .about-section {
                    position: relative;
                    background: var(--cream);
                    overflow: hidden;
                    font-family: 'Cormorant Garamond', serif;
                }

                /* Fabric texture overlay */
                .about-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image:
                        repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 3px,
                            rgba(169,128,79,0.03) 3px,
                            rgba(169,128,79,0.03) 4px
                        ),
                        repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 3px,
                            rgba(20,38,76,0.02) 3px,
                            rgba(20,38,76,0.02) 4px
                        );
                    pointer-events: none;
                    z-index: 0;
                }

                /* Decorative orbs */
                .orb-top-right {
                    position: absolute;
                    top: -120px;
                    right: -120px;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(169,128,79,0.08) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                }

                .orb-bottom-left {
                    position: absolute;
                    bottom: -120px;
                    left: -120px;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(20,38,76,0.08) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                }

                .inner-wrap {
                    position: relative;
                    z-index: 1;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 100px 24px;
                }

                /* ── Header ── */
                .header-block {
                    text-align: center;
                    margin-bottom: 80px;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.9s ease, transform 0.9s ease;
                }
                .header-block.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 20px;
                    border: 1px solid var(--gold);
                    border-radius: 0;
                    margin-bottom: 24px;
                }

            

                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(0.6); }
                }

                .eyebrow-text {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    color: var(--gold);
                }

                .main-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(38px, 6vw, 72px);
                    font-weight: 800;
                    line-height: 1.1;
                    color: var(--blue);
                    margin-bottom: 12px;
                }

                .main-title .italic-gold {
                    font-style: italic;
                    color: var(--gold);
                }

                .tagline {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(16px, 2.5vw, 22px);
                    font-weight: 300;
                    font-style: italic;
                    color: var(--blue);
                    opacity: 0.6;
                    margin-top: 10px;
                    letter-spacing: 0.04em;
                }

                .divider {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                    margin-top: 28px;
                }

                .divider-line {
                    width: 80px;
                    height: 1px;
                    background: linear-gradient(to right, transparent, var(--gold));
                }

                .divider-line.right {
                    background: linear-gradient(to left, transparent, var(--gold));
                }

                .divider-diamond {
                    width: 8px;
                    height: 8px;
                    background: var(--gold);
                    transform: rotate(45deg);
                }

                /* ── Grid ── */
                .content-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }

                @media (max-width: 900px) {
                    .content-grid { grid-template-columns: 1fr; gap: 48px; }
                }

                /* ── Image Side ── */
                .image-side {
                    opacity: 0;
                    transform: translateX(-40px);
                    transition: opacity 1s ease 0.2s, transform 1s ease 0.2s;
                }
                .image-side.visible {
                    opacity: 1;
                    transform: translateX(0);
                }

                .image-frame {
                    position: relative;
                }

                /* Corner decorations */
                .corner {
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    z-index: 3;
                }
                .corner-tl { top: -10px; left: -10px; border-top: 2px solid var(--gold); border-left: 2px solid var(--gold); }
                .corner-tr { top: -10px; right: -10px; border-top: 2px solid var(--gold); border-right: 2px solid var(--gold); }
                .corner-bl { bottom: -10px; left: -10px; border-bottom: 2px solid var(--gold); border-left: 2px solid var(--gold); }
                .corner-br { bottom: -10px; right: -10px; border-bottom: 2px solid var(--gold); border-right: 2px solid var(--gold); }

                /* Shadow block */
                .shadow-block {
                    position: absolute;
                    inset: 0;
                    transform: translate(14px, 14px);
                    background: var(--blue);
                    z-index: 0;
                }

                .image-inner {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                    aspect-ratio: 4/5;
                }

                .about-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.9s ease;
                }

                .image-frame:hover .about-img {
                    transform: scale(1.05);
                }

                /* Image overlay card */
                .img-badge {
                    position: absolute;
                    bottom: -20px;
                    right: -20px;
                    background: var(--blue);
                    color: var(--gold-pale);
                    padding: 24px 28px;
                    z-index: 4;
                    min-width: 160px;
                }

                .img-badge-number {
                    font-family: 'Playfair Display', serif;
                    font-size: 40px;
                    font-weight: 800;
                    color: var(--gold);
                    line-height: 1;
                }

                .img-badge-label {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 13px;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    opacity: 0.75;
                    margin-top: 4px;
                }

                /* ── Text Side ── */
                .text-side {
                    opacity: 0;
                    transform: translateX(40px);
                    transition: opacity 1s ease 0.35s, transform 1s ease 0.35s;
                }
                .text-side.visible {
                    opacity: 1;
                    transform: translateX(0);
                }

            

                .section-heading {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(28px, 4vw, 48px);
                    font-weight: 700;
                    color: var(--blue);
                    line-height: 1.2;
                    margin-bottom: 24px;
                }

                .section-heading .gold-italic {
                    font-style: italic;
                    color: var(--gold);
                    display: block;
                }

                .about-para {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(16px, 2vw, 19px);
                    font-weight: 400;
                    color: #3a3a3a;
                    line-height: 1.85;
                    margin-bottom: 16px;
                }

                /* ── Stats Grid ── */
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1px;
                    background: rgba(169,128,79,0.25);
                    border: 1px solid rgba(169,128,79,0.25);
                    margin: 36px 0;
                }

                .stat-cell {
                    background: var(--cream);
                    padding: 22px 20px;
                    transition: background 0.3s ease;
                    cursor: default;
                }

                .stat-cell:hover {
                    background: rgba(169,128,79,0.06);
                }

                .stat-number {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(28px, 3.5vw, 42px);
                    font-weight: 800;
                    color: var(--blue);
                    line-height: 1;
                }

                .stat-number span {
                    color: var(--gold);
                }

                .stat-icon {
                    color: var(--gold);
                    opacity: 0.6;
                    margin-bottom: 6px;
                }
                    font-size: 13px;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--blue);
                    opacity: 0.55;
                    margin-top: 6px;
                }

                /* ── CTA ── */
                .cta-row {
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    flex-wrap: wrap;
                    margin-top: 8px;
                }

                .btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 36px;
                    background: var(--blue);
                    color: var(--gold-pale);
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 15px;
                    font-weight: 600;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    border: none;
                    cursor: pointer;
                    transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
                    position: relative;
                    overflow: hidden;
                }

                .btn-primary::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: var(--gold);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.35s ease;
                    z-index: 0;
                }

                .btn-primary:hover::after { transform: scaleX(1); }
                .btn-primary:hover { color: var(--blue); transform: translateY(-2px); }

                .btn-primary span, .btn-primary svg {
                    position: relative;
                    z-index: 1;
                }

                .btn-secondary {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 15px;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    color: var(--gold);
                    background: none;
                    border: none;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    text-decoration: none;
                    padding-bottom: 2px;
                    border-bottom: 1px solid transparent;
                    transition: border-color 0.3s ease;
                }

                .btn-secondary:hover { border-bottom-color: var(--gold); }

                /* ── Bottom Strip ── */
                .values-strip {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 0;
                    margin-top: 80px;
                    border: 1px solid rgba(169,128,79,0.2);
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s;
                }

                .values-strip.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .value-item {
                    padding: 36px 32px;
                    text-align: center;
                    border-right: 1px solid rgba(169,128,79,0.2);
                    position: relative;
                    overflow: hidden;
                    transition: background 0.3s ease;
                }

                .value-item:last-child { border-right: none; }

                .value-item::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(to right, var(--gold), transparent);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.4s ease;
                }

                .value-item:hover::before { transform: scaleX(1); }
                .value-item:hover { background: rgba(20,38,76,0.03); }

                .value-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 52px;
                    height: 52px;
                    background: rgba(169,128,79,0.1);
                    border: 1px solid rgba(169,128,79,0.3);
                    margin: 0 auto 16px auto;
                    color: var(--gold);
                    transition: background 0.3s ease, transform 0.3s ease;
                }
                .value-item:hover .value-icon {
                    background: var(--blue);
                    color: var(--gold);
                    transform: rotate(6deg) scale(1.05);
                }

                .value-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 16px;
                    font-weight: 700;
                    color: var(--blue);
                    margin-bottom: 8px;
                    letter-spacing: 0.02em;
                }

                .value-desc {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 14px;
                    color: #555;
                    line-height: 1.65;
                    font-style: italic;
                }

                @media (max-width: 640px) {
                    .values-strip { grid-template-columns: 1fr; }
                    .value-item { border-right: none; border-bottom: 1px solid rgba(169,128,79,0.2); }
                    .value-item:last-child { border-bottom: none; }
                    .inner-wrap { padding: 64px 20px; }
                    .img-badge { bottom: -12px; right: -12px; padding: 16px 20px; }
                    .shadow-block { transform: translate(8px, 8px); }
                    .corner { width: 28px; height: 28px; }
                    .cta-row { gap: 16px; }
                }
            `}</style>

            <section className="about-section" ref={sectionRef} id='about'>
                <div className="orb-top-right" />
                <div className="orb-bottom-left" />

                <div className="inner-wrap">

                    {/* ── Header ── */}
                    <div className={`header-block ${isVisible ? 'visible' : ''}`}>
                        <div className="eyebrow">
                            <div className="eyebrow-dot" />
                            <span className="eyebrow-text">About Bakhiya Shibori</span>
                            <div className="eyebrow-dot" />
                        </div>

                        <h2 className="main-title">
                            Preserving Tradition,
                            <br />
                            <span className="italic-gold">Crafting Elegance</span>
                        </h2>

                        <p className="tagline">Threads of tradition, crafted with elegance</p>

                        <div className="divider">
                            <div className="divider-line" />
                            <div className="divider-diamond" />
                            <div className="divider-line right" />
                        </div>
                    </div>

                    {/* ── Main Content Grid ── */}
                    <div className="content-grid">

                        {/* Image Side */}
                        <div className={`image-side ${isVisible ? 'visible' : ''}`}>
                            <div className="image-frame">
                                <div className="corner corner-tl" />
                                <div className="corner corner-tr" />
                                <div className="corner corner-bl" />
                                <div className="corner corner-br" />
                                <div className="shadow-block" />
                                <div className="image-inner">
                                    <img
                                        src="https://images.pexels.com/photos/6851284/pexels-photo-6851284.jpeg"
                                        alt="Bakhiya Shibori Natural Dyes"
                                        className="about-img"
                                    />
                                </div>
                          
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className={`text-side ${isVisible ? 'visible' : ''}`}>


                            <h3 className="section-heading">
                                We're on a Mission to
                                <span className="gold-italic">Transform the Dye Industry</span>
                            </h3>

                            <p className="about-para">
                                For over a decade, Bakhiya Shibori has been pioneering the development of
                                high-performance natural dyes — where ancient craft wisdom meets modern
                                industrial precision. Every hue tells a story rooted in tradition.
                            </p>

                            <p className="about-para">
                                Our innovative extraction and formulation processes ensure consistent,
                                vibrant colours that are stable, durable, and deeply respectful of our
                                planet's future.
                            </p>

                            
                            {/* CTA */}
                            <div className="cta-row">
                               <a href='#gallery'> <button className="btn-primary">
                                    <span>Explore Our Gallery </span>
                                    <ArrowRight size={16} strokeWidth={2} />
                                </button></a>
                             
                            </div>
                        </div>
                    </div>

                    {/* ── Values Strip ── */}
                    <div className={`values-strip ${isVisible ? 'visible' : ''}`}>
                        <div className="value-item">
                            <div className="value-icon"><Leaf size={22} strokeWidth={1.5} /></div>
                            <div className="value-title">Earth-Conscious</div>
                            <div className="value-desc">Sourced sustainably, crafted with zero compromise on our ecological responsibility.</div>
                        </div>
                        <div className="value-item">
                            <div className="value-icon"><Gem size={22} strokeWidth={1.5} /></div>
                            <div className="value-title">Artisan Heritage</div>
                            <div className="value-desc">Every thread carries centuries of craft knowledge passed down through generations.</div>
                        </div>
                        <div className="value-item">
                            <div className="value-icon"><FlaskConical size={22} strokeWidth={1.5} /></div>
                            <div className="value-title">Modern Precision</div>
                            <div className="value-desc">Ancient wisdom meets laboratory-grade consistency for the modern creative industry.</div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default About;