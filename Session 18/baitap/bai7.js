let n = +prompt("Nhập số lượng số Fibonacci cần hiển thị:");
if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
    alert("Không hợp lệ");
} else {
    let f0 = 1;
    let f1 = 1;
    let result = "";

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            result += f0 + " ";
        } else if (i === 1) {
            result += f1 + " ";
        } else {
            let fn = f0 + f1;
            result += fn + " ";
            f0 = f1;
            f1 = fn;
        }
    }

    alert(result.trim());
}
