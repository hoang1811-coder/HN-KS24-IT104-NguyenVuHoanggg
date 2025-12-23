let a = +prompt("Nhập a:");
let b = +prompt("Nhập b:");

if (isNaN(a) || isNaN(b) || b < 0) {
    alert("Không hợp lệ");
} else {
    let result = 1;

    for (let i = 0; i < b; i++) {
        result *= a;
    }

    alert(result);
}
