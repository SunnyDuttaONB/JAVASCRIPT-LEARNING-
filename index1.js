// Comments in JS
// This is a single-line comment
// This is another single-line comment
/* This is a multi-line comment
   It can span multiple lines
   Useful for longer explanations or notes */

   //Operators in JavaScript
   // Arithmetic Operators
    let a = 5;
    let b = 2;

   console.log("a = ", a, "b = ", b);
   console.log("a + b = ", a + b);
   console.log("a - b = ", a - b);
   console.log("a * b = ", a * b);
   console.log("a / b = ", a / b);
   console.log("a % b = ", a % b);
   console.log("a ** b = ", a ** b); // Exponentiation operator
   console.log("a++ = ", a++); // Post-increment
   console.log("++a = ", ++a); // Pre-increment
   console.log("a-- = ", a--); // Post-decrement
    console.log("--a = ", --a); // Pre-decrement


    // Assignment Operators
    // = assigns the value on the right to the variable on the left
    let c = 5;
    let d = 2;
    c += d; // Equivalent to a = a + b
    console.log("c += d: ", c); // 7



    // Comparison Operators
      let x = 5;
      let y = "5"; // String type
    console.log("x == y", x == y); // Equal to
      console.log("x != y: ", x != y); // Not equal to
      console.log("x == y: ", x === y); // Strict equal to (type and value)
      console.log("x != y: ", x !== y); // Strict not equal to (type and value)
      console.log("x > y ", x > y); // Greater than
      console.log("x < y ", x < y); // Less than
      console.log("x >= y: ", x >= y); // Greater than or equal to
      console.log("x <= y: ", x <= y); // Less than or equal to


// Logical Operators
console.log("a && b: ", a && b); // Logical AND
console.log("a || b: ", a || b); // Logical OR
console.log("!a: ", !a); // Logical NOT
// Bitwise Operators
console.log("a & b: ", a & b); // Bitwise AND
console.log("a | b: ", a | b); // Bitwise OR
console.log("a ^ b: ", a ^ b); // Bitwise XOR
console.log("~a: ", ~a); // Bitwise NOT
console.log("a << 1: ", a << 1); // Left shift  
console.log("a >> 1: ", a >> 1); // Right shift
 

// Ternary Operator
let age = 18;  
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Outputs: Yes, you can vote.

// Get user to input a number using prompt("Enter a Number: "). Check this number is a multiple of 5 or not.

let num = prompt("Enter a Number: ");

if(num % 5 ===0){
   console.log(num,"is a multiple of 5");
}else{
   console.log(num,"is not a multiple of 5");
}


// Number 2:

//let score = 75;
let score = prompt("Enter your score: ");
score = parseInt(score); // Convert input to an integer
let grade;

if(score >= 90 && score <= 100){
   grade = "A";
}else if(score >=70 && score < 90){
   grade = "B";
}else if(score >=50 && score < 70){
   grade = "C";
}else if(score >=40 && score < 50){
   grade = "D";
}else{
   grade = "F";
}

console.log("Your grade is: ", grade);