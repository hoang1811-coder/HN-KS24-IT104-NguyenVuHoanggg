let experience = +prompt("Nhập số năm kinh nghiệm:");
  let result;
  if (experience < 1) {
    result = "Mới vào nghề";
  } else if (experience >= 1 && experience <= 3) {
    result = "Nhân viên có kinh nghiệm";
  } else if (experience >= 4 && experience <= 6) {
    result = "Chuyên viên";
  } else if (experience > 6) {
    result = "Quản lý";
  } else {
    result = "Giá trị không hợp lệ";
  }
  alert(result);