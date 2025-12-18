const RATE = 25000;
let usd = +prompt("Nhập số tiền USD:");
let vnd = usd * RATE;
alert(`Số tiền được đổi ra là: ${vnd}`)
