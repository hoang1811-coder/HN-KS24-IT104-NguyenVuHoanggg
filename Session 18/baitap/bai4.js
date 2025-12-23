let str = prompt("Nhập vào một chuỗi bất kỳ:");
let char = prompt("Nhập ký tự cần tìm:");

let found = false;

for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        found = true;
        break;
    }
}

if (found) {
    alert("Ký tự '" + char + "' CÓ tồn tại trong chuỗi.");
} else {
    alert("Ký tự '" + char + "' KHÔNG tồn tại trong chuỗi.");
}
