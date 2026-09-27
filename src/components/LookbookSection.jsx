import React from 'react';

const vibes = [
  {
    id: 'v1',
    title: 'Onyx Leather Archive',
    subtitle: 'High-grain vintage leather jackets & structured boots',
    category: 'Outerwear',
    bgGradient: 'linear-gradient(135deg, #1b1922 0%, #0a090c 100%)',
    tags: ['Outerwear', 'Leather', 'Archive'],
    itemCount: '12 Pieces'
  },
  {
    id: 'v2',
    title: 'Classic Tweed & Gold Silk',
    subtitle: 'Tailored blazers, silk scarves & gold filigree',
    category: 'Accessories',
    bgGradient: 'linear-gradient(135deg, #201c27 0%, #0b090d 100%)',
    tags: ['Tweed', 'Silk', 'Paris Vintage'],
    itemCount: '18 Pieces'
  },
  {
    id: 'v3',
    title: '90s Single-Stitch & Selvedge',
    subtitle: 'Authentic band tees & raw selvedge denim',
    category: 'Denim',
    bgGradient: 'linear-gradient(135deg, #18151f 0%, #09080b 100%)',
    tags: ['Graphic', 'Raw Denim', 'Selvedge'],
    itemCount: '24 Pieces'
  },
  {
    id: 'v4',
    title: 'Cashmere & Cable Knit',
    subtitle: 'Heavyweight knit turtlenecks & cozy cardigans',
    category: 'Sweaters',
    bgGradient: 'linear-gradient(135deg, #1e1b26 0%, #0a090d 100%)',
    tags: ['100% Cashmere', 'Cable Knit', 'Winter'],
    itemCount: '15 Pieces'
  }
];

export default function LookbookSection({ onSelectCategory }) {
  return (
    <section className="lookbook-section" id="lookbook">
      <div className="container">
        <div className="section-header center">
          <div className="gold-pill-tag">✦ VIBE ARCHIVE ✦</div>
          <h2 className="section-title">Stalk The Aesthetic</h2>
          <p className="section-desc">
            Explore curated lookbooks and styling themes. Click any vibe to instantly filter our live archive.
          </p>
        </div>

        <div className="lookbook-grid">
          {vibes.map((vibe) => (
            <div 
              key={vibe.id} 
              className="vibe-card"
              style={{ background: vibe.bgGradient }}
              onClick={() => {
                onSelectCategory(vibe.category);
                const catalogEl = document.getElementById('archive-catalog');
                if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="vibe-card-overlay"></div>
              
              <div className="vibe-card-top">
                <span className="vibe-piece-count">✦ {vibe.itemCount}</span>
                <span className="vibe-arrow-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </div>

              <div className="vibe-card-bottom">
                <h3 className="vibe-card-title">{vibe.title}</h3>
                <p className="vibe-card-sub">{vibe.subtitle}</p>
                <div className="vibe-tags-row">
                  {vibe.tags.map((tag) => (
                    <span key={tag} className="vibe-tag">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
