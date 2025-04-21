export type OAuthProvider = 'kakao';

// OAuth 제공자에 대한 config 정보
export interface IOAuthConfig {
  authUrl: string;
  clientId: string;
  redirectUri: string;
  responseType: string;
  scope?: string;
  imageSrc: string;
  imageAlt: string;
}
