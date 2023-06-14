'use strict';

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 6;
let result = '';

for (let i = 1; i <= lines; i++) {

    for (let j = lines - 1; j >= i; j--) {
        result += " ";
    }
    for (let k = 1; k <= i; k++) {
        if (k == 1) {
            result += "*";
        }
        else {
            result += "**";
        }

    }


    result += "\n";
}
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

console.log(result);
