import { ArrowUpRight, Clock } from 'lucide-react';

type ProductProps = {
  name: string;
  category: string;
  description: string;
  image: string;
  url?: string;
  status: 'Available' | 'In Development';
};

export default function ProductCard({
  name,
  category,
  description,
  image,
  url,
  status,
}: ProductProps) {
  const isAvailable = status === 'Available' && Boolean(url);

  return (
    <div className="group bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Product Image */}
      <div className="mb-6 overflow-hidden rounded-2xl bg-brand-50">
        <img
          src={image}
          alt={`${name} preview`}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Category and Status */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <span className="text-sm font-semibold text-brand-950 bg-brand-50 px-4 py-2 rounded-full">
          {category}
        </span>

        <span
          className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap ${
            isAvailable
              ? 'bg-green-50 text-green-700'
              : 'bg-amber-50 text-amber-700'
          }`}
        >
          {status}
        </span>
      </div>

      {/* Product Name */}
      <h2 className="text-2xl font-bold text-brand-950 mb-3">
        {name}
      </h2>

      {/* Description */}
      <p className="text-slate-500 leading-relaxed mb-7">
        {description}
      </p>

      {/* Product Link */}
      {isAvailable ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-900 font-semibold hover:text-brand-800 transition-colors"
        >
          Visit Product
          <ArrowUpRight size={18} />
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 text-slate-400 font-semibold">
          Coming Soon
          <Clock size={18} />
        </span>
      )}
    </div>
  );
}