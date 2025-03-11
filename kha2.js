let strongPassword = (password) => {
    if (password.length < 8) {
        return false;
    }

    let hasUpper = false, hasLower = false, hasNumber = false;

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') hasUpper = true;
        if (char >= 'a' && char <= 'z') hasLower = true;
        if (char >= '0' && char <= '9') hasNumber = true;
    }

    return hasUpper && hasLower && hasNumber;
}

let password = prompt("Mời bạn nhập mật khẩu:");
if (strongPassword(password)) {
    console.log("true");
} else {
    console.log("false");
}
console.log(`😎`);