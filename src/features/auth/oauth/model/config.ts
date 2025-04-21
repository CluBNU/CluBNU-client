import { IOAuthConfig, OAuthProvider } from "../types/type";

export const oauthConfigs: Record<OAuthProvider, IOAuthConfig> = {
  kakao: {
    authUrl: 'https://kauth.kakao.com/oauth/authorize',
    clientId: process.env.KAKAO_CLIENT_ID || '',
    redirectUri: process.env.KAKAO_REDIRECT_URI || '',
    responseType: 'code',
    imageSrc: '/images/auth/kakao_login_large_wide.webp',
    imageAlt: '카카오 로그인 버튼'
  },
};