function main(numOne, numTwo){
    
    // Comment
    var numOne = parseFloat (numOne);
    var numTwo = parseFloat (numTwo);
    var product = parseFloat (numOne * numTwo);

  
    // Comment
    return product;
}

console.log(main(2.5, 2.0));
console.log(main(5.5,5.5));
console.log(main(100.25, 43.20));
module.exports = main;