import React, { useState, useEffect } from 'react';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';

export default function Navbar({
  searchTerm,
  setSearchTerm,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWhatsApp
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home',         href: '#hero' },
    { label: 'Quality',      href: '#quality-standard' },
    { label: 'Archive Shop', href: '#archive-catalog' },
    { label: 'Lookbook',     href: '#lookbook' },
    { label: 'Ethos',        href: '#sustainability' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>

      {/* ── Marquee Ticker ─────────────────────────────── */}
      <div className="announcement-bar">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[
              '✦ DM TO KNOW PRICE & AVAILABILITY',
              '✦ FOLLOW @lilynwise_thrifts ON INSTAGRAM',
              '✦ WHATSAPP ORDERS: 9897090270 / 7617463559',
              '✦ 1-OF-1 HANDPICKED RETRO THRIFT DROPS',
              '✦ STEAM SANITIZED • GRADE A+ VINTAGE',
              '✦ DM TO KNOW PRICE & AVAILABILITY',
              '✦ FOLLOW @lilynwise_thrifts ON INSTAGRAM',
              '✦ WHATSAPP ORDERS: 9897090270 / 7617463559',
            ].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Gold rule under marquee ─────────────────────── */}
      <div className="nav-gold-rule" />

      {/* ── Main Navbar ────────────────────────────────── */}
      <div className="nav-inner">
        <div className="nav-container container">

          {/* LEFT — Brand */}
          <a href="#hero" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
            <div className="logo-circle">
              <img src="/logo.jpg" alt="Lily.N.wise" className="brand-logo-img" />
            </div>
            <div className="brand-text-group">
              <span className="brand-logo-text">
                Lily<span className="brand-dot">.</span>N<span className="brand-dot">.</span>wise
              </span>
              <span className="brand-subtext">CLOTHING BRAND &nbsp;•&nbsp; ESTD 2007</span>
            </div>
          </a>

          {/* CENTRE — Nav links (desktop) */}
          <nav className="nav-links-desktop">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
                <span className="nav-link-bar" />
              </a>
            ))}
          </nav>

          {/* RIGHT — Actions */}
          <div className="nav-actions">

            {/* Always-visible search bar */}
            <div className="nav-search-wrap">
              <svg className="nav-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Search archive…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="nav-search-input"
              />
              {searchTerm && (
                <button className="search-clear-btn" onClick={() => setSearchTerm('')}>×</button>
              )}
            </div>

            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/lilynwise_thrifts?stkn=MXJnb3g0M3cwOG14ZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="nav-insta-dm-btn"
              title="Open Instagram (@lilynwise_thrifts)"
            >
              <InstagramIcon width={15} height={15} />
              <span>Instagram</span>
            </a>

            {/* Classy WhatsApp Button (Opens numbers modal on click) */}
            <button
              type="button"
              onClick={() => onOpenWhatsApp && onOpenWhatsApp('')}
              className="nav-wa-trigger-btn"
              title="Click to view WhatsApp Support Numbers (9897090270 & 7617463559)"
            >
              <WhatsAppIcon width={15} height={15} />
              <span>WhatsApp</span>
            </button>

            {/* Cart / Saved list */}
            <button className="cart-btn" onClick={onOpenCart} aria-label="Open Inquiry Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
              </svg>
              <span className="cart-label">Saved</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* Mobile hamburger */}
            <button
              className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* ── Mobile Drawer ────────────────────────────── */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-search-wrap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{opacity:0.5, flexShrink:0}}>
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search the archive…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mobile-search-input"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} style={{color:'rgba(252,252,252,0.4)', fontSize:'1.1rem'}}>×</button>
            )}
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
