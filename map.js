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

const products2 = [
    { name: "T-Shirt", price: 500 },
    { name: "Shirt", price: 800 },
    { name: "Pant", price: 1200 }
];

const newProducts = products2.map((product)=>{
    product.price = product.price + 100;
    return product;
})

// console.log(newProducts);


const students2 = [
    { name: "Siam", marks: 85 },
    { name: "Rahim", marks: 70 },
    { name: "Karim", marks: 90 }
];

const newStudent2= students2.map((student)=>{
    return{
        ...student,grade: "A"
    }
})

// console.log(newStudent2);

const products5 = [
    { name: "T-Shirt", price: 500 },
    { name: "Shirt", price: 800 },
    { name: "Pant", price: 1200 },
    { name: "Jacket", price: 2000 }
];

const discountPrice = products5.map((product)=>{
  return {
        ...product,
        price: product.price - (product.price * 10 / 100)
    };
})

// console.log(discountPrice);

const students5 = [
    { name: "Siam", marks: 85 },
    { name: "Rahim", marks: 55 },
    { name: "Karim", marks: 92 },
    { name: "Hasan", marks: 38 }
];

const studentStatus = students5.map((students)=>{
  if (students.marks >= 40) {
        return {
            ...students,
            status: "Pass"
        };
    } else {
        return {
            ...students,
            status: "Fail"
        };
    }

})


// console.log(studentStatus);

const users = [
    { firstName: "SM", lastName: "Siam" },
    { firstName: "Md", lastName: "Rahim" },
    { firstName: "Abdul", lastName: "Karim" }
];

const fullNames = users.map((user)=>{
    return {
        ...user,
        fullName: `${user.firstName} ${user.lastName}`
    }
})


console.log(fullNames);