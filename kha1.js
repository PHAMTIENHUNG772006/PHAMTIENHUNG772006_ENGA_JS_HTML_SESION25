
/**
 * hàm in hoa chữ cái đầu tiên của chuỗi giá trị
 * @param {*} string chuỗi được thay đổi
 * @returns trả về chuỗi đã được hoa chữ cái đầu
 */
let upFirstCharecter = (string) => {
    let splitString = string.split(" ");
    let upAndLowerdWord = splitString.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    let joinString = upAndLowerdWord.join(" ");
    console.log(joinString);
    return joinString;
}

let strings = "hello WORLD";
upFirstCharecter(strings);