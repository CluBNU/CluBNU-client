import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { ClubManagementTable } from '@/features/clubs/manage-clubs';

export default function ClubManagementPage() {
  return (
    <>
      <h1 className="hidden text-3xl font-bold">동아리 관리</h1>
      <div className="flex flex-col gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <ClubManagementTable />
        <div className="flex justify-end">
          <Link href="/admin/club-management/create">
            <Button className="flex items-center gap-2">
              <span>동아리 생성</span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
