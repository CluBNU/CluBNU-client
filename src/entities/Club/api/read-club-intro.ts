import { IClub } from '../type';

// Mock data for a club introduction
const clubIntro = {
  clubId: 1,
  image: '/images/club/default-club-logo-image.webp',
  introduction: '우리 동아리는... 주요 활동 내용... 이런 분을 찾습니다...',
};
export default async function readClubIntro({
  clubId,
}: {
  clubId: number;
}): Promise<IClub['intro']> {
  // const res = await fetch(`${process.env.SERVER_URL}/club/{id}/intro`, {
  //   method: 'GET',
  //   // cache: 'no-store',
  // });

  // if (!res.ok) {
  //   throw new Error('동아리 소개를 가져오는 데 실패했습니다.');
  // }

  // return res.json() as Promise<IClub[]>;

  // 임시
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(clubIntro);
    }, 500);
  });
}
