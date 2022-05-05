// https://www.codewars.com/kata/55b7bb74a0256d4467000070
function properFractions(n) {
  //your code here
  if (n === 1) return 0;
  let res = n;
  let a = n;
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      res = (res / i) * (i - 1);
      while (a % i === 0) {
        a /= i;
      }
    }
  }
  if (a > 1) {
    res = (res / a) * (a - 1);
  }
  return res;
}
