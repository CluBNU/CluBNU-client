'use client';

import kakaoLogin from '@/features/auth/oauth/model/kakao-login';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function KakaoRedirect({ code }: { code: string }) {
  const router = useRouter();

  useEffect(() => {
    async function handleAuth() {
      if (code) {
        await kakaoLogin({ authorizationCode: code });
        router.replace('/');
      }
    }
    handleAuth();
  }, [code, router]);

  return null;
}
