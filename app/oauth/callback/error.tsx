'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useTransition } from 'react';
import { Button } from '@/shared/ui/button';
import { XCircle } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.error('에러가 발생했습니다.', error.message);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center p-4">
      <Card className="w-full max-w-md border-red-200 shadow-lg">
        <CardHeader className="flex flex-col items-center gap-2 pb-2">
          <XCircle className="h-12 w-12 text-red-500" />
          <CardTitle className="text-center text-xl font-bold">로그인에 실패했습니다.</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground pb-2 text-center">
          <p>로그인 중 문제가 발생했습니다. 다시 시도하거나 홈으로 이동하세요.</p>
        </CardContent>
        <CardFooter className="flex justify-center gap-4 pt-2">
          <Button
            variant="default"
            disabled={isPending}
            onClick={() => {
              startTransition(() => {
                router.replace(`/signin`);
                reset();
              });
            }}>
            다시 시도
          </Button>
          <Button
            variant="outline"
            disabled={isPending}
            onClick={() => {
              startTransition(() => {
                router.replace(`/`);
                reset();
              });
            }}>
            홈으로
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
