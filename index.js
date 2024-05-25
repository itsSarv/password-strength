const cond8Char = document.querySelector("#condition_8char");
const condUppercase = document.querySelector("#condition_uppercase");
const condNumberic = document.querySelector("#condition_numberic");
const condSpecialChar = document.querySelector("#condition_special_char");
const condNoAmbiguous = document.querySelector("#condition_no_ambiguous");
const toggle = document.querySelector("#toggle");
const input = document.querySelector("#input");
const face = document.querySelector("#face");

const checkRegex = (value) => {
  let totalScore = 0;
  const regexMoreThan8Chars = /(.){8,}/;
  const regexHasUpperCase = /[A-Z]+/;
  const regexHasNumber = /[0-9]+/;
  const regexHasSpecialChars = /[!@#$%^&*]+/;
  const regexHasAmbiguousChars = /[{}\[\]\(\)\/\'"`~,;:.<>\s]/;

  if (regexMoreThan8Chars.test(value)) {
    totalScore++;
    cond8Char.checked = true;
  } else {
    cond8Char.checked = false;
  }

  if (regexHasUpperCase.test(value)) {
    totalScore++;
    condUppercase.checked = true;
  } else {
    condUppercase.checked = false;
  }

  if (regexHasNumber.test(value)) {
    totalScore++;
    condNumberic.checked = true;
  } else {
    condNumberic.checked = false;
  }

  if (regexHasSpecialChars.test(value)) {
    totalScore++;
    condSpecialChar.checked = true;
  } else {
    condSpecialChar.checked = false;
  }

  if (regexHasAmbiguousChars.test(value)) {
    totalScore--;
    condNoAmbiguous.checked = false;
  } else if (value === "") {
    condNoAmbiguous.checked = false;
  } else {
    totalScore++;
    condNoAmbiguous.checked = true;
  }

  changeEmotion(totalScore, value);
};

const toggleShowPassword = () => {
  toggle.classList.toggle("hidden");

  if (toggle.classList.contains("hidden")) {
    input.type = "password";
    toggle.classList.add("fa-eye-slash");
    toggle.classList.remove("fa-eye");
  } else {
    input.type = "text";
    toggle.classList.add("fa-eye");
    toggle.classList.remove("fa-eye-slash");
  }
};

const changeEmotion = (score, password) => {
  console.log("password :", password);
  console.log("score :", score);
  if (password === "") {
    face.className = "face face--nothing";
    return;
  }

  switch (score) {
    case 1:
      face.className = "face face--sad";
      break;
    case 2:
      face.className = "face face--neutral";
      break;
    case 3:
      face.className = "face face--smile";
      break;
    case 4:
      face.className = "face face--happy";
      break;
    case 5:
      face.className = "face face--happiest";
      break;
    default:
      face.className = "face face--saddest";
  }
};

toggle.addEventListener("click", toggleShowPassword);
input.addEventListener("input", (e) => checkRegex(e.target.value));
input.addEventListener("keypress", (e) => {
  if (e.keyCode === 32) {
    e.preventDefault();
  }
});
