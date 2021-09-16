function main(numOne, numTwo){
    
    // Comment
   var numOne = parseInt(numOne);
   var numTwo = parseInt(numTwo);
   var remainder = numOne % numTwo;
    // Comment
    return remainder;
}

console.log(main(5, 2));
console.log(main(15, 4));
console.log(main(102, 25));
module.exports = main;