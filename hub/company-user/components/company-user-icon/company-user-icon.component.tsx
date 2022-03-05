import { Icon, Tooltip } from '@solness/ui';

interface Props {
  verified: boolean;
  roles: string[];
}

const CompanyUserIcon = ({ verified, roles }: Props) => {
  if (roles.some((role) => role === 'Owner')) {
    return (
      <Tooltip
        as="span"
        display="inline-flex"
        verticalAlign="middle"
        placement="top"
        label="Owner"
      >
        <Icon icon="lightning" color="blue.500" />
      </Tooltip>
    );
  }

  if (!verified) {
    return (
      <Tooltip
        as="span"
        display="inline-flex"
        verticalAlign="middle"
        placement="top"
        label="Not verified"
      >
        <Icon icon="shield-exclamation" color="orange.500" />
      </Tooltip>
    );
  }

  return (
    <Tooltip
      as="span"
      display="inline-flex"
      verticalAlign="middle"
      placement="top"
      label="Verified"
    >
      <Icon icon="shield-check" color="green.500" />
    </Tooltip>
  );
};

export default CompanyUserIcon;
