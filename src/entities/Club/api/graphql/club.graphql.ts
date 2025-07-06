import { gql } from '@apollo/client';

export const typeDefs = gql`
  input CreateClubInput {
    name: String!
    category: String!
    goal: String!
    loginId: String!
    password: String!
  }
`;

// 동아리 다건 조회 (홈화면)
export const GET_CLUBS = gql`
  query GetClubs {
    clubs {
      clubId
      name
      category
      logoImageUrl
      memberCount
      createdAt
    }
  }
`;

// 동아리 단건 프로필 조회 (상세화면)
export const GET_CLUB_PROFILE = gql`
  query GetClubProfile($clubId: Int!) {
    clubProfile(clubId: $clubId) {
      clubId
      name
      category
      logoImageUrl
      memberCount
      president
      location
      recruitmentPeriod {
        startDate
        endDate
      }
      goal
    }
  }
`;

// 동아리 단건 소개 조회 (상세화면)
export const GET_CLUB_INTRODUCTION = gql`
  query GetClubIntroduction($clubId: Int!) {
    clubIntroduction(clubId: $clubId) {
      clubId
      intro {
        image
        introduction
      }
    }
  }
`;

// // 동아리 단건 피드 조회 (상세화면)
// export const GET_CLUB_FEEDS = gql`
//   query GetClubFeeds($clubId: Int!) {
//     clubFeeds(clubId: $clubId) {
//       clubId
//       feed {
//         feedId
//         content
//         imageUrl
//         createdAt
//         updatedAt
//       }
//     }
//   }
// `;

// CREATE: 동아리 생성
export const CREATE_CLUB = gql`
  mutation CreateClub($input: CreateClubInput!) {
    createClub(input: $input) {
      clubId
      name
      category
      goal
    }
  }
`;
