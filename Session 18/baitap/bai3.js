let n = prompt("Hãy nhập một số để kiểm tra chuỗi đối xứng:");
let flag = true;

if (isNaN(n)) {
    alert("Số không hợp lệ");
} else {
    n = n.toString();

    for (let i = 0; i < n.length / 2; i++) {
        if (n.charAt(i) !== n.charAt(n.length - 1 - i)) {
            flag = false;
            break;
        }
    }

    if (flag) {
        alert("Là số đối xứng");
    } else {
        alert("Không là số đối xứng");
    }
}
