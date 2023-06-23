// //Q1
let studentRecords = [
    
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ];

let studentNames = studentRecords.map(student => student.name.toUpperCase());
console.log(studentNames);

//Q2
let highScorers = studentRecords.filter(student => student.marks > 50);
console.log(highScorers);

//Q3
let filteredStudents = studentRecords.filter(student => student.marks >50 && student.id > 120);
console.log(filteredStudents);

//Q4
let totalMarks = studentRecords
.map(student => student.marks)
.reduce((prev, currentValue) => prev + currentValue);
console.log(totalMarks);


//Q5
let filteredNames = studentRecords

.filter(student => student.marks > 50)
.map(student => student.name);
console.log(filteredNames);

//Q6
let sumOfMarks = studentRecords
.filter(student => student.id > 120)
.reduce((prev, curr) => prev + curr.marks, 0);
console.log(sumOfMarks);

//Q7

let totalScorers = studentRecords
.map(student => {
if (student.scorers < 50){
  student.scorers += 15;
}
return student;
})

.filter(student => student.marks > 50)
.reduce((prev, curr) => prev + curr.marks, 0);
console.log(totalScorers);

//Q8

let student= [
{name: 'John', class: 'A', rollNo: 1},
{name: 'Baba', class: 'B', rollNo: 2},
{name: 'Wick', class: 'C', rollNo: 3},
{name: 'Yaga', class: 'D', rollNo: 4},
{name: 'David', class: 'E', rollNo: 5},
{name: 'ket', class: 'F', rollNo: 6},

];