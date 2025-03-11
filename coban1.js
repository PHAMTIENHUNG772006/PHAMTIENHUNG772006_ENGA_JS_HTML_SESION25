let arrNumber = [2,4,8,1,7,9];


/**
 * hàm tìm giá trị nhỏ nhất trong mảng giá trị
 * @param {*} arr mảng giá trị được kiểm tra
 * @returns trả về giá trị nhỏ nhất trong mảng
 * giá trị thứ nhất 
 */
let findMinNumber = (arr) =>{

let min = arr[0];
if(!isNaN(arr)){
    console.log(` Giá trị không hợp lệ `);
}
if(arr.length === 0){
    console.log(` Mảng không có phần tử`); 
}
    for( let i=0;i<arr.length;i++){
        if( min > arr[i]){
            min = arr[i]
        }
    }
    return min;
}

let minNumber = findMinNumber(arrNumber);
console.log(` Giá trị nhỏ nhất trong mảng là `,minNumber);
