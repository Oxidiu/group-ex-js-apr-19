let dataArr = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}
class BaseNumber {
  constructor() {
    this._number = 0
  }
  getNumber(){
    return this._number
  };
  
};

class NumberBucket extends BaseNumber {
  constructor(number = 0) {
    super();
    this._number = number;
  }
  
  set number(newNumber) {
    this._number = newNumber
  }
}
class PrimeNumber extends NumberBucket {
  constructor(number) {
    super();
    this._number = number
  }
  
  set number(newNumber) {
    if (isPrime(newNumber)) {
      this._number = newNumber;
    }
  }
}

const numbers = dataArr.map((num) => {
  if (isPrime(num)) {
    return new PrimeNumber(num);
  } else {
    return new NumberBucket(num);
  }
})



console.log("Numbers:")
console.log(numbers)

console.log("Extracted numbers:")
for (let i = 0; i < numbers.length; i ++) {
  console.log(numbers[i].getNumber());
}
