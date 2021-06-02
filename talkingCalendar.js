const talkingCalendar = function (date) {
  const dateSplit = date.split("/");
  const dateYear = dateSplit[0]
  const dateMonth = Number(dateSplit[1])
  const dateDay = Number(dateSplit[2])

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const longMonth = months[dateMonth - 1]
  let longDay = ""

  if (dateDay === 1) {
    longDay = `${dateDay}st`
  } else if (dateDay === 2) {
    longDay = `${dateDay}nd`
  } else if (dateDay === 3) {
    longDay = `${dateDay}rd`
  } else {
    longDay = `${dateDay}th`
  }

  return `${longMonth} ${longDay}, ${dateYear}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

