import React, { FunctionComponent } from 'react';
import { Box, Button, Modal, Typography } from '@solness/ui';

export interface Props {
  title: string;
  description?: string;
  loading?: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const ConfirmationModal: FunctionComponent<Props> = ({
  title,
  description,
  children,
  loading = false,
  onClose,
  onSubmit,
}) => (
  <Modal isOpen onClose={onClose}>
    <Modal.Content>
      <Modal.Header>
        <Typography.Text>{title}</Typography.Text>
      </Modal.Header>

      <Modal.Close size="sm" />

      <Modal.Body>
        {description && (
          <Box mb={2}>
            <Typography.Text>{description}</Typography.Text>
          </Box>
        )}

        {children && <Box mb={2}>{children}</Box>}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="red" isLoading={loading} onClick={onSubmit}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal.Content>
  </Modal>
);

export default ConfirmationModal;
