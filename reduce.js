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

// console.log(highestMark);


const employees = [
    { name: "Siam", salary: 30000 },
    { name: "Rahim", salary: 25000 },
    { name: "Karim", salary: 40000 },
    { name: "Hasan", salary: 35000 }
];

const totalAmount = employees.reduce((acc,curr)=>{
    return acc + curr.salary
},0)

console.log(totalAmount);


const lowAmount = employees.reduce((acc, curr)=>{
    return curr.salary < acc.salary ? curr : acc;
},employees[0])

// console.log(lowAmount);

const employees2 = [
    { name: "Siam", department: "IT", salary: 30000 },
    { name: "Rahim", department: "HR", salary: 25000 },
    { name: "Karim", department: "IT", salary: 40000 },
    { name: "Hasan", department: "HR", salary: 35000 },
    { name: "Rakib", department: "Sales", salary: 28000 }
];

const departmentSalary = employees2.reduce((acc, curr) => {
    if (acc[curr.department]) {
        acc[curr.department] += curr.salary;
    } else {
        acc[curr.department] = curr.salary;
    }

    return acc;
}, {});

console.log(departmentSalary);