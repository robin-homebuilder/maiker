export function convertDate(date: string) : string {
  const inputDate = new Date(date);

  const ordinalSuffixes = ['th', 'st', 'nd', 'rd'];

  const day = inputDate.getDate();
  
  const daySuffix = ordinalSuffixes[(day % 10)] || ordinalSuffixes[0];

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = monthNames[inputDate.getMonth()];

  const year = inputDate.getFullYear();

  const formattedDate = `${day}${daySuffix} ${month} ${year}`;

  return formattedDate;
}

export function convertArticleDate(date: Date) : string {
  const inputDate = new Date(date);

  const formattedDate = inputDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return formattedDate;
}

export function convertInsuranceExpiryDate(date: string) : string {
  const inputDate = new Date(date);

  const formattedDate = inputDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const [month, day, year] = formattedDate.split('/');
  return `${month}.${day}.${year}`;
}

export function convertProjectPhotoDate(date: string) : string {
  const inputDate = new Date(date);

  const formattedDate = inputDate.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });

  return formattedDate;
}