let a = +prompt("Nhập cạnh a:");
let b = +prompt("Nhập cạnh b:");
let c = +prompt("Nhập cạnh c:");
  let result;
  if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      result = "Tam giác đều";
    } else if (a === b || a === c || b === c) {
      result = "Tam giác cân";
    } else if (
      a * a + b * b === c * c ||
      a * a + c * c === b * b ||
      b * b + c * c === a * a
    ) {
      result = "Tam giác vuông";

    } else {
      result = "Tam giác thường";
    }

  } else {
    result = "Không phải là tam giác hợp lệ";
  }

  alert(result);