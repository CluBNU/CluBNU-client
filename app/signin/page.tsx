import { OAuthProviderButton } from '@/features/auth/oauth/ui/oauth-provider-btn';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';

export default function SignInPage() {
  return (
    <div className="flex flex-grow items-center justify-center px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-sm font-bold tracking-tight text-gray-900">
            간편 로그인으로 시작하기
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <OAuthProviderButton />
        </CardContent>
      </Card>
    </div>
  );
}
