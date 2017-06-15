//
// ### function stop (file)
// #### @file {string} Target forever process to stop
// Stops the forever process specified by `file`.
// EXAMPLE: `./forever/stopall.config`.
//
var recursive = function(n) {
    if(n <= 2) {
        return 1;
    } else {
        return this.recursive(n - 1) + this.recursive(n - 2);
    }
};
