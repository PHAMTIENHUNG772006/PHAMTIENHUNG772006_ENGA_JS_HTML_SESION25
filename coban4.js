let isPrimeNumber = (num) => {
  if (isNaN(num) || num < 2) {
    console.log(` Dữ liệu không hợp lệ`);
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(` Không phải là số nguyên tố`);
      return false;
    }
  }
  console.log(` là số nguyên tố`);
  return true;
};

let number = 2;
let checkIsprime = isPrimeNumber(number);
