// https://www.codewars.com/kata/525f4206b73515bffb000b21

function add(a, b) {
  const firstNumber = a.length;
  const secondNumber = b.length;
  const max = Math.max(firstNumber, secondNumber);
  let transfer = 0,
    sum = "";

  for (let i = 1; i <= max; i++) {
    let lastDigitInFirstNumber = +a[firstNumber - i] | 0;
    let lastDigitInSecondNumber = +b[secondNumber - i] | 0;
    let next = transfer + lastDigitInFirstNumber + lastDigitInSecondNumber;
    transfer = (next / 10) >> 0;
    next %= 10;
    sum = i === max && transfer ? transfer * 10 + next + sum : next + sum;
  }

  return sum;
}
