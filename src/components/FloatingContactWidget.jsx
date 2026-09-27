import React, { useState } from 'react';
import { InstagramIcon, WhatsAppIcon, SendDmIcon } from './SocialIcons';

export default function FloatingContactWidget({ onOpenWhatsApp }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`floating-contact-widget ${expanded ? 'expanded' : ''}`}>
      {/* Expanded Menu Drawer */}
      {expanded && (
        <div className="contact-widget-popover">
          <div className="popover-header">
            <div className="popover-status">
              <span className="pulse-dot-green"></span>
              <span className="status-text">DIRECT SELLER ONLINE • INSTANT REPLIES</span>
            </div>
            <button
              className="popover-close-btn"
              onClick={() => setExpanded(false)}
              aria-label="Close Contact Hub"
            >
              ×
            </button>
          </div>

          <div className="popover-body">
            <p className="popover-tagline">
              No price tags listed! Tap below to DM on Instagram or view WhatsApp numbers.
            </p>

            {/* Instagram Main DM Button */}
            <a
              href="https://www.instagram.com/lilynwise_thrifts?stkn=MXJnb3g0M3cwOG14ZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="widget-cta-btn widget-insta-btn"
            >
              <div className="btn-icon-wrap">
                <InstagramIcon width={22} height={22} />
              </div>
              <div className="btn-text-wrap">
                <span className="btn-title">Instagram DM</span>
                <span className="btn-sub font-mono">@lilynwise_thrifts</span>
              </div>
              <SendDmIcon width={14} height={14} className="btn-arrow" />
            </a>

            <div className="widget-divider">
              <span>OR WHATSAPP NUMBERS</span>
            </div>

            {/* WhatsApp Trigger */}
            <button
              type="button"
              onClick={() => {
                setExpanded(false);
                onOpenWhatsApp && onOpenWhatsApp('');
              }}
              className="widget-cta-btn widget-wa-btn"
            >
              <div className="btn-icon-wrap wa">
                <WhatsAppIcon width={20} height={20} />
              </div>
              <div className="btn-text-wrap">
                <span className="btn-title">WhatsApp Support</span>
                <span className="btn-sub font-mono">9897090270 & 7617463559</span>
              </div>
              <span className="online-pill font-mono">View Numbers</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        className="floating-contact-trigger"
        onClick={() => setExpanded(!expanded)}
        title="Direct Instagram & WhatsApp Chat"
      >
        <span className="floating-trigger-pulse"></span>
        <div className="trigger-icons">
          <InstagramIcon width={18} height={18} className="icon-insta" />
          <span className="trigger-slash">/</span>
          <WhatsAppIcon width={18} height={18} className="icon-wa" />
        </div>
        <span className="trigger-label">DM for Price</span>
      </button>
    </div>
  );
}
