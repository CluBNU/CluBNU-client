export interface IClub {
  clubId: number; // 동아리 ID
  name: string; // 동아리 이름
  category: string; // 동아리 분과
  description?: string; // 동아리 설명
  logoImageUrl?: string; // 동아리 로고 이미지 URL
  memberCount: number; // 동아리 회원 수
  objective?: string; // 동아리 목표
  createdAt?: string; // 동아리 생성일
  updatedAt?: string; // 동아리 수정일
  deletedAt?: string; // 동아리 삭제일
  isPublic?: boolean; // 공개 여부
  isDeleted?: boolean; // 삭제 여부
  isFavorite?: boolean; // 즐겨찾기 여부
}
