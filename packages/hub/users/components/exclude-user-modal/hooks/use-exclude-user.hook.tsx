import { useFlag } from '@solness/common';
import { useRouter } from 'next/router';
import ExcludeUserModal from '../exclude-user-modal.component';

export const useExcludeUser = (userId: number) => {
  const { push } = useRouter();

  const { flag: isOpen, setFlag, resetFlag } = useFlag();

  const handleSubmit = () => {
    resetFlag();

    push('/members');
  };

  return {
    showModal: setFlag,
    renderModal: () =>
      isOpen && (
        <ExcludeUserModal
          userId={userId}
          onClose={resetFlag}
          onSubmit={handleSubmit}
        />
      ),
  };
};
