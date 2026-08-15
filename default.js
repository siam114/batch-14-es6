function great(name = 'great') {

    return 'Hello ' + name;
    
}

// console.log(great());

const add = (a, b) => {
    return a + b;
};

// console.log(add(5,6));


const introduce =(name, age) => {
    return `My name is ${name} and I am ${age} years old.`
}

// console.log(introduce('Siam', 25));


const student = {
    name: "Siam",
    age: 22,
    department: "CSE",
    marks: 85
};

const { name, age, department, marks } = student;

// console.log(name, age, department, marks);

const numbers = [10, 20, 30, 40];

const [first, second, third, fourth] = numbers;

// console.log(first, second, third, fourth);



const numbers1 = [10, 20, 30];
const numbers2 = [40, 50, 60];

const result = [
    ...numbers1,
    ...numbers2
];

// console.log(result);

const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Mango", "Orange"];

const allFruits = [
    ...fruits1,
    ...fruits2
];

// console.log(allFruits);