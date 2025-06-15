import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { ClubFeed, ClubIntroduction } from '@/entities/Club';

// 동아리 상세 탭
export default function ClubDetailTabs({ clubId }: { clubId: number }) {
  return (
    <Tabs
      className="tablet:mt-6 mt-2"
      defaultValue="intro">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="intro">동아리 소개</TabsTrigger>
        <TabsTrigger value="feed">활동 피드</TabsTrigger>
      </TabsList>
      <TabsContent
        value="intro"
        className="mt-4 sm:mt-6">
        <ClubIntroduction clubId={clubId} />
      </TabsContent>
      <TabsContent
        value="feed"
        className="mt-4 sm:mt-6">
        <ClubFeed clubId={clubId} />
      </TabsContent>
    </Tabs>
  );
}
