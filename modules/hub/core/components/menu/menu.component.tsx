import {
  Avatar,
  Logo,
  Menu as SolnessMenu,
  MenuItem,
  NotificationButton,
} from "@solness/ui";
import { useRouter } from "next/router";
import React, { FunctionComponent, useCallback } from "react";
import { useSecurityContext } from "~/modules/security";
import { ROUTES } from "../../routes";
import Link from "../link";

const Menu: FunctionComponent = () => {
  const { logout } = useSecurityContext();
  const { asPath } = useRouter();

  const isActive = useCallback(
    (path: string) => {
      if (path === "/") {
        return path === asPath;
      }

      return asPath.includes(path);
    },
    [asPath]
  );

  return (
    <SolnessMenu>
      <div className="flex items-center justify-between mb-8">
        <Logo />
        <NotificationButton enabled />
      </div>

      <div className="flex justify-center mb-8 ">
        <Avatar
          showOptions
          title="Sergiu Butnarasu"
          description="Software Developer"
          size="extra"
          url="https://en.gravatar.com/userimage/128015720/b81c215fc33e0db0461f4974d2d2cabf.jpg?size=200"
          onOptionClick={logout}
        />
      </div>

      {ROUTES.map(({ description, path, icon, iconColor }, index) => (
        <Link key={index} href={path}>
          <span>
            <MenuItem active={isActive(path)} icon={icon} iconColor={iconColor}>
              {description}
            </MenuItem>
          </span>
        </Link>
      ))}
    </SolnessMenu>
  );
};

export default Menu;
