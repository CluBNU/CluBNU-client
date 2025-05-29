import { oAuthLogin } from '@/features/auth/oauth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function OAuthRedirectPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken');
  if (!accessToken) {
    throw new Error('인가 실패');
  }

  const { payload } = await oAuthLogin(accessToken.value);
  if (!payload) {
    throw new Error('인가 실패');
  }

  const { sub, role, nationality, regist_status } = payload;

  // 회원가입 미완료
  if (regist_status === process.env.REGIST_STATUS_NOT_REGISTERED) {
    redirect(`/signup`);
  }
}
