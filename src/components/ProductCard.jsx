import React from 'react';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';

// Helper component for clothing item vector wireframe graphics
function ClothingVectorIcon({ iconType }) {
  switch (iconType) {
    case 'jacket':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10a2 2 0 002 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/>
          <line x1="12" y1="2" x2="12" y2="20"/>
        </svg>
      );
    case 'tshirt':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L2 6l3 2v14h14V8l3-2-4-4-6 2-6-2z"/>
        </svg>
      );
    case 'sweater':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l4 2 4-2 4 2 4-2v16H4V4z"/>
          <path d="M8 6v14M16 6v14"/>
        </svg>
      );
    case 'pants':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 2h16v5l-2 15h-4l-2-10-2 10H6L4 7V2z"/>
        </svg>
      );
    case 'bag':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
      );
    case 'dress':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2l2 4-2 4 4 12h4l4-12-2-4 2-4-4 2-4-2z"/>
        </svg>
      );
    default:
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10a2 2 0 002 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/>
        </svg>
      );
  }
}

export default function ProductCard({
  product,
  onAddToCart,
  onQuickView,
  isWishlisted,
  onToggleWishlist,
  onOpenWhatsApp
}) {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="product-card">
      {/* Product Image Placeholder Box */}
      <div className="card-image-box" style={{ background: product.placeholderBg }}>
        {/* Top Badges */}
        <div className="card-top-badges">
          <span className="era-badge">✦ {product.era}</span>
          <span className="size-badge">Size {product.size}</span>
        </div>

        {/* Wishlist Button */}
        <button
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={() => onToggleWishlist(product.id)}
          title={isWishlisted ? 'Remove from Favorites' : 'Add to Favorites'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>

        {/* Vector Illustration Placeholder or Real Photo */}
        {product.image ? (
          <div className="card-img-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src={product.image} 
              alt={product.title} 
              className="card-product-img"
              style={{ 
                objectPosition: product.imagePosition || 'center',
                transform: product.imageTransform || undefined
              }}
            />
          </div>
        ) : (
          <div className="item-illustration-placeholder">
            <ClothingVectorIcon iconType={product.iconType} />
            <span className="placeholder-tag">PHOTO PLACEHOLDER</span>
            <span className="placeholder-subtag">Ready for upload</span>
          </div>
        )}

        {/* Sanitized & Quality Stamp */}
        <div className="quality-stamp-badge">
          ✓ Cleaned & Sanitized
        </div>

        {/* Quick Details Overlay */}
        <button className="quick-view-overlay-btn" onClick={() => onQuickView(product)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Quick View & Fabric
        </button>
      </div>

      {/* Card Info */}
      <div className="card-info">
        <div className="card-meta-row">
          <span className="condition-tag">✦ {product.condition}</span>
          <span className="dm-status-tag">In Stock • 1-of-1</span>
        </div>

        <h3 className="card-title" onClick={() => onQuickView(product)}>
          {product.title}
        </h3>

        {/* Fabric composition quality badge */}
        <div className="fabric-quality-pill">
          🧵 {product.fabric}
        </div>

        <div className="dm-notice-banner">
          📩 DM to know price & availability
        </div>

        <div className="card-social-actions">
          <a
            href="https://www.instagram.com/lilynwise_thrifts?stkn=MXJnb3g0M3cwOG14ZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="classy-insta-btn"
            title="Open Instagram DM (@lilynwise_thrifts)"
          >
            <InstagramIcon width={16} height={16} />
            <span>Instagram DM</span>
          </a>

          <button
            type="button"
            onClick={() => onOpenWhatsApp && onOpenWhatsApp(product.title)}
            className="classy-wa-trigger-btn"
            title="Click to view WhatsApp Numbers (9897090270 & 7617463559)"
          >
            <WhatsAppIcon width={16} height={16} />
            <span>WhatsApp Numbers</span>
          </button>
        </div>
      </div>
    </div>
  );
}
