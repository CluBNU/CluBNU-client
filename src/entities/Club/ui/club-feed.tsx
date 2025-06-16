'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function ClubFeed({ clubId }: { clubId: number }) {
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !loading) {
      loadMoreItems();
    }
  }, [inView]);

  const loadMoreItems = async () => {
    setLoading(true);

    // 실제 구현에서는 API 호출로 대체
    // 로딩 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newItems = Array.from({ length: 6 }, (_, i) => ({
      id: `${clubId}-${items.length + i}`,
      image: '/placeholder.svg',
      description: `활동 내용 ${items.length + i + 1}`,
    }));

    setItems((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={item.image || '/placeholder.svg'}
              alt={item.description}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* 로딩 인디케이터 */}
      <div
        ref={ref}
        className="flex w-full justify-center py-4">
        {loading ? (
          <div className="border-primary h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
        ) : items.length > 0 ? (
          <p className="text-muted-foreground text-sm">스크롤하여 더 보기</p>
        ) : (
          <p className="text-muted-foreground text-sm">활동 피드가 없습니다</p>
        )}
      </div>
    </div>
  );
}
