import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ShoppingCart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">MarketPlace Pro</span>
            </div>
            <p className="text-secondary-300 text-sm">
              Moda, elektronik, ev eşyaları ve daha fazlası için en iyi alışveriş deneyimi. 
              Dünya çapında güvenilir satıcılardan güvenle alışveriş yapın.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  İletişim
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Sık Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Kargo Bilgileri
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  İade & Değişim
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Beden Rehberi
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Müşteri Hizmetleri</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Hesabım
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Sipariş Takibi
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  İstek Listem
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Destek Merkezi
                </Link>
              </li>
              <li>
                <Link to="/live-chat" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Canlı Destek
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişime Geçin</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-secondary-300 text-sm">0850-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-secondary-300 text-sm">destek@marketplacepro.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 mt-0.5" />
                <span className="text-secondary-300 text-sm">
                  Ticaret Caddesi No: 123<br />
                  İş Merkezi<br />
                  İstanbul, Türkiye 34000
                </span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Bülten</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-3 py-2 text-sm bg-secondary-800 border border-secondary-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-primary-500 text-white text-sm rounded-r-lg hover:bg-primary-600 transition-colors">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              <Link to="/privacy" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/terms" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
                Kullanım Şartları
              </Link>
              <Link to="/cookies" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
                Çerez Politikası
              </Link>
              <Link to="/security" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
                Güvenlik
              </Link>
            </div>
            
            <div className="text-secondary-400 text-sm">
              © 2024 MarketPlace Pro. Tüm hakları saklıdır.
            </div>
          </div>
          
          {/* Payment methods */}
          <div className="mt-6 flex justify-center space-x-4">
            <div className="text-secondary-400 text-sm flex items-center space-x-4">
              <span>Kabul edilen ödeme yöntemleri:</span>
              <div className="flex space-x-2">
                <div className="px-2 py-1 bg-secondary-800 rounded text-xs">VISA</div>
                <div className="px-2 py-1 bg-secondary-800 rounded text-xs">MC</div>
                <div className="px-2 py-1 bg-secondary-800 rounded text-xs">AMEX</div>
                <div className="px-2 py-1 bg-secondary-800 rounded text-xs">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;