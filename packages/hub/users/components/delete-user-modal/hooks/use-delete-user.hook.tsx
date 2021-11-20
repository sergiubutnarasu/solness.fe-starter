import { useFlag } from '@solness/common';
import { useRouter } from 'next/router';
import DeleteUserModal from '../delete-user-modal.component';

export const useDeleteUser = (userId: number) => {
  const { push } = useRouter();

  const { flag: isOpen, setFlag, resetFlag } = useFlag();

  const handleSubmit = () => {
    resetFlag();

    push('/users');
  };

  return {
    showModal: setFlag,
    renderModal: () =>
      isOpen && (
        <DeleteUserModal
          userId={userId}
          onClose={resetFlag}
          onSubmit={handleSubmit}
        />
      ),
  };
};
