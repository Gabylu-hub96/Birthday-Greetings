const bdList = [
  {
    lastName: "Doe",
    firstName: "John",
    yearOfBirth: 1982,
    monthOfBirth: 3,
    dayOfBirth: 14,
    email: "john.doe@foobar.com",
  },
];

function checkIfBirthday(name, year, month, day) {
  bdList.forEach((personObject) => {
    if (
      personObject.yearOfBirth == year &&
      personObject.monthOfBirth == month &&
      personObject.dayOfBirth == day
    ) {
      const age =
        new Date(year, month - 1, day).getFullYear() - personObject.yearOfBirth;
      throw (
        "Happy Birthday, " +
        personObject.firstName +
        "! Today is your " +
        age +
        "th birthday!"
      );
    }
  });
}

bdList.forEach((personObject) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  for (let year = currentYear; year <= currentYear + 1; year++) {
    try {
      checkIfBirthday(
        personObject.firstName,
        year,
        personObject.monthOfBirth,
        personObject.dayOfBirth
      );
    } catch (error) {
      console.log(error);
    }
  }
});
