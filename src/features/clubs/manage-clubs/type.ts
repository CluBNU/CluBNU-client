import { IClubProfile } from '@/entities/Club';

export interface IAdminClub extends IClubProfile {
  updatedAt?: string; // 동아리 수정일
  deletedAt?: string; // 동아리 삭제일
}
