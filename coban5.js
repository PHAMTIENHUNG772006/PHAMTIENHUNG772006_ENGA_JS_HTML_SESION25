let arrNumber = [2,4,8,1,7,9];

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
}
checkEletNumber(arrNumber);
