import React, { useEffect, useState, useRef } from 'react';
import { ShoppingBag, Pipette, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const ColorCollection = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const dyeCollections = [
        {
            name: "Indigo Collection",
            tag: "Deep Blues",
            description: "Inspired by ancient indigo dyeing traditions, these blues carry the soul of centuries.",
            image: "https://images.pexels.com/photos/34558680/pexels-photo-34558680.jpeg",
            colors: [
                { name: "Deep Indigo", code: "#1a365d", inStock: true },
                { name: "Royal Blue", code: "#2b6cb0", inStock: true },
                { name: "Midnight Blue", code: "#1e3a8a", inStock: true },
            ],
        },
        {
            name: "Crimson Collection",
            tag: "Rich Reds",
            description: "Bold, passionate reds drawn from nature's most vibrant botanical sources.",
            image: "https://i.pinimg.com/1200x/59/79/f6/5979f6bbd32c06837eff357418e37250.jpg",
            colors: [
                { name: "Deep Crimson", code: "#981438", inStock: true },
                { name: "Burgundy Red", code: "#722f37", inStock: true },
                { name: "Ruby Rose", code: "#d53f8c", inStock: false },
            ],
        },
        {
            name: "Earth Collection",
            tag: "Warm Tones",
            description: "Earthy warmth reminiscent of sun-baked clay and golden harvests.",
            image: "https://i.pinimg.com/736x/4a/d7/f0/4ad7f0d01b8c889b6f5a15d25292ee3b.jpg",
            colors: [
                { name: "Terracotta", code: "#c45a3b", inStock: true },
                { name: "Golden Ochre", code: "#d4a13e", inStock: true },
                { name: "Warm Sand", code: "#e8c97a", inStock: true },
            ],
        },
        {
            name: "Forest Collection",
            tag: "Nature Greens",
            description: "Verdant greens drawn from leaves, herbs, and the heart of ancient forests.",
            image: "https://i.pinimg.com/1200x/92/27/b9/9227b9eee1fd2b2fa3036af776db6693.jpg",
            colors: [
                { name: "Forest Green", code: "#2d5a27", inStock: true },
                { name: "Sage Green", code: "#87a96b", inStock: true },
                { name: "Mint Fresh", code: "#98fb98", inStock: false },
            ],
        },
    ];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

                :root {
                    --blue: #14264c;
                    --gold: #a9804f;
                    --gold-light: #c9a06f;
                    --gold-pale: #f0e6d6;
                    --cream: #fdf8f2;
                }

                .cc-section {
                    position: relative;
                    background: var(--cream);
                    overflow: hidden;
                    font-family: 'Cormorant Garamond', serif;
                }

                .cc-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image:
                        repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(169,128,79,0.03) 3px, rgba(169,128,79,0.03) 4px),
                        repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(20,38,76,0.02) 3px, rgba(20,38,76,0.02) 4px);
                    pointer-events: none;
                }

                .cc-orb-1 {
                    position: absolute; top: -120px; right: -120px;
                    width: 480px; height: 480px;
                    background: radial-gradient(circle, rgba(169,128,79,0.07) 0%, transparent 70%);
                    border-radius: 50%; pointer-events: none;
                }

                .cc-orb-2 {
                    position: absolute; bottom: -100px; left: -100px;
                    width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(20,38,76,0.06) 0%, transparent 70%);
                    border-radius: 50%; pointer-events: none;
                }

                .cc-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 100px 24px;
                }

                /* ── Header ── */
                .cc-header {
                    text-align: center;
                    margin-bottom: 72px;
                    opacity: 0;
                    transform: translateY(28px);
                    transition: opacity 0.9s ease, transform 0.9s ease;
                }
                .cc-header.visible { opacity: 1; transform: translateY(0); }

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
                    background: var(--gold); border-radius: 50%;
                    animation: dot-p 2s infinite;
                }
                @keyframes dot-p {
                    0%,100%{opacity:1;transform:scale(1);}
                    50%{opacity:0.35;transform:scale(0.55);}
                }

                .eyebrow-text {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 11px; font-weight: 600;
                    letter-spacing: 0.3em; text-transform: uppercase;
                    color: var(--gold);
                }

                .cc-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(34px, 5.5vw, 64px);
                    font-weight: 800;
                    line-height: 1.1;
                    color: var(--blue);
                    margin-bottom: 8px;
                }
                .cc-title .gold-italic { font-style: italic; color: var(--gold); }

                .cc-desc {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(15px, 2vw, 19px);
                    font-style: italic; font-weight: 300;
                    color: rgba(20,38,76,0.6);
                    max-width: 560px;
                    margin: 16px auto 0;
                    line-height: 1.75;
                }

                .divider {
                    display: flex; align-items: center;
                    justify-content: center; gap: 14px; margin-top: 24px;
                }
                .divider-line { width: 70px; height: 1px; background: linear-gradient(to right, transparent, var(--gold)); }
                .divider-line.r { background: linear-gradient(to left, transparent, var(--gold)); }
                .divider-diamond { width: 7px; height: 7px; background: var(--gold); transform: rotate(45deg); }

                /* ── Grid ── */
                .cc-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 32px;
                }

                @media (max-width: 860px) { .cc-grid { grid-template-columns: 1fr; } }

                /* ── Card ── */
                .cc-card {
                    background: #fff;
                    border: 1px solid rgba(169,128,79,0.18);
                    overflow: hidden;
                    position: relative;
                    opacity: 0;
                    transform: translateY(32px);
                    transition: opacity 0.8s ease, transform 0.8s ease, box-shadow 0.4s ease;
                }
                .cc-card.visible { opacity: 1; transform: translateY(0); }
                .cc-card:nth-child(1) { transition-delay: 0.05s; }
                .cc-card:nth-child(2) { transition-delay: 0.15s; }
                .cc-card:nth-child(3) { transition-delay: 0.25s; }
                .cc-card:nth-child(4) { transition-delay: 0.35s; }

                .cc-card:hover {
                    box-shadow: 0 16px 48px rgba(20,38,76,0.12), 0 2px 8px rgba(169,128,79,0.1);
                }

                /* gold top bar on hover */
                .cc-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(to right, var(--blue), var(--gold));
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.4s ease;
                    z-index: 3;
                }
                .cc-card:hover::before { transform: scaleX(1); }

                .card-body {
                    display: flex;
                    flex-direction: row;
                }

                @media (max-width: 480px) { .card-body { flex-direction: column; } }

                /* Image pane */
                .card-img-wrap {
                    width: 42%;
                    flex-shrink: 0;
                    position: relative;
                    overflow: hidden;
                    min-height: 220px;
                }

                @media (max-width: 480px) {
                    .card-img-wrap { width: 100%; min-height: 200px; }
                }

                .card-img-wrap img {
                    width: 100%; height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.9s ease;
                }

                .cc-card:hover .card-img-wrap img { transform: scale(1.07); }

                .card-img-overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(135deg, rgba(20,38,76,0.35) 0%, transparent 60%);
                }

                /* tag badge on image */
                .card-tag {
                    position: absolute;
                    top: 14px; left: 14px;
                    padding: 5px 12px;
                    background: rgba(20,38,76,0.75);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(169,128,79,0.45);
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 10px; font-weight: 600;
                    letter-spacing: 0.22em; text-transform: uppercase;
                    color: var(--gold);
                    z-index: 2;
                }

                /* Content pane */
                .card-content {
                    flex: 1;
                    padding: 26px 24px 24px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .card-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(17px, 2vw, 22px);
                    font-weight: 700;
                    color: var(--blue);
                    margin-bottom: 8px;
                    line-height: 1.2;
                }

                .card-desc {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 14px;
                    font-style: italic;
                    color: rgba(20,38,76,0.55);
                    line-height: 1.65;
                    margin-bottom: 18px;
                }

                /* Color swatches */
                .swatches-label {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 10px; font-weight: 600;
                    letter-spacing: 0.22em; text-transform: uppercase;
                    color: rgba(20,38,76,0.4);
                    margin-bottom: 10px;
                }

                .swatches-row {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    margin-bottom: 20px;
                }

                .swatch-wrap {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 6px;
                    cursor: pointer;
                }

                .swatch {
                    width: 40px; height: 40px;
                    border-radius: 50%;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.18);
                    position: relative;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                    border: 2px solid transparent;
                    transition: all 0.25s ease;
                }

                .swatch:hover {
                    transform: scale(1.18);
                    box-shadow: 0 6px 16px rgba(0,0,0,0.22);
                }

                .swatch.selected {
                    border: 2px solid var(--gold);
                    transform: scale(1.15);
                }

                .swatch-oos {
                    position: absolute; inset: 0;
                    background: rgba(0,0,0,0.45);
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                }

                .swatch-oos-text {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 8px; font-weight: 700;
                    letter-spacing: 0.08em;
                    color: #fff;
                    text-transform: uppercase;
                }

                .swatch-name {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 10px;
                    color: rgba(20,38,76,0.5);
                    text-align: center;
                    max-width: 48px;
                    line-height: 1.3;
                }

                /* Selected color info strip */
                .color-info-strip {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 12px;
                    background: rgba(169,128,79,0.07);
                    border: 1px solid rgba(169,128,79,0.2);
                    margin-bottom: 16px;
                    min-height: 36px;
                    transition: all 0.2s ease;
                }

                .color-swatch-mini {
                    width: 18px; height: 18px;
                    border-radius: 50%;
                    flex-shrink: 0;
                    border: 1px solid rgba(0,0,0,0.1);
                }

                .color-info-name {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 13px; font-weight: 500;
                    color: var(--blue);
                    flex: 1;
                }

                .color-info-stock {
                    display: flex; align-items: center; gap: 4px;
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
                }

                .color-info-stock.in { color: #2d6a4f; }
                .color-info-stock.out { color: #9b2335; }

                /* Buttons */
                .card-btns {
                    display: flex;
                    gap: 10px;
                }

                .btn-shop {
                    flex: 1;
                    display: flex; align-items: center; justify-content: center; gap: 7px;
                    padding: 10px 16px;
                    background: var(--blue);
                    color: var(--gold-pale);
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 12px; font-weight: 600;
                    letter-spacing: 0.15em; text-transform: uppercase;
                    border: none; cursor: pointer;
                    position: relative; overflow: hidden;
                    transition: color 0.3s;
                }

                .btn-shop::after {
                    content: '';
                    position: absolute; inset: 0;
                    background: var(--gold);
                    transform: scaleX(0); transform-origin: left;
                    transition: transform 0.32s ease; z-index: 0;
                }
                .btn-shop:hover::after { transform: scaleX(1); }
                .btn-shop:hover { color: var(--blue); }
                .btn-shop span, .btn-shop svg { position: relative; z-index: 1; }

                .btn-sample {
                    display: flex; align-items: center; justify-content: center; gap: 6px;
                    padding: 10px 16px;
                    background: transparent;
                    border: 1px solid rgba(169,128,79,0.5);
                    color: var(--gold);
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 12px; font-weight: 600;
                    letter-spacing: 0.15em; text-transform: uppercase;
                    cursor: pointer;
                    transition: background 0.3s, border-color 0.3s, color 0.3s;
                }
                .btn-sample:hover {
                    background: rgba(169,128,79,0.1);
                    border-color: var(--gold);
                }

                /* ── Bottom CTA strip ── */
                .cc-bottom {
                    margin-top: 64px;
                    border: 1px solid rgba(169,128,79,0.2);
                    background: #fff;
                    padding: 44px 48px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 32px;
                    flex-wrap: wrap;
                    opacity: 0;
                    transform: translateY(24px);
                    transition: opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s;
                    position: relative;
                    overflow: hidden;
                }

                .cc-bottom::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(to right, var(--blue), var(--gold), var(--blue));
                }

                .cc-bottom.visible { opacity: 1; transform: translateY(0); }

                .cc-bottom-text h3 {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(20px, 3vw, 30px);
                    font-weight: 700;
                    color: var(--blue);
                    margin-bottom: 6px;
                }

                .cc-bottom-text p {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 16px; font-style: italic;
                    color: rgba(20,38,76,0.55);
                    line-height: 1.6;
                }

                .btn-full-catalog {
                    display: inline-flex; align-items: center; gap: 10px;
                    padding: 14px 36px;
                    background: var(--gold);
                    color: var(--blue);
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 13px; font-weight: 700;
                    letter-spacing: 0.18em; text-transform: uppercase;
                    border: none; cursor: pointer;
                    position: relative; overflow: hidden;
                    transition: color 0.3s, transform 0.2s;
                    flex-shrink: 0;
                }

                .btn-full-catalog::before {
                    content: '';
                    position: absolute; inset: 0;
                    background: var(--blue);
                    transform: scaleX(0); transform-origin: right;
                    transition: transform 0.32s ease; z-index: 0;
                }
                .btn-full-catalog:hover::before { transform: scaleX(1); }
                .btn-full-catalog:hover { color: var(--gold); transform: translateY(-2px); }
                .btn-full-catalog span, .btn-full-catalog svg { position: relative; z-index: 1; }

                @media (max-width: 600px) {
                    .cc-inner { padding: 64px 16px; }
                    .cc-bottom { padding: 32px 24px; flex-direction: column; text-align: center; }
                    .btn-full-catalog { width: 100%; justify-content: center; }
                    .card-content { padding: 20px 16px 18px; }
                }
            `}</style>

            <section className="cc-section" ref={sectionRef}>
                <div className="cc-orb-1" />
                <div className="cc-orb-2" />

                <div className="cc-inner">

                    {/* Header */}
                    <div className={`cc-header ${isVisible ? 'visible' : ''}`}>
                        <div className="eyebrow">
                            <div className="eyebrow-dot" />
                            <span className="eyebrow-text">Color Collection</span>
                            <div className="eyebrow-dot" />
                        </div>

                        <h2 className="cc-title">
                            Explore the Timeless
                            <br />
                            <span className="gold-italic">Shades of Shibori Art</span>
                        </h2>

                        <p className="cc-desc">
                            Every piece showcases the perfect blend of artistry and precision —
                            where ancient craft meets vibrant, enduring colour.
                        </p>

                        <div className="divider">
                            <div className="divider-line" />
                            <div className="divider-diamond" />
                            <div className="divider-line r" />
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="cc-grid">
                        {dyeCollections.map((collection, idx) => (
                            <div key={idx} className={`cc-card ${isVisible ? 'visible' : ''}`}>
                                <div className="card-body">

                                    {/* Image */}
                                    <div className="card-img-wrap">
                                        <img src={collection.image} alt={collection.name} />
                                        <div className="card-img-overlay" />
                                        <div className="card-tag">{collection.tag}</div>
                                    </div>

                                    {/* Content */}
                                    <div className="card-content">
                                        <div>
                                            <h3 className="card-title">{collection.name}</h3>
                                            <p className="card-desc">{collection.description}</p>

                                            {/* Swatches */}
                                            <div className="swatches-label">Available Shades</div>
                                            <div className="swatches-row">
                                                {collection.colors.map((color, cIdx) => (
                                                    <div
                                                        key={cIdx}
                                                        className="swatch-wrap"
                                                        onMouseEnter={() => setSelectedColor({ ...color, collectionIdx: idx })}
                                                        onMouseLeave={() => setSelectedColor(null)}
                                                    >
                                                        <div
                                                            className={`swatch ${selectedColor?.collectionIdx === idx && selectedColor?.name === color.name ? 'selected' : ''}`}
                                                            style={{ backgroundColor: color.code }}
                                                        >
                                                            {!color.inStock && (
                                                                <div className="swatch-oos">
                                                                    <span className="swatch-oos-text">Out</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <span className="swatch-name">{color.name}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Selected color strip */}
                                            <div className="color-info-strip">
                                                {selectedColor?.collectionIdx === idx ? (
                                                    <>
                                                        <div className="color-swatch-mini" style={{ backgroundColor: selectedColor.code }} />
                                                        <span className="color-info-name">{selectedColor.name}</span>
                                                        <span className={`color-info-stock ${selectedColor.inStock ? 'in' : 'out'}`}>
                                                            {selectedColor.inStock
                                                                ? <><CheckCircle size={11} strokeWidth={2} /> In Stock</>
                                                                : <><XCircle size={11} strokeWidth={2} /> Out of Stock</>
                                                            }
                                                        </span>
                                                    </>
                                                ) : (
                                                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 12, fontStyle: 'italic', color: 'rgba(20,38,76,0.35)' }}>
                                                        Hover a shade to preview
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className={`cc-bottom ${isVisible ? 'visible' : ''}`}>
                        <div className="cc-bottom-text">
                            <h3>Can't find your shade?</h3>
                            <p>We offer custom colour matching for bulk orders and exclusive collections.</p>
                        </div>
                       <a href='#contact'> <button className="btn-full-catalog">
                            <span>Contact Us</span>
                            <ArrowRight size={15} strokeWidth={2} />
                        </button></a>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ColorCollection;