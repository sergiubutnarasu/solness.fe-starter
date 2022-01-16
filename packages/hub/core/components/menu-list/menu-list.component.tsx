import { Menu } from '@solness/ui';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { MenuField } from '../../types';
import Link from '../link';

type Props = {
  list: MenuField[];
};

const MenuList = ({ list }: Props) => {
  const { asPath } = useRouter();

  const checkIsActive = useCallback(
    (path: string) => {
      if (path === '/') {
        return path === asPath;
      }

      return asPath.includes(path);
    },
    [asPath],
  );

  return (
    <>
      {list.map(({ description, path, icon, iconColor }, index) => (
        <Link key={index} href={path}>
          <Menu.Item
            isActive={checkIsActive(path)}
            icon={icon}
            iconColor={iconColor}
          >
            {description}
          </Menu.Item>
        </Link>
      ))}
    </>
  );
};

export default MenuList;
