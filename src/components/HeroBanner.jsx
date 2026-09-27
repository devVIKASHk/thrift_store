import React from 'react';

export default function HeroBanner({ onExploreClick }) {
  return (
    <section className="hero-section" id="hero">
      {/* Background Glow Lights */}
      <div className="hero-bg-glow glow-1"></div>
      <div className="hero-bg-glow glow-2"></div>

      <div className="container hero-content-grid">
        <div className="hero-text-block">
          <div className="hero-badge-pill">
            <span className="dot"></span> ESTD 2007 • CLOTHING BRAND
          </div>
          
          <h1 className="hero-title">
            Lily.N.wise <span>Clothing Brand</span>
          </h1>

          <p className="hero-subtitle">
            Curators of fine vintage outerwear, silk, Italian leather, and historic archive apparel. Retro thrift since 2007, hand-selected and authenticated for timeless elegance.
          </p>

          <div className="hero-cta-group">
            <button className="btn-primary" onClick={onExploreClick}>
              Explore Collection
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            
            <a href="#lookbook" className="btn-secondary">
              Stalk The Vibe
            </a>
          </div>

          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-num">2007</span>
              <span className="stat-desc">Established</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">1-of-1</span>
              <span className="stat-desc">Rare Pieces</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">100%</span>
              <span className="stat-desc">Authenticated</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Block displaying logo inside luxury velvet gold frame */}
        <div className="hero-visual-block">
          <div className="logo-hero-frame">
            <div className="shine-sweep"></div>
            <div className="logo-inner-border">
              <div className="hero-badge-ring">
                <img src="/logo.jpg" alt="Lily.N.wise Official Crest" className="hero-logo-img" />
              </div>
              <div className="logo-frame-tagline">
                <span>ESTD 2007</span>
                <span className="star-divider">✦</span>
                <span>RETRO THRIFT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
