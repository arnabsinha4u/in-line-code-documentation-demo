//
// ### Fibonacci numbers - Recursion
// ### function fibonacci (n)
// Recursive function defined with a variable `n` as input to determine the length of Fibonacci numbers to be generated
//
var recursive = function(n) {
    if(n <= 2) {
        return 1;
    } else {
        return this.recursive(n - 1) + this.recursive(n - 2);
    }
};
