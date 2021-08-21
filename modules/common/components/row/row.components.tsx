import React, { FunctionComponent } from 'react';
import { Row as AntRow, RowProps } from 'antd';

const Row: FunctionComponent<RowProps> = ({ children, ...props }) => (
  <AntRow {...props}>{children}</AntRow>
);

export default Row;
