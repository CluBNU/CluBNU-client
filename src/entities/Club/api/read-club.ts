import { IClub } from '../type';

// Mock data for a club
const club = {
  clubId: 1,
  name: '극예술 연구회(시네씨아)',
  category: '문화',
  likes: 42,
  memberCount: 30,
  president: '홍길동',
  contact: '010-1234-5678',
  location: '학생회관 301호',
  // recruitmentPeriod: {
  //   startDate: '2024-03-01',
  //   endDate: '2024-03-15',
  // },
  recruitmentPeriod: null,
  goal: '청인과 농인 간 소통의 활성화, 수어와 농인에 대한 인식 개선',
  createdAt: '2023-03-01',
  logo: '/images/club/default-club-logo-image.webp',
};
export default async function readClub({ clubId }: { clubId: string }): Promise<IClub> {
  // const res = await fetch(`${process.env.SERVER_URL}/club/{id}`, {
  //   method: 'GET',
  //   // cache: 'no-store',
  // });

  // if (!res.ok) {
  //   throw new Error('동아리 정보를 가져오는 데 실패했습니다.');
  // }

  // return res.json() as Promise<IClub[]>;

  // 임시
  return new Promise<IClub>((resolve, reject) => {
    setTimeout(() => {
      resolve(club);
    }, 500);
  });
}
