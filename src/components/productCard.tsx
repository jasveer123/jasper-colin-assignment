import Image from 'next/image';
import { ProductCardProps } from '@/types/types';

export const ProductCard = ({
  title,
  description,
  imageUrl,
}: ProductCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-50 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-xl font-semibold text-center text-gray-900">
          {title}
        </h3>
      </div>
      <div className="p-6 pt-0">
        <p className="text-sm text-gray-600 text-center">{description}</p>
      </div>
      <div className="flex justify-center p-6">
        <button className="w-full bg-slate-300 cursor-pointer hover:shadow-lg transition-shadow duration-300 py-2 rounded-md">
          View More
        </button>
      </div>
    </div>
  );
};
