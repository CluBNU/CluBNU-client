import { Button } from '@/shared/ui/button';
import { isRecruitmentPeriod } from '@/entities/Club';
import { IClub } from '@/entities/Club/type';

// UI: 동아리 지원 버튼
export default function ClubApplyButton({
  recruitmentPeriod,
}: {
  recruitmentPeriod: IClub['recruitmentPeriod'];
}) {
  return (
    <Button
      className={`tablet:sticky tablet:top-(--top-navbar) h-12 w-full rounded-lg text-sm font-medium text-white ${
        recruitmentPeriod && isRecruitmentPeriod({ recruitmentPeriod })
          ? 'bg-primary hover:bg-primary/90'
          : 'bg-muted-foreground cursor-not-allowed'
      }`}
      disabled={!recruitmentPeriod || !isRecruitmentPeriod({ recruitmentPeriod })}>
      {recruitmentPeriod && isRecruitmentPeriod({ recruitmentPeriod }) ? '지원하기' : '모집 마감'}
    </Button>
  );
}
