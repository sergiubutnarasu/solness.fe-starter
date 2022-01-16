import { useSecurityContext } from '@solness/security';
import { Avatar, Box, Button, Logo, Stack, Typography } from '@solness/ui';

const MenuHeader = () => {
  const { logout } = useSecurityContext();

  return (
    <>
      <Stack mb="8" direction="row" justifyContent="space-between">
        <Logo />
        <Button.Icon
          aria-label="Notification"
          icon="bell"
          size="sm"
          variant="link"
          color="gray.500"
          iconSize={20}
        ></Button.Icon>
      </Stack>

      <Box mb="8" textAlign="center">
        <Avatar
          size="2xl"
          src="https://en.gravatar.com/userimage/128015720/b81c215fc33e0db0461f4974d2d2cabf.jpg?size=200"
          mb={2}
        >
          <Avatar.Badge right="14px" bottom="14px" boxSize="1.5rem" bg="white">
            <Button.Icon
              aria-label="Edit your profile"
              icon="cog"
              variant="link"
              colorScheme="blackAlpha"
              color="gray.500"
              onClick={logout}
            ></Button.Icon>
          </Avatar.Badge>
        </Avatar>

        <Typography.Text fontSize="sm" fontWeight="semibold">
          Sergiu Butnarasu
        </Typography.Text>
        <Typography.Text fontSize="xs" color="gray.500">
          Web Developer
        </Typography.Text>
      </Box>
    </>
  );
};

export default MenuHeader;
