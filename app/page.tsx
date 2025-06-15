import { FilterableClubList } from '@/widgets/club-list';
import { PromotionBanner } from '@/widgets/promotion-banner';
import { query } from '@/applications/apollo-client';
import { GET_CLUBS, IClub } from '@/entities/Club';

interface IResponseData {
  clubs: Pick<
    IClub,
    'clubId' | 'name' | 'category' | 'logoImageUrl' | 'memberCount' | 'createdAt'
  >[];
}

// PAGE: 홈화면
export default async function MainPage() {
  const {
    data: { clubs },
  } = await query<IResponseData>({ query: GET_CLUBS });

  return (
    <div className="flex flex-col gap-8 pb-12">
      <h1 className="hidden">동아리를 검색하거나 필터링해보세요.</h1>

      {/* 프로모션 배너 */}
      <section className="p-2">
        <PromotionBanner />
      </section>
      {/* 동아리 목록 */}
      <section className="">
        <FilterableClubList initialItems={clubs} />
      </section>
    </div>
  );
}
