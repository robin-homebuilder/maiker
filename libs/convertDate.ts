export function convertDate(date: string) : string {
  const inputDate = new Date(date);

  // Define an array for ordinal suffixes (st, nd, rd, th)
  const ordinalSuffixes = ['th', 'st', 'nd', 'rd'];

  // Get the day of the month
  const day = inputDate.getDate();
  // Determine the ordinal suffix for the day
  const daySuffix = ordinalSuffixes[(day % 10)] || ordinalSuffixes[0];

  // Get the month name
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = monthNames[inputDate.getMonth()];

  // Get the year
  const year = inputDate.getFullYear();

  // Create the formatted date string
  const formattedDate = `${day}${daySuffix} ${month} ${year}`;

  return formattedDate;
}