import React from 'react';

export default function SustainabilityBanner() {
  return (
    <section className="sustainability-section" id="sustainability">
      <div className="container sustainability-box">
        <div className="eco-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Circular Fashion Impact
        </div>

        <h2 className="sustainability-title">
          Why Thrifts Beat Fast Fashion
        </h2>
        
        <p className="sustainability-sub">
          Every pre-loved item purchased prevents clothing waste from entering landfills and conserves valuable natural resources.
        </p>

        <div className="eco-cards-grid">
          <div className="eco-card">
            <div className="eco-icon-wrap">💧</div>
            <h3>2,700 Liters Saved</h3>
            <p>That is how much water is saved per pre-owned cotton piece reused instead of manufactured new.</p>
          </div>

          <div className="eco-card">
            <div className="eco-icon-wrap">🌱</div>
            <h3>100% Unique Wardrobe</h3>
            <p>Stand out with rare vintage cuts, 90s washes, and 1-of-1 pieces nobody else is wearing.</p>
          </div>

          <div className="eco-card">
            <div className="eco-icon-wrap">♻️</div>
            <h3>Zero Landfill Waste</h3>
            <p>Extending a garment's life by just 9 months reduces carbon, waste, and water footprints by 20-30%.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
