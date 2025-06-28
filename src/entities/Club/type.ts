export interface IClubProfile {
  clubId: number; // 동아리 ID
  name: string; // 동아리 이름
  category: string; // 동아리 분과
  logoImageUrl?: string; // 동아리 로고 이미지 URL
  memberCount: number; // 동아리 회원 수
  goal?: string; // 동아리 목표
  location?: string; // 동아리 위치
  recruitmentPeriod?: {
    startDate: string; // 모집 시작일
    endDate: string; // 모집 종료일
  };
  president?: string; // 회장 이름
}

export interface IClub extends IClubProfile {
  description: string; // 동아리 설명
  createdAt: string; // 동아리 개설일
  // fix: 생성일 개설일 구별 필요: createdAt을 생성일로 전체적으로 바꿔야 함 + 개설일은 별도로 추가
  // createdAt: string; // 동아리 생성일
  intro: {
    image?: string; // 동아리 소개 이미지 URL
    introduction: string; // 동아리 소개 내용
  };
  feed?: IClubFeed[];
}

export interface IClubFeed {
  feedId: number; // 피드 ID
  content: string; // 피드 내용
  imageUrl?: string; // 피드 이미지 URL
}

export interface IClubFormState {
  success: boolean;
  message: string;
  data: unknown | null;
  shouldRedirect?: boolean;
  redirectTo?: string;
}
