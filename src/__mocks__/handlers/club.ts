import { graphql, HttpResponse } from 'msw';
import { clubs, clubProfile, clubIntroduction } from '../data/club';

export const clubHandlers = [
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
