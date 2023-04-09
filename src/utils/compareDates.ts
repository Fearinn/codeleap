export function compareDates(startDate: Date) {
  const currentDate = new Date();
  const timeSinceStart = currentDate.getTime() - startDate.getTime();

  return new Intl.RelativeTimeFormat(undefined, {
    style: "long",
    numeric: "auto",
  }).format(Math.floor((timeSinceStart / 1000 / 60) * -1), "minutes");
}
