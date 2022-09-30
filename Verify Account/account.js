const codes = document.querySelectorAll(".code");
const info = document.querySelector(".info");

// verify 부분은 따로 추가한 부분 !
let password = [];
const yourAuth = 123459;

function verifyAcc(password) {
  const verify = +password.join("");

  if (yourAuth === verify) {
    info.innerHTML = `ok! come in ~ !!`;
  } else {
    info.innerHTML = `something is wrong!`;
  }
}

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      password[idx] = e.key;
      codes[idx].value = "";
      if (idx < codes.length - 1) {
        setTimeout(() => codes[idx + 1].focus(), 20);
      }
      if (idx === codes.length - 1) {
        verifyAcc(password);
      }
    } else if (e.key === "Backspace") {
      password.pop();

      if (idx > 0) {
        setTimeout(() => codes[idx - 1].focus(), 20);
      }
    }
  });
});
