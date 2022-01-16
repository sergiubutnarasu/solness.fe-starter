import { GetMenuContextQuery } from '@solness/generated-types';
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
import React, {
  FunctionComponent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Page } from '../../enums';
import { ROUTES } from '../../routes';
import Link from '../link';
import { useGetMenuContext } from './data';

const Menu: FunctionComponent = () => {
  const { logout } = useSecurityContext();
  const { asPath } = useRouter();
  const [context, setContext] = useState<GetMenuContextQuery | undefined>(
    undefined,
  );
  const { data } = useGetMenuContext({ skip: !!context });

  useEffect(() => {
    if (data && !context) {
      setContext(data);
    }
  }, [data, context, setContext]);

  const checkIsActive = useCallback(
    (path: string) => {
      if (path === '/') {
        return path === asPath;
      }

      return asPath.includes(path);
    },
    [asPath],
  );

  const availableRoutes = useMemo(() => {
    if (context) {
      return ROUTES.filter(
        ({ identifier }) =>
          !identifier || context.viewer.permissions[identifier as Page]?.view,
      );
    }

    return [];
  }, [context]);

  if (!context) {
    return <MainMenu>loading menu</MainMenu>;
  }

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

      {availableRoutes.map(({ description, path, icon, iconColor }, index) => (
        <Link key={index} href={path}>
          <MainMenu.Item
            isActive={checkIsActive(path)}
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

export default memo(Menu);
