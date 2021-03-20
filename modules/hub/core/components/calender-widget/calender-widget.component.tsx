import { Button, Panel, Typography } from "@solness/ui";
import React, { FunctionComponent } from "react";

const CalendarWidget: FunctionComponent = () => (
  <Panel
    title="Next Event"
    color="blue"
    titleColor="white"
    actions={<Button transparent size="small" icon="plus" />}
  >
    <>
      <div className="px-4 py-3 bg-white-opacity rounded-md mb-1">
        <div className="flex items-start">
          <div className="w-1/3">
            <Typography size="small" color="white">
              10:30 AM
            </Typography>
            <Typography size="xsmall" color="gray">
              24 June
            </Typography>
          </div>
          <div className="w-2/3">
            <Typography size="small" color="white">
              Morning daily scrum
            </Typography>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-white-opacity rounded-md mb-1">
        <div className="flex items-start">
          <div className="w-1/3">
            <Typography size="small" color="white">
              11:30 AM
            </Typography>
            <Typography size="xsmall" color="gray">
              24 June
            </Typography>
          </div>
          <div className="w-2/3">
            <Typography size="small" color="white">
              Sprint retrospectives
            </Typography>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-white-opacity rounded-md mb-1">
        <div className="flex items-start">
          <div className="w-1/3">
            <Typography size="small" color="white">
              02:30 PM
            </Typography>
            <Typography size="xsmall" color="gray">
              24 June
            </Typography>
          </div>
          <div className="w-2/3">
            <Typography size="small" color="white">
              Sprint planning
            </Typography>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-white-opacity rounded-md">
        <div className="flex items-start">
          <div className="w-1/3">
            <Typography size="small" color="white">
              03:30 PM
            </Typography>
            <Typography size="xsmall" color="gray">
              24 June
            </Typography>
          </div>
          <div className="w-2/3">
            <Typography size="small" color="white">
              Team synchronization
            </Typography>
          </div>
        </div>
      </div>
    </>
  </Panel>
);

export default CalendarWidget;
