import {
  Avatar,
  Logo,
  Menu as SolnessMenu,
  MenuItem,
  NotificationButton,
} from "@solness/ui";
import React from "react";
import { useSecurityContext } from "~/modules/security";

const Menu = () => {
  const { logout, refreshToken } = useSecurityContext();

  const handleLogout = async () => await logout();

  const handleRefresh = async () => await refreshToken();

  return (
    <SolnessMenu>
      <div className="flex items-center justify-between mb-8">
        <Logo />
        <NotificationButton enabled onClick={handleRefresh} />
      </div>

      <div className="flex justify-center mb-8 ">
        <Avatar
          showOptions
          title="Sergiu Butnarasu"
          description="Software Developer"
          size="extra"
          url="https://en.gravatar.com/userimage/128015720/b81c215fc33e0db0461f4974d2d2cabf.jpg?size=200"
          onOptionClick={handleLogout}
        />
      </div>

      <MenuItem active icon="home" iconColor="blue">
        Dashboard
      </MenuItem>
      <MenuItem icon="office" iconColor="orange">
        Offices
      </MenuItem>
      <MenuItem icon="users" iconColor="purple">
        Users
      </MenuItem>
      <MenuItem icon="documents" iconColor="teal">
        Documents
      </MenuItem>
      <MenuItem icon="briefcase" iconColor="red">
        Inventory
      </MenuItem>
      <MenuItem icon="calendar" iconColor="indigo">
        Calendar
      </MenuItem>
    </SolnessMenu>
  );
};

export default Menu;
