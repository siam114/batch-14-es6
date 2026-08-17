const numbers = [10, 20, 30, 40];

const sumOfNumber = numbers.reduce((sum, number)=>{
    return sum + number
}, 0)

// console.log(sumOfNumber);

const multiple = numbers.reduce((acc, current)=>{
    return acc *current
},1)

// console.log(multiple);


const students = [
    { name: "Siam", marks: 80 },
    { name: "Rahim", marks: 70 },
    { name: "Karim", marks: 90 }
];

const sumOfMarks = students.reduce((acc, cur)=>{
    return acc + cur.marks
},0)

// console.log(sumOfMarks);

const products = [
    { name: "T-Shirt", price: 500, quantity: 3 },
    { name: "Shoes", price: 2000, quantity: 2 },
    { name: "Watch", price: 1500, quantity: 4 }
];

const totalBill = products.reduce((acc, total)=>{
    return acc + total.price * total.quantity
},0)

// console.log(totalBill);


const students2 = [
    { name: "Siam", marks: 85 },
    { name: "Rahim", marks: 72 },
    { name: "Karim", marks: 95 },
    { name: "Hasan", marks: 88 }
];

const highestMarks = students2.reduce((acc, student) => {
    if (student.marks > acc.marks) {
        return student;
    } else {
        return acc;
    }
}, students[0]);

// console.log(highestMarks);

const students5 = [
    { name: "Siam", marks: 85 },
    { name: "Rahim", marks: 92 },
    { name: "Karim", marks: 78 },
    { name: "Hasan", marks: 95 },
    { name: "Rakib", marks: 88 }
];

const highestMark = students5.reduce((acc, curr) => {
    return curr.marks > acc.marks ? curr : acc;
}, students5[0]);

console.log(highestMark);