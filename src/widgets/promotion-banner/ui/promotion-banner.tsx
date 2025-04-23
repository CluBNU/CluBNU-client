import Banner from '@/entities/Banner/ui/banner';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import { readPromotionBanner } from '../api/read-promotion-banner';
import { IPromotionBanner } from '../type';

export default async function PromotionBanner() {
  // const banners = await readPromotionBanner();
  // Mock data for banners
  const banners: IPromotionBanner[] = [
    {
      bannerId: 1,
      title: '신규 동아리 모집 중!',
      description: '다양한 분야의 신규 동아리에 지금 가입하세요.',
      imageUrl: '/placeholder.svg?height=400&width=1200',
      linkUrl: '/',
    },
    {
      bannerId: 2,
      title: '동아리 페스티벌 안내',
      description: '다음 달 개최되는 동아리 페스티벌에 참여하세요.',
      imageUrl: '/placeholder.svg?height=400&width=1200',
      linkUrl: '/',
    },
    {
      bannerId: 3,
      title: '우수 동아리 시상식',
      description: '올해의 우수 동아리를 확인하세요.',
      imageUrl: '/placeholder.svg?height=400&width=1200',
      linkUrl: '/',
    },
    {
      bannerId: 4,
      title: '우수 동아리 시상식',
      description: '올해의 우수 동아리를 확인하세요.',
      imageUrl: '/placeholder.svg?height=400&width=1200',
      linkUrl: '/',
    },
    {
      bannerId: 5,
      title: '우수 동아리 시상식',
      description: '올해의 우수 동아리를 확인하세요.',
      imageUrl: '/placeholder.svg?height=400&width=1200',
      linkUrl: '/',
    },
  ];

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {banners.map((bannerItem) => (
          <CarouselItem
            key={bannerItem.bannerId}
            className="basis-1/3">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl md:h-[400px]">
              <Banner bannerItem={bannerItem} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
