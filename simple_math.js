/**
 * Returns if a given number is odd
 * @param {number} x Number to be tested
 */
export function isOdd(x) {
  return x % 2 == 0 ? false : true;
}

/**
 * Returns if a given number is a prime
 * @param {number} x Number to be tested
 */
export function isPrime(x) {
  for (var i = 2; i <= x / 2; i++) if (x % i == 0) return false;
  return true;
}

/**
 * Returns true if a given number N is divisible by given number X
 * @param {number} n Number to be tested for divisibility with X
 * @param {number} x Divisor
 */
export function isDivisibleByX(n, x) {
  return n % x == 0 ? true : false;
}

/**
 * Returns the x!
 * @param {number} x Factorial term
 */
export function factorial(x) {
  if (x < 0) return 0;
  var n = 1;
  for (var i = x; i > 0; i--) n *= i;
  return n;
}

/**
 * Returns prime numbers less than given upper bound
 * @param {number} x Upper bound (exclusive)
 */
export function primesLessThanX(x) {
  var primes = [];
  for (var j = 2; j < x; j++) {
    if (isPrime(j)) primes.push(j);
  }
  return primes;
}

/**
 * Returns the prime numbers between given range
 * @param {number} x Lower bound
 * @param {number} y Upper bound
 * @param {boolean} i_x Including lower bound
 * @param {boolean} i_y Including upper bound
 */
export function primesBetweenXandY(x, y, i_x = false, i_y = false) {
  var primes = [];
  first = i_x ? x : x + 1;
  last = i_y ? y + 1 : y;
  for (var j = first; j < last; j++) {
    if (isPrime(j)) primes.push(j);
  }
  return primes;
}

/**
 * Returns prime factors of a given number
 * @param {number} x Number to generate prime factors
 */
export function primeFactorsOfX(x) {
  if (isPrime(x)) return x;
  var out = [];
  var i;
  var primes = primesLessThanX(x);
  for (i in primes) {
    if (isDivisibleByX(x, primes[i])) out.push(primes[i]);
  }
  return out;
}
