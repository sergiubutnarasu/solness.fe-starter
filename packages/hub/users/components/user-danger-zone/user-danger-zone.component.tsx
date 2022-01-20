import { Button, Panel, Section, Stack } from '@solness/ui';
import React, { FunctionComponent } from 'react';
import { useExcludeUser } from '../exclude-user-modal';

export interface Props {
  userId: number;
}

const UserDangerZone: FunctionComponent<Props> = ({ userId }) => {
  const {
    showModal: showExcludeUserModal,
    renderModal: renderExcludeUserModal,
  } = useExcludeUser(userId);

  return (
    <Section
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
          onClick={showExcludeUserModal}
        >
          Exclude member
        </Button>
      </Stack>

      {renderExcludeUserModal()}
    </Section>
  );
};

export default UserDangerZone;
