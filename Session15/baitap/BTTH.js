//Bai1
let salary = +prompt ("Hãy Nhập vào tiền lương của bạn: ");
let textMoney = 0;
if (salary < 5000000) {
    textMoney = 0;
} else if (salary >= 5000000 && salary < 10000000) {
    textMoney = salary * 0.05;
} else if (salary < 18000000) {
    textMoney = salary * 0.1;
} else if (salary < 32000000) {
    textMoney = salary * 0.15;
} else {
    textMoney = salary * 0.2;
}
alert (`Thuế cá nhân của bạn là: ${textMoney} vnd`);

//---------------------Bai2--------------
let statusCode = +prompt("Nhập mã trạng thái HTTP:");
  let message;
  switch (statusCode) {
    case 200:
      message = "Thành công";
      break;
    case 201:
      message = "Thêm thành công";
      break;
    case 400:
      message = "Lỗi request";
      break;
    case 404:
      message = "Không tìm thấy";
      break;
    case 500:
      message = "Lỗi server";
      break;
    default:
      message = "Mã trạng thái không hợp lệ";
  }

  alert(message);

//--------------Bai3-------------
let statusEmployee = prompt("Nhập vào trạng thái nhân viên:");
let desc =
  statusEmployee === "WORKING"
    ? "Đang làm việc"
    : statusEmployee === "ON_LEAVE"
    ? "Đang nghỉ phép"
    : statusEmployee === "RESIGNED"
    ? "Đã nghỉ việc"
    : statusEmployee === "TERMINATED"
    ? "Đã sa thải"
    : "Trạng thái không hợp lệ";

alert(desc);