// isPrime
// returns true or false, indicating whether the given number is prime

function isPrime(n) {
    for(var i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}