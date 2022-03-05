import { Button, Icon, Tooltip } from '@solness/ui';
import { add, formatDate } from '@solness/date';
import { useMemo } from 'react';
import { Link } from '@solness/hub-core';

interface Props {
  lastEntryDate?: string | null;
}

const CashRegisterActions = ({ lastEntryDate }: Props) => {
  const newEntryDate = useMemo(() => {
    if (!lastEntryDate) {
      return formatDate();
    }

    const newDate = add(lastEntryDate, 1, 'day');
    return formatDate(newDate);
  }, [lastEntryDate]);

  return (
    <>
      <Button aria-label="Invite user" leftIcon={<Icon icon="cog" />} size="sm">
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
    </>
  );
};

export default CashRegisterActions;
