"use client";

import kakaoLogin from "@/features/auth/oauth/model/kakao-login";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function KakaoRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    async function handleAuth() {
      if (code) {
        await kakaoLogin({ authorizationCode: code });
        router.replace("/");
      }
    }
    
    handleAuth();
  }, [code, router]);

  return null;
}