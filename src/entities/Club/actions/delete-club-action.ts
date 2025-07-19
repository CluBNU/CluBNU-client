'use server';

interface IDeleteClubState {
  success: boolean;
  message: string;
  shouldRedirect: boolean;
  redirectTo?: string;
}

/**
 * SERVER ACTION: 동아리 삭제
 * @param _ 삭제 응답 상태
 * @param formData 폼 데이터
 * @returns 삭제 응답 상태
 */
export async function deleteClubAction(_: IDeleteClubState, formData: FormData) {
  const clubId = formData.get('clubId') as string;

  if (!clubId) {
    return {
      success: false,
      message: '삭제할 동아리가 없습니다.',
      shouldRedirect: false,
    };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
            mutation DeleteClub($clubId: ID!) {
              deleteClub(clubId: $clubId)
            }
          `,
        variables: {
          clubId,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return {
      success: true,
      message: '동아리가 성공적으로 삭제되었습니다.',
      shouldRedirect: true,
      redirectTo: '/admin/club-management',
    };
  } catch (error) {
    return {
      success: false,
      message: `동아리 삭제에 실패했습니다: ${error instanceof Error ? error.message : '알 수 없는 오류'}`,
      shouldRedirect: false,
    };
  }
}
