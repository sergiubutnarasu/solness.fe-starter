import { Avatar, Icon, Panel, Typography } from "@solness/ui";
import React, { FunctionComponent } from "react";

const TeamWidget: FunctionComponent = () => (
  <Panel title="Team Members">
    <>
      <div className="flex items-center mb-4">
        <div className="w-1/5 flex justify-start">
          <Avatar
            size="base"
            url="https://en.gravatar.com/userimage/128015720/b81c215fc33e0db0461f4974d2d2cabf.jpg?size=200"
          />
        </div>
        <div className="w-4/5">
          <Typography size="small" weight="semibold">
            Sergiu Butnarasu
          </Typography>
          <Typography size="xsmall" color="gray">
            Software Developer
          </Typography>
        </div>
        <div className="w-1/5 flex items-center justify-end">
          <Icon icon="dots" size="small" color="gray" />
        </div>
      </div>

      <div className="flex items-center mb-4">
        <div className="w-1/5 flex justify-start">
          <Avatar
            size="base"
            url="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
        <div className="w-4/5">
          <Typography size="small" weight="semibold">
            June Cha
          </Typography>
          <Typography size="xsmall" color="gray">
            Graphic Designer
          </Typography>
        </div>
        <div className="w-1/5 flex items-center justify-end">
          <Icon icon="dots" size="small" color="gray" />
        </div>
      </div>

      <div className="flex items-center mb-4">
        <div className="w-1/5 flex justify-start">
          <Avatar
            size="base"
            url="https://randomuser.me/api/portraits/women/95.jpg"
          />
        </div>
        <div className="w-4/5">
          <Typography size="small" weight="semibold">
            Lucrecia Calder
          </Typography>
          <Typography size="xsmall" color="gray">
            Software Developer
          </Typography>
        </div>
        <div className="w-1/5 flex items-center justify-end">
          <Icon icon="dots" size="small" color="gray" />
        </div>
      </div>

      <div className="flex items-center mb-4">
        <div className="w-1/5 flex justify-start">
          <Avatar
            size="base"
            url="https://randomuser.me/api/portraits/men/36.jpg"
          />
        </div>
        <div className="w-4/5">
          <Typography size="small" weight="semibold">
            Oscar Thomsen
          </Typography>
          <Typography size="xsmall" color="gray">
            Software Developer
          </Typography>
        </div>
        <div className="w-1/5 flex items-center justify-end">
          <Icon icon="dots" size="small" color="gray" />
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-1/5 flex justify-start">
          <Avatar
            size="base"
            url="https://randomuser.me/api/portraits/women/65.jpg"
          />
        </div>
        <div className="w-4/5">
          <Typography size="small" weight="semibold">
            Renee Sims
          </Typography>
          <Typography size="xsmall" color="gray">
            Web Designer
          </Typography>
        </div>
        <div className="w-1/5 flex items-center justify-end">
          <Icon icon="dots" size="small" color="gray" />
        </div>
      </div>
    </>
  </Panel>
);

export default TeamWidget;
