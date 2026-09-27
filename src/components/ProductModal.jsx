import React from 'react';
import { InstagramIcon, WhatsAppIcon, SendDmIcon } from './SocialIcons';

export default function ProductModal({ product, onClose, onAddToCart, isWishlisted, onToggleWishlist, onOpenWhatsApp }) {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>

        <div className="modal-body-grid">
          {/* Visual Box */}
          <div className="modal-image-box" style={{ background: product.placeholderBg }}>
            {product.image ? (
              <div className="modal-img-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="modal-product-img"
                  style={{ 
                    objectPosition: product.imagePosition || 'center',
                    transform: product.imageTransform || undefined
                  }}
                />
              </div>
            ) : (
              <div className="modal-placeholder-info">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <h4>Clothing Photo Frame</h4>
                <p>When you provide your clothing photos, they will display in full high resolution here.</p>
              </div>
            )}
            
            <div className="modal-quality-cert-stamp">
              ✓ Steam Sanitized & Fabric Authenticated
            </div>

            <div className="modal-era-badge">{product.era}</div>
          </div>

          {/* Details Content */}
          <div className="modal-details">
            <div className="modal-category">{product.category} • {product.era}</div>
            <h2 className="modal-title">{product.title}</h2>

            <div className="modal-dm-notice">
              <span className="dm-pill-badge">📩 DM TO KNOW PRICE & AVAILABILITY</span>
              <p className="dm-sub-notice">Follow <strong>@lilynwise_thrifts</strong> on Instagram for new drop updates & instant DM orders.</p>
            </div>

            {/* Quality & Fabric Banner */}
            <div className="modal-fabric-banner">
              <strong>🧵 Certified Fabric:</strong> {product.fabric}
            </div>

            <div className="modal-specs-grid">
              <div className="spec-item">
                <span className="spec-label">Size:</span>
                <span className="spec-value">{product.size}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Condition:</span>
                <span className="spec-value">{product.condition} ({product.conditionScore})</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Availability:</span>
                <span className="spec-value" style={{ color: '#10b981' }}>✓ Available (1-of-1)</span>
              </div>
            </div>

            <div className="modal-section">
              <h4 className="section-title">Measurements Guide:</h4>
              <p className="measurements-text">{product.measurements}</p>
            </div>

            <div className="modal-section">
              <h4 className="section-title">Garment Description & History:</h4>
              <p className="description-text">{product.description}</p>
            </div>

            <div className="tags-row">
              {product.tags.map((tag) => (
                <span key={tag} className="tag-pill">#{tag}</span>
              ))}
            </div>

            {/* Ordering CTA Box */}
            <div className="modal-dm-actions-box">
              <a
                href="https://www.instagram.com/lilynwise_thrifts?stkn=MXJnb3g0M3cwOG14ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="classy-modal-insta-btn"
              >
                <InstagramIcon width={20} height={20} />
                <div className="btn-text-col">
                  <span className="main-title">DM on Instagram to Order</span>
                  <span className="sub-handle">@lilynwise_thrifts</span>
                </div>
                <SendDmIcon width={14} height={14} className="arrow-icon" />
              </a>

              <button
                type="button"
                onClick={() => onOpenWhatsApp && onOpenWhatsApp(product.title)}
                className="classy-modal-wa-btn"
              >
                <WhatsAppIcon width={20} height={20} />
                <div className="btn-text-col">
                  <span className="main-title">WhatsApp Support Numbers</span>
                  <span className="sub-handle font-mono">9897090270 & 7617463559</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
