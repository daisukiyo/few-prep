// factorial
// returns a number that is the factorial of the given number

function factorial(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n-1);
    }
}