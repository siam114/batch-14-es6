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

console.log(first, second, third, fourth);