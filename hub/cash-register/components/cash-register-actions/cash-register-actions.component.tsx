import { Button, Icon, Tooltip } from '@solness/ui';
import { add, formatDate } from '@solness/date';
import { useMemo } from 'react';
import { Link } from '@solness/hub-core';
import { useUpdateCompanyCashDetailsModal } from '../update-company-cash-details-modal';

interface Props {
  lastEntryDate?: string | null;
}

const CashRegisterActions = ({ lastEntryDate }: Props) => {
  const {
    renderModal: renderUpdateCompanyCashDetailsModal,
    showModal: showUpdateCompanyCashDetailsModal,
  } = useUpdateCompanyCashDetailsModal();

  const newEntryDate = useMemo(() => {
    if (!lastEntryDate) {
      return formatDate();
    }

    const newDate = add(lastEntryDate, 1, 'day');
    return formatDate(newDate);
  }, [lastEntryDate]);

  return (
    <>
      <Button
        size="sm"
        aria-label="Invite user"
        leftIcon={<Icon icon="cog" />}
        onClick={showUpdateCompanyCashDetailsModal}
      >
        Initial settings
      </Button>

      <Tooltip
        as="span"
        display="inline-block"
        label="Add new entry"
        ml={2}
        placement="top"
      >
        <Link href={`/cash/${newEntryDate}`}>
          <Button.Icon
            aria-label="Add new entry"
            icon="plus"
            colorScheme="purple"
            size="sm"
          />
        </Link>
      </Tooltip>

      {renderUpdateCompanyCashDetailsModal()}
    </>
  );
};

export default CashRegisterActions;
