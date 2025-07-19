import { graphql, HttpResponse, http } from 'msw';
import { clubs, clubProfile, clubIntroduction } from '../data/club';

export const clubHandlers = [
  // POST 요청 처리 (서버 액션)
  http.post('http://localhost:8080/api/graphql', async ({ request }) => {
    try {
      // 요청 본문 파싱
      const body = (await request.json()) as {
        query?: string;
        variables?: {
          input?: {
            name: string;
            category: string;
            goal: string;
            loginId: string;
            password: string;
          };
        };
      };

      // CreateClub 뮤테이션 처리
      if (body?.query?.includes('mutation CreateClub')) {
        const input = body?.variables?.input;

        if (!input) {
          return HttpResponse.json(
            {
              errors: [{ message: 'Invalid input' }],
            },
            { status: 400 },
          );
        }

        const { name, category, goal } = input;

        // 새 동아리 ID 생성
        const newClubId = Math.max(...clubs.map((club) => club.clubId)) + 1;

        // 새 동아리 객체 생성
        const newClub = {
          clubId: newClubId,
          name,
          category,
          goal,
          logoImageUrl: '',
          memberCount: 0,
          createdAt: new Date().toISOString(),
        };

        return HttpResponse.json({
          data: {
            createClub: newClub,
          },
        });
      }

      // DeleteClub 뮤테이션 처리
      if (body?.query?.includes('mutation DeleteClub')) {
        const { clubId } = body?.variables;

        return HttpResponse.json({
          data: {
            deleteClub: true,
          },
        });
      }

      // 다른 GraphQL 요청은 기본 핸들러로 처리
      return HttpResponse.text('Unhandled GraphQL request', { status: 404 });
    } catch (error) {
      console.error('Error processing request:', error);
      return HttpResponse.json(
        {
          errors: [{ message: 'Invalid request' }],
        },
        { status: 400 },
      );
    }
  }),

  // 동아리 다건 조회 (홈화면)
  graphql.query('GetClubs', () => {
    return HttpResponse.json({
      data: {
        clubs: clubs.map((club) => ({
          clubId: club.clubId,
          name: club.name,
          category: club.category,
          logoImageUrl: club.logoImageUrl,
          memberCount: club.memberCount,
          createdAt: club.createdAt,
        })),
      },
    });
  }),

  // 동아리 단건 프로필 조회 (상세화면)
  graphql.query('GetClubProfile', ({ variables }) => {
    const { clubId } = variables;

    // SELECT: clubId가 일치하는 경우에만 데이터 반환
    if (clubId === clubProfile.clubId) {
      return HttpResponse.json({
        data: {
          clubProfile,
        },
      });
    }

    return HttpResponse.json(
      {
        errors: [
          {
            message: '동아리를 찾을 수 없습니다.',
            extensions: {
              code: 'NOT_FOUND',
            },
          },
        ],
      },
      { status: 404 },
    );
  }),

  // 동아리 단건 소개 조회 (상세화면)
  graphql.query('GetClubIntroduction', ({ variables }) => {
    const { clubId } = variables;

    // SELECT: clubId가 일치하는 경우에만 데이터 반환
    if (clubId === clubIntroduction.clubId) {
      return HttpResponse.json({
        data: {
          clubIntroduction,
        },
      });
    }

    return HttpResponse.json(
      {
        errors: [
          {
            message: '동아리 소개를 찾을 수 없습니다.',
            extensions: {
              code: 'NOT_FOUND',
            },
          },
        ],
      },
      { status: 404 },
    );
  }),

  // // 동아리 단건 피드 조회 (상세화면)
  // graphql.query('GetClubFeeds', ({ variables }) => {
  //   const { clubId } = variables;

  //   return HttpResponse.json({
  //     data: {
  //       clubFeeds: {
  //         feed: clubFeeds.filter((feed) => feed.clubId === clubId),
  //       },
  //     },
  //   });

  //   return HttpResponse.json(
  //     {
  //       errors: [
  //         {
  //           message: '동아리 피드를 찾을 수 없습니다.',
  //           extensions: {
  //             code: 'NOT_FOUND',
  //           },
  //         },
  //       ],
  //     },
  //     { status: 404 },
  //   );
  // }),
];
