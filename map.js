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

// console.log(squareNumbers);


const names2 = ["siam", "rahim", "karim", "hasan"];

const upperCaseNames = names2.map((name)=>{
    return name.toUpperCase();
})

// console.log(upperCaseNames);


const products = [
    { name: "T-Shirt", price: 500 },
    { name: "Shirt", price: 800 },
    { name: "Pant", price: 1200 }
];

const productPrices = products.map((product)=>{
    return product.price;
})

// console.log(productPrices);

