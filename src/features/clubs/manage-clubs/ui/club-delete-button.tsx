import { deleteClubAction } from '@/entities/Club/actions';
import { Button } from '@/shared/ui/button';
import { Loader2, Trash2 } from 'lucide-react';
import { useActionState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

/**
 * 동아리 삭제 버튼
 * @param clubId 동아리 ID
 */
export default function ClubDeleteButton({ clubId }: { clubId: number }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(deleteClubAction, {
    success: false,
    message: '',
    shouldRedirect: false,
    redirectTo: '',
  });
  const router = useRouter();

  useEffect(() => {
    if (state.shouldRedirect) {
      router.push(state.redirectTo || '/admin/club-management');
    }
  }, [state.shouldRedirect, state.redirectTo, router]);

  const handleDelete = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      formRef.current?.requestSubmit();
    }
  };

  return (
    <form
      ref={formRef}
      action={formAction}>
      <input
        type="hidden"
        name="clubId"
        value={clubId}
        readOnly
      />
      <Button
        onClick={handleDelete}
        type="button"
        variant="ghost"
        size="sm"
        className="text-danger hover:text-danger-accent"
        title="삭제">
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
      </Button>
    </form>
  );
}
