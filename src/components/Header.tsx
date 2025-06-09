import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Heart, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { categories } from '../data/mockData';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { getItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-secondary-50 border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-4 text-secondary-600">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>50₺ üzeri siparişlerde ücretsiz kargo</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-secondary-600">Müşteri Desteği: 0850-123-4567</span>
              {!user && (
                <div className="flex items-center space-x-2">
                  <Link to="/login" className="text-primary-600 hover:text-primary-700">
                    Giriş Yap
                  </Link>
                  <span className="text-secondary-400">|</span>
                  <Link to="/register" className="text-primary-600 hover:text-primary-700">
                    Üye Ol
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-secondary-900">MarketPlace Pro</span>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ürün, marka, kategori ara..."
                className="w-full pl-4 pr-10 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-primary-500"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-secondary-600 hover:text-primary-500 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            
            <Link
              to="/cart"
              className="relative p-2 text-secondary-600 hover:text-primary-500 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary-500 text-white rounded-full text-xs flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-secondary-600 hover:text-primary-500 transition-colors">
                  <User className="h-6 w-6" />
                  <span className="hidden md:block">{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    to="/account"
                    className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                  >
                    Hesabım
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                  >
                    Siparişlerim
                  </Link>
                  {user.role === 'vendor' && (
                    <Link
                      to="/vendor/dashboard"
                      className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                    >
                      Satıcı Paneli
                    </Link>
                  )}
                  {user.role === 'admin' && (
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                    >
                      Yönetici Paneli
                    </Link>
                  )}
                  <hr className="my-2" />
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                  >
                    Çıkış Yap
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 p-2 text-secondary-600 hover:text-primary-500 transition-colors"
              >
                <User className="h-6 w-6" />
                <span className="hidden md:block">Giriş Yap</span>
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-secondary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Categories navigation */}
      <div className="border-t border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12 space-x-8">
            <div className="relative">
              <button
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
                className="flex items-center space-x-1 text-secondary-700 hover:text-primary-500 font-medium"
              >
                <Menu className="h-4 w-4" />
                <span>Tüm Kategoriler</span>
              </button>
              
              {isCategoriesOpen && (
                <div
                  onMouseEnter={() => setIsCategoriesOpen(true)}
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl py-4 z-50"
                >
                  <div className="grid grid-cols-1 gap-1">
                    {categories.map((category) => (
                      <div key={category.id} className="group relative">
                        <Link
                          to={`/products?category=${category.slug}`}
                          className="flex items-center px-4 py-2 text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
                        >
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-8 h-8 rounded object-cover mr-3"
                          />
                          <span className="font-medium">{category.name}</span>
                        </Link>
                        
                        {category.subcategories && (
                          <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            {category.subcategories.map((sub) => (
                              <Link
                                key={sub.id}
                                to={`/products?category=${category.slug}&subcategory=${sub.slug}`}
                                className="block px-4 py-2 text-sm text-secondary-600 hover:bg-primary-50 hover:text-primary-600"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link to="/deals" className="text-secondary-700 hover:text-primary-500 font-medium">
                Günün Fırsatları
              </Link>
              <Link to="/new-arrivals" className="text-secondary-700 hover:text-primary-500 font-medium">
                Yeni Gelenler
              </Link>
              <Link to="/trending" className="text-secondary-700 hover:text-primary-500 font-medium">
                Trend Ürünler
              </Link>
              <Link to="/brands" className="text-secondary-700 hover:text-primary-500 font-medium">
                Markalar
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-secondary-200">
          <div className="px-4 py-4 space-y-4">
            <nav className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/products?category=${category.slug}`}
                  className="block py-2 text-secondary-700 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
            <hr />
            <nav className="space-y-2">
              <Link
                to="/deals"
                className="block py-2 text-secondary-700 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Günün Fırsatları
              </Link>
              <Link
                to="/new-arrivals"
                className="block py-2 text-secondary-700 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Yeni Gelenler
              </Link>
              <Link
                to="/trending"
                className="block py-2 text-secondary-700 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Trend Ürünler
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;