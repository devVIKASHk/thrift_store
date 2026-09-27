import React from 'react';

const BANNERS = [
  {
    src: '/hoodies_banner.jpg',
    alt: 'Vintage Branded Hoodies',
    imgClass: 'hoodies-img',
    subhead: 'BRANDED HOODIES & CREWNECKS',
    title: 'Explore collection',
    category: 'Hoodies & Sweaters',
  },
  {
    src: '/lowers_banner.jpg',
    alt: 'Camo Lowers & Sweatpants',
    imgClass: 'lowers-img',
    subhead: 'CARGO LOWERS & TRACK PANTS',
    title: 'Explore collection',
    category: 'Lowers & Pants',
  },
  {
    src: '/jackets_banner.jpg',
    alt: 'Retro Track Jackets & Outerwear',
    imgClass: 'jackets-img',
    subhead: 'RETRO TRACK JACKETS & OUTERWEAR',
    title: 'Explore collection',
    category: 'Outerwear',
  },
  {
    src: '/tshirts_banner.jpg',
    alt: 'Vintage Graphic Tees & Shirts',
    imgClass: 'tshirts-img',
    subhead: 'VINTAGE GRAPHIC TEES & SHIRTS',
    title: 'Explore collection',
    category: 'T-Shirts',
  },
];

export default function FeaturedCollections({ onSelectCategory }) {
  const handleCategoryClick = (categoryName) => {
    onSelectCategory(categoryName);
    const catalogElement = document.getElementById('archive-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="featured-collections-section" id="featured-collections">
      {/* Top row: 2 banners */}
      <div className="banners-row two-col-row">
        {BANNERS.slice(0, 2).map((banner) => (
          <BannerCard
            key={banner.category}
            banner={banner}
            onClick={() => handleCategoryClick(banner.category)}
          />
        ))}
      </div>

      {/* Middle row: 2 banners */}
      <div className="banners-row two-col-row">
        {BANNERS.slice(2, 4).map((banner) => (
          <BannerCard
            key={banner.category}
            banner={banner}
            onClick={() => handleCategoryClick(banner.category)}
          />
        ))}
      </div>

      {/* Bottom row: Cap banner centred */}
      <div className="banners-row center-row">
        <BannerCard
          banner={{
            src: '/caps_banner.jpg',
            alt: 'Von Dutch Vintage Caps & Hats',
            imgClass: 'caps-img',
            subhead: 'VINTAGE CAPS, HATS & HEADWEAR',
            title: 'Explore collection',
            category: 'Accessories',
          }}
          onClick={() => handleCategoryClick('Accessories')}
          centerStyle
        />
      </div>
    </section>
  );
}

function BannerCard({ banner, onClick, centerStyle }) {
  return (
    <div
      className={`split-banner-card full-banner${centerStyle ? ' center-banner' : ''}`}
      onClick={onClick}
    >
      <img
        src={banner.src}
        alt={banner.alt}
        className={`split-banner-img ${banner.imgClass}`}
      />
      <div className="split-banner-overlay"></div>
      <div className="split-banner-content">
        <span className="split-subhead">{banner.subhead}</span>
        <h3 className="split-title">{banner.title}</h3>
        <button
          className="split-shop-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          Shop Collection
        </button>
      </div>
    </div>
  );
}
