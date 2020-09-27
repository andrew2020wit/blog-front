export function getLocalTimeFromUTC(date: Date): Date {
  const date2 = new Date(date);
  const timezoneOffset = 60 * 1000 * new Date().getTimezoneOffset();
  const ret = date2.getTime() - timezoneOffset;

  return new Date(ret);
}
