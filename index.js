let password = document.getElementById("password");
function genPass() {
  let caracteres =
    "0123456789qwertyuiopasdfghjklñzxcvbnm,;:.#!$%&/()=?¡!<>QWERTYUIOPASDFGHJKLÑZXCVBNM";
  let passLength = 12;
  let password = "";
  for (let i = 0; i < passLength; i++) {
    let randoNumber = Math.floor(Math.random() * caracteres.length);
    password += caracteres.substring(randoNumber, randoNumber + 1);
  }
  document.getElementById("password").value = password;
}
function copyPass() {
  let copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 999);
  document.execCommand("copy");
}
