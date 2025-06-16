import { ClubDetailTabs } from '@/widgets/club-detail';
import { Suspense } from 'react';
import { ApplyButtonSkeleton } from '@/entities/Club';
import {
  ClubProfile,
  ClubApplyButton,
  GET_CLUB_PROFILE,
  IClub,
  ClubProfileSkeleton,
} from '@/entities/Club';
import { query } from '@/applications/apollo-client';
import { notFound } from 'next/navigation';

// PAGE: 동아리 상세 페이지
interface IClubProfileResponseData {
  clubProfile: Pick<
    IClub,
    | 'clubId'
    | 'name'
    | 'category'
    | 'logoImageUrl'
    | 'memberCount'
    | 'president'
    | 'location'
    | 'recruitmentPeriod'
    | 'goal'
  >;
}
export default async function ClubDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const clubId = parseInt(id);

  const { data } = await query<IClubProfileResponseData>({
    query: GET_CLUB_PROFILE,
    variables: { clubId },
  });

  const { clubProfile } = data;

  if (!clubProfile) {
    notFound();
  }

  return (
    <div className="tablet:flex-row flex min-h-screen w-full flex-col">
      <section className="flex-1">
        <Suspense fallback={<ClubProfileSkeleton />}>
          <ClubProfile clubData={clubProfile} />
        </Suspense>

        <ClubDetailTabs clubId={clubId} />
      </section>

      <aside className="tablet:static tablet:w-48 tablet:flex-none tablet:left-auto tablet:translate-none fixed bottom-4 left-1/2 w-full -translate-x-1/2 px-4">
        <Suspense fallback={<ApplyButtonSkeleton />}>
          <ClubApplyButton recruitmentPeriod={clubProfile.recruitmentPeriod} />
        </Suspense>
      </aside>
    </div>
  );
}
