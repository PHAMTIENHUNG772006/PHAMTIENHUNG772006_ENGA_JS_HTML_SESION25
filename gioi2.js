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
        showProduct();
        break;
      case 2:
        let productName = prompt("Nhập tên sản phẩm muốn mua:");

        break;
      case 3:
        break;
      case 4:
        console.log("Thoát chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ!");
    }
  } while (choose !== 4);
};
main();
let showProduct = () => {
  console.log("Giỏ hàng hiện tại:");
  products.forEach((item) => {console.log(`- ${item[0]} | Số lượng: ${item[1]} | Giá: ${item[2]} VND`);});
  //hàm forEach trả về các giá trị của phần tử trong mảng con nằm trong mảng cha thông qua chỉ số của nó
};

let byProduct = (arrProduct) => {
  let productName = prompt("Nhập tên sản phẩm muốn mua:");
  let product = arrProduct.find((item) => item[0].toLowerCase() === productName.toLowerCase());

  if (!product) {
    console.log("Sản phẩm không tồn tại!");
    return;
  }
  let quantity = +prompt(`Nhập số lượng muốn mua (Tồn kho: ${product[1]}:`);
  if (quantity <= 0 || quantity > product[1]) {
    console.log("Số lượng không hợp lệ hoặc không đủ hàng!");
    return;
  }
  product[1] -= quantity;

  let cartAddItem = cart.find(item => item[0]  === product[0]);
};
