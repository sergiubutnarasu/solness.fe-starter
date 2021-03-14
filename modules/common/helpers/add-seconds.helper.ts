import moment from "moment";

export const addSeconds = (value: number, format: string = undefined) =>
  moment().add(value, "s").format(format);
