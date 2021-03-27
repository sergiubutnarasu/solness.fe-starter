import React, { FunctionComponent } from "react";

export interface Props {
  colSpan?: number;
}

const ListColumn: FunctionComponent<Props> = ({ children, colSpan }) => {
  const theme = colSpan ? `col-span-${colSpan}` : "";

  return <div className={theme}>{children}</div>;
};

export default ListColumn;
