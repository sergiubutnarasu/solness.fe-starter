import { Input as AntInput, InputProps } from 'antd';
import React, { FunctionComponent } from 'react';

const Input: FunctionComponent<InputProps> = ({ ...props }) => (
  <AntInput {...props} />
);

export default Input;
