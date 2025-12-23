let n = +prompt ("Hãy nhập số nguyên tố muốn hiển thị: ")

let number = 2;

let countIsPrime = 0;

while (countIsPrime < n){
    // kiểm tra số nguyên tố
    let count = 0;
    for( let i =0 ;i <= number ; i++) {
        if (number % i === 0) {
            count ++;
        }
    }
    if ( count == 2) {
        countIsPrime ++;
        console.log(number);
    }
    number++;
}