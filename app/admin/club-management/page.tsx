import { Button } from '@/shared/ui/button';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { ClubManagementTable } from '@/features/clubs/manage-clubs';

export default function ClubManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">동아리 관리</h1>
        <Link href="/admin/club-management/create">
          <Button className="flex items-center gap-2">
            <PlusCircle size={18} />
            <span>동아리 생성</span>
          </Button>
        </Link>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <ClubManagementTable />
      </div>
    </div>
  );
}
