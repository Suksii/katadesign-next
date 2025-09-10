export const openLink = (link) => {
  window.open(link);
};


export const formatDateParts = (dateStr) => {
  const [day, month, year] = dateStr.split(".");
  return { month: month.padStart(2, "0"), year: year.slice(-2) };
};