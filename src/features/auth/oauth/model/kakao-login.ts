"use server";

import fetchKakaoLogin from "../api/kakao-api";

export interface IKakaoLoginParams {
  authorizationCode: string;
}

export interface IKakaoLoginResponse {
  // 응답 타입 정의 (서버 응답에 맞게 조정)
  accessToken?: string;
  userId?: string;
}

export default async function kakaoLogin ({ authorizationCode }: IKakaoLoginParams): Promise<IKakaoLoginResponse> {
  try {
    const data = await fetchKakaoLogin(authorizationCode);
    // 추가 비즈니스 로직이 필요하다면 여기에 구현
    // 예: 사용자 정보 처리, 세션 생성 등
    return data;
  } catch (err) {
    console.error("Kakao login error:", err);
    throw err;
  }
};