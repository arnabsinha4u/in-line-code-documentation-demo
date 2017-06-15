//
// ### function stop (file)
// #### @file {string} Target forever process to stop
// Stops the forever process specified by `file`.
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
