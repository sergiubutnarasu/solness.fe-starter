import { Typography } from "@solness/ui";
import React, { FunctionComponent } from "react";

const WelcomeBox: FunctionComponent = () => (
  <div className="rounded-lg shadow-lg bg-indigo-500 p-8 mb-8">
    <Typography size="large" color="white" weight="semibold">
      Welcome back, Sergiu Butnarasu!
    </Typography>
    <Typography as="span" size="small" color="white">
      You have 6 unread{" "}
      <Typography as="span" underline size="small" color="white">
        notifications
      </Typography>{" "}
      and 3 new{" "}
      <Typography as="span" underline size="small" color="white">
        documents
      </Typography>
    </Typography>
  </div>
);

export default WelcomeBox;
