import { Button, Panel, Stack } from '@solness/ui';
import React, { FunctionComponent } from 'react';
import { useDeleteUser } from '../delete-user-modal';

export interface Props {
  userId: number;
}

const DeleteUserZone: FunctionComponent<Props> = ({ userId }) => {
  const { showModal: showDeleteUserModal, renderModal: renderDeleteUserModal } =
    useDeleteUser();

  return (
    <Panel
      marginBottom={0}
      title="Danger zone"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
    maiores sit nemo sed tenetur quas. Accusantium, ratione nemo
    voluptate ea quasi et, quibusdam fugit veniam voluptatum maxime, id
    laudantium exercitationem!"
    >
      <Stack direction="row" justifyContent="flex-end">
        <Button
          variant="ghost"
          colorScheme="red"
          onClick={() => showDeleteUserModal(userId)}
        >
          Delete user
        </Button>
      </Stack>

      {renderDeleteUserModal()}
    </Panel>
  );
};

export default DeleteUserZone;
