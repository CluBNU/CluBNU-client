import type { ReactNode } from 'react';
import { AdminSidebar, AdminBottomNav } from '@/widgets/admin/admin-sidebar';

export const metadata = {
  title: '관리자 페이지 | CluBNU',
  description: 'CluBNU 관리자 페이지입니다.',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pb-12">
      {/* 태블릿 너비 이상 레이아웃 */}
      <div className="tablet:flex hidden min-h-[calc(100vh-var(--h-top-navbar))]">
        {/* 사이드바 */}
        <aside className="w-72 bg-gray-50 p-4">
          <AdminSidebar />
        </aside>

        {/* 메인 컨텐츠 */}
        <main className="flex-1 p-4">{children}</main>
      </div>

      {/* 태블릿 너비 이하 레이아웃 */}
      <div className="tablet:hidden">
        {/* 메인 컨텐츠 */}
        <main className="p-4 pb-20">{children}</main>

        {/* 하단 네비게이션 */}
        <AdminBottomNav />
      </div>
    </div>
  );
}
