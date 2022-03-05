import { Button, Icon, Tooltip } from '@solness/ui';

const CashRegisterActions = () => (
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
      <Button.Icon
        aria-label="Add new entry"
        icon="plus"
        colorScheme="purple"
        size="sm"
      />
    </Tooltip>
  </>
);

export default CashRegisterActions;
