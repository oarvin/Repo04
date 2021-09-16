function main(numOne, numTwo){
    
    // Comment
    var numOne = parseFloat (numOne);
    var numTwo = parseFloat (numTwo);
    var myQuotient = parseFloat (numOne / numTwo);
  
    // Comment
    return myQuotient;
}

console.log(main(5.0, 2.0));
console.log(main(16.5,5.5));
console.log(main(102.0, 25.5));
module.exports = main;