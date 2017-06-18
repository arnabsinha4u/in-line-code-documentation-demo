//
// Fibonacci numbers - General
// ### function fibonacci (n)
// Function defined with a variable `n` as input to determine the length of Fibonacci numbers to be generated
//
var looping = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};
