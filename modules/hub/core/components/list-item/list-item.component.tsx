import React, { FunctionComponent } from "react";

export interface Props {
  index: number;
  columns?: number;
}

const ListItem: FunctionComponent<Props> = ({ index, children, columns }) => {
  const defaultTheme = "p-4 rounded-md mb-1";
  const theme = index % 2 !== 0 ? defaultTheme : `${defaultTheme} bg-gray-50 `;

  const defaultGridTheme = "grid grid-cols-4 gap-2 items-center";
  const columnsTheme = columns ? `grid-cols-${columns}` : "";
  const gridTheme = `${defaultGridTheme} ${columnsTheme}`;

  return (
    <div className={theme}>
      <div className={gridTheme}>{children}</div>
    </div>
  );
};

export default ListItem;
