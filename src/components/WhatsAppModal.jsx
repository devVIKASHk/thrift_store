import React, { useState } from 'react';
import { WhatsAppIcon } from './SocialIcons';

export default function WhatsAppModal({ isOpen, onClose, productTitle = "" }) {
  const [copiedNum, setCopiedNum] = useState(null);

  if (!isOpen) return null;

  const num1 = "9897090270";
  const num2 = "7617463559";

  const messageText = productTitle
    ? `Hi! I want to check price and availability for: ${productTitle}`
    : "Hi! I am browsing Lily.N.wise and want to know item prices & availability.";

  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    setCopiedNum(number);
    setTimeout(() => setCopiedNum(null), 2000);
  };

  return (
    <div className="wa-modal-backdrop" onClick={onClose}>
      <div className="wa-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="wa-modal-close" onClick={onClose} aria-label="Close">×</button>
        
        <div className="wa-modal-header">
          <div className="wa-badge-icon">
            <WhatsAppIcon width={28} height={28} />
          </div>
          <h3>WhatsApp Order Lines</h3>
          <p className="wa-modal-sub">
            Connect directly with our curators on WhatsApp to ask item prices, request extra photos, or reserve pieces.
          </p>
        </div>

        {productTitle && (
          <div className="wa-modal-product-notice">
            <span>Inquiry for:</span> <strong>{productTitle}</strong>
          </div>
        )}

        <div className="wa-numbers-stack">
          {/* Number 1 */}
          <div className="wa-number-card">
            <div className="wa-card-top">
              <span className="wa-line-label">WhatsApp Helpline 1</span>
              <span className="wa-status-online font-mono">● Active Now</span>
            </div>
            <div className="wa-phone-display font-mono">
              +91 {num1}
            </div>
            <div className="wa-card-actions">
              <a
                href={`https://wa.me/91${num1}?text=${encodeURIComponent(messageText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-action-chat"
              >
                <WhatsAppIcon width={16} height={16} />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => handleCopy(num1)}
                className="wa-action-copy font-mono"
              >
                {copiedNum === num1 ? "✓ Copied!" : "📋 Copy"}
              </button>
            </div>
          </div>

          {/* Number 2 */}
          <div className="wa-number-card">
            <div className="wa-card-top">
              <span className="wa-line-label">WhatsApp Helpline 2</span>
              <span className="wa-status-online font-mono">● Active Now</span>
            </div>
            <div className="wa-phone-display font-mono">
              +91 {num2}
            </div>
            <div className="wa-card-actions">
              <a
                href={`https://wa.me/91${num2}?text=${encodeURIComponent(messageText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-action-chat"
              >
                <WhatsAppIcon width={16} height={16} />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => handleCopy(num2)}
                className="wa-action-copy font-mono"
              >
                {copiedNum === num2 ? "✓ Copied!" : "📋 Copy"}
              </button>
            </div>
          </div>
        </div>

        <div className="wa-modal-footer-note">
          Both numbers <strong>9897090270</strong> & <strong>7617463559</strong> are official Lily.N.wise support lines.
        </div>
      </div>
    </div>
  );
}
