let arrNumber = [2,4,8,1,7,9];
/**
 * hàm kiểm tra số nguyên dương
 * @param {*} arr mảng giá trị xét duyệt
 * @returns trả về số lượng là số nguyên dương trog mảng
 * Auth  ; PTHung (11/3/2025)
 */
let checkEletNumber  = (arr) => {
let count = 0;

for( let i=0;i<arr.length;i++){
    if(arr[i]  > 0 || arr[i] % 2 === 0){
        count++;
    }
}
if(count > 0 ){
    console.log(count);
}else{
    console.log(` Không có số nguyên dương trong mảng`);
}
return count;
}
checkEletNumber(arrNumber);
