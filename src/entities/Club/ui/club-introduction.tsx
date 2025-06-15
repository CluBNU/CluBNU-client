import { query } from '@/applications/apollo-client';
import { GET_CLUB_INTRODUCTION } from '../api/graphql/club.graphql';

interface IClubIntroductionResponseData {
  clubIntroduction: {
    clubId: number;
    intro: {
      image: string;
      introduction: string;
    };
  };
}
// 동아리 소개
export default async function ClubIntroduction({ clubId }: { clubId: number }) {
  // const { data } = await query<IClubIntroductionResponseData>({
  //   query: GET_CLUB_INTRODUCTION,
  //   variables: { clubId },
  // });

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-4 sm:space-y-6">
        {/* <section>{clubIntroduction.intro.introduction}</section> */}
      </div>
    </div>
  );
}
