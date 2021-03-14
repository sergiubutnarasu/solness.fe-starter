import { SizeType, Typography, WeightType } from "@solness/ui";
import NextLink from "next/link";
import React, { FunctionComponent } from "react";

export interface Props {
  href: string;
  target?: string;
  size?: SizeType;
  weight?: WeightType;
}

const Link: FunctionComponent<Props> = ({ size, weight, href, target }) => (
  <Typography as="span" color="indigo" size={size} weight={weight}>
    <NextLink href={href}>
      <a target={target}>Create your account!</a>
    </NextLink>
  </Typography>
);

export default Link;
