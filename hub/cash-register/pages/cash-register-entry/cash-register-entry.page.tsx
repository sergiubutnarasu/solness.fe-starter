import { Page } from '@solness/ui';
import { isValidDate } from '@solness/date';
import { useGetCashRegisterEntries } from './data';

interface Props {
  date?: string;
}

const CashRegisterEntryPage = ({ date }: Props) => {
  const isValid = date && isValidDate(date);
  const { data, loading } = useGetCashRegisterEntries({ date, skip: !isValid });

  if (!isValid) {
    throw new Error('Invalid Date');
  }

  return (
    <Page
      title="Cash Register Entry"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
    >
      {date}
      {data?.previousEntriesCount}
      {data?.previousTotalValue}
    </Page>
  );
};

export default CashRegisterEntryPage;
