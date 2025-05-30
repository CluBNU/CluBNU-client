// 배너 타입 정의
export interface IBanner {
  bannerId: number; // 배너 ID
  title?: string; // 배너 제목
  description?: string; // 배너 설명
  imageUrl?: string; // 배너 이미지 URL
  color?: string; // 배너 색상
  linkUrl: string; // 배너 링크 URL
}
