import { Button, Icon, Panel, Typography } from "@solness/ui";
import React, { FunctionComponent } from "react";

const Documents: FunctionComponent = () => (
  <Panel
    title="Documents"
    actions={
      <>
        <Button size="small" icon="plus" />
        <Button size="small" icon="download" iconPosition="right" />
      </>
    }
  >
    <>
      <div className="bg-gray-50 p-4 rounded-md mb-1">
        <div className="flex items-center">
          <div className="w-1/2">
            <Typography size="small">Holidays.doc</Typography>
          </div>
          <div className="w-1/2">
            <Typography size="small" color="gray">
              by Sergiu Butnarasu
            </Typography>
          </div>
          <div className="w-1/6">
            <Typography size="small" color="gray">
              1.4 MB
            </Typography>
          </div>
          <div className="w-1/6 flex items-center justify-end">
            <Icon icon="dots" size="small" color="gray" />
          </div>
        </div>
      </div>

      <div className="p-4 rounded-md mb-1">
        <div className="flex items-center">
          <div className="w-1/2">
            <Typography size="small">Resume.doc</Typography>
          </div>
          <div className="w-1/2">
            <Typography size="small" color="gray">
              by Della Case
            </Typography>
          </div>
          <div className="w-1/6">
            <Typography size="small" color="gray">
              2.1 MB
            </Typography>
          </div>
          <div className="w-1/6 flex items-center justify-end">
            <Icon icon="dots" size="small" color="gray" />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-1">
        <div className="flex items-center">
          <div className="w-1/2">
            <Typography size="small">Confidential.pdf</Typography>
          </div>
          <div className="w-1/2">
            <Typography size="small" color="gray">
              by John Smith
            </Typography>
          </div>
          <div className="w-1/6">
            <Typography size="small" color="gray">
              0.7 MB
            </Typography>
          </div>
          <div className="w-1/6 flex items-center justify-end">
            <Icon icon="dots" size="small" color="gray" />
          </div>
        </div>
      </div>

      <div className="p-4 rounded-md mb-1">
        <div className="flex items-center">
          <div className="w-1/2">
            <Typography size="small">About_Company.ppt</Typography>
          </div>
          <div className="w-1/2">
            <Typography size="small" color="gray">
              by Alexander Tween
            </Typography>
          </div>
          <div className="w-1/6">
            <Typography size="small" color="gray">
              1.9 MB
            </Typography>
          </div>
          <div className="w-1/6 flex items-center justify-end">
            <Icon icon="dots" size="small" color="gray" />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-1">
        <div className="flex items-center">
          <div className="w-1/2">
            <Typography size="small">Reports.doc</Typography>
          </div>
          <div className="w-1/2">
            <Typography size="small" color="gray">
              by Sergiu Butnarasu
            </Typography>
          </div>
          <div className="w-1/6">
            <Typography size="small" color="gray">
              4.6 MB
            </Typography>
          </div>
          <div className="w-1/6 flex items-center justify-end">
            <Icon icon="dots" size="small" color="gray" />
          </div>
        </div>
      </div>
    </>
  </Panel>
);

export default Documents;
