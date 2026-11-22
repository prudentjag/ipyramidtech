import ProductCard from '../components/ProductCard';


type Product = {
  name: string;
  category: string;
  description: string;
  image: string;
  url?: string;
  status: 'Available' | 'In Development';
};


const products : Product[] = [
  {
    name: 'DirectTravel',
    category: 'Travel & Booking',
    description: 'A platform that helps users make travel bookings with ease.',
    image: '/products/directtravels.jpg',
    url: 'https://directtravelng.com/',
    status: 'Available',
  },
  {
    name: 'Rentman',
    category: 'Property Management',
    description: 'A property management solution for managing properties and rentals.',
    image: '/products/rentman.jpg',
    url: 'https://rentman.com.ng',
    status: 'Available',
  },
  {
    name: 'School Assistant',
    category: 'Education Technology',
    description: 'A school management platform built to support educational institutions.',
    image: '/products/schoolassist.png',
    url: 'https://schoolassist.ipyramidtech.com',
    status: 'Available',
  },
  {
    name: 'Feemap',
    category: 'Education & Finance',
    description: 'A school fee payment platform that supports installment-based payments.',
    image: '/products/feemap.png',
    status: 'In Development',
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-brand-900 font-semibold mb-3">
            OUR PRODUCTS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-950 mb-5">
            Explore Our Products
          </h1>

          <p className="text-slate-500 max-w-2xl mx-auto">
            Discover the digital solutions we're building to simplify
            operations and solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              category={product.category}
              description={product.description}
              image={product.image}
              url={product.url}
              status={product.status}
            />
          ))}
        </div>

      </div>
    </main>
  );
}