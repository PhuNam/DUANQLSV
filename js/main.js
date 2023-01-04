/**
 * Mô tả: Dự án Quản lý sinh viên
 * Nguoi tao: Nguyen Phu Nam
 * Ngay tao: 29-12-2022
 * Version: 1.0
 */

//Mảng thông báo khi người dùng không nhập thông tin
var mangThongBao = ["Vui lòng nhập tên tài khoản", //0
                    "Vui lòng nhập họ tên",         //1
                    "Vui lòng nhập Email",          //2
                    "Vui lòng nhập mật khẩu",       //3
                    "Vui lòng chọn ngày",           //4
                    "Vui lòng nhập lương cơ bản",   //5
                    "Vui lòng chọn chức vụ",        //6
                    "Vui lòng nhập giờ làm",        //7
                    "Tên nhân viên phải là chữ",    //8
                    "Độ dài tài khoản 4 - 6 ký số",  //9
                    "Email không hợp lệ",               //10
                    "Mật khẩu từ 6-10 ký tự (ít nhất 1 số, 1 ký tự in hoa, 1 ký tự đặc biệt)",  //11
                    "Định dạng mm/dd/yyyy",  //12
                    "Lương cơ bản 1,000.000 - 20,000.000",  //13
                    "Số giờ làm trong tháng 80 - 200 giờ",  //14
                    ];

function getMyEle(ele) {
    return document.getElementById(ele);
}
//4. Validation
//Kiểm tra nhập cho các ô input, không để trống
function kiemTraNhap(idField, idThongBao, indexChuoiTB) {
    var kq = false;
    var valueField = getMyEle(idField).value;
    var thongBao = getMyEle(idThongBao);
    if (valueField === "") {
        thongBao.style.display = 'block'; 
        thongBao.innerHTML = mangThongBao[indexChuoiTB];
        kq = false;
    } else {
        thongBao.style.display = 'none';
        kq = true;
    }
    return kq;
}

//Tài khoản tối đa 4-6 ký số, không để trống
function kiemTraDoDai(minLength, maxLength, indexChuoiTB) {
    var kq = false;
    var valueField = getMyEle("tknv").value;
    var thongBao = getMyEle("tbTKNV");
    var numbers = /^[0-9]+$/;

    if (valueField.match(numbers) && valueField.length >= minLength && valueField.length <= maxLength) {
        thongBao.style.display = 'none';
        kq = true;
    } else {
        thongBao.style.display = 'block'; 
        thongBao.innerHTML = mangThongBao[indexChuoiTB];
        kq = false;
    }
    return kq;
}

//Tên nhân viên phải là chữ, không để trống
function kiemTraNhapKiTu(idField, idThongBao, indexChuoiTB) {
    var kq = false;
    var valueField = getMyEle(idField).value;
    var thongBao = getMyEle(idThongBao);
    var letters = /^[A-Za-z]+$/;

    if (valueField.match(letters)) {
        thongBao.style.display = 'none';    
        kq = true;
    } else {
        thongBao.style.display = 'block';  
        thongBao.innerHTML = mangThongBao[indexChuoiTB];
        kq = false;
    }
    return kq;
}

// Email phải đúng định dạng, không để trống
function kiemTraEmail(idField, idThongBao, indexChuoiTB) {
    var kq = false;
    var valueField = getMyEle(idField).value;
    var thongBao = getMyEle(idThongBao);
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (valueField.match(mailFormat)) {
        thongBao.style.display = 'none';
        kq = true;
    } else {
        thongBao.style.display = 'block';  
        thongBao.innerHTML = mangThongBao[indexChuoiTB];
        kq = false;
    }
    return kq;
}

// Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống
function kiemTraMatKhau() {
    var kq = false;
    var valueField = getMyEle("password").value;
    var thongBao = getMyEle("tbMatKhau");
    var checkMK = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;

    if (valueField.match(checkMK)) {
        thongBao.style.display = 'none';
        kq = true;
    } else {
        thongBao.style.display = 'block'; 
        thongBao.innerHTML = mangThongBao[11];
        kq = false;
    }
    return kq;
}


// Ngày làm không để trống, định dạng mm/dd/yyyy
function kiemTraNgay() {
    var kq = false;
    var theSelect = getMyEle('datepicker').value;
    var thongBao = getMyEle('tbNgay');
    var dateFormat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

    if (theSelect.match(dateFormat)) {
        thongBao.innerHTML = 'none';
        kq = true;
    } else {
        thongBao.style.display = 'block';
        thongBao.innerHTML = mangThongBao[12];
        kq = false;
    }
    return kq;
}

//Lương cơ bản 1,000.000 - 20,000.000; không để trống
function luongCoBan(minLuong, maxLuong, indexChuoiTB) {
    var kq = false;
    var valueField = getMyEle("luongCB").value;
    var thongBao = getMyEle("tbLuongCB");

    if (valueField >= minLuong && valueField <= maxLuong) {
        thongBao.innerHTML = 'none';
        kq = true;
    } else {
        thongBao.style.display = 'block';
        thongBao.innerHTML = mangThongBao[indexChuoiTB];
        kq = false;
    }
    return kq;
}

//Kiểm tra chức vụ
function kiemTraChucVu(indexChuoiTB) {
    var kq = false;
    var theSelect = getMyEle('chucvu');
    var thongBao = getMyEle('tbChucVu');

    if (theSelect.selectedIndex == "") {
        thongBao.style.display = 'block';
        thongBao.innerHTML = mangThongBao[indexChuoiTB];
        kq = false;
    } else {
        thongBao.style.display = 'none';
        kq = true;
    }
    return kq;
}

// Số giờ làm trong tháng 80 - 200 giờ, không để trống
function soGioLamViec(minGio, maxGio, indexChuoiTB) {
    var kq = false;
    var valueField = getMyEle("gioLam").value;
    var thongBao = getMyEle("tbGiolam");

    if (valueField >= minGio && valueField <= maxGio) {
        thongBao.innerHTML = 'none';
        kq = true;
    } else {
        thongBao.style.display = 'block';
        thongBao.innerHTML = mangThongBao[indexChuoiTB];
        kq = false;
    }
    return kq;
}


//Kiểm tra hợp lệ
function kiemTraHopLe() {
    //Tài khoản dài 4-6 ký số, không để trống
    var kq = kiemTraNhap("tknv","tbTKNV", 0); 

    if (kq) {
        kq = kiemTraDoDai(4,6,9);
    }

    //Tên nhân viên phải là chữ, không để trống
    kq = kiemTraNhap("ten","tbTen", 1);
    if (kq) {
        kq = kiemTraNhapKiTu("ten","tbTen", 8);
    }
    
    // Email phải đúng định dạng, không để trống
    kq = kiemTraNhap("email","tbEmail", 2);
    if (kq) {
        kq = kiemTraEmail("email","tbEmail", 10);
    }

    // Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống
    kq = kiemTraNhap("password","tbMatKhau", 3);
    if (kq) {
        kq = kiemTraMatKhau();
    }

    //Ngày làm không để trống, định dạng mm/dd/yyyy
    kq = kiemTraNhap("datepicker","tbNgay", 4);
    if (kq) {
        kq = kiemTraNgay();
    }
    
    //Lương cơ bản 1,000.000 - 20,000.000; không để trống
    kq = kiemTraNhap("luongCB","tbLuongCB", 5);
    if (kq) {
        kq = luongCoBan(1000000,20000000, 13);
    }

    // Kiểm tra chọn chức vụ
    kq = kiemTraChucVu(6);

    // Số giờ làm trong tháng 80 - 200 giờ, không để trống
    kq = kiemTraNhap("gioLam","tbGiolam", 7);
    if (kq) {
        kq = soGioLamViec(80, 200, 14);
    }
    return kq;
}

//tạo ra danh sách nhân viên: biến toàn cục lưu trữ toàn bộ dữ liệu
var dsNhanVien = new DanhSachNV();

/*tạo dòng trong table là dữ liệu nhân viên
đầu vào: 
    - tableDanhSach: thẻ body trong table
    - nv: Nhân viên
*/
function taoDongTable(tBody, nv) {
    //var tBody = getMyEle("tableDanhSach");
    var tr = document.createElement('tr');
    tBody.appendChild(tr);
    for (var i = 0; i < nv.mangNhanVien.length; i++) {
        var td = document.createElement('td');
        td.innerHTML = nv.mangNhanVien[i];
        tr.appendChild(td);
    }
    //nút xóa, sửa,
    var btnSua = "<button type='button' class='btn btn-primary' value='Sua' id='sua_" + nv.taiKhoan+ "'>Sua</button>";
    var btnCapNhat = "<button type='button' class='btn btn-primary btnCapNhat' value='capnhat' id='capnhat_" + nv.taiKhoan+ "'>Cập nhật</button>";
    var btnXoa = "<button type='button' class='btn btn-primary' value='xoa' id='xoa_" + nv.taiKhoan+ "'>Xóa</button>";

    var td = document.createElement('td');
    td.innerHTML = btnSua + btnCapNhat + btnXoa;
    tr.appendChild(td);
    
}

function xuLyThemNhanvienVaoTable() {
    var tBody = getMyEle("tableDanhSach");
    var soNhanVien = dsNhanVien.soLuongNhanVien();
    dsNhanVien.xuatThuocTinhNV();
    tBody.innerHTML = ""; //mỗi lần thêm dòng cần append nên cần phải clear thẻ body
    for (var i = 0; i < soNhanVien; i++) {
        var nhanVien = dsNhanVien.mangNhanVien[i];  //lấy ra 1 nhân viên 
        taoDong(tBody, nhanVien);

        //deleteHandler("xoa_" + nhanVien.taiKhoan);
        //editHandler("sua_" + nhanVien.taiKhoan);

    }
    
}

function deleteHandler(ele) {
    getMyEle(ele).addEventListener("click", function(){
        var table = getMyEle('tableHienThi');
        alert(this.id);
    });
}

function editHandler(ele) {
    getMyEle(ele).addEventListener("click", function(){
        var table = getMyEle('tableHienThi');
        alert(this.id);
    });
}

//reset form sau mỗi lần nhập thành công
function lamMoiForm() {
    getMyEle("tknv").value = "";
    getMyEle("ten").value = "";
    getMyEle("email").value = "";
    getMyEle("password").value = "";
    getMyEle("datepicker").value = "";
    getMyEle("luongCB").value = "";
    getMyEle("chucvu").selectedIndex = 0;
    getMyEle("gioLam").value ="";
}



//Khai báo cho nút thêm nhân viên
getMyEle('btnThemNV').addEventListener("click", function() {
    var ktraHopLe = kiemTraHopLe();
    if (ktraHopLe) {
        //Viết code thêm nhân viên
        //lấy giá trị người dùng nhập vào
        var taiKhoan = getMyEle("tknv").value;
        var ten = getMyEle("ten").value;
        var email = getMyEle("email").value;
        var password = getMyEle("password").value;
        var ngayLV = getMyEle("datepicker").value;
        var luongCB = getMyEle("luongCB").value;
        var chucVu = getMyEle("chucvu").value;
        var gioLam = getMyEle("gioLam").value;

        //tạo mới nhân viên
        var nhanVien = new NhanVien(taiKhoan, ten, email, password, ngayLV, luongCB, chucVu, gioLam);
        dsNhanVien.themNhanVien(nhanVien);
        //reset form sau mỗi lần nhập thành công
        lamMoiForm();
        
        var hienThi = getMyEle('hienthi');
        //hienThi.style.display = "block";
        xuLyThemNhanvienVaoTable(); //xử lý table
        
    }
    

});