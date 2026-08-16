const students = [
    { name: "Siam", marks: 80 },
    { name: "Rahim", marks: 70 },
    { name: "Karim", marks: 90 }
];

const names = students.map((student) => {
    return student.name;
});

// console.log(names);

const numbers = [5, 10, 15, 20, 25];

const squareNumbers = numbers.map((number)=>{
    return number * number;
})

console.log(squareNumbers);