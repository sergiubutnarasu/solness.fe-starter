import { useState } from 'react';
import { useFlag } from '~/common/hooks';
import DeleteUserModal from '../delete-user-modal.component';

export const useDeleteUser = () => {
  const [userId, setUserId] = useState(0);
  const { flag: isOpen, setFlag, resetFlag } = useFlag();

  const showModal = (userId: number) => {
    setUserId(userId);
    setFlag();
  };

  return {
    showModal,
    renderModal: () =>
      isOpen && (
        <DeleteUserModal
          userId={userId}
          onClose={resetFlag}
          onSubmit={resetFlag}
        />
      ),
  };
};
