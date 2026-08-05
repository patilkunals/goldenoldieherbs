export type Product = {
  id: string
  name: string
  shortDescription: string
  features: string[]
  rating: number // 0-5
  reviews: number
  priceINR?: number
  amazonLink: string
  image: string
  b2bAvailable?: boolean
}

const AMAZON_STORE = 'https://www.amazon.in/stores/page/47B3952E-6FA1-41B3-899B-4331EC8752B8'

export const products: Product[] = [
  {
    id: 'pr-001',
    name: 'Golden Chyawanprash (Herbal Immunity Jam) - 500g',
    shortDescription: 'Traditional Chyawanprash formulated with classical herbs for immunity support.',
    features: ['Rich in classical herbs', 'No artificial preservatives', 'Ayurvedic formulation'],
    rating: 4.6,
    reviews: 1520,
    priceINR: 499,
    amazonLink: `${AMAZON_STORE}`,
    image: '/images/products/products-1.jpg',
    b2bAvailable: true,
  },
  {
    id: 'pr-002',
    name: 'Herbal Pain Relief Oil - 200ml',
    shortDescription: 'Potent herbal oil for joint and muscle relief with warming action.',
    features: ['Deep tissue penetration', 'Suitable for massage', 'Traditional recipe'],
    rating: 4.4,
    reviews: 860,
    priceINR: 349,
    amazonLink: `${AMAZON_STORE}`,
    image: '/images/products/products-2.jpg',
    b2bAvailable: true,
  },
  {
    id: 'pr-003',
    name: 'Immunity Booster Kadha (Powder) - 200g',
    shortDescription: 'Easy-to-mix immunity kadha powder made with time-tested herbs.',
    features: ['Instant decoction', 'Supports respiratory health', 'Daily wellness use'],
    rating: 4.5,
    reviews: 430,
    priceINR: 249,
    amazonLink: `${AMAZON_STORE}`,
    image: '/images/products/products-3.jpg',
    b2bAvailable: false,
  },
  {
    id: 'pr-004',
    name: 'Tridoshic Herbal Soap (Set of 3)',
    shortDescription: 'Gentle cleansing soap with herbal oils suitable for daily use.',
    features: ['Moisturizing', 'Natural extracts', 'Dermatologically tested'],
    rating: 4.3,
    reviews: 210,
    priceINR: 299,
    amazonLink: `${AMAZON_STORE}`,
    image: '/images/products/products-4.jpg',
    b2bAvailable: true,
  },
  {
    id: 'pr-005',
    name: 'Ayurvedic Digestive Drops - 30ml',
    shortDescription: 'Concentrated formulation to support digestion and reduce bloating.',
    features: ['Fast-acting', 'Herbal glycerin base', 'Travel-friendly'],
    rating: 4.2,
    reviews: 98,
    priceINR: 179,
    amazonLink: `${AMAZON_STORE}`,
    image: '/images/products/products-5.jpg',
    b2bAvailable: false,
  }
]

export default products
