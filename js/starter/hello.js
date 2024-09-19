const sumEven = (array) => {
    let total = 0;
    for (let i of array) {
        if (i % 2 === 0) {
            total += i;
        }
    }
    return total;
}

const myArray = [2, 3, 6, 9, 11, 4];
console.log(sumEven(myArray));