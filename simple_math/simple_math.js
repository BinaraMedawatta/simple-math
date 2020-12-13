export function isOdd(x) { return (x%2==0) ?  false : true}


export function isPrime(x) {
    for(i=2; i<=x/2; i++) if(x%i==0) return false
    return true
}


export function isDivisibleByX(n, x) { return (n%x==0) ? true : false}


export function factorial(x) {
    if(x<0) return 0
    var n = 1
    for(i=x; i>0; i--) n *= i
    return n
}


export function primesLessThanX(x) {
    var primes = []
    for(j=2; j<x; j++){
        if(isPrime(j)) primes.push(j)
    }
    return primes
}


// including x = i_x, including y = i_y
export function primesBetweenXandY(x, y, i_x = false, i_y = false) {
    var primes = []
    first = i_x ? x : x + 1 
    last = i_y ? y + 1 : y
    for(j=first; j<last; j++){
        if(isPrime(j)) primes.push(j)
    }
    return primes
}


export function primeFactorsOfX(x) {
    if(isPrime(x)) return x
    var out = []
    var primes = primesLessThanX(x)
    for(i in primes){
        if(isDivisibleByX(x, primes[i])) out.push(primes[i])
    }
    return out
}
