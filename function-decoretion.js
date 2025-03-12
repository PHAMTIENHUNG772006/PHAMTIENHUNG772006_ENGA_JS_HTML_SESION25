


//Quy tắc
// sử dụng tiếng anh để đặt tên biến
// hàm được đặt tên bằng động từ
// truyền vào các tham số cụ thể 
// comment đầy đủ

// khai báo hàm tnhs tổng với hai tham số a và b

/**
 * Hàm tính tổng hai số nguyên
 * @param {*} firtsNumber số nguyên thứ nhất
 * @param {*} secondNumber số nguyên thứ hai
 * @returns tổng hai số nguyên
*/
function sum (firtsNumber, secondNumber){
    let total = firtsNumber + secondNumber
    console.log(` Tổng hai số ${firtsNumber} và ${secondNumber} = ${total}`);
    
    return total; 
    console.log(` Tổng hai số ${firtsNumber} và ${secondNumber} = ${total}`);
    //khi return thì những dòng lệnh dừng lập tức
}
function div(firtsNumber){
    return firtsNumber / 2;
}
let resultDiv = div(10);
console.log(resultDiv);

sum(5,6);
sum(7,3);





(function sayHello() {
    console.log(`Hello World`);
    
})();
