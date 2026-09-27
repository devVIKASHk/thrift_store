import React from 'react';

export default function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedCondition,
  setSelectedCondition,
  sortBy,
  setSortBy,
  itemCount
}) {
  return (
    <div className="filter-bar-wrapper" id="shop-catalog">
      <div className="container filter-container">
        {/* Category Pills */}
        <div className="category-scroll-pills">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filters and Sorting Row */}
        <div className="filter-controls-row">
          <div className="filter-group">
            <label className="filter-label">Condition / Era:</label>
            <select
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Eras & Conditions</option>
              <option value="90s">90s Vintage</option>
              <option value="Y2K">Y2K / 2000s</option>
              <option value="Like New">Like New</option>
              <option value="Gently Used">Gently Used</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="featured">Featured Picks</option>
              <option value="newest">Newest Drops</option>
            </select>
          </div>

          <div className="item-count-badge">
            <span>{itemCount}</span> {itemCount === 1 ? 'Item' : 'Items'} Available
          </div>
        </div>
      </div>
    </div>
  );
}
