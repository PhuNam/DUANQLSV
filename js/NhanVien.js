/**
Mô tả: Xây dựng lớp / prototype nhân viên
Người tạo: Phu Nam
Ngày tạo: 01/01/2023
Version: 1.0
 */

function NhanVien(taiKhoan, ten, email, password, ngayLV, luongCB, 
    chucVu, gioLam) {
    //thuộc tính của Prototype/Class NhanVien
    this.taiKhoan = taiKhoan;
    this.ten = ten;
    this.email = email;
    this.password = password;
    this.ngayLV = ngayLV;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;

    //Tạo mảng thuộc tính để xử lý nâng cao:
    this.mangNhanVien = [this.taiKhoan, this.ten, this.email, this.password, this.ngayLV, this.luongCB, this.chucVu, this.gioLam];


    //phương thức của Prototype NhanVien
    //cách viết 1: viết trực tiếp trong này
    // this.tinhLuong = function() {
    //     return this.soNgayLamViec*luongCoBan + phuCap;
    // }
}

//cách viết 2: viết riêng ra bên ngoài
/**
Mô tả: Xây dựng phương thức prototype nhân viên
Người tạo: Phu Nam
Ngày tạo: 01/01/2023
Version: 1.0
 */
NhanVien.prototype.tinhLuongGD = function() {
    return this.luongCoBan*3;
};