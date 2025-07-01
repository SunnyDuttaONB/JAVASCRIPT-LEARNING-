// let age = 25;
// let a;
// console.log(age);
// console.log(a);

const student = {
    fullName: "Rahul",
    age: 20,
    cgpa: 8,
    isPass: true,
};
console.log(student);
student.age = student.age + 1;
console.log(student.age);

const product = {
    name: "Ball Pen",
    price: 270,
    rating: 4,
    offer: 5,
};

console.log(product);
product.price = product.price - product.offer;
console.log(product.price);

let string = "abcd";
let num = 123;
let strnum = string + num;
console.log(strnum);


// Create a constant object called "profile" to store information about a person.

const profile = {
    username: "@sunnyzzz",
    isFollow: false,
    followers: 123,
    following: 123,
};

console.log(profile);
console.log(typeof profile);
console.log(profile.username);
console.log(typeof profile.username);