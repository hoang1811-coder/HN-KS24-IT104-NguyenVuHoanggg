let evenNuber = 0;
let oddNumber = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt (`Hãy nhập số nguyên thứ ${i+1}`);
    if (number % 2 === 0) {
        evenNuber++;
    } else {
        oddNumber++;
    }
}
alert(`Có ${evenNuber} số chẵn và có ${oddNumber} số lẻ `)