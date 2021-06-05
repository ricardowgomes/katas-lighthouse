const organizeInstructors = function (instructors) {
  let instructorsArray = [];
  let coursesArray = [];
  let instructorsCourseName = {};

  for (let i = 0; i < instructors.length; i++) {
    instructorsArray.push(instructors[i].name);
    coursesArray.push(instructors[i].course);
  }

  for (let j = 0; j < coursesArray.length; j++) {
    instructorsCourseName[coursesArray[j]] = []
  }

  for (let k = 0; k < instructorsArray.length; k++) {
    instructorsCourseName[coursesArray[k]].push(instructorsArray[k])
  }

  return instructorsCourseName
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]))

// Expected Output
/* {
  iOS: ["Samuel"],
    Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
    Web: ["David", "Carlos"],
      iOS: ["Martha"]
} */

// Mine Output
/* { iOS: [ 'Samuel' ],
  Web: [ 'Donald' ] }
{
{ Blockchain: [ 'Brendan' ],
  Web: [ 'Carlos' ],
  iOS: [ 'Martha' ] }
} */