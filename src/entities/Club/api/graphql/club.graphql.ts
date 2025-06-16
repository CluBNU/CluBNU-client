import { gql } from '@apollo/client';

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

// export const CREATE_CLUB = gql`
//   mutation CreateClub($input: CreateClubInput!) {
//     createClub(input: $input) {
//       clubId
//       name
//     }
//   }
// `;

// export const UPDATE_CLUB = gql`
//   mutation UpdateClub($clubId: Int!, $input: UpdateClubInput!) {
//     updateClub(clubId: $clubId, input: $input) {
//       clubId
//       name
//     }
//   }
// `;

// export const DELETE_CLUB = gql`
//   mutation DeleteClub($clubId: Int!) {
//     deleteClub(clubId: $clubId)
//   }
// `;

// export const CREATE_CLUB_FEED = gql`
//   mutation CreateClubFeed($clubId: Int!, $input: CreateClubFeedInput!) {
//     createClubFeed(clubId: $clubId, input: $input) {
//       feedId
//       content
//     }
//   }
// `;

// export const UPDATE_CLUB_FEED = gql`
//   mutation UpdateClubFeed($feedId: Int!, $input: UpdateClubFeedInput!) {
//     updateClubFeed(feedId: $feedId, input: $input) {
//       feedId
//       content
//     }
//   }
// `;

// export const DELETE_CLUB_FEED = gql`
//   mutation DeleteClubFeed($feedId: Int!) {
//     deleteClubFeed(feedId: $feedId)
//   }
// `;

// export const typeDefs = gql`
//   type Club {
//     clubId: Int!
//     name: String!
//     category: String!
//     logoImageUrl: String
//     memberCount: Int!
//     goal: String
//     createdAt: String!
//     updatedAt: String
//     deletedAt: String
//     isPublic: Boolean
//     isDeleted: Boolean
//     isFavorite: Boolean
//     location: String
//     recruitmentPeriod: RecruitmentPeriod
//     president: String
//     intro: Intro!
//     feed: [ClubFeed!]!
//   }

//   type RecruitmentPeriod {
//     startDate: String!
//     endDate: String!
//   }

//   type Intro {
//     image: String
//     introduction: String!
//   }

//   type ClubFeed {
//     feedId: Int!
//     content: String!
//     imageUrl: String
//     createdAt: String!
//     updatedAt: String
//   }

//   type Query {
//     clubs: [Club!]!
//     club(clubId: Int!): Club
//   }

//   type Mutation {
//     createClub(input: CreateClubInput!): Club!
//     updateClub(clubId: Int!, input: UpdateClubInput!): Club!
//     deleteClub(clubId: Int!): Boolean!
//     createClubFeed(clubId: Int!, input: CreateClubFeedInput!): ClubFeed!
//     updateClubFeed(feedId: Int!, input: UpdateClubFeedInput!): ClubFeed!
//     deleteClubFeed(feedId: Int!): Boolean!
//   }

//   input CreateRecruitmentPeriodInput {
//     startDate: String!
//     endDate: String!
//   }

//   input CreateIntroInput {
//     image: String
//     introduction: String!
//   }

//   input CreateClubInput {
//     name: String!
//     category: String!
//     logoImageUrl: String
//     memberCount: Int!
//     goal: String
//     isPublic: Boolean
//     location: String
//     recruitmentPeriod: CreateRecruitmentPeriodInput
//     president: String
//     intro: CreateIntroInput!
//   }

//   input UpdateRecruitmentPeriodInput {
//     startDate: String
//     endDate: String
//   }

//   input UpdateIntroInput {
//     image: String
//     introduction: String
//   }

//   input UpdateClubInput {
//     name: String
//     category: String
//     logoImageUrl: String
//     memberCount: Int
//     goal: String
//     isPublic: Boolean
//     location: String
//     recruitmentPeriod: UpdateRecruitmentPeriodInput
//     president: String
//     intro: UpdateIntroInput
//   }

//   input CreateClubFeedInput {
//     content: String!
//     imageUrl: String
//   }

//   input UpdateClubFeedInput {
//     content: String
//     imageUrl: String
//   }
// `;
