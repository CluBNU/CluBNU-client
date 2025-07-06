'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Card } from '@/shared/ui/card';
import { Home, Users, Settings, BarChart3, FileText, Shield } from 'lucide-react';

const menuItems = [
  {
    title: '대시보드',
    href: '/admin',
    icon: Home,
  },
  {
    title: '동아리 관리',
    href: '/admin/club-management',
    icon: Users,
  },
  {
    title: '사용자 관리',
    href: '/admin/user-management',
    icon: Shield,
  },
  {
    title: '통계',
    href: '/admin/analytics',
    icon: BarChart3,
  },
  {
    title: '신고 관리',
    href: '/admin/reports',
    icon: FileText,
  },
  {
    title: '설정',
    href: '/admin/settings',
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Card className="h-fit w-64 gap-0 px-4 py-6">
      <span className="text-md mb-4 pl-2 font-semibold">관리자 메뉴</span>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${
                isActive
                  ? 'bg-blue-100 font-medium text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}>
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </Card>
  );
}

// 모바일용 하단 네비게이션
export function AdminBottomNav() {
  const pathname = usePathname();

  return (
    <div className="tablet:hidden fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white">
      <div className="scrollbar-hide flex overflow-x-auto px-2 py-2">
        <div className="flex min-w-max gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-w-[80px] flex-col items-center justify-center rounded-md px-3 py-2 transition-colors ${
                  isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}>
                <Icon className="mb-1 h-5 w-5" />
                <span className="truncate text-xs font-medium">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
