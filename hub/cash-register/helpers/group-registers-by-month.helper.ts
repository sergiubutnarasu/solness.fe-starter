export const groupRegistersByMonth = (registers: string[]) =>
  registers.reduce<{ [key: string]: string[] }>((previousValue, register) => {
    const [_, month] = register.split('-');
    const previousValues: string[] = previousValue[+month] ?? [];
    const values = [...previousValues, register];

    return { ...previousValue, [+month]: values };
  }, {});
