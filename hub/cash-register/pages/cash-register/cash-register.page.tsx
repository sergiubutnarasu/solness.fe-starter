import { ListLoader, Page } from '@solness/ui';
import { CashRegisterActions, CashRegisters } from '../../components';
import { useGetCashRegisters } from './data';

const CashRegisterPage = () => {
  const { data, loading } = useGetCashRegisters();

  const hasCreatePermissions = Boolean(data?.viewer.permissions.cash.create);

  if (loading) {
    return (
      <Page
        title="Cash Register"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
      >
        <ListLoader />
      </Page>
    );
  }

  return (
    <Page
      title="Cash Register"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laborum?"
      actions={
        <>
          {hasCreatePermissions && (
            <CashRegisterActions lastEntryDate={data?.lastEntryDate} />
          )}
        </>
      }
    >
      {data?.cashRegisters && <CashRegisters registers={data.cashRegisters} />}
    </Page>
  );
};

export default CashRegisterPage;
