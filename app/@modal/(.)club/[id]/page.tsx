import Modal from '@/shared/ui/modal';
import ClubDetailPage from '../../../club/[id]/page';

export default function ClubDetailModalPage(props: any) {
  return (
    <Modal>
      <ClubDetailPage {...props} />
    </Modal>
  );
}
