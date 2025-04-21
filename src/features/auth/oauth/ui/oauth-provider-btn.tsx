import { OAuthButton } from './oauth-btn';

export function OAuthProviderButton({ className = '' }) {
  return (
    <OAuthButton
      provider="kakao"
      className={className}
    />
  );
}
