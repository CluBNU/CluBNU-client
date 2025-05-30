// 모집 기간인지 확인하는 함수
export default function isRecruitmentPeriod({
  recruitmentPeriod,
}: {
  recruitmentPeriod: { startDate: string; endDate: string };
}): boolean {
  const now = new Date();
  const start = new Date(recruitmentPeriod.startDate);
  const end = new Date(recruitmentPeriod.endDate);

  return now >= start && now <= end;
}
