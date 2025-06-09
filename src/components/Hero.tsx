import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingBag, Zap, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Kış Modası İndirimi',
      subtitle: '%70\'e Varan İndirim',
      description: 'İnanılmaz indirimlerle modadaki en son trendleri keşfedin',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1200',
      cta: 'Moda Alışverişi',
      link: '/products?category=moda'
    },
    {
      id: 2,
      title: 'En Yeni Elektronik',
      subtitle: 'Teknoloji Devrimi',
      description: 'Rakipsiz fiyatlarla son teknoloji ürünler',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200',
      cta: 'Elektronik Alışverişi',
      link: '/products?category=elektronik'
    },
    {
      id: 3,
      title: 'Ev & Yaşam',
      subtitle: 'Mekanınızı Dönüştürün',
      description: 'Her oda için güzel mobilya ve dekorasyon',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
      cta: 'Ev Alışverişi',
      link: '/products?category=ev-yasam'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative">
      {/* Main Hero Slider */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            } ${index < currentSlide ? '-translate-x-full' : ''}`}
          >
            <div className="relative h-full">
              <div
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>
              
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-lg text-white animate-slide-up">
                    <h2 className="text-sm font-semibold text-primary-300 mb-2 uppercase tracking-wide">
                      {slide.subtitle}
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200">
                      {slide.description}
                    </p>
                    <Link
                      to={slide.link}
                      className="inline-flex items-center px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200 transform hover:scale-105"
                    >
                      {slide.cta}
                      <ShoppingBag className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-200"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-200"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Feature highlights */}
      <div className="bg-white py-8 border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary-100 rounded-full">
                <ShoppingBag className="h-8 w-8 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900">Ücretsiz Kargo</h3>
                <p className="text-sm text-secondary-600">50₺ üzeri siparişlerde</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary-100 rounded-full">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900">Hızlı Teslimat</h3>
                <p className="text-sm text-secondary-600">2 günde ekspres kargo</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary-100 rounded-full">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900">Güvenli Ödeme</h3>
                <p className="text-sm text-secondary-600">%100 güvenli alışveriş</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;