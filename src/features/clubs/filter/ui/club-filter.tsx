import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import { ArrowUpDown } from 'lucide-react';

export default function ClubFilter() {
  return (
    <Select defaultValue="newest">
      <SelectTrigger className="w-[180px]">
        <div className="flex items-center gap-2">
          <ArrowUpDown className="h-4 w-4" />
          <SelectValue placeholder="정렬" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">최신순</SelectItem>
        <SelectItem value="oldest">오래된순</SelectItem>
        <SelectItem value="members">회원많은순</SelectItem>
        <SelectItem value="name">이름순</SelectItem>
      </SelectContent>
    </Select>
  );
}
