import { IClub } from '../type';

// Mock data for clubs
const clubs = [
  {
    clubId: 1,
    name: '코딩 클럽',
    category: '학술',
    memberCount: 42,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
    createdAt: '2020-04-28T03:24:00',
  },
  {
    clubId: 2,
    name: '댄스 동아리',
    category: '문화',
    memberCount: 28,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
    createdAt: '2025-04-28T03:24:00',
  },
  {
    clubId: 3,
    name: '독서 모임',
    category: '문화',
    memberCount: 15,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
    createdAt: '2000-04-28T03:24:00',
  },
  {
    clubId: 4,
    name: '축구 동아리',
    category: '스포츠',
    memberCount: 22,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
    createdAt: '1999-04-28T03:24:00',
  },
  {
    clubId: 5,
    name: '사진찍고또찍는 동아리',
    category: '문화',
    memberCount: 18,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
    createdAt: '2015-04-28T03:24:00',
  },
  {
    clubId: 6,
    name: '토론 동아리',
    category: '학술',
    memberCount: 12,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
    createdAt: '2005-04-28T03:24:00',
  },
  {
    clubId: 7,
    name: '요리 클럽',
    category: '교양',
    memberCount: 20,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
    createdAt: '2021-04-28T03:24:00',
  },
  {
    clubId: 8,
    name: '음악 동아리',
    category: '문화',
    memberCount: 25,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
    createdAt: '2018-04-28T03:24:00',
  },
];
export default async function readClubs(): Promise<IClub[]> {
  // const res = await fetch(`${process.env.SERVER_URL}/clubs`, {
  //   method: 'GET',
  //   // cache: 'no-store',
  // });

  // if (!res.ok) {
  //   throw new Error('전체 동아리 정보를 가져오는 데 실패했습니다.');
  // }

  // return res.json() as Promise<IClub[]>;

  // 임시
  return new Promise<IClub[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(clubs);
    }, 1000);
  });
}
