import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/mockData';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice } = useCart();

  const cartProducts = items.map(item => ({
    ...item,
    product: products.find(p => p.id === item.productId)!
  })).filter(item => item.product);

  const subtotal = getTotalPrice(products);
  const shipping = subtotal > 500 ? 0 : 99.99;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 text-secondary-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Sepetiniz Boş</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Henüz sepetinize ürün eklememişsiniz.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Alışverişe Başla
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-secondary-900">Alışveriş Sepeti</h1>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 font-medium"
          >
            Sepeti Temizle
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartProducts.map(({ product, quantity, selectedVariants }) => (
              <div key={`${product.id}-${JSON.stringify(selectedVariants)}`} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-4">
                  <Link to={`/product/${product.id}`} className="flex-shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </Link>
                  
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${product.id}`}
                      className="font-semibold text-secondary-900 hover:text-primary-600 line-clamp-2"
                    >
                      {product.title}
                    </Link>
                    <div className="text-sm text-secondary-500 mt-1">
                      {product.vendorName}
                    </div>
                    {selectedVariants && Object.keys(selectedVariants).length > 0 && (
                      <div className="text-sm text-secondary-600 mt-1">
                        {Object.entries(selectedVariants).map(([key, value]) => (
                          <span key={key} className="mr-4">
                            {key}: {value}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="text-lg font-semibold text-secondary-900 mt-2">
                      {product.price.toFixed(2)}₺
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="p-1 border border-secondary-300 rounded hover:bg-secondary-50"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="p-1 border border-secondary-300 rounded hover:bg-secondary-50"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeItem(product.id)}
                    className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-4">
            <h3 className="text-lg font-semibold text-secondary-900 mb-4">Sipariş Özeti</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-secondary-600">Ara Toplam</span>
                <span className="font-medium">{subtotal.toFixed(2)}₺</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary-600">Kargo</span>
                <span className="font-medium">
                  {shipping === 0 ? 'Ücretsiz' : `${shipping.toFixed(2)}₺`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary-600">KDV</span>
                <span className="font-medium">{tax.toFixed(2)}₺</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-semibold">
                <span>Toplam</span>
                <span>{total.toFixed(2)}₺</span>
              </div>
            </div>

            {shipping > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-yellow-800">
                  Ücretsiz kargo için {(500 - subtotal).toFixed(2)}₺ daha ekleyin!
                </p>
              </div>
            )}

            <Link
              to="/checkout"
              className="w-full flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Ödemeye Geç
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              to="/products"
              className="w-full flex items-center justify-center px-6 py-3 mt-3 border border-secondary-300 text-secondary-700 font-medium rounded-lg hover:bg-secondary-50 transition-colors"
            >
              Alışverişe Devam Et
            </Link>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-secondary-200">
              <div className="text-sm text-secondary-600 text-center mb-3">
                Güvenli Ödeme Garantisi
              </div>
              <div className="flex justify-center space-x-2">
                <div className="px-2 py-1 bg-secondary-100 rounded text-xs font-medium">VISA</div>
                <div className="px-2 py-1 bg-secondary-100 rounded text-xs font-medium">MC</div>
                <div className="px-2 py-1 bg-secondary-100 rounded text-xs font-medium">AMEX</div>
                <div className="px-2 py-1 bg-secondary-100 rounded text-xs font-medium">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;