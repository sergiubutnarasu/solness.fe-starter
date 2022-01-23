import { CompanyFragmentFragment } from '@solness/generated-types';
import { Box, Tag, Typography } from '@solness/ui';

type Props = {
  company: CompanyFragmentFragment;
};

const CompanyDetailsCard = ({
  company: { name, registerNumber, slogan, description },
}: Props) => (
  <Box>
    <Typography.Title fontWeight="semibold">{name}</Typography.Title>

    <Tag fontSize="xs" mt={2}>
      Register number: {registerNumber}
    </Tag>

    {slogan && (
      <Typography.Text mt={4} color="gray.500">
        {slogan}
      </Typography.Text>
    )}

    {description && <Typography.Text mt={4}>{description}</Typography.Text>}
  </Box>
);

export default CompanyDetailsCard;
