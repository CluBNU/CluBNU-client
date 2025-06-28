import { ReactNode } from 'react';
import { AdminSidebar } from '@/widgets/admin/admin-sidebar';

export const metadata = {
  title: '관리자 페이지 | CluBNU',
  description: 'CluBNU 관리자 페이지입니다.',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
