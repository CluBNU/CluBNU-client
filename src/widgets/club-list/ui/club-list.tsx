import ClubHomeCard from '@/entities/Club/ui/club-home-card';
import { readClubs } from '../api/read-club';

// Mock data for clubs
const clubs = [
  {
    clubId: 1,
    name: '코딩 클럽',
    category: '기술',
    memberCount: 42,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
  },
  {
    clubId: 2,
    name: '댄스 동아리',
    category: '예술',
    memberCount: 28,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
  },
  {
    clubId: 3,
    name: '독서 모임',
    category: '문화',
    memberCount: 15,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
  },
  {
    clubId: 4,
    name: '축구 동아리',
    category: '스포츠',
    memberCount: 22,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
  },
  {
    clubId: 5,
    name: '사진 동아리',
    category: '예술',
    memberCount: 18,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
  },
  {
    clubId: 6,
    name: '토론 동아리',
    category: '학술',
    memberCount: 12,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
  },
  {
    clubId: 7,
    name: '요리 클럽',
    category: '취미',
    memberCount: 20,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
  },
  {
    clubId: 8,
    name: '음악 동아리',
    category: '예술',
    memberCount: 25,
    logoImageUrl: '/images/club/default-club-logo-image.webp',
  },
];

export default async function ClubList() {
  //   const clubs = await readClubs();

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-muted-foreground text-sm">
          총 <span className="font-bold">{clubs.length}</span>개의 동아리
        </p>
      </div>
      <ul className="desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-3 grid grid-cols-1 gap-4">
        {clubs.map((club) => (
          <ClubHomeCard
            key={club.clubId}
            {...club}
          />
        ))}
      </ul>
    </>
  );
}
