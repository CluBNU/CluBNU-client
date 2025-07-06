'use server';

import { revalidatePath } from 'next/cache';
import type { IClubFormState } from '../type';

export async function createClubAction(
  _: IClubFormState | null,
  formData: FormData,
): Promise<IClubFormState> {
  try {
    const name = formData.get('name') as string;
    const category = formData.get('category') as string;
    const goal = formData.get('goal') as string;
    const loginId = formData.get('loginId') as string;
    const password = formData.get('password') as string;

    if (!name || !category || !goal || !loginId || !password) {
      return {
        success: false,
        data: null,
        message: '모든 필수 항목을 입력해주세요.',
        shouldRedirect: false,
      };
    }

    // GRAPHQL(fetch)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          mutation CreateClub($input: CreateClubInput!) {
            createClub(input: $input) {
              clubId
              name
              category
              goal
            }
          }
        `,
        variables: {
          input: {
            name,
            category,
            goal,
            loginId,
            password,
          },
        },
      }),
    });

    const result = await response.json();

    if (result.errors) {
      throw new Error(result.errors[0].message);
    }

    // CACHE: 캐시 무효화 (동아리 목록 페이지 갱신)
    revalidatePath('/admin/club-management');

    return {
      success: true,
      data: result.data.createClub,
      message: '동아리가 성공적으로 생성되었습니다.',
      shouldRedirect: true,
      redirectTo: '/admin/club-management',
    };
  } catch (error) {
    console.error('동아리 생성 실패:', error);
    return {
      success: false,
      data: null,
      message: `동아리 생성에 실패했습니다: ${error instanceof Error ? error.message : '알 수 없는 오류'}`,
      shouldRedirect: false,
    };
  }
}
