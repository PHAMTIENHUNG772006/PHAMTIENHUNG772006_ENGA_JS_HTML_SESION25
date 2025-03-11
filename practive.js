let carts = [];


/**
 * hàm thêm giá vào giỏ hàng
 * @param {*} price giá lấy từ người dùng
 * @returns giỏ hàng sau khi thêm
 * Auth : PTHung(11/03/2025)
 */
let addPrice = ( arr ,price) => {
    arr.push(price);//thêm giá vào cuối mảng
    return carts;//trả về giỏ hàng
};

/**
 * hàm thay đổi giá
 * @param {*} index lấy vị trí thay đổi người dùng
 * @param {*} newPrice lấy giá mới của người dùng
 * @returns trả về giá trị mới sau khi thay đổi
 */
let updatePrice = (arr,index, newPrice) => {
    arr[index] = newPrice;//cập nhật lại giá trị cho phần tử trong mảng

    return carts;//trả về giỏ hàng sau khi cập nhật
};



let removePrice = (arr,index) => {
    if(index < 0 || index > arr.length){
        return " vị trí không hợp lệ ";
    
    }
        arr.splice(index,1);
        return arr;
};
let removePrice1 = removePrice(carts,0);




let totalPrice = (arr) => {
    let total = 0;

for(let i=0 ;i<arr.length;i++){

    total += arr[i];
    
}
return total;
};




let resultAdd1 = addPrice(carts,10000);
let resultAdd2 = addPrice(carts,20000);
let resultAdd3 = addPrice(carts,30000);
let resultUpdate1 = updatePrice(carts,0,500000);
let resultTotal = totalPrice(carts);


console.log("result add1",resultAdd3);
console.log(`resultUpdate1 : `,resultUpdate1);
console.log(`removePrice :`, removePrice1);
console.log(`totalPrice : `,resultTotal);



