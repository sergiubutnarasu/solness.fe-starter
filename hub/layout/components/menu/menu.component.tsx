import { GetMenuContextQuery } from '@solness/generated-types';
import { Page } from '@solness/hub-core/enums';
import { ROUTES } from '@solness/hub-core/routes';
import { Menu as MainMenu } from '@solness/ui';
import { useHubContext } from 'hub/core';
import React, {
  FunctionComponent,
  memo,
  useEffect,
  useMemo,
  useState,
} from 'react';
import MenuHeader from '../menu-header';
import MenuList from '../menu-list/menu-list.component';
import { useGetMenuContext } from './data';

const Menu: FunctionComponent = () => {
  const [context, setContext] = useState<GetMenuContextQuery | undefined>(
    undefined,
  );
  const { data } = useGetMenuContext({ skip: !!context });
  const { user, setUser } = useHubContext();

  useEffect(() => {
    if (data && !context) {
      setContext(data);

      if (data.user) {
        const { id, firstName, lastName, title } = data.user;
        setUser({ id, firstName, lastName, title });
      }
    }
  }, [data, context, setContext, setUser]);

  const availableRoutes = useMemo(() => {
    if (context) {
      return ROUTES.filter(
        ({ identifier }) =>
          !identifier || context.viewer.permissions[identifier as Page]?.view,
      );
    }

    return [];
  }, [context]);

  if (!user || !context) {
    return <MainMenu>loading menu</MainMenu>;
  }

  return (
    <MainMenu>
      {context.user && (
        <MenuHeader
          firstName={user.firstName}
          lastName={user.lastName}
          title={user.title}
        />
      )}
      <MenuList list={availableRoutes} />
    </MainMenu>
  );
};

export default memo(Menu);
