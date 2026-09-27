import React from 'react';
import { InstagramIcon, WhatsAppIcon, SendDmIcon } from './SocialIcons';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onOpenWhatsApp
}) {
  if (!isOpen) return null;

  const savedItemsText = cartItems.map((i) => `• ${i.title} (Size ${i.size})`).join('%0A');

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Your Saved Order List ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</h3>
          <button className="cart-close-btn" onClick={onClose}>×</button>
        </div>

        {/* DM Notice Header */}
        <div className="shipping-progress-container dm-cart-header">
          <p className="shipping-progress-text">
            📩 Send your saved list to <strong>@lilynwise_thrifts</strong> on Instagram or WhatsApp to check price & instant availability!
          </p>
        </div>

        {/* Cart Item List */}
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
              </svg>
              <h4>Your saved list is empty</h4>
              <p>Explore our thrift archive and click "Add/Save" on your favorite 1-of-1 pieces!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item-row">
                <div className="cart-item-thumb" style={{ background: item.placeholderBg, overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transform: item.imageTransform || undefined
                      }} 
                    />
                  ) : (
                    <span className="thumb-size">{item.size}</span>
                  )}
                </div>

                <div className="cart-item-info">
                  <h4 className="cart-item-title">{item.title}</h4>
                  <span className="cart-item-era">{item.era} • Size {item.size}</span>
                  <div className="cart-dm-badge">DM for price & availability</div>
                </div>

                <div className="cart-item-controls">
                  <button className="remove-item-btn" onClick={() => onRemoveItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-dm-notice-footer">
              📲 <strong>DM Order via Instagram or WhatsApp</strong>
            </div>

            <a
              href="https://www.instagram.com/lilynwise_thrifts?stkn=MXJnb3g0M3cwOG14ZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="checkout-btn insta-drawer-btn"
            >
              <InstagramIcon width={18} height={18} />
              <span>DM Order on Instagram (@lilynwise_thrifts)</span>
              <SendDmIcon width={14} height={14} />
            </a>

            <button
              type="button"
              onClick={() => onOpenWhatsApp && onOpenWhatsApp('Saved Order List')}
              className="drawer-wa-trigger-btn"
            >
              <WhatsAppIcon width={18} height={18} />
              <span>WhatsApp Numbers (9897090270 & 7617463559)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
