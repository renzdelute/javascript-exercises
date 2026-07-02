const removeFromArray = function(array, ...args) {
    return array.filter(item => !args.includes(item));
};

console.log(removeFromArray([1,2,3,4,5,6], 3))

// Do not edit below this line
module.exports = removeFromArray;
