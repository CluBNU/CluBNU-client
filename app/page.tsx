import { FilterableClubList } from '@/widgets/club-list';
import { readClubs } from '@/entities/Club';
import { PromotionBanner } from '@/widgets/promotion-banner';

const categories = ['전체', '교양', '학술', '문화', '봉사', '체육', '종교'];
export default async function MainPage() {
  const clubs = await readClubs();

  return (
    <div className="flex flex-col gap-8 pb-12">
      <h1 className="hidden">동아리를 검색하거나 필터링해보세요.</h1>

      {/* 프로모션 배너 */}
      <section className="p-2">
        <PromotionBanner />
      </section>
      {/* 동아리 목록 */}
      <section className="">
        <FilterableClubList
          initialItems={clubs}
          selectableCategories={categories}
        />
      </section>
    </div>
  );
}
