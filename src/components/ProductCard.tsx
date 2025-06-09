import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, 1);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={`group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}>
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden bg-secondary-50">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Discount badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
              -%{discountPercentage}
            </div>
          )}
          
          {/* Wishlist button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-secondary-600 hover:text-red-500 hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <Heart className="h-4 w-4" />
          </button>
          
          {/* Quick add to cart */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 p-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
          
          {/* Stock status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white px-4 py-2 rounded-lg text-secondary-900 font-semibold">
                Stokta Yok
              </span>
            </div>
          )}
        </div>

        <div className="p-4">
          {/* Brand */}
          <div className="text-sm text-secondary-500 mb-1">{product.brand}</div>
          
          {/* Title */}
          <h3 className="font-semibold text-secondary-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.title}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-secondary-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-secondary-500">
              ({product.reviewCount})
            </span>
          </div>
          
          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-secondary-900">
              {product.price.toFixed(2)}₺
            </span>
            {product.originalPrice && (
              <span className="text-sm text-secondary-500 line-through">
                {product.originalPrice.toFixed(2)}₺
              </span>
            )}
          </div>
          
          {/* Vendor */}
          <div className="text-sm text-secondary-500 mt-1">
            {product.vendorName}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;