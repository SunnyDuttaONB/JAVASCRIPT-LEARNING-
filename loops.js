// Loops:

// 1. For Loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: ", i);
}

// 2. While Loop
let j = 0;  
while (j < 5) {
    console.log("While Loop iteration: ", j);
    j++;
}
// 3. Do-While Loop
let k = 0;
do {
    console.log("Do-While Loop iteration: ", k);
    k++;
} while (k < 5);

// 4. For...of Loop
const array = [1, 2, 3, 4, 5];

for (const value of array) {
    console.log("For...of Loop value: ", value);
}

// 5. For...in Loop
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(`For...in Loop key: ${key}, value: ${object[key]}`);
    }
}