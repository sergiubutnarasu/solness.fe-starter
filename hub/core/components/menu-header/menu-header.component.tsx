import { useSecurityContext } from '@solness/security';
import {
  Avatar,
  Box,
  Button,
  Icon,
  Logo,
  Stack,
  Tooltip,
  Typography,
} from '@solness/ui';
import Link from '../link';

type Props = {
  firstName: string;
  lastName: string;
  title?: string | null;
};

const MenuHeader = ({ firstName, lastName, title }: Props) => {
  const { logout } = useSecurityContext();

  return (
    <>
      <Stack mb="8" direction="row" justifyContent="space-between">
        <Logo />

        <Tooltip label="Sign out" display="flex" alignItems="center">
          <Button.Icon
            aria-label="Log out"
            icon="logout"
            size="sm"
            variant="link"
            color="gray.500"
            iconSize={20}
            onClick={logout}
          ></Button.Icon>
        </Tooltip>
      </Stack>

      <Box mb="8" textAlign="center">
        <Avatar
          size="2xl"
          src="https://en.gravatar.com/userimage/128015720/b81c215fc33e0db0461f4974d2d2cabf.jpg?size=200"
          mb={2}
        >
          <Avatar.Badge right="14px" bottom="14px" boxSize="1.5rem" bg="white">
            <Tooltip label="Edit profile" display="flex" alignItems="center">
              <Link href="/me" fontSize={1}>
                <Icon
                  aria-label="Edit your profile"
                  icon="cog"
                  color="gray.500"
                  cursor="pointer"
                />
              </Link>
            </Tooltip>
          </Avatar.Badge>
        </Avatar>

        <Typography.Text fontSize="sm" fontWeight="semibold">
          {firstName} {lastName}
        </Typography.Text>
        <Typography.Text fontSize="xs" color="gray.500">
          {title ?? 'Unknown'}
        </Typography.Text>
      </Box>
    </>
  );
};

export default MenuHeader;
