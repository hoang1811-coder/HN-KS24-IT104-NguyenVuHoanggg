let n = +(prompt("Hãy nhập 1 số:"));

if (!Number.isInteger(n) || n <= 0) {
    alert("Dữ liệu không hợp lệ");
} else {
    let result = "";

    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0) {
            result += i + " ";
        }
    }

    alert(`Các số chia hết cho 5 từ 1 đến ${n} là: ${result}`);
}
