import { IClub } from '@/entities/Club/type';

export async function readClubs(): Promise<IClub[]> {
  const res = await fetch(`${process.env.SERVER_URL}/clubs`, {
    method: 'GET',
    // cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('전체 동아리 정보를 가져오는 데 실패했습니다.');
  }

  return res.json() as Promise<IClub[]>;
}
