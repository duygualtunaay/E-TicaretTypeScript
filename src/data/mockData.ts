import { Product, Category, User, Review } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Moda',
    slug: 'moda',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      { id: '1-1', name: 'Erkek Giyim', slug: 'erkek-giyim' },
      { id: '1-2', name: 'Kadın Giyim', slug: 'kadin-giyim' },
      { id: '1-3', name: 'Çocuk & Bebek', slug: 'cocuk-bebek' },
      { id: '1-4', name: 'Ayakkabı', slug: 'ayakkabi' },
      { id: '1-5', name: 'Aksesuar', slug: 'aksesuar' },
    ]
  },
  {
    id: '2',
    name: 'Elektronik',
    slug: 'elektronik',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      { id: '2-1', name: 'Akıllı Telefon', slug: 'akilli-telefon' },
      { id: '2-2', name: 'Laptop & Bilgisayar', slug: 'laptop-bilgisayar' },
      { id: '2-3', name: 'Ses & Kulaklık', slug: 'ses-kulaklik' },
      { id: '2-4', name: 'Oyun', slug: 'oyun' },
      { id: '2-5', name: 'Akıllı Ev', slug: 'akilli-ev' },
    ]
  },
  {
    id: '3',
    name: 'Ev & Yaşam',
    slug: 'ev-yasam',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      { id: '3-1', name: 'Mobilya', slug: 'mobilya' },
      { id: '3-2', name: 'Dekorasyon', slug: 'dekorasyon' },
      { id: '3-3', name: 'Mutfak & Yemek', slug: 'mutfak-yemek' },
      { id: '3-4', name: 'Yatak & Banyo', slug: 'yatak-banyo' },
      { id: '3-5', name: 'Bahçe & Dış Mekan', slug: 'bahce-dis-mekan' },
    ]
  },
  {
    id: '4',
    name: 'Güzellik & Bakım',
    slug: 'guzellik-bakim',
    image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      { id: '4-1', name: 'Cilt Bakımı', slug: 'cilt-bakimi' },
      { id: '4-2', name: 'Makyaj', slug: 'makyaj' },
      { id: '4-3', name: 'Saç Bakımı', slug: 'sac-bakimi' },
      { id: '4-4', name: 'Parfüm', slug: 'parfum' },
      { id: '4-5', name: 'Kişisel Bakım', slug: 'kisisel-bakim' },
    ]
  },
];

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Kablosuz Kulaklık',
    description: 'Gürültü engelleme ve premium ses kalitesi ile yüksek kaliteli kablosuz kulaklık. Müzik severler ve profesyoneller için mükemmel.',
    price: 2999.99,
    originalPrice: 3999.99,
    discount: 25,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Elektronik',
    subcategory: 'Ses & Kulaklık',
    brand: 'AudioTech',
    rating: 4.8,
    reviewCount: 542,
    inStock: true,
    variants: [
      { id: 'color-1', name: 'Renk', value: 'Siyah', inStock: true },
      { id: 'color-2', name: 'Renk', value: 'Beyaz', inStock: true },
      { id: 'color-3', name: 'Renk', value: 'Gümüş', inStock: false },
    ],
    vendorId: 'vendor-1',
    vendorName: 'TechWorld Mağaza',
    tags: ['kablosuz', 'gürültü-engelleme', 'premium', 'bluetooth'],
    specifications: {
      'Pil Ömrü': '30 saat',
      'Şarj Süresi': '2 saat',
      'Kablosuz Menzil': '10 metre',
      'Sürücü Boyutu': '40mm',
      'Frekans Yanıtı': '20Hz - 20kHz'
    },
    shippingInfo: '50₺ üzeri siparişlerde ücretsiz kargo. Ekspres teslimat mevcuttur.',
    returnPolicy: '30 gün iade garantisi ile tam para iadesi.',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Akıllı Fitness Saati',
    description: 'Kalp ritmi takibi, GPS ve akıllı telefon bağlantısı ile gelişmiş fitness takip saati.',
    price: 1999.99,
    originalPrice: 2499.99,
    discount: 20,
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/267420/pexels-photo-267420.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Elektronik',
    subcategory: 'Akıllı Ev',
    brand: 'FitLife',
    rating: 4.6,
    reviewCount: 328,
    inStock: true,
    variants: [
      { id: 'size-1', name: 'Boyut', value: '42mm', inStock: true },
      { id: 'size-2', name: 'Boyut', value: '46mm', inStock: true },
    ],
    vendorId: 'vendor-2',
    vendorName: 'Sağlık & Fitness A.Ş.',
    tags: ['fitness', 'akıllı-saat', 'sağlık', 'gps'],
    specifications: {
      'Ekran': 'AMOLED 1.4 inç',
      'Pil Ömrü': '7 gün',
      'Su Direnci': '5ATM',
      'Sensörler': 'Kalp ritmi, GPS, İvmeölçer',
      'Uyumluluk': 'iOS & Android'
    },
    shippingInfo: 'Ücretsiz standart kargo. 2 günlük ekspres mevcut.',
    returnPolicy: 'Elektronik ürünler için 14 gün iade politikası.',
    createdAt: '2024-01-14T15:30:00Z'
  },
  {
    id: '3',
    title: 'Tasarım Pamuklu T-Shirt',
    description: 'Modern tasarım ile rahat ve şık pamuklu t-shirt. %100 organik pamuktan üretilmiştir.',
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Moda',
    subcategory: 'Erkek Giyim',
    brand: 'UrbanWear',
    rating: 4.4,
    reviewCount: 189,
    inStock: true,
    variants: [
      { id: 'size-s', name: 'Beden', value: 'S', inStock: true },
      { id: 'size-m', name: 'Beden', value: 'M', inStock: true },
      { id: 'size-l', name: 'Beden', value: 'L', inStock: true },
      { id: 'size-xl', name: 'Beden', value: 'XL', inStock: false },
    ],
    vendorId: 'vendor-3',
    vendorName: 'Moda Merkezi',
    tags: ['pamuk', 'günlük', 'organik', 'rahat'],
    specifications: {
      'Malzeme': '%100 Organik Pamuk',
      'Kesim': 'Normal Kesim',
      'Bakım': 'Makinede yıkanabilir',
      'Menşei': 'Türkiye\'de üretilmiştir',
      'Yaka': 'Bisiklet yaka'
    },
    shippingInfo: '25₺ üzeri siparişlerde ücretsiz kargo.',
    returnPolicy: 'Etiketli ürünler için 30 gün iade politikası.',
    createdAt: '2024-01-13T09:15:00Z'
  },
  {
    id: '4',
    title: 'Lüks Cilt Bakım Seti',
    description: 'Temizleyici, tonik, serum ve nemlendirici ile komple cilt bakım rutini. Tüm cilt tipleri için uygundur.',
    price: 899.99,
    originalPrice: 1299.99,
    discount: 31,
    images: [
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Güzellik & Bakım',
    subcategory: 'Cilt Bakımı',
    brand: 'GlowBeauty',
    rating: 4.9,
    reviewCount: 756,
    inStock: true,
    vendorId: 'vendor-4',
    vendorName: 'Güzellik Essentials',
    tags: ['cilt-bakımı', 'lüks', 'yaşlanma-karşıtı', 'doğal'],
    specifications: {
      'İçerik': '4 parça set',
      'Cilt Tipi': 'Tüm cilt tipleri',
      'Ana Bileşenler': 'Hyaluronik Asit, Vitamin C',
      'Hayvan Deneyi': 'Hayır',
      'Paraben İçermez': 'Evet'
    },
    shippingInfo: 'Güzellik ürünlerinde ücretsiz ekspres kargo.',
    returnPolicy: '60 gün memnuniyet garantisi.',
    createdAt: '2024-01-12T14:20:00Z'
  },
  {
    id: '5',
    title: 'Modern Sehpa',
    description: 'Çağdaş oturma odaları için şık ve modern sehpa. Sürdürülebilir malzemelerden üretilmiştir.',
    price: 3499.99,
    originalPrice: 4499.99,
    discount: 22,
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Ev & Yaşam',
    subcategory: 'Mobilya',
    brand: 'HomeStyle',
    rating: 4.5,
    reviewCount: 94,
    inStock: true,
    variants: [
      { id: 'finish-1', name: 'Kaplama', value: 'Meşe', inStock: true },
      { id: 'finish-2', name: 'Kaplama', value: 'Ceviz', inStock: true },
      { id: 'finish-3', name: 'Kaplama', value: 'Beyaz', inStock: false },
    ],
    vendorId: 'vendor-5',
    vendorName: 'Mobilya Plus',
    tags: ['mobilya', 'modern', 'sürdürülebilir', 'oturma-odası'],
    specifications: {
      'Boyutlar': '120cm x 60cm x 45cm',
      'Malzeme': 'Mühendislik Ahşabı',
      'Ağırlık': '25kg',
      'Montaj': 'Gerekli',
      'Garanti': '2 yıl'
    },
    shippingInfo: 'Mobilya için beyaz eldiven teslimat hizmeti mevcuttur.',
    returnPolicy: 'Mobilya ürünleri için 90 gün iade politikası.',
    createdAt: '2024-01-11T11:45:00Z'
  },
  {
    id: '6',
    title: 'Profesyonel Kamera Lensi',
    description: 'Profesyonel fotoğrafçılık için yüksek kaliteli kamera lensi. Büyük kamera markalarıyla uyumludur.',
    price: 8999.99,
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Elektronik',
    subcategory: 'Kameralar',
    brand: 'ProPhoto',
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
    vendorId: 'vendor-6',
    vendorName: 'Kamera Dünyası',
    tags: ['fotoğrafçılık', 'profesyonel', 'lens', 'optik'],
    specifications: {
      'Odak Uzaklığı': '24-70mm',
      'Diyafram': 'f/2.8',
      'Bağlantı': 'Evrensel',
      'Ağırlık': '900g',
      'Hava Koruması': 'Evet'
    },
    shippingInfo: 'Yüksek değerli ürünler için sigortalı kargo.',
    returnPolicy: 'Kamera ekipmanları için 14 gün iade politikası.',
    createdAt: '2024-01-10T16:30:00Z'
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userId: 'user-1',
    userName: 'Ayşe Yılmaz',
    rating: 5,
    comment: 'Muhteşem ses kalitesi! Gürültü engelleme mükemmel çalışıyor.',
    createdAt: '2024-01-20T10:30:00Z',
    helpful: 12
  },
  {
    id: '2',
    productId: '1',
    userId: 'user-2',
    userName: 'Mehmet Kaya',
    rating: 4,
    comment: 'Harika kulaklık, pil ömrü mükemmel. Uzun kullanım için rahat.',
    createdAt: '2024-01-19T15:45:00Z',
    helpful: 8
  },
  {
    id: '3',
    productId: '4',
    userId: 'user-3',
    userName: 'Zeynep Demir',
    rating: 5,
    comment: 'Bu cilt bakım seti cildi dönüştürdü! Kesinlikle tavsiye ederim.',
    createdAt: '2024-01-18T09:20:00Z',
    helpful: 23
  },
];

export const users: User[] = [
  {
    id: 'admin-1',
    name: 'Yönetici Kullanıcı',
    email: 'admin@demo.com',
    role: 'admin',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'vendor-1',
    name: 'TechWorld Mağaza',
    email: 'vendor@demo.com',
    role: 'vendor',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'customer-1',
    name: 'Ahmet Özkan',
    email: 'customer@demo.com',
    role: 'customer',
    createdAt: '2024-01-01T00:00:00Z'
  },
];