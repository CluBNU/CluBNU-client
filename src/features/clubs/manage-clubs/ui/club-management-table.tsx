'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Badge } from '@/shared/ui/badge';
import { Card } from '@/shared/ui/card';
import { Edit, Trash2, Search } from 'lucide-react';
import type { IAdminClub } from '../type';
import Image from 'next/image';

// Mock data - 실제로는 API에서 가져올 데이터
const mockClubs: IAdminClub[] = [
  {
    clubId: 1,
    name: '컴퓨터공학과 학회',
    category: '학술',
    logoImageUrl: '/images/club/default-club-logo-image.webp',
    memberCount: 25,
    goal: '프로그래밍 실력 향상',
    location: '공학관 301호',
  },

  {
    clubId: 2,
    name: '사진 동아리',
    category: '문화/예술',
    logoImageUrl: '/images/club/default-club-logo-image.webp',
    memberCount: 18,
    goal: '사진 기술 향상과 작품 활동',
    location: '예술관 205호',
  },
  {
    clubId: 3,
    name: '축구 동아리',
    category: '스포츠',
    logoImageUrl: '/images/club/default-club-logo-image.webp',
    memberCount: 30,
    goal: '건강한 체력 증진과 팀워크 향상',
    location: '체육관',
  },
];

export default function ClubManagementTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [clubs] = useState<IAdminClub[]>(mockClubs);

  const filteredClubs = clubs.filter(
    (club) =>
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">동아리 관리</h1>
          <p className="text-gray-600">
            등록된 동아리를 관리하고 새로운 동아리를 추가할 수 있습니다.
          </p>
        </div>
      </div>

      {/* 검색 */}
      <Card className="p-4">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-gray-400" />
          <Input
            placeholder="동아리명 또는 분과로 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
      </Card>

      {/* 테이블 */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left font-medium">동아리명</th>
                <th className="p-4 text-left font-medium">분과</th>
                <th className="p-4 text-left font-medium">회원 수</th>
                <th className="p-4 text-left font-medium">상태</th>
                <th className="p-4 text-left font-medium">생성일</th>
                <th className="p-4 text-left font-medium">작업</th>
              </tr>
            </thead>
            <tbody>
              {filteredClubs.map((club) => (
                <tr
                  key={club.clubId}
                  className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={club.logoImageUrl || '/images/club/default-club-logo-image.webp'}
                        alt={club.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium">{club.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge variant="outline">{club.category}</Badge>
                  </td>
                  <td className="p-4">{club.memberCount}명</td>
                  {/* <td className="p-4">{new Date(club.개설일).toLocaleDateString('ko-KR')}</td> */}
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredClubs.length === 0 && (
          <div className="py-8 text-center text-gray-500">검색 결과가 없습니다.</div>
        )}
      </Card>
    </div>
  );
}
