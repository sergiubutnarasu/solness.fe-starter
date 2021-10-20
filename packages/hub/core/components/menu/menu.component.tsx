import { useSecurityContext } from '@solness/security';
import {
  Avatar,
  Box,
  Button,
  Logo,
  Menu as MainMenu,
  Stack,
  Typography,
} from '@solness/ui';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useCallback } from 'react';
import { ROUTES } from '../../routes';
import Link from '../link';

const Menu: FunctionComponent = () => {
  const { logout } = useSecurityContext();
  const { asPath } = useRouter();

  const isActive = useCallback(
    (path: string) => {
      if (path === '/') {
        return path === asPath;
      }

      return asPath.includes(path);
    },
    [asPath],
  );

  return (
    <MainMenu>
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

      {ROUTES.map(({ description, path, icon, iconColor }, index) => (
        <Link key={index} href={path} _hover={{ textDecoration: 'none' }}>
          <MainMenu.Item
            isActive={isActive(path)}
            icon={icon}
            iconColor={iconColor}
          >
            {description}
          </MainMenu.Item>
        </Link>
      ))}
    </MainMenu>
  );
};

export default Menu;
