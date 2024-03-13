bdlist = [
  {
    lastName: "Doe",
    firstName: "John",
    yearOfBirth: 1982,
    monthOfBirth: 10,
    dayOfBirth: 8,
    email: "john.doe@foobar.com",
  },
];

for (var year = 1970; year <= 2030; year++) {
  for (var month = 1; month <= 12; month++) {
    for (var day = 1; day <= 31; day++) {
      checkIfBirthday(year, month, day);
    }
  }
}

function checkIfBirthday(year, month, day) {
  var isBirthday = false;
  bdlist.forEach((personObject) => {
    if (
      personObject.yearOfBirth == year &&
      personObject.monthOfBirth == month &&
      personObject.dayOfBirth == day
    ) {
      console.log(personObject.firstName + " is born.");
    } else if (
      year > personObject.yearOfBirth &&
      personObject.monthOfBirth == month &&
      personObject.dayOfBirth == day
    ) {
      console.log(
        "Today is your " + (year - personObject.yearOfBirth) + "th bday"
      );
    }

    personObject.year;
  });
}
