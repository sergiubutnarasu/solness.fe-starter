import { Section } from '@solness/ui';
import { useMemo } from 'react';
import { groupRegistersByYear } from '../../helpers';
import CashRegisterMonths from '../cash-registers-months';

interface Props {
  registers: string[];
}

const CashRegisters = ({ registers }: Props) => {
  const registersByYear = useMemo(
    () => groupRegistersByYear(registers),
    [registers],
  );

  const years = useMemo(
    () => Object.keys(registersByYear).reverse(),
    [registersByYear],
  );

  return (
    <>
      {years.map((year) => {
        return (
          <Section key={year} title={year} leftColSpan={2} rightColSpan={10}>
            <CashRegisterMonths year={year} registersByYear={registersByYear} />
          </Section>
        );
      })}
    </>
  );
};

export default CashRegisters;
