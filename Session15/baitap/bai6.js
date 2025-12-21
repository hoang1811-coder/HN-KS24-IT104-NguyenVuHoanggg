let year = +prompt("Nhập một năm bất kỳ:");
  let result;
  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    result = year + " là năm nhuận";
  } else {
    result = year + " không phải là năm nhuận";
  }

  alert(result);