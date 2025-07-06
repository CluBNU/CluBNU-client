'use client';

import { Button } from '@/shared/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ClubCreateForm } from '@/features/clubs';

export default function CreateClubPage() {
  return (
    <>
      <div className="sticky top-(--top-navbar) flex">
        <Link href="/admin/club-management">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full">
            <ArrowLeft size={20} />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">동아리 생성</h1>
      </div>

      <main className="flex flex-col">
        <ClubCreateForm />
      </main>
    </>
  );
}
