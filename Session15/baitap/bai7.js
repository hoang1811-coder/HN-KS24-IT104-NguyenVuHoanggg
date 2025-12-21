let a = parseFloat(prompt("Hãy nhập số thứ nhất: "));
let b = parseFloat(prompt("Hãy nhập số thứ hai: "));
let result = 0;
let operation = prompt("Mời bạn nhập phép tính (+, -, *, /):");
if (operation === "+") {
  result = a + b;
  alert(`Kết quả của phép tính a + b = ${result}`);

} else if (operation === "-") {
  result = a - b;
  alert(`Kết quả của phép tính a - b = ${result}`);

} else if (operation === "*") {
  result = a * b;
  alert(`Kết quả của phép tính a * b = ${result}`);

} else if (operation === "/") {
  if (b === 0) {
    alert("Không thể chia cho 0");
  } else {
    result = a / b;
    alert(`Kết quả của phép tính a / b = ${result}`);
  }

} else {
  alert("Phép tính không hợp lệ");
}
