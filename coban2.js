
let number1 = 2;
let number2 = 6;

let sum = (firstNumer,secondNumber) =>{
    if(isNaN(firstNumer) || isNaN(secondNumber)){
        console.log(` Dữ liệu không hợp lệ`);
    }
    let total = firstNumer + secondNumber;
    return total;
}

let total = sum(number1,number2);

console.log(` Tổng giá hai giá trị là : `,total);
