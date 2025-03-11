let users = [];
let count = 0;
/**
 * hàm kiểm tra @ và đuôi chấm .com hoặc .vn
 * @param {*} email email người dùng nhập 
 * @returns trả về giá trị true nếu email người dùng nhập đúng định dạng
 */
function isValidEmail(email) {// endsWith là hàm kiểm tra chuỗi con kết thúc có hợp lệ hay không trong trường hợp này là kiểm tra .com hoặc .vn
    return email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"));// include để kiểm tra kết hợp với endsWith xem có kí tự @ hay không
}// hàm checphần tử cuối trong input nhập vào

/**
 * Kiểm tra xem email đã tồi tại hay chưa
 * @param {*} email email người dùng nhập 
 * @returns trả về thêm một giá trị vào mảng user nếu email không bị trùng lặp
 * Auth  ; PTHung (11/3/2025)
 */
function registerEmail(arr,email) {
    if (!email) {
        console.log("Bạn chưa nhập email!");
        return;
    }
    if (!isValidEmail(email)) {
        console.log("Email không hợp lệ!");
    } else if (arr.includes(email)) {
        console.log("Tài khoản đã tồn tại!");
    } else {
        users.push(email);
        console.log("Đăng ký thành công!");
        console.log(arr);
        count++;
        
    }
}

do{
let input = prompt("Nhập email của bạn:");
registerEmail(users,input);

}while(count < 3);
