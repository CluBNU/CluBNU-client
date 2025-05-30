import { Card, CardContent } from '@/shared/ui/card';
import { IClub } from '../type';
import Image from 'next/image';

export default function ClubProfile({
  logoImageUrl,
  name,
  category,
  memberCount,
  president,
  location,
  recruitmentPeriod,
  goal,
}: Pick<
  IClub,
  | 'logoImageUrl'
  | 'name'
  | 'category'
  | 'memberCount'
  | 'president'
  | 'location'
  | 'recruitmentPeriod'
  | 'goal'
>) {
  return (
    <Card className="p-0">
      <CardContent className="p-6">
        <div className="tablet:gap-6 flex flex-col gap-4">
          <div className="tablet:flex-row tablet:gap-6 flex flex-col gap-2">
            {/* 로고 */}
            <div className="tablet:mx-0 tablet:h-20 tablet:w-20 relative mx-auto h-18 w-18 flex-shrink-0 overflow-hidden rounded-full border">
              <Image
                src={logoImageUrl || '/images/club/default-club-logo-image.webp'}
                alt={name}
                fill
                className="object-contain"
              />
            </div>
            {/* 동아리명, 카테고리 */}
            <div className="tablet:text-left flex flex-col justify-evenly text-center">
              <h1 className="tablet:text-2xl text-xl font-bold">{name}</h1>
              <p className="text-muted-foreground text-md">{category}</p>
            </div>
          </div>

          {/* 정보 */}
          <div className="laptop:px-6 px-4">
            <dl className="laptop:grid-cols-2 grid grid-cols-1 gap-3">
              <div className="flex flex-row">
                <dt className="text-muted-foreground text-md inline-block min-w-20">회원수</dt>
                <dd className="inline">{memberCount}명</dd>
              </div>
              <div className="flex flex-row">
                <dt className="text-muted-foreground text-md inline-block min-w-20">회장</dt>
                <dd className="inline">{president}</dd>
              </div>
              <div className="flex flex-row">
                <dt className="text-muted-foreground text-md inline-block min-w-20">위치</dt>
                <dd className="inline">{location}</dd>
              </div>
              <div className="flex flex-row">
                <dt className="text-muted-foreground text-md inline-block min-w-20">모집기간</dt>
                {recruitmentPeriod ? (
                  <dd className="inline">{`${recruitmentPeriod?.startDate} ~ ${recruitmentPeriod?.endDate}`}</dd>
                ) : (
                  '모집기간 아님'
                )}
              </div>
              <div className="laptop:col-span-2 flex flex-row">
                <dt className="text-muted-foreground text-md inline-block min-w-20">목표</dt>
                <dd className="inline">{goal}</dd>
              </div>
            </dl>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
