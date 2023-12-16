function formateDigit(digit) {
  return digit < 10 ? `0${digit}` : digit;
}

function updatetime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  const formatedtime24 = `${formateDigit(hours)}:${formateDigit(
    minutes
  )}:${formateDigit(seconds)}`;
  const formatedtime12 = `${formateDigit(hours % 12 || 12)}:${formateDigit(
    minutes
  )}:${formateDigit(seconds)} ${ampm}`;

  //   console.log("HH:MM::SS this formate Time:");
  //   console.log(formatedtime24);
  //   console.log("HH:MM::SS AM/PM this formate Time:");
  console.log(`${formatedtime12}      ${formatedtime24}`);
}
setInterval(updatetime, 1000);
updatetime();
