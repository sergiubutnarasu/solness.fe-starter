import { useFlag } from '@solness/common';
import UpdateCompanyCashDetailsModal from '../update-company-cash-details-modal.component';

export const useUpdateCompanyCashDetailsModal = () => {
  const { flag: isOpen, setFlag, resetFlag } = useFlag();

  return {
    showModal: setFlag,
    renderModal: () =>
      isOpen && (
        <UpdateCompanyCashDetailsModal
          onClose={resetFlag}
          onSubmit={resetFlag}
        />
      ),
  };
};
