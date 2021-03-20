import React, { FunctionComponent } from "react";

export interface Props {
  index: number;
}

const ListItem: FunctionComponent<Props> = ({ index, children }) => {
  const defaultTheme = "p-4 rounded-md mb-1";
  const theme = index % 2 !== 0 ? defaultTheme : `${defaultTheme} bg-gray-50 `;

  return <div className={theme}>{children}</div>;
};

export default ListItem;
