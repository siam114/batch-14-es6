const students = [
    { name: "Siam", marks: 85 },
    { name: "Rahim", marks: 35 },
    { name: "Karim", marks: 90 },
    { name: "Hasan", marks: 45 }
];

const student = students.find((student) => {
    return student.marks >= 80;
});

console.log(student);

const users = [
    { name: "Siam", age: 22, active: false },
    { name: "Rahim", age: 17, active: true },
    { name: "Karim", age: 25, active: true },
    { name: "Hasan", age: 30, active: true }
];

const userFind = users.find((user)=>{
    return user.age >=18 && user.active
})

console.log(userFind);