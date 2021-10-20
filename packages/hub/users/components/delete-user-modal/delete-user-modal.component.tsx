import React, { FunctionComponent } from 'react';
import { ConfirmationModal } from '../../../core/components';
import { useDeleteUser } from './data';

export interface Props {
  userId: number;
  onClose: () => void;
  onSubmit: () => void;
}

const DeleteUserModal: FunctionComponent<Props> = ({
  userId,
  onClose,
  onSubmit,
}) => {
  const { deleteUser, loading } = useDeleteUser({ onCompleted: onSubmit });

  const handleSubmit = () => deleteUser(userId);

  return (
    <ConfirmationModal
      loading={loading}
      title="Delete user"
      description="Are you sure you want to delete this user?"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

export default DeleteUserModal;
