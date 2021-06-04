const talkingCalendar = function (date) {
  const dateSplit = date.split("/");
  const dateYear = dateSplit[0]
  const dateMonth = Number(dateSplit[1])
  const dateDay = Number(dateSplit[2])

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const longMonth = months[dateMonth - 1]

  function ordinalSuffixOf(i) {
    let j = i % 10, k = i % 100;

    if (j === 1 && k !== 11) {
      return i + "st";
    }
    else if (j === 2 && k !== 12) {
      return i + "nd";
    }
    else if (j === 3 && k !== 13) {
      return i + "rd";
    } else {
      return i + "th";
    }
  }

  ordinalSuffixOf(dateDay)

  return `${longMonth} ${ordinalSuffixOf(dateDay)}, ${dateYear}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("2017/12/03"));
console.log(talkingCalendar("2007/11/12"));
console.log(talkingCalendar("1987/08/22"));
console.log(talkingCalendar("2007/11/31"));
console.log(talkingCalendar("1987/08/23"));

