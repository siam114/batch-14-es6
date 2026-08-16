const numbers = [10, 15, 20, 25, 30];

const filterNumber = numbers.filter((number)=>{
    return number > 20;
});

// console.log(filterNumber);

const students = [
    { name: "Siam", marks: 85 },
    { name: "Rahim", marks: 35 },
    { name: "Karim", marks: 90 }
];

const passStudent = students.filter((student) => {
    return student.marks >= 40;
});

console.log(passStudent);