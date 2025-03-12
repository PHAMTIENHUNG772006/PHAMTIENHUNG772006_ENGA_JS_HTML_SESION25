let cart = [];
let menu = [
  `
      ================== MENU ===================
  
      1 - Hiển thị Sản phẩm
      2 - Chọn sản phẩm để mua
      3 - Tính tổng tiền và hiển thị hóa đơn
      4 - Thoát
  
      =============================================
      `,
];

let products = [
  ["mì tôm", 5, 5000],
  ["bánh mì", 12, 15000],
  ["bánh bao", 5, 8000],
  ["mèn mén", 30, 20000],
];

let main = () => {
  let choose = 0;
  do {
    for (let element of menu) {
      console.log(`Lựa chọn:`, element);
    }
    choose = +prompt("Nhập lựa chọn của bạn:");

    switch (choose) {
      case 1:
        showProduct(products);
        break;
      case 2:
        let productName = prompt("Nhập tên sản phẩm muốn mua:");
        byProduct(products,productName);
        break;
      case 3:
        showInvoice(cart);
        break;
      case 4:
        console.log("Thoát chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ!");
    }
  } while (choose !== 4);
};
/**
 * Hàm hiển thị ra các sản phẩm trong danh sách
 * @param {*} arr danh sách sản phẩm in ra
 * @returns trả về danh sách sản phẩm products
 * Auth  ; PTHung (12/3/2025)
 */
let showProduct = (arr) => {
  console.log("Giỏ hàng hiện tại:");
  arr.forEach((item) => {
    console.log(`- ${item[0]} | Số lượng: ${item[1]} | Giá: ${item[2]} VND`);
  });
  //hàm forEach trả về các giá trị của phần tử trong mảng con nằm trong mảng cha thông qua chỉ số của nó
  return arr;
};
/**
 * hàm đẻ thêm sản phẩm vào giỏ hàng  
 * @param {*} arrProduct tham số được truyền vào bởi mảng products
 * @param {*} name tham số tên sản phâm được mua
 * @returns trả về số lượng sản phẩm đươc thêm vào danh sách giỏ hàng
 * Auth  ; PTHung (12/3/2025)
 */
let byProduct = (arrProduct,name) => {
  let product = arrProduct.find((item) => item[0].toLowerCase() === name.toLowerCase());
  
  if (!product) {
    console.log("Sản phẩm không tồn tại!");
    return;
  }
  let quantity = +prompt(`Nhập số lượng muốn mua (Tồn kho: ${product[1]}:)`);
  if (quantity <= 0 || quantity > product[1]) {
    console.log("Số lượng không hợp lệ hoặc không đủ hàng!");
    return;
  }
  product[1] -= quantity;
  
  let cartAddItem = cart.find((item) => item[0] === product[0]);
  
  if (cartAddItem) {
    cartAddItem[1] += quantity;// 
    cartAddItem[2] += product[2] * quantity;
  } else {
    cart.push([product[0], quantity, product[2] * quantity]);
  }
  
  console.log(`Đã thêm ${quantity} ${product[0]} vào giỏ hàng.`);
  return cartAddItem;
};
/**
 * hàm tính tổng các sản phầm được thêm vào trong giỏ hàng
 * @param {*} arr danh sách sản phẩm được khách hàng chọn mua
 * @returns trả về tổng giá các sản phẩm mà người dùng chọn mua
 * Auth  ; PTHung (12/3/2025)
 */
let showInvoice = (arr) => {
  if (arr.length === 0) {
    console.log("Giỏ hàng trống!");
    return;
  }
  
  console.log("========== HÓA ĐƠN ==========");
  let total = 0;
  arr.forEach(item => { console.log(`- ${item[0]} | Số lượng: ${item[1]} | Thành tiền: ${item[2]} VND`);total += item[2];});
  console.log(`Tổng tiền: ${total} VND`);
  console.log("=============================");
  return total;
};

main();