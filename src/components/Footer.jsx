import React, { useState } from 'react';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';

export default function Footer({ onOpenWhatsApp }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content-grid">
        {/* Brand column */}
        <div className="footer-brand-col">
          <div className="footer-logo-row">
            <img src="/logo.jpg" alt="Lily.N.wise Crest" className="footer-logo-img" />
            <div className="footer-logo-text">
              Lily.N.wise
              <span className="footer-sub">CLOTHING BRAND • RETRO THRIFT 2007</span>
            </div>
          </div>
          <p className="footer-tagline">
            Curators of fine vintage apparel, historic leather, and rare archive garments. Preserving luxury fashion history since 2007.
          </p>
          <div className="social-links-row">
            <a 
              href="https://www.instagram.com/lilynwise_thrifts?stkn=MXJnb3g0M3cwOG14ZA==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn footer-insta-pill" 
              title="Open Instagram @lilynwise_thrifts"
            >
              <InstagramIcon width={16} height={16} />
              <span>@lilynwise_thrifts</span>
            </a>
            <button 
              type="button"
              onClick={() => onOpenWhatsApp && onOpenWhatsApp('')}
              className="social-icon-btn footer-wa-pill" 
              title="View WhatsApp Numbers (9897090270 & 7617463559)"
            >
              <WhatsAppIcon width={15} height={15} />
              <span>WhatsApp: 9897090270 & 7617463559</span>
            </button>
          </div>
        </div>

        {/* Links col 1 */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Direct Order & DMs</h4>
          <ul>
            <li><a href="https://www.instagram.com/lilynwise_thrifts?stkn=MXJnb3g0M3cwOG14ZA==" target="_blank" rel="noopener noreferrer">Instagram @lilynwise_thrifts</a></li>
            <li><a href="https://wa.me/917617463559" target="_blank" rel="noopener noreferrer">WhatsApp: 7617463559</a></li>
            <li><a href="https://wa.me/919897090270" target="_blank" rel="noopener noreferrer">WhatsApp: 9897090270</a></li>
            <li><a href="#archive-catalog">DM for Price & Availability</a></li>
          </ul>
        </div>

        {/* Links col 2 */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Boutique Services</h4>
          <ul>
            <li><a href="#quality-standard">Quality & Sanitization Standard</a></li>
            <li><a href="#">Authentication & Provenance</a></li>
            <li><a href="#">Bespoke Sizing Guide</a></li>
            <li><a href="#">Insured Worldwide Shipping</a></li>
            <li><a href="#sustainability">Sustainable Fashion Ethos</a></li>
          </ul>
        </div>

        {/* Newsletter col */}
        <div className="footer-newsletter-col">
          <h4 className="footer-heading">Private Drop Invitations ✦</h4>
          <p className="newsletter-desc">
            Subscribe for private access to weekly archive luxury drops before public listing.
          </p>

          {subscribed ? (
            <div className="subscribed-success">
              ✦ You are registered for Lily.N.wise VIP Drop Access.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container bottom-content">
          <p>© {new Date().getFullYear()} Lily.N.wise • CLOTHING BRAND (RETRO THRIFT 2007). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
