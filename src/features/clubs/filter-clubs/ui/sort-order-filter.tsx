import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';

// 정렬 순서를 선택하는 드롭다운 리스트
interface IProps {
  selected: string;
  onSelect: (value: string) => void;
}
export default function SortOrderFilter({ selected, onSelect }: IProps) {
  const sortOptions = [
    { value: 'latest', label: '최신순' },
    { value: 'oldest', label: '오래된순' },
    { value: 'members', label: '가입자순' },
    { value: 'name', label: '동아리명순' },
  ];

  return (
    <Select
      value={selected}
      onValueChange={onSelect}>
      <SelectTrigger className="w-52 cursor-pointer">
        <SelectValue placeholder="정렬 기준" />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((option) => (
          <SelectItem
            className="cursor-pointer"
            key={option.value}
            value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
