import { SizeType, Typography, WeightType } from "@solness/ui";
import NextLink from "next/link";
import React, { FunctionComponent } from "react";

export interface Props {
  href: string;
  target?: string;
  size?: SizeType;
  weight?: WeightType;
  activeClass?: string;
}

const Link: FunctionComponent<Props> = ({ children, size, weight, href }) => (
  <Typography as="span" color="indigo" size={size} weight={weight}>
    <NextLink href={href}>{children}</NextLink>
  </Typography>
);

export default Link;
