import React, { FunctionComponent } from 'react';
import { ConfirmationModal } from '../../../core/components';
import { useExcludeUser } from './data';

export interface Props {
  userId: number;
  onClose: () => void;
  onSubmit: () => void;
}

const ExcludeUserModal: FunctionComponent<Props> = ({
  userId,
  onClose,
  onSubmit,
}) => {
  const { excludeUser, loading } = useExcludeUser({ onCompleted: onSubmit });

  const handleSubmit = () => excludeUser(userId);

  return (
    <ConfirmationModal
      loading={loading}
      title="Exclude user"
      description="Are you sure you want to exclude this user?"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

export default ExcludeUserModal;
