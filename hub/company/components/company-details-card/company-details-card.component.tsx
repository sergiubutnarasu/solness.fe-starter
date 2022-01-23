import { CompanyFragmentFragment } from '@solness/generated-types';
import { Box, Tag, Typography } from '@solness/ui';

type Props = {
  company: CompanyFragmentFragment;
};

const CompanyDetailsCard = ({
  company: { name, registerNumber, slogan },
}: Props) => (
  <Box p={8} borderWidth={1} borderRadius="md" boxShadow="sm">
    <Typography.Title fontWeight="semibold">{name}</Typography.Title>

    <Tag fontSize="xs" mt={2}>
      Register number: {registerNumber}
    </Tag>

    {slogan && (
      <Typography.Text mt={4} color="gray.500">
        {slogan}
      </Typography.Text>
    )}

    <Typography.Text mt={4}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
      blanditiis eaque aperiam? Eaque molestias iusto facere recusandae nisi,
      at, doloremque reprehenderit enim ipsam voluptatum fugit delectus? Sed
      esse iusto nulla? Harum quia pariatur dolorem rem repellat totam sunt non
      labore tempora saepe perspiciatis, cupiditate ab nobis voluptate illum
      ipsa minima.
    </Typography.Text>
  </Box>
);

export default CompanyDetailsCard;
