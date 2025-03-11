/**
 * hàm kiểm tra chuỗi đối xứng
 * @param {*} string chuỗi dối xứng được kiểm tra
 * @returns trả về giá trị true hoặc false của chuỗi
 * giá trị thứ nhất 
 */
let isPalindrome = (string) =>{
    let arrString = string.split("");
    let reverArr = arrString.reverse();
    let joinString = reverArr.join("");
    if(joinString === string){
        console.log(` Là chuỗi đối xứng `);
        return true;
    }else{
        console.log(` không phải là chuỗi đối ứng`);
        return false;
    }
    return joinString;
}
let inputString = prompt(` Mời bạn nhập chuỗi`);
isPalindrome(inputString);