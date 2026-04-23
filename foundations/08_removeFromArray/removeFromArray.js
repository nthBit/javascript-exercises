let array = [1, 2, 3, 4, 5];

// const removeFromArray = function(arr, arg1, arg2) {
//     let newArray = [];
//     for (item of arr) {
//         if (!(item === arg1 || item === arg2)) {
//             newArray.push(item);
//         }
//     }
//     return newArray
// };

// console.log(removeFromArray(array, 3, 5));

const removeFromArray = function(arr, ...args) {
    let newArray = [];
    for (item of arr) {
        if (!(args.includes(item))) {
            newArray.push(item);
        }
    }
    return newArray
};

console.log(removeFromArray(array, 3, 5));

// Do not edit below this line
module.exports = removeFromArray;
