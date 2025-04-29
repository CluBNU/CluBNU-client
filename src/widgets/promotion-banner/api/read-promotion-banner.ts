import { IPromotionBanner } from '../type';

export default async function readPromotionBanner(): Promise<IPromotionBanner[]> {
  const res = await fetch(`${process.env.SERVER_URL}/banners`, {
    method: 'GET',
    // cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('프로모션 배너 정보를 가져오는 데 실패했습니다.');
  }

  return res.json() as Promise<IPromotionBanner[]>;
}
