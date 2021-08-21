import React, { FunctionComponent } from 'react';
import { Col as AntCol, ColProps } from 'antd';

const Column: FunctionComponent<ColProps> = ({ children, ...props }) => (
  <AntCol {...props}>{children}</AntCol>
);

export default Column;
