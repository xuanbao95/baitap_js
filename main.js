/**
 * bài tập vé xem phim
 */
//đầu vào
//xử lý

function demoDoanhThu(){
    var giaVeNguoiLon = document.getElementById("num_1").Value;
    var veNguoiLon = parseInt(document.getElementById("veLon").Value);
    var giaVeTreEm = document.getElementById("num_2").Value;
    var veTreEM = parseInt(document.getElementById("veTre").value);
    var tong = ((giaVeNguoiLon * veNguoiLon) + (giaVeTreEm * veTreEM)) / 10; 
    document.getElementById("ketQua").className="d-block";
    document.getAnimations("ketQua").innerHTML = tong;
    console.log(tong);
}

/**
 * bài tập 1
 */
function tinhLuong(){
    var luongNgay = document.getElementById("luong").value;
    var ngayLam = parseInt(document.getElementById("ngayLam").value);
    var luong = luongNgay * ngayLam;
    document.getElementById("pKetQua").className="d-block";
    document.getElementById("pKetQua").innerHTML = luong;
    console.log(luong);
}
/**
 * bài tập 2
 */
function soThuc(){
    var num_1 = parseInt(document.getElementById("so_1").value);
    var num_2 = parseInt(document.getElementById("so_2").value);
    var num_3 = parseInt(document.getElementById("so_3").value);
    var num_4 = parseInt(document.getElementById("so_4").value);
    var num_5 = parseInt(document.getElementById("so_5").value);
    var dapAn = (num_1 + num_2 + num_3 + num_4 + num_5)/5;
    document.getElementById("baiTap_2").className="d-block";
    document.getElementById("baiTap_2").innerHTML = dapAn;
    console.log(dapAn);
}

/**
 * bài tập 3
 */
function usdQuyDoi(){
    var usd = document.getElementById("usd").value;
    var quyDoi = parseInt(document.getElementById("quyDoi").value);
    var ketQua = usd * quyDoi;
    document.getElementById("baiTap_3").className="d-block";
    document.getElementById("baiTap_3").innerHTML = ketQua;
    console.log(ketQua);
}
/**
 * bài tập 4
 */
function chuVi(){
    var chieuDai = parseInt(document.getElementById("chieuDai").value);
    var chieuRong = parseInt(document.getElementById("chieuRong").value);
    var chuVi = (chieuDai + chieuRong) *2;
    document.getElementById("chuVi").className="d-block";
    document.getElementById("chuVi").innerHTML = chuVi;
    console.log(chuVi);
}
function dienTich(){
    var chieuDai = parseInt(document.getElementById("chieuDai").value);
    var chieuRong = parseInt(document.getElementById("chieuRong").value);
    var dienTich = chieuDai * chieuRong;
    document.getElementById("dienTich").className="d-block";
    document.getElementById("dienTich").innerHTML = dienTich;
    console.log(dienTich);
}

/**
 * bài tập 5
 */
function kySo(){
    var kySo = parseFloat(document.getElementById("kySo").value);
    var soDonVi= kySo % 10;
    var soHangChuc = Math.floor(kySo / 10);
    var suat = soHangChuc + soDonVi;
    document.getElementById("tongKySo").className="d-block";
    document.getElementById("tongKySo").innerHTML= suat;
    console.log(suat);
}