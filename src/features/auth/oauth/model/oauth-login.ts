import jwt from 'jsonwebtoken';

export interface IOAuthLoginResult {
  payload: {
    sub: string;
    role: string;
    nationality: string;
    regist_status: string;
  };
}

export default async function oAuthLogin(accessToken: string): Promise<IOAuthLoginResult> {
  console.log('🚀 ~ oAuthLogin ~ accessToken:', accessToken);
  try {
    // JWT 토큰을 디코딩하여 payload를 추출
    const decoded = jwt.decode(accessToken) as { [key: string]: any };

    // 디코딩한 payload에서 필요한 정보를 추출
    const { sub, role, nationality, regist_status, ...additionalData } = decoded;

    // 추출한 정보로 IOAuthLoginResult 반환
    const payload = {
      sub,
      role,
      nationality,
      regist_status,
    };

    return { payload };
  } catch (err) {
    console.error('OAuth login error:', err);
    throw err;
  }
}
