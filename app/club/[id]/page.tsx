import { notFound } from 'next/navigation';
import { ClubProfile, isRecruitmentPeriod } from '@/entities/Club';
import { Button } from '@/shared/ui/button';
import { ClubDetailTabs } from '@/widgets/club-detail';
import { query } from '@/applications/apollo-client';
import { GET_CLUB_PROFILE } from '@/entities/Club/api/graphql/club.graphql';
import { IClub } from '@/entities/Club/type';

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

  const { data } = await query<IClubProfileResponseData>({
    query: GET_CLUB_PROFILE,
    variables: { clubId: parseInt(id) },
  });
  const { clubProfile } = data;

  if (!clubProfile) {
    notFound();
  }

  const {
    clubId,
    recruitmentPeriod,
    logoImageUrl,
    name,
    category,
    memberCount,
    president,
    location,
    goal,
  } = clubProfile;

  return (
    <div className="tablet:flex-row flex min-h-screen w-full flex-col">
      <section className="flex-1">
        <ClubProfile
          logoImageUrl={logoImageUrl}
          name={name}
          category={category}
          memberCount={memberCount}
          president={president}
          location={location}
          recruitmentPeriod={recruitmentPeriod}
          goal={goal}
        />
        <ClubDetailTabs clubId={clubId} />
      </section>
      <aside className="tablet:static tablet:w-48 tablet:flex-none tablet:left-auto tablet:translate-none fixed bottom-4 left-1/2 w-full -translate-x-1/2 px-4">
        <Button
          className={`tablet:sticky tablet:top-(--top-navbar) h-12 w-full rounded-lg text-sm font-medium text-white ${recruitmentPeriod && isRecruitmentPeriod({ recruitmentPeriod }) ? 'bg-primary hover:bg-primary/90' : 'bg-muted-foreground cursor-not-allowed'}`}
          disabled={!recruitmentPeriod || !isRecruitmentPeriod({ recruitmentPeriod })}>
          {recruitmentPeriod && isRecruitmentPeriod({ recruitmentPeriod })
            ? '지원하기'
            : '모집 마감'}
        </Button>
      </aside>
    </div>
  );
}
