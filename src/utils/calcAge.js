export const calcAge = (birthdate) => {
  const birthDate = new Date(birthdate);
  const currentDate = new Date();

  // Difference in milliseconds
  const difference = currentDate - birthDate;

  // Convert milliseconds to days
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (days < 30) {
    return `${days} day${days > 1 ? "s" : ""}`;
  } else if (days < 365) {
    const months = Math.floor(days / 30);
    return `${months} month${months > 1 ? "s" : ""}`;
  } else {
    //calculate years, considering leap years
    const years = Math.floor(days / 365);
    const leapYearDays = Math.floor(years / 4);
    const totalDaysInYears = years * 365 + leapYearDays;
    if (totalDaysInYears <= days) {
      return `${years} year${years > 1 ? "s" : ""}`;
    } else {
      return `${years - 1} year${years > 2 ? "s" : ""}`;
    }
  }
};
