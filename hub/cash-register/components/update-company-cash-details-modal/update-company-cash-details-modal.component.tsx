import { Button, Modal, Typography } from '@solness/ui';
import { useMemo } from 'react';
import UpdateCompanyCashDetailsForm from '../update-company-cash-details-form';
import { useGetCompanyCashDetails } from './data';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
}

const UpdateCompanyCashDetailsModal = ({ onClose, onSubmit }: Props) => {
  const { cashDetails, loading: getCashDetailsLoading } =
    useGetCompanyCashDetails();

  const content = useMemo(() => {
    if (getCashDetailsLoading) {
      return <Modal.Body>loading cash details</Modal.Body>;
    }

    return (
      <UpdateCompanyCashDetailsForm
        companyCashDetails={cashDetails}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    );
  }, [cashDetails, getCashDetailsLoading, onClose, onSubmit]);

  return (
    <Modal isOpen onClose={onClose}>
      <Modal.Content>
        <Modal.Header>
          <Typography.Text>Update company cash details</Typography.Text>
        </Modal.Header>

        <Modal.Close color="gray.500" size="sm" _focus={{ border: 'none' }} />

        {content}
      </Modal.Content>
    </Modal>
  );
};

export default UpdateCompanyCashDetailsModal;
