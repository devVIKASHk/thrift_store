import React from 'react';

export default function QualityGuarantee() {
  return (
    <section className="quality-section" id="quality-standard">
      <div className="container">
        <div className="quality-box">
          <div className="quality-header">
            <div className="gold-pill-tag">✦ THE LILY.N.WISE QUALITY STANDARD ✦</div>
            <h2 className="quality-title">
              Every Garment. <span>Restored, Sanitized & Certified.</span>
            </h2>
            <p className="quality-sub">
              We never sell worn-out or compromised clothing. Every single thrifted piece goes through our 4-stage boutique inspection before listing.
            </p>
          </div>

          <div className="quality-grid">
            <div className="quality-card">
              <div className="quality-icon">✨</div>
              <h3>100% Hand-Inspected</h3>
              <p>Every seam, zipper, button, and lining is meticulously audited by our vintage fabric specialists.</p>
              <span className="quality-tag">Grade A Inspection</span>
            </div>

            <div className="quality-card">
              <div className="quality-icon">🧺</div>
              <h3>Steam-Sanitized & Cleaned</h3>
              <p>Professional eco-friendly steam sterilization & dry cleaning so your clothes arrive fresh and ready-to-wear.</p>
              <span className="quality-tag">Sanitized Ready</span>
            </div>

            <div className="quality-card">
              <div className="quality-icon">💎</div>
              <h3>Premium Pure Fabrics</h3>
              <p>Strict selection of natural high-grade materials: 100% Cashmere, Pure Silk, Italian Leather & Heavyweight Denim.</p>
              <span className="quality-tag">Luxury Fabrics</span>
            </div>

            <div className="quality-card">
              <div className="quality-icon">📦</div>
              <h3>Signature Gold Packaging</h3>
              <p>Hand-packed in breathable garment protector bags sealed with our official golden wax stamp.</p>
              <span className="quality-tag">Boutique Unboxing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
