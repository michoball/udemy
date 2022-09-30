const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const generateEl = document.getElementById("generate");
const resultEl = document.getElementById("result");

const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password is successfully copied!");
});

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const upper = uppercaseEl.checked;
  const lower = lowercaseEl.checked;
  const number = numbersEl.checked;
  const symbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(upper, lower, number, symbol, length);
});

function generatePassword(upper, lower, number, symbol, length) {
  let generatedPassword = "";
  const typeCount = upper + lower + number + symbol;
  const typeArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  for (let i = 0; i < length; i += typeCount) {
    typeArr.forEach((type) => {
      const typeName = Object.keys(type)[0];
      generatedPassword += randomFunc[typeName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
function getRandomSymbol() {
  const symbols = "~!@#$%^&*()_+-=<>?,./;:[]{}";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
