import React, { FunctionComponent } from "react";
import CalendarWidget from "../calender-widget";
import TeamWidget from "../team-widget";

const Sidebar: FunctionComponent = () => (
  <div className="w-76 py-10 pr-10">
    <CalendarWidget />
    <TeamWidget />
  </div>
);

export default Sidebar;
