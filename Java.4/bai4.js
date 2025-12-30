let a = +prompt("Hãy nhâp số a: ")
let b = +prompt("Hãy nhâp số b: ")
let c = +prompt("Hãy nhâp số c: ")
let denta = Math.pow(b,2) - 4 * a * c;
if (a === 0) {
    if (b === 0) {
        if (c === 0){
            alert("Phươg trình có vô số nghiệm")
        } else {
            alert("Phương trình vô nghiệm")
        }
    } else {
        let x = -c / b
        alert (`Phương trình có nghiệm: ${x}`)
    }
} else {
        let denta = Math.pow(b,2) - 4 * a * c;
        if (delta < 0) {
            alert("Phương trình vô nghiệm");
        } else if (denta === 0) {
            let x = -b / (2 * a);
            alert("Phương trình có nghiệm kép: x = " + x);
        } else {
            let x1 = (-b + Math.sqrt(denta)) / (2 * a);
            let x2 = (-b - Math.sqrt(denta)) / (2 * a);
           alert (`Phương trình có 2 nghiệm : x1 = ${x1} và x2 = ${x2}`)
        }
    
}