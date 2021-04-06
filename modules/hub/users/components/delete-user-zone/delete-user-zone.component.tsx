import { Button, Panel, Typography } from "@solness/ui";
import React, { FunctionComponent } from "react";
import { useDeleteUser } from "../delete-user-modal";

export interface Props {
  userId: number;
}

const DeleteUserZone: FunctionComponent<Props> = ({ userId }) => {
  const {
    showModal: showDeleteUserModal,
    renderModal: renderDeleteUserModal,
  } = useDeleteUser();

  return (
    <Panel
      title="Danger zone"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
    maiores sit nemo sed tenetur quas. Accusantium, ratione nemo
    voluptate ea quasi et, quibusdam fugit veniam voluptatum maxime, id
    laudantium exercitationem!"
    >
      <div className="flex justify-end">
        <div></div>
        <Button transparent onClick={() => showDeleteUserModal(userId)}>
          <Typography size="small" color="red">
            Delete user
          </Typography>
        </Button>
      </div>

      {renderDeleteUserModal()}
    </Panel>
  );
};

export default DeleteUserZone;
