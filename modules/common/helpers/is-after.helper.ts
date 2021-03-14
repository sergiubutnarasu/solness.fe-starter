import moment from "moment";

export const isAfter = (date: string) => moment().isAfter(date);
