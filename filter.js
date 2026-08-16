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

// console.log(passStudent);

const numbers2 = [12, 17, 20, 25, 30, 33, 40, 45];

const evenNumber = numbers2.filter((number)=>{
    return number%2 == 0;
})

// console.log(evenNumber);

const numbers3 = [-10, 20, -5, 30, 0, -15, 40];

const positiveNumber = numbers3.filter((number)=>{
    return number > 0
})

// console.log(positiveNumber);


const products = [
    { name: "T-Shirt", price: 500 },
    { name: "Shoes", price: 2500 },
    { name: "Watch", price: 1500 },
    { name: "Cap", price: 300 },
    { name: "Bag", price: 1200 }
];

const newProducts = products.filter((product)=>{
    return product.price >= 1000;
})

// console.log(newProducts);


const users = [
    { name: "Siam", age: 22, active: true },
    { name: "Rahim", age: 17, active: true },
    { name: "Karim", age: 25, active: false },
    { name: "Hasan", age: 20, active: true },
    { name: "Jamal", age: 16, active: false }
];

const activeUser = users.filter((user)=>{
    return user.age > 18 && user.active
})

console.log(activeUser);