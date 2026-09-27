import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import VideoReelSection from './components/VideoReelSection';
import FeaturedCollections from './components/FeaturedCollections';
import QualityGuarantee from './components/QualityGuarantee';
import LookbookSection from './components/LookbookSection';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import SustainabilityBanner from './components/SustainabilityBanner';
import DropCountdown from './components/DropCountdown';
import SocialConnectBanner from './components/SocialConnectBanner';
import FloatingContactWidget from './components/FloatingContactWidget';
import WhatsAppModal from './components/WhatsAppModal';
import Footer from './components/Footer';

import { initialProducts, themePresets } from './data/products';
import './App.css';

export default function App() {
  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  
  const [cartItems, setCartItems] = useState([]);
  const [wishlistIds, setWishlistIds] = useState(['nw-101', 'nw-104']);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState(null);
  const [whatsAppModalState, setWhatsAppModalState] = useState({ isOpen: false, productTitle: '' });

  const handleOpenWhatsApp = (productTitle = '') => {
    setWhatsAppModalState({ isOpen: true, productTitle });
  };

  const handleCloseWhatsApp = () => {
    setWhatsAppModalState({ isOpen: false, productTitle: '' });
  };

  // Set root CSS variables for Classic Gold & Deep Onyx
  useEffect(() => {
    const theme = themePresets.goldOnyx;
    if (!theme) return;

    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--primary-hover', theme.primaryHover);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--bg-main', theme.bgMain);
    root.style.setProperty('--bg-card', theme.bgCard);
    root.style.setProperty('--bg-card-hover', theme.bgCardHover);
    root.style.setProperty('--text-main', theme.textMain);
    root.style.setProperty('--text-muted', theme.textMuted);
    root.style.setProperty('--border', theme.border);
    root.style.setProperty('--badge-bg', theme.badgeBg);
  }, []);

  // Categories list
  const categories = useMemo(() => {
    return ['All', 'Hoodies & Sweaters', 'Lowers & Pants', 'Outerwear', 'T-Shirts', 'Accessories', 'Dresses'];
  }, []);

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Category match
      const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      // Condition match
      const matchCondition = selectedCondition === 'All' || 
        (selectedCondition === '90s' && product.era.includes('90s')) ||
        (selectedCondition === 'Y2K' && product.era.includes('200')) ||
        (selectedCondition === 'Like New' && product.condition.includes('Grade A')) ||
        (selectedCondition === 'Gently Used' && product.condition.includes('Vintage'));

      // Search term match
      const matchSearch = searchTerm.trim() === '' ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchCategory && matchCondition && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, selectedCondition, searchTerm, sortBy]);

  // Cart operations
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // Wishlist operations
  const handleToggleWishlist = (productId) => {
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const totalCartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-root">
      {/* Header & Sticky Navigation Bar */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartCount={totalCartItemCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWhatsApp={() => handleOpenWhatsApp('')}
      />

      {/* Main Home Feature: Full-Screen 100% Edge-to-Edge Split Banners */}
      <div id="hero">
        <FeaturedCollections 
          onSelectCategory={(category) => setSelectedCategory(category)} 
        />
      </div>

      {/* 4 Clean Video Reels Row (Positioned directly below the Cap Banner) */}
      <VideoReelSection />

      {/* Lily.N.wise Quality Guarantee (#quality-standard) */}
      <QualityGuarantee />

      {/* Lookbook / Stalk The Vibe (#lookbook) */}
      <LookbookSection 
        onSelectCategory={(cat) => setSelectedCategory(cat)} 
      />

      {/* Category Filter Pills & Product Catalog Grid (#archive-catalog) */}
      <div id="archive-catalog">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCondition={selectedCondition}
          setSelectedCondition={setSelectedCondition}
          sortBy={sortBy}
          setSortBy={setSortBy}
          itemCount={filteredProducts.length}
        />

        <main className="catalog-section">
          <div className="container">
            {filteredProducts.length === 0 ? (
              <div className="no-results-box">
                <h3>No clothing items found</h3>
                <p>Try clearing your search term or selecting a different category filter.</p>
                <button 
                  className="btn-primary" 
                  style={{ marginTop: '1rem' }}
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedCondition('All');
                    setSearchTerm('');
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onQuickView={(prod) => setSelectedProductModal(prod)}
                    isWishlisted={wishlistIds.includes(product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onOpenWhatsApp={handleOpenWhatsApp}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Sustainability Circular Impact (#sustainability) */}
      <SustainabilityBanner />

      {/* Instant DM Order via Instagram & WhatsApp Guide */}
      <SocialConnectBanner onOpenWhatsApp={() => handleOpenWhatsApp('')} />

      {/* VIP Drop Countdown (#vip-drop) */}
      <DropCountdown />

      {/* Footer */}
      <Footer onOpenWhatsApp={() => handleOpenWhatsApp('')} />

      {/* Floating Instagram & WhatsApp Contact Hub */}
      <FloatingContactWidget onOpenWhatsApp={() => handleOpenWhatsApp('')} />

      {/* Product Details Quick View Modal */}
      <ProductModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProductModal ? wishlistIds.includes(selectedProductModal.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Slide-out Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* WhatsApp Numbers Modal (Displays 9897090270 & 7617463559 together) */}
      <WhatsAppModal
        isOpen={whatsAppModalState.isOpen}
        onClose={handleCloseWhatsApp}
        productTitle={whatsAppModalState.productTitle}
      />
    </div>
  );
}
