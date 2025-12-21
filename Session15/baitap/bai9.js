let hour = +prompt ("Hãy nhập giờ (0-23):")
let minute = +prompt ("Hãy nhập phút(0-59):")
let second = +prompt ("Hãy nhập giây(0-59):")
let period;
let hour12;
  if (hour === 0) {
    hour12 = 12;
    period = "AM";
  } else if (hour < 12) {
    hour12 = hour;
    period = "AM";
  } else if (hour === 12) {
    hour12 = 12;
    period = "PM";
  } else {
    hour12 = hour - 12;
    period = "PM";
  }
  hour12 = hour12.toString().padStart(2, "0");
  minute = minute.toString().padStart(2, "0");
  second = second.toString().padStart(2, "0");

  alert(`${hour12}:${minute}:${second} ${period}`);