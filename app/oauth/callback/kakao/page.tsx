import KakaoRedirect from '@/features/auth/oauth/ui/kakao-redirect';
import { redirect } from 'next/navigation';

export default async function KakaoRedirectPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { code, error, error_description: errorDescription } = await searchParams;

  // 성공 처리
  if (code) {
    return <KakaoRedirect code={code} />;
  }

  // 에러 처리
  if (error && errorDescription) {
    // 사용자가 로그인을 취소
    if (error === 'access_denied' && errorDescription === 'User denied access') {
      redirect('/');
    }
    // 가장 가까운 error 페이지로 에러 던짐
    throw new Error(`${error}: ${errorDescription}`);
  }

  throw new Error(`알 수 없는 에러`);
}
