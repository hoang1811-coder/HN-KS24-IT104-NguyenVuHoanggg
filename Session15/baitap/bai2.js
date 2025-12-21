let math = +prompt("Hãy nhập điểm của môn toán:")
let chemistry = +prompt("Hãy nhập điểm của môn văn :")
let english = +prompt("Hãy nhập điểm của môn Tiếng anh:")
let result = (math + chemistry + english) / 3;
if (result < 5.0) {
    alert("Học lực yếu")
} else if (result < 6.4) {
    alert("Học lực trung bình")
} else if (result < 7.9) {
    alert("Học lực Khá")
} else {
    alert("Học lực giỏi")
}