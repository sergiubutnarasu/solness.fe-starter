import { Panel, Typography } from "@solness/ui";
import React, { FunctionComponent } from "react";

const Summaries: FunctionComponent = () => (
  <div className="flex gap-8 items-start">
    <Panel title="Team">
      <Typography size="large" weight="bold" color="indigo">
        Core Squad
      </Typography>
      <div className="flex justify-between">
        <Typography size="small" color="gray">
          Software Developer
        </Typography>
        <div className="ml-2">
          <Typography size="small" color="gray">
            5 member
          </Typography>
        </div>
      </div>
    </Panel>

    <Panel title="Documents">
      <Typography size="large" weight="bold">
        16 documents
      </Typography>
      <Typography size="small" color="gray">
        Confidential
      </Typography>
    </Panel>

    <Panel title="Inventory">
      <Typography size="large" weight="bold">
        9 items available
      </Typography>
      <Typography size="small" color="gray">
        No item requested
      </Typography>
    </Panel>
  </div>
);

export default Summaries;
