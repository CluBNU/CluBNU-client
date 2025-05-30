import readClubIntro from '../api/read-club-intro';

// 동아리 소개
export default async function ClubIntro({ clubId }: { clubId: number }) {
  const { introduction } = await readClubIntro({ clubId });

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-4 sm:space-y-6">
        <section>{introduction}</section>
      </div>
    </div>
  );
}
