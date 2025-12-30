    let tienBanDau = +prompt("Nhập số tiền ban đầu:");
    let laiSuatThang = +prompt("Nhập lãi suất tháng (%):");
    let soThang = +prompt("Nhập số tháng gửi:");

    let tienLai = tienBanDau * (laiSuatThang / 100) * soThang;
    let tongTien = tienBanDau + tienLai;

    alert(
        "Tiền lãi: " + tienLai.toLocaleString() + " VND\n" +
        "Tiền nhận được: " + tongTien.toLocaleString() + " VND"
    );