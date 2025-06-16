'use client';

import { GET_CLUB_INTRODUCTION } from '../api/graphql/club.graphql';
import Image from 'next/image';
import { useSuspenseQuery } from '@apollo/client';

// UI: 동아리 소개글
interface IClubIntroductionResponseData {
  clubIntroduction: {
    clubId: number;
    intro: {
      image: string;
      introduction: string;
    };
  };
}
export default function ClubIntroduction({ clubId }: { clubId: number }) {
  const { data } = useSuspenseQuery<IClubIntroductionResponseData>(GET_CLUB_INTRODUCTION, {
    variables: { clubId },
  });

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-4 sm:space-y-6">
        <Image
          src={data.clubIntroduction.intro.image}
          alt="club-introduction"
          width={100}
          height={100}
        />
        <section>{data.clubIntroduction.intro.introduction}</section>
      </div>
    </div>
  );
}
