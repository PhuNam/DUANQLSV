/**
Mô tả: Xây dựng mảng nhân viên
Người tạo: Phu Nam
Ngày tạo: 01/01/2023
Version: 1.0
 */
//tạo lớp đối tượng nhân viên
function DanhSachNV() {
    this.danhSachNV = [];
}

DanhSachNV.prototype.themNhanVien = function(nv) {
    this.danhSachNV.push(nv);
};

DanhSachNV.prototype.xuatLuong = function() {
    var soNhanVien = this.danhSachNV.length;
    for (var i = 0; i < soNhanVien; i++) {
        this.danhSachNV[i].tinhLuongGD();
    }
};

DanhSachNV.prototype.xoaNhanVien = function() {

};

DanhSachNV.prototype.timNVTheoTen = function(ten) {
    return "";
};  