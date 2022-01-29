import { GetMenuContextQuery } from '@solness/generated-types';
import { Page } from '@solness/hub-core/enums';
import { ROUTES } from '@solness/hub-core/routes';
import { Menu as MainMenu } from '@solness/ui';
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

  useEffect(() => {
    if (data && !context) {
      setContext(data);
    }
  }, [data, context, setContext]);

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
      {context.user && (
        <MenuHeader
          firstName={context.user.firstName}
          lastName={context.user.lastName}
          title={context.user.title}
        />
      )}
      <MenuList list={availableRoutes} />
    </MainMenu>
  );
};

export default memo(Menu);
