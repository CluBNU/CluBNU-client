import { Button } from '@/shared/ui/button';

// 동아리 분류를 선택하는 버튼 모음
interface IProps {
  categories: string[];
  selected: string;
  onSelect: (c: string) => void;
}
export default function CategoryFilter({ categories, selected, onSelect }: IProps) {
  return (
    <div className="m-4 flex w-fit flex-row gap-4">
      {categories.map((categoryItem) => (
        <Button
          key={categoryItem}
          onClick={() => onSelect(categoryItem)}
          className={`text-md h-[2.8rem] w-[5rem] cursor-pointer rounded-2xl hover:bg-rose-800 hover:text-white ${categoryItem === selected ? 'bg-rose-800 text-white' : 'bg-gray-300 text-gray-500'}`}>
          {categoryItem}
        </Button>
      ))}
    </div>
  );
}
