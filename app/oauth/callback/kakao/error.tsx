'use client';

import { useRouter } from 'next/navigation';
import { startTransition, useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error('에러가 발생했습니다.', error.message);
  }, [error]);

  return (
    <div>
      <h2>카카오 로그인에 실패했습니다.</h2>
      <p>
        페이지를 새로고침 해주세요
        <button
          onClick={() => {
            startTransition(() => {
              router.refresh(); // 현재 페이지에 필요한 서버 컴포넌트들을 다시 불러옴
              reset();
            });
          }}>
          다시 시도
        </button>
      </p>
    </div>
  );
}
