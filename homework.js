'use strict';
let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {

    for (let j = 1; j < i; j++) {
        result += "*";
    }

    result += "\n";
}
console.log(result);



first: for (let i = 0; i < 3; i++) {
    console.log(`First: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third: ${k}`);
        }
    }


}

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

for (let i = 20; i >= 10; i--) {
    if (i == 13) break;
    console.log(i);

}

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while (i < 16) {
    i++;
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

const arrayOfNumbers = [];

for (let i = 5; i <= 10; i++) {
    arrayOfNumbers.push(i);
}

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }

console.log(arrayOfNumbers);

//home1
const arr = [3, 5, 8, 16, 20, 23, 50];
const resultA = [];
for (let i = 0; i < arr.length; i++) {
    resultA[i] = arr[i];
}
console.log(resultA);
//home2
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {

    if (typeof (data[i]) === 'string') data[i] = data[i] + ' ' + '- done'
    else data[i] *= 2;
}
console.log(data);

//home3

const dataB = [5, 10, 'Shopping', 20, 'Homework'];
const resultB = [];

for (let i = dataB.length - 1; i >= 0; i--) {
    resultB.push(dataB[i]);
}


// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

console.log(resultB);


