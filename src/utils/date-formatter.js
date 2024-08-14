
const DateFormatter = (initDate) => {
  const date = new Date(initDate);
  const dateTimeFormatter = new Intl.DateTimeFormat('en-US', {dateStyle: 'long'})
  const formattedDate = dateTimeFormatter.format(date);
  return formattedDate;
};

export default DateFormatter;
