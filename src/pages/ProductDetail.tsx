import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import { Product, Review } from '../types';
import { products, reviews } from '../data/mockData';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [productReviews, setProductReviews] = useState<Review[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setProductReviews(reviews.filter(r => r.productId === id));
        // Set default variants
        const defaultVariants: Record<string, string> = {};
        foundProduct.variants?.forEach(variant => {
          if (!defaultVariants[variant.name] && variant.inStock) {
            defaultVariants[variant.name] = variant.value;
          }
        });
        setSelectedVariants(defaultVariants);
      } else {
        navigate('/404');
      }
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product.id, quantity, selectedVariants);
  };

  const handleVariantChange = (variantName: string, value: string) => {
    setSelectedVariants(prev => ({
      ...prev,
      [variantName]: value
    }));
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-secondary-600 mb-8">
          <button onClick={() => navigate('/')} className="hover:text-primary-600">
            Ana Sayfa
          </button>
          <span>/</span>
          <button onClick={() => navigate(`/products?category=${product.category.toLowerCase()}`)} className="hover:text-primary-600">
            {product.category}
          </button>
          <span>/</span>
          <span className="text-secondary-900">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-secondary-50 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {discountPercentage > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg font-semibold">
                  -%{discountPercentage}
                </div>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary-500' : 'border-secondary-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-secondary-500 mb-2">{product.brand}</div>
              <h1 className="text-3xl font-bold text-secondary-900 mb-4">{product.title}</h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-secondary-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-secondary-600">
                  {product.rating} ({product.reviewCount} değerlendirme)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-secondary-900">
                  {product.price.toFixed(2)}₺
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-secondary-500 line-through">
                    {product.originalPrice.toFixed(2)}₺
                  </span>
                )}
              </div>
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-4">
                {Array.from(new Set(product.variants.map(v => v.name))).map(variantName => (
                  <div key={variantName}>
                    <label className="block text-sm font-medium text-secondary-900 mb-2">
                      {variantName}: {selectedVariants[variantName]}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.variants
                        ?.filter(v => v.name === variantName)
                        .map(variant => (
                          <button
                            key={variant.id}
                            onClick={() => handleVariantChange(variantName, variant.value)}
                            disabled={!variant.inStock}
                            className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                              selectedVariants[variantName] === variant.value
                                ? 'border-primary-500 bg-primary-50 text-primary-700'
                                : variant.inStock
                                ? 'border-secondary-300 text-secondary-700 hover:border-primary-500'
                                : 'border-secondary-200 text-secondary-400 cursor-not-allowed'
                            }`}
                          >
                            {variant.value}
                            {!variant.inStock && ' (Stokta Yok)'}
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-secondary-900 mb-2">
                Adet
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-secondary-300 rounded-lg hover:bg-secondary-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border border-secondary-300 rounded-lg min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-secondary-300 rounded-lg hover:bg-secondary-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 disabled:bg-secondary-300 disabled:cursor-not-allowed transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>{product.inStock ? 'Sepete Ekle' : 'Stokta Yok'}</span>
              </button>
              <button className="p-3 border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors">
                <Heart className="h-5 w-5 text-secondary-600" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-secondary-200">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-primary-500" />
                <span className="text-sm text-secondary-600">Ücretsiz Kargo</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="h-5 w-5 text-primary-500" />
                <span className="text-sm text-secondary-600">Kolay İade</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary-500" />
                <span className="text-sm text-secondary-600">Güvenli Ödeme</span>
              </div>
            </div>

            {/* Vendor Info */}
            <div className="p-4 bg-secondary-50 rounded-lg">
              <div className="text-sm text-secondary-600 mb-1">Satıcı</div>
              <div className="font-semibold text-secondary-900">{product.vendorName}</div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="border-t border-secondary-200 pt-16">
          <div className="flex space-x-8 mb-8">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 border-b-2 font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-secondary-600 hover:text-secondary-900'
                }`}
              >
                {tab === 'description' && 'Açıklama'}
                {tab === 'specifications' && 'Özellikler'}
                {tab === 'reviews' && `Değerlendirmeler (${productReviews.length})`}
              </button>
            ))}
          </div>

          <div className="min-h-[300px]">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-secondary-700 leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Kargo Bilgileri</h4>
                    <p className="text-secondary-600">{product.shippingInfo}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">İade Politikası</h4>
                    <p className="text-secondary-600">{product.returnPolicy}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-secondary-200">
                    <span className="font-medium text-secondary-900">{key}</span>
                    <span className="text-secondary-600">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {productReviews.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-secondary-600">Henüz değerlendirme yok. Bu ürünü değerlendiren ilk kişi olun!</p>
                  </div>
                ) : (
                  productReviews.map((review) => (
                    <div key={review.id} className="border-b border-secondary-200 pb-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-semibold text-secondary-900">{review.userName}</div>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-secondary-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-secondary-500">
                              {new Date(review.createdAt).toLocaleDateString('tr-TR')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-secondary-700 mb-2">{review.comment}</p>
                      <div className="text-sm text-secondary-500">
                        {review.helpful} kişi bu değerlendirmeyi faydalı buldu
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-secondary-200">
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">Benzer Ürünler</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;