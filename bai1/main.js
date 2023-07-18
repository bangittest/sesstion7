// function tinhChuViHinhTron(banKinh) {
//     var chuVi = 2 * Math.PI * banKinh;
//     return chuVi;
// }

// // Nhập bán kính từ người dùng
// var banKinh = prompt("Nhập bán kính của hình tròn: ");

// // Chuyển đổi chuỗi nhập từ prompt thành số
// banKinh = parseFloat(banKinh);

// // Tính chu vi và in ra kết quả
// var chuVi = tinhChuViHinhTron(banKinh);
// console.log("Chu vi của hình tròn là: " + chuVi);
// function tinhChuViHinhTron {
//     var chuVi = 2 * Math.PI * banKinh;
// }
// var banKinh = prompt("Nhap ban kinh cua duong tron: ")
// console.log("chu vi hinh tron la:" + chuVi);
let vatly = +prompt("Hãy nhập diem vat ly vao day");
console.log(vatly);
let hoahoc = +prompt("Hãy nhập diem hoa hoc vao day");
console.log(hoahoc);
let sinhhoc = +prompt("Hãy nhập diem vat ly vao day");
console.log(sinhhoc);
let Sum = (vatly + hoahoc + sinhhoc) / 3
console.log(Sum);
document.write(Sum)