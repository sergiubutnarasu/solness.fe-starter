import { SizeType, Typography, WeightType } from "@solness/ui";
import NextLink from "next/link";
import React, { FunctionComponent } from "react";

export interface Props {
  href: string;
  as?: "link" | "button";
  target?: string;
  size?: SizeType;
  weight?: WeightType;
  activeClass?: string;
}

const Link: FunctionComponent<Props> = ({
  as = "link",
  children,
  size = "small",
  weight,
  href,
}) => {
  if (as === "link")
    return (
      <Typography as="span" color="indigo" size={size} weight={weight}>
        <NextLink href={href}>
          <a>{children}</a>
        </NextLink>
      </Typography>
    );

  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
