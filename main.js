function regexMailMobile() {
  const emailCheck = document.getElementById("emailCheck"),
    regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    regexTest = regex.test(emailCheck.value),
    redAlert = document.getElementById("red-alert");

  if (!regexTest) {
    redAlert.style.display = "flex";
    setTimeout(() => {
      redAlert.style.display = "none";
    }, 3000);
  } else {
    emailCheck.value = "";
  }
}
function regexMailDesktop() {
  const emailCheck = document.getElementById("emailCheckDesktop"),
    regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    regexTest = regex.test(emailCheck.value),
    redAlert = document.getElementById("red-alert-desktop");

  if (!regexTest) {
    redAlert.style.display = "flex";
    setTimeout(() => {
      redAlert.style.display = "none";
    }, 3000);
  } else {
    emailCheck.value = "";
  }
}
