 let firstNumber = Number(prompt("Nhập số thứ nhất:"));
 let secondNumber = Number(prompt("Nhập số thứ hai:"));
 let min = Math.min(firstNumber, secondNumber);
 let max = Math.max(firstNumber, secondNumber);
 let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
alert("Số ngẫu nhiên trong khoảng là: " + randomNumber);