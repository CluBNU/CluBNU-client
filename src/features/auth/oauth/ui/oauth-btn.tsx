import Image from 'next/image';
import Link from 'next/link';
import { oauthConfigs } from '../model/config';
import { OAuthProvider } from '../types/type';
import { buildOAuthUrl } from '../utils/build-oauth-url';

export interface IOAuthButtonProps {
    provider: OAuthProvider;
    className?: string;
}
export function OAuthButton({ provider, className = '' }: IOAuthButtonProps) {
  const config = oauthConfigs[provider];
  const oauthUrl = buildOAuthUrl(config);

  return (
    <Link 
      href={oauthUrl}
      className={className}>
      <Image 
        src={config.imageSrc}
        alt={config.imageAlt}
        width={300}
        height={45}
      />
    </Link>
  );
}