'use client';

import { useState } from 'react';
import {
  CategoryFilter,
  SearchFilter,
  SortOrderFilter,
  useFilterClubs,
} from '@/features/clubs/filter-clubs';
import { ClubHomeCard } from '@/entities/Club';
import type { IClub } from '@/entities/Club';

// 필터링된 동아리 목록
interface IProps {
  initialItems: IClub[];
  selectableCategories: string[];
}
export default function FilterableClubList({ initialItems, selectableCategories }: IProps) {
  const [searchText, setSearchText] = useState(''); // 검색어 상태
  const [category, setCategory] = useState('전체'); // 분류 상태
  const [sortOrder, setSortOrder] = useState('latest'); // 정렬 상태

  // 필터링된 동아리 목록
  const filteredClubs = useFilterClubs({ initialItems, searchText, category, sortOrder });

  return (
    <>
      <div className="flex w-full flex-col items-center gap-4 p-2">
        {/* 검색어 필터 */}
        <SearchFilter
          value={searchText}
          onChange={setSearchText}
        />
        {/* 분류 필터 */}
        <CategoryFilter
          categories={selectableCategories}
          selected={category}
          onSelect={setCategory}
        />
      </div>
      <div className="desktop:px-12 laptop:px-10 tablet:px-6 w-full px-2">
        {/* 정렬 필터 */}
        <div className="ml-auto flex flex-row justify-end py-6">
          <SortOrderFilter
            selected={sortOrder}
            onSelect={setSortOrder}
          />
        </div>
        <ul className="desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 grid grid-cols-1 gap-4">
          {filteredClubs.map((item) => (
            <ClubHomeCard
              key={item.clubId}
              {...item}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
