import { useCallback, useState } from 'react';

const useFlag = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(
    () => setValue((prevValue) => !prevValue),
    [setValue],
  );

  const setFlag = useCallback(() => setValue(true), [setValue]);

  const resetFlag = useCallback(() => setValue(false), [setValue]);

  const changeFlag = useCallback(
    (newValue: boolean) => setValue(newValue),
    [setValue],
  );

  return {
    flag: value,
    toggle,
    setFlag,
    resetFlag,
    changeFlag,
  };
};

export default useFlag;
