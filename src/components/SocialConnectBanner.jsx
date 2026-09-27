import React from 'react';
import { InstagramIcon, WhatsAppIcon, SendDmIcon } from './SocialIcons';

export default function SocialConnectBanner({ onOpenWhatsApp }) {
  return (
    <section className="social-connect-section">
      <div className="container">
        <div className="social-connect-card">
          <div className="social-connect-glow"></div>
          
          <div className="social-connect-header">
            <div className="social-badge">
              <span className="sparkle">✦</span> INSTANT DM ORDER SYSTEM <span className="sparkle">✦</span>
            </div>
            <h2 className="social-title">How To Buy Our 1-of-1 Archive Pieces</h2>
            <p className="social-subtitle">
              We list 0 prices on-site. Every item is an exclusive vintage 1-of-1. Follow us on Instagram or chat directly on WhatsApp to get instant pricing, secret discounts & reserved drops!
            </p>
          </div>

          {/* 3 Step Flow Visual */}
          <div className="dm-steps-grid">
            <div className="dm-step-card">
              <div className="step-num">01</div>
              <h4>Find Your Item</h4>
              <p>Explore our curated retro catalog or save items to your wishlist.</p>
            </div>
            <div className="dm-step-card">
              <div className="step-num">02</div>
              <h4>Send Quick DM</h4>
              <p>Click the Instagram or WhatsApp button to launch pre-filled item inquiry.</p>
            </div>
            <div className="dm-step-card">
              <div className="step-num">03</div>
              <h4>Confirm & Dispatch</h4>
              <p>Get price & availability instantly. Fast insured shipping right to your door!</p>
            </div>
          </div>

          {/* Dual Action Cards */}
          <div className="social-channels-grid">
            {/* Instagram Main Card */}
            <div className="channel-box insta-channel-box">
              <div className="channel-box-header">
                <div className="channel-icon-avatar insta-gradient-avatar">
                  <InstagramIcon width={28} height={28} />
                </div>
                <div className="channel-meta">
                  <h3>Instagram DM Official</h3>
                  <span className="handle font-mono">@lilynwise_thrifts</span>
                </div>
                <span className="live-status-pill">
                  <span className="status-dot"></span> Active Now
                </span>
              </div>
              <p className="channel-desc">
                Follow for daily story drops, outfit inspiration reels, & exclusive DM discounts.
              </p>
              <a
                href="https://www.instagram.com/lilynwise_thrifts?stkn=MXJnb3g0M3cwOG14ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="channel-cta-btn insta-cta-btn"
              >
                <InstagramIcon width={18} height={18} />
                <span>Follow & DM on Instagram</span>
                <SendDmIcon width={14} height={14} />
              </a>
            </div>

            {/* WhatsApp Main Card */}
            <div className="channel-box wa-channel-box">
              <div className="channel-box-header">
                <div className="channel-icon-avatar wa-green-avatar">
                  <WhatsAppIcon width={26} height={26} />
                </div>
                <div className="channel-meta">
                  <h3>WhatsApp Direct Support</h3>
                  <span className="handle font-mono">9897090270 & 7617463559</span>
                </div>
                <span className="live-status-pill wa-pill">
                  <span className="status-dot green"></span> Direct Reply
                </span>
              </div>
              <p className="channel-desc">
                Prefer WhatsApp? Click below to view both active support numbers with 1-tap chat and copy links.
              </p>
              <button
                type="button"
                onClick={() => onOpenWhatsApp && onOpenWhatsApp('')}
                className="channel-cta-btn wa-cta-btn-full"
              >
                <WhatsAppIcon width={18} height={18} />
                <span>View WhatsApp Numbers (9897090270 & 7617463559)</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
