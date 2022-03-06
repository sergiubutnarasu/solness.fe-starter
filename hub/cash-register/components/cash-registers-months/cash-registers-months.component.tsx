import { Grid, MONTHS, Tag, Typography } from '@solness/ui';
import { Link } from '@solness/hub-core';
import { groupRegistersByMonth } from '../../helpers';
import { useMemo } from 'react';

interface Props {
  year: string;
  registersByYear: Record<string, string[]>;
}

const CashRegisterMonths = ({ year, registersByYear }: Props) => {
  const registersByMonth = useMemo(
    () => groupRegistersByMonth(registersByYear[year]),
    [year, registersByYear],
  );

  const months = useMemo(
    () => Object.keys(registersByMonth),
    [registersByMonth],
  );

  return (
    <>
      {months.map((month, index) => {
        const values = registersByMonth[month];
        const color = index % 2 ? undefined : 'gray.50';

        return (
          <Grid
            alignItems="center"
            bgColor={color}
            key={month}
            columns={12}
            px={4}
            py={2}
            borderRadius={8}
          >
            <Grid.Item colSpan={2}>
              <Typography.Text>{MONTHS[+month - 1]}</Typography.Text>
            </Grid.Item>

            <Grid.Item colSpan={10}>
              {values.map((value) => (
                <Link key={value} href={`/cash/${value}`}>
                  <Tag mr={2}>{value}</Tag>
                </Link>
              ))}
            </Grid.Item>
          </Grid>
        );
      })}
    </>
  );
};

export default CashRegisterMonths;
