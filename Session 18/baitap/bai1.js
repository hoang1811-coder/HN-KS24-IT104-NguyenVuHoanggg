let n = +prompt("Hãy nhập một số bất kì")
if (!Number.isInteger(n) || n <= 0) {
    alert("Dữ liệu nhập không hợp lệ");
    return 0;
}
let sum = 0
for (let i=0 ; i <= n; i++ ) {
    sum += i;
}
alert(sum)