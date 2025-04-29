import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/shared/ui/card';
import { IClub } from '../type';
import ClubLogoImage from './club-logo-image';
import Link from 'next/link';

export interface IClubHomeCardProps
  extends Pick<IClub, 'clubId' | 'name' | 'category' | 'logoImageUrl' | 'memberCount'> {}
export default function ClubHomeCard({
  clubId,
  name,
  category,
  logoImageUrl,
  memberCount,
}: IClubHomeCardProps) {
  return (
    <Link
      href={`/club/${clubId}`}
      className="w-full">
      <Card
        key={clubId}
        className="overflow-hidden">
        <CardContent className="">
          <div className="flex w-full flex-row">
            {/* 동아리 로고 이미지 */}
            <div className="mr-6 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
              <ClubLogoImage
                name={name}
                imageUrl={logoImageUrl}
              />
            </div>
            {/* 동아리 이름 및 분과 */}
            <div className="flex w-full flex-col">
              <CardTitle className="text-md truncate">{name}</CardTitle>
              <CardDescription className="text-[0.8rem]">{category}</CardDescription>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row justify-end">
          {/* 회원수 */}
          <p className="text-sm">{memberCount}명</p>
          {/* 신규여부 */}
          {/* 모집상태 */}
        </CardFooter>
      </Card>
    </Link>
  );
}
