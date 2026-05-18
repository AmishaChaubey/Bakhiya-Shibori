import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from '../../assets/BS-LOGO.png';

const Footer = () => {
  return (
    <footer
      style={{
        background: "#fdf8f2",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');

        :root {
          --ft-blue: #14264c;
          --ft-gold: #a9804f;
          --ft-gold-light: #c9a06f;
          --ft-cream: #fdf8f2;
          --ft-beige: #f0e6d6;
        }

        .ft-bg-texture {
          position: absolute; inset: 0;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(169,128,79,0.04) 3px, rgba(169,128,79,0.04) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(20,38,76,0.025) 3px, rgba(20,38,76,0.025) 4px);
          pointer-events: none; z-index: 0;
        }

        .ft-blob {
          position: absolute; border-radius: 50%;
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .ft-blob-1 { width: 500px; height: 500px; background: rgba(169,128,79,0.08); top: -150px; right: -100px; }
        .ft-blob-2 { width: 400px; height: 400px; background: rgba(20,38,76,0.05); bottom: -100px; left: -80px; }

        .ft-top-bar {
          height: 3px;
          background: linear-gradient(to right, var(--ft-blue), var(--ft-gold), var(--ft-blue));
        }

        .ft-inner {
          position: relative; z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 24px 0;
        }

        /* Brand desc — bolder */
        .ft-brand-desc {
          font-size: 15px; font-weight: 600;
          color: rgba(20,38,76,0.68);
          line-height: 1.80;
          margin-top: 18px;
          max-width: 240px;
        }

        /* Social icons */
        .ft-socials { display: flex; gap: 10px; margin-top: 24px; flex-wrap: wrap; }

        .ft-social-btn {
          width: 40px; height: 40px;
          border: 1px solid rgba(169,128,79,0.35);
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          color: var(--ft-gold);
          cursor: pointer;
          transition: background 0.3s, color 0.3s, border-color 0.3s, transform 0.3s;
          text-decoration: none;
        }
        .ft-social-btn:hover {
          background: var(--ft-gold); color: #fff;
          border-color: var(--ft-gold); transform: translateY(-3px);
        }

        /* Column headings */
        .ft-col-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 21px; font-weight: 700;
          color: var(--ft-blue);
          margin-bottom: 8px;
          display: inline-block;
          letter-spacing: 0.01em;
        }

        .ft-col-rule {
          width: 32px; height: 2px;
          background: linear-gradient(to right, var(--ft-gold), var(--ft-gold-light));
          margin-bottom: 22px;
        }

        /* Nav links — bolder & more readable */
        .ft-link-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 13px; }

        .ft-link {
          display: flex; align-items: center; gap: 0;
          color: rgba(20,38,76,0.75);
          font-size: 15px; font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.3s, gap 0.3s;
          letter-spacing: 0.02em;
        }
        .ft-link:hover { color: var(--ft-gold); gap: 8px; }

        .ft-link-arrow {
          opacity: 0; font-size: 10px;
          transition: opacity 0.3s, transform 0.3s;
          transform: translateX(-4px);
          flex-shrink: 0;
        }
        .ft-link:hover .ft-link-arrow { opacity: 1; transform: translateX(0); }

        /* Contact */
        .ft-contact-list { display: flex; flex-direction: column; gap: 18px; }

        .ft-contact-item { display: flex; align-items: flex-start; gap: 12px; }

        .ft-contact-icon {
          width: 34px; height: 34px; flex-shrink: 0;
          background: var(--ft-beige);
          border: 1px solid rgba(169,128,79,0.25);
          display: flex; align-items: center; justify-content: center;
          color: var(--ft-gold); font-size: 13px;
          margin-top: 2px;
        }

        /* Contact text — bolder */
        .ft-contact-text {
          font-size: 14px; font-weight: 600;
          color: rgba(20,38,76,0.75);
          line-height: 1.65;
         
        }

        /* Grid */
        .ft-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.4fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(169,128,79,0.18);
        }

        @media (max-width: 1100px) {
          .ft-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 640px) {
          .ft-grid { grid-template-columns: 1fr; gap: 36px; }
          .ft-inner { padding: 60px 18px 0; }
        }

        /* Bottom bar */
        .ft-bottom {
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
          padding: 24px 24px 28px;
          max-width: 1280px;
          margin: 0 auto;
          position: relative; z-index: 2;
        }

        .ft-bottom-copy {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 14px; font-weight: 600;
          color: rgba(20,38,76,0.55);
          letter-spacing: 0.02em;
        }

        .ft-bottom-links { display: flex; gap: 24px; flex-wrap: wrap; align-items: center; }

        .ft-bottom-link {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 14px; font-weight: 600;
          color: rgba(20,38,76,0.55);
          cursor: pointer; text-decoration: none;
          position: relative; transition: color 0.3s;
        }
        .ft-bottom-link::after {
          content: ''; position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 1px; background: var(--ft-gold);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s;
        }
        .ft-bottom-link:hover { color: var(--ft-gold); }
        .ft-bottom-link:hover::after { transform: scaleX(1); }

        .ft-bottom-divider {
          width: 3px; height: 3px; background: var(--ft-gold);
          transform: rotate(45deg); opacity: 0.5; align-self: center; flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .ft-bottom { flex-direction: column; text-align: center; gap: 12px; }
        }
      `}</style>

      <div className="ft-top-bar" />
      <div className="ft-bg-texture" />
      <div className="ft-blob ft-blob-1" />
      <div className="ft-blob ft-blob-2" />

      <div className="ft-inner">
        <div className="ft-grid">

          {/* Brand */}
          <div>
            <img src={logo} alt="Bakhiya Shibori" style={{ height: 100, width: 'auto' }} />
            <p className="ft-brand-desc">
              Premium dyeing artistry inspired by creativity, elegance, and
              modern fashion trends — bringing colours to life beautifully.
            </p>
            <div className="ft-socials">
              {[
             
{ icon: <FaFacebookF size={13} />, href: "https://www.facebook.com/vipan.gautam.90?mibextid=ZbWKwL" },
                { icon: <FaInstagram size={13} />, href: "https://www.instagram.com/bakhiya_shibori?igsh=dTByd2d4NGgxdWZs" },
                { icon: <FaYoutube size={13} />, href: "https://www.youtube.com/@Bakhiyashibori" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="ft-social-btn">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="ft-col-title">Quick Links</h3>
            <div className="ft-col-rule" />
            <ul className="ft-link-list">
              {[
                { name: "Home", link: "/" },
                { name: "About", link: "/#about" },
                { name: "Services", link: "/#service" },
                { name: "Gallery", link: "/#gallery" },
                { name: "Contact", link: "/#contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="ft-link">
                    <FaArrowRight className="ft-link-arrow" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services — all link to /#service */}
          <div>
            <h3 className="ft-col-title">Our Services</h3>
            <div className="ft-col-rule" />
            <ul className="ft-link-list">
              {["Shibori Dye", "Tie Dye", "Plain Dye", "Zip Dye", "Fabric Washing", "Custom Colours"].map((item, i) => (
                <li key={i}>
                  <a href="/#service" className="ft-link">
                    <FaArrowRight className="ft-link-arrow" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="ft-col-title">Contact Us</h3>
            <div className="ft-col-rule" />
            <div className="ft-contact-list">
              <div className="ft-contact-item">
                <div className="ft-contact-icon"><FaMapMarkerAlt /></div>
                <span className="ft-contact-text">
                  B-128,B Block,Sector 2<br />
                  Noida,Uttar Pradesh
                </span>
              </div>
              <div className="ft-contact-item">
                <div className="ft-contact-icon"><FaPhoneAlt /></div>
                <span className="">+91 9717337683</span>
              </div>
              <div className="ft-contact-item">
                <div className="ft-contact-icon"><FaEnvelope /></div>
                <span className="ft-contact-text">bakhiyaishibori@gmail.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="ft-bottom">
        <p className="ft-bottom-copy">© 2026 Bakhiya Shibori. All Rights Reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;