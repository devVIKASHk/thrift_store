import React, { useState, useEffect } from 'react';

export default function DropCountdown() {
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  // Simulated countdown values
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 38,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        return { ...prev, seconds: 59, minutes: prev.minutes > 0 ? prev.minutes - 1 : 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (email) {
      setUnlocked(true);
      setEmail('');
    }
  };

  return (
    <section className="drop-countdown-section" id="vip-drop">
      <div className="container">
        <div className="countdown-box">
          <div className="glow-backdrop"></div>
          
          <div className="countdown-content">
            <div className="live-status-pill">
              <span className="pulsing-red-dot"></span> NEXT PRIVATE DROP COUNTDOWN
            </div>

            <h2 className="countdown-headline">
              Secret Archive Drop <span>#049</span>
            </h2>

            <p className="countdown-sub">
              Strictly limited 1-of-1 pieces sourced from Japanese and Italian private vintage collections. Sells out within minutes.
            </p>

            {/* Countdown Clock Display */}
            <div className="timer-grid">
              <div className="timer-block">
                <span className="timer-number">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="timer-label">DAYS</span>
              </div>
              <span className="timer-colon">:</span>
              <div className="timer-block">
                <span className="timer-number">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="timer-label">HOURS</span>
              </div>
              <span className="timer-colon">:</span>
              <div className="timer-block">
                <span className="timer-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="timer-label">MINS</span>
              </div>
              <span className="timer-colon">:</span>
              <div className="timer-block">
                <span className="timer-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="timer-label">SECS</span>
              </div>
            </div>

            {/* Lock-in Form */}
            {unlocked ? (
              <div className="unlocked-badge-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>VIP Access Granted! You will receive SMS & Email alert 15 minutes before Drop #049.</span>
              </div>
            ) : (
              <form onSubmit={handleUnlock} className="vip-signup-form">
                <input
                  type="email"
                  placeholder="Enter your VIP email for early access..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="vip-email-input"
                />
                <button type="submit" className="vip-submit-btn">
                  <span>Get Private Access</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
