import { Button, Form, Modal, useNotification } from '@solness/ui';
import { CompanyCashDetailsInput } from '@solness/generated-types';
import { useUpdateCompanyCashDetails } from './data';

interface Props {
  initialCashIndex?: number | null;
  initialCashValue?: string | null;
  onClose: () => void;
  onSubmit: () => void;
}

const UpdateCompanyCashDetailsForm = ({
  initialCashIndex = 1,
  initialCashValue,
  onClose,
  onSubmit,
}: Props) => {
  const { showError } = useNotification();

  const { updateCompanyCashDetails, loading } = useUpdateCompanyCashDetails({
    onCompleted: () => {
      onSubmit();
    },
    onError: (error) => showError(error.message),
  });

  const handleSubmit = async ({
    initialCashIndex: newIndex = 1,
    initialCashValue: newValue,
  }: Partial<CompanyCashDetailsInput>) => {
    await updateCompanyCashDetails({
      initialCashIndex: Number(newIndex),
      initialCashValue: Number(newValue),
    });
  };

  return (
    <Form
      defaultValues={{
        initialCashIndex,
        initialCashValue: Number(initialCashValue),
      }}
      onSubmit={handleSubmit}
    >
      <Modal.Body>
        <Form.Input
          isRequired
          type="number"
          name="initialCashIndex"
          label="Initial Index"
        />

        <Form.Input isRequired name="initialCashValue" label="Initial Value" />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="ghost" disabled={loading} onClick={onClose}>
          Cancel
        </Button>

        <Form.SubmitButton isLoading={loading} colorScheme="red">
          Change
        </Form.SubmitButton>
      </Modal.Footer>
    </Form>
  );
};

export default UpdateCompanyCashDetailsForm;
