let arrNumber = [2,4,8,1,7,9];
let newArrEven = [];
/**
 * Hàm kiểm tra số chẵn
 * @param {*} arr các giá trị trong mảng được truyền vào
 * @returns trả về số lượng phần tử là số chẵn
 * Auth  ; PTHung (11/3/2025)
 */
let checkEvenNumber = (arr) => {
let count = 0;
for(let i=0 ;i<arr.length;i++){
    if(isNaN(arr[i])){
        console.log(` Dữ liệu không hợp lệ`);
        
    }
    if(arr[i] % 2 === 0){
        newArrEven.push(arr[i]);
        count++;
    }
}
if(count > 0){
    return newArrEven;
}else{
    console.log(` Mảng không chứa kí tự chẵn`);
}
}
let checkEven = checkEvenNumber(arrNumber);

console.log(checkEven);
