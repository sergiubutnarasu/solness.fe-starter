export const groupRegistersByYear = (registers: string[]) =>
  registers.reduce<{ [key: string]: string[] }>((previousValue, register) => {
    const [year] = register.split('-');
    const previousValues: string[] = previousValue[year] ?? [];
    const values = [...previousValues, register];

    return { ...previousValue, [year]: values };
  }, {});
