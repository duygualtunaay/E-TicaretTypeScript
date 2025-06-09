import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Star } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockData';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 8);
  const trendingProducts = products.filter(p => p.rating >= 4.5).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Kategoriye Göre Alışveriş
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Birçok kategoride geniş ürün yelpazemizi keşfedin
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.slug}`}
                className="group relative overflow-hidden rounded-xl aspect-square bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <div className="flex items-center text-sm opacity-90">
                    <span>Alışverişe başla</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Öne Çıkan Ürünler
              </h2>
              <p className="text-lg text-secondary-600">
                Sizin için özenle seçilmiş ürünler
              </p>
            </div>
            <Link
              to="/products"
              className="flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              Tümünü Gör
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Bu Hafta Özel Teklif
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Seçili ürünlerde %50'ye varan indirim. Sınırlı süre!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/deals"
                className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Fırsatları Gör
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                Tüm Ürünleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-primary-500" />
              <h2 className="text-3xl font-bold text-secondary-900">
                Şu Anda Trend
              </h2>
            </div>
            <p className="text-lg text-secondary-600">
              Bu haftanın en popüler ürünleri
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />
                <div className="absolute -top-2 -right-2 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Trend
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Güncel Kalın
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            Bültenimize abone olun ve hiçbir fırsatı kaçırmayın
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="E-posta adresinizi girin"
              className="flex-1 px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;