import { useMemo } from 'react';
import type { IClub } from '@/entities/Club';

// 동아리 필터링
interface IProps {
  initialItems: IClub[];
  searchText: string;
  category: string;
  sortOrder?: string;
}
export default function useFilterClubs({
  initialItems,
  searchText,
  category,
  sortOrder = 'latest',
}: IProps) {
  return useMemo(() => {
    let filtered: IClub[] = initialItems;

    // 검색어로 필터링
    if (searchText) {
      const kw = searchText.toLowerCase();
      filtered = filtered.filter((item) => item.name.toLowerCase().includes(kw));
    }

    // 카테고리로 필터링
    if (category && category !== '전체') {
      filtered = filtered.filter((item) => item.category === category);
    }

    // 정렬 필터링
    if (sortOrder) {
      switch (sortOrder) {
        // 최신순
        case 'latest':
          filtered = [...filtered].sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          );
          break;
        // 오래된순
        case 'oldest':
          filtered = [...filtered].sort(
            (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
          );
          break;
        // 가입자순
        case 'members':
          filtered = [...filtered].sort((a, b) => b.memberCount - a.memberCount);
          break;
        // 동아리명순
        case 'name':
          filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'));
          break;
        // 기본값은 최신순
        default:
          filtered = [...filtered].sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          );
      }
    }

    return filtered;
  }, [initialItems, searchText, category, sortOrder]);
}
