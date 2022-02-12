import { Box, Button, Calendar, Icon, Page, Tooltip } from '@solness/ui';

const CashRegisterPage = () => {
  return (
    <Page
      title="Cash Register"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laborum?"
      actions={
        <>
          <Button
            aria-label="Invite user"
            leftIcon={<Icon icon="cog" />}
            size="sm"
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
            <Button.Icon
              aria-label="Add new entry"
              icon="plus"
              colorScheme="purple"
              size="sm"
            />
          </Tooltip>
        </>
      }
    >
      <Box width="20%">
        <Calendar />
      </Box>
    </Page>
  );
};

export default CashRegisterPage;
