import { IBanner } from '../type';

interface IBannerProps {
  bannerItem: IBanner;
}
export default function Banner({ bannerItem }: IBannerProps) {
  return (
    <div key={bannerItem.bannerId}>
      <img
        src={bannerItem.imageUrl || '/placeholder.svg'}
        alt={bannerItem.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
        <h2 className="mb-2 text-2xl font-bold md:text-3xl">{bannerItem.title}</h2>
        <p className="text-sm md:text-base">{bannerItem.description}</p>
      </div>
    </div>
  );
}
