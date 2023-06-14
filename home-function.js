function sayHello(nameUser) {
    return "Привет, " + nameUser;
}
console.log(sayHello('Антон'));

function returnNeighboringNumbers(num) {
    let arr = [num - 1, num, num + 1];
    return arr;
}

console.log(returnNeighboringNumbers(10));


function getMathResult(baseNum, repeatNum) {
    if (typeof (repeatNum) != 'number' || repeatNum <= 0) {
        return baseNum;
    }

    let str = '';

    for (let i = 1; i <= repeatNum; i++) {
        if (i === repeatNum) {
            str += `${baseNum * i}`;
            // Тут без черточек в конце
        } else {
            str += `${baseNum * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;


}

console.log(getMathResult(2, 10))

//2*1=2
//2*2=4
//2*3=6

