import { Input } from '@/shared/ui/input';
import { Search } from 'lucide-react';

// 동아리명 검색어 입력창
interface IProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}
export default function SearchFilter({
  value,
  onChange,
  placeholder = '검색어를 입력하세요',
}: IProps) {
  return (
    <div className="relative m-4 w-[30rem] max-w-[50rem] min-w-[20rem]">
      <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
      <Input
        placeholder={placeholder}
        className="pl-12"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
