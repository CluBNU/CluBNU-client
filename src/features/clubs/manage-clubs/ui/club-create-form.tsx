'use client';

import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { CLUB_CATEGORIES, createClubAction } from '@/entities/Club';
import { Input } from '@/shared/ui/input';
import { useEffect } from 'react';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import { Label } from '@/shared/ui/label';
import { Textarea } from '@/shared/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import LoadingSpinner from '@/shared/ui/loading-spinner';

export default function ClubCreateForm() {
  const router = useRouter();

  const initialState = {
    success: false,
    message: '',
    data: null,
  };

  const [state, formAction, isPending] = useActionState(createClubAction, initialState);

  // 성공 시 리디렉션 처리
  useEffect(() => {
    if (state?.shouldRedirect && state.redirectTo) {
      router.push(state.redirectTo);
    }
  }, [state, router]);

  return (
    <Card className="max-w-2xl">
      <h1 className="hidden">새로운 동아리를 만들어보세요</h1>
      <CardContent>
        {state?.message && (
          <div
            className={`mb-4 rounded-md p-4 ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {state.message}
          </div>
        )}
        <form
          action={formAction}
          className="space-y-6">
          {/* 동아리 이름 */}
          <div className="space-y-2">
            <Label htmlFor="name">동아리 이름</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="동아리 이름을 입력하세요"
              required
            />
          </div>

          {/* 동아리 카테고리 */}
          <div className="space-y-2">
            <Label htmlFor="category">카테고리</Label>
            <Select
              name="category"
              required>
              <SelectTrigger>
                <SelectValue placeholder="카테고리를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                {CLUB_CATEGORIES.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 동아리 목표 */}
          <div className="space-y-2">
            <Label htmlFor="goal">동아리 목표</Label>
            <Textarea
              id="goal"
              name="goal"
              placeholder="동아리의 목표와 활동 방향을 설명해주세요"
              className="min-h-[100px]"
              required
            />
          </div>

          {/* 동아리 관리용 로그인 ID */}
          <div className="space-y-2">
            <Label htmlFor="loginId">로그인 ID</Label>
            <Input
              id="loginId"
              name="loginId"
              type="text"
              placeholder="동아리 관리용 로그인 ID"
              required
            />
          </div>

          {/* 동아리 관리용 비밀번호 */}
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}>
            {isPending ? (
              <LoadingSpinner
                width={20}
                color="white"
              />
            ) : (
              '동아리 생성하기'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
