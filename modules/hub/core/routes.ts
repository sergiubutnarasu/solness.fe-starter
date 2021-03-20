import { MenuField } from "./types";

export const ROUTES: MenuField[] = [
  { description: "Dashboard", path: "/", icon: "home", iconColor: "blue" },
  { description: "Users", path: "/users", icon: "users", iconColor: "purple" },
  {
    description: "Offices",
    path: "/offices",
    icon: "office",
    iconColor: "orange",
  },
  {
    description: "Documents",
    path: "/documents",
    icon: "documents",
    iconColor: "teal",
  },
  {
    description: "Inventory",
    path: "/inventory",
    icon: "briefcase",
    iconColor: "red",
  },
  {
    description: "Calendar",
    path: "/calendar",
    icon: "calendar",
    iconColor: "indigo",
  },
];
