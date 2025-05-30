import LoadingSpinner from '@/shared/ui/loading-spinner';

export default function Loading() {
  return (
    <div className="flex h-[calc(var(--vh,1vh)*100)] w-full items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
