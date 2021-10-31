import { useFlag } from '@solness/common';
import { useState } from 'react';
import DeleteUserModal from '../delete-user-modal.component';
import { useRouter } from 'next/router';

export const useDeleteUser = () => {
  const { push } = useRouter();
  const [userId, setUserId] = useState(0);
  const { flag: isOpen, setFlag, resetFlag } = useFlag();

  const showModal = (userId: number) => {
    setUserId(userId);
    setFlag();
  };

  const handleSubmit = () => {
    resetFlag();

    push('/users');
  };

  return {
    showModal,
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
