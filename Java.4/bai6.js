let n = parseInt(prompt("Nhập một số nguyên:"));
    if (n === 0) {
        alert("0 có vô số ước");
    } else {
        let result = "Các ước của " + n + " là:\n";
        for (let i = 1; i <= Math.abs(n); i++) {
            if (n % i === 0) {
                result += i + "\n";
            }
        }
        alert(result);
    }       