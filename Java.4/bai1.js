let sum = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt (`Hãy nhập số nguyên thứ ${i+1}`);
    if (number % 2 !== 0) {
        sum += number;
    }
}
alert(`Tổng của các số lẻ là: ${sum}`)