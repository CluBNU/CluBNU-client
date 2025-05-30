'use client';

interface IProps {
  error: Error;
  reset: () => void;
}
export default function Error({ error, reset }: IProps) {
  return (
    <div className="flex h-[calc(var(--vh,1vh)*100)] w-full items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">알 수 없는 에러가 발생했습니다.</h2>
        <button
          onClick={() => reset()}
          className="bg-primary hover:bg-primary-accent mt-6 cursor-pointer rounded px-4 py-2 text-white">
          다시 시도
        </button>
      </div>
    </div>
  );
}
