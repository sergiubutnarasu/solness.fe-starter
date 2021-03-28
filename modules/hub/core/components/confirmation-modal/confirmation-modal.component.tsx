import { Modal, Typography, Button } from "@solness/ui";
import React, { FunctionComponent } from "react";

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
  <Modal open title={title} size="medium" onClose={onClose}>
    {description && (
      <div className="mb-6">
        <Typography size="small">{description}</Typography>
      </div>
    )}

    {children && <div className="mb-6">{children}</div>}

    <div className="flex justify-end">
      <Button transparent onClick={onClose}>
        Cancel
      </Button>
      <Button loading={loading} onClick={onSubmit}>
        Confirm
      </Button>
    </div>
  </Modal>
);

export default ConfirmationModal;
