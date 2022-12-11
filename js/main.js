let startBtn = document.querySelector(".btn button");
let welcomeScreen = document.querySelector(".welcome-screen");
let signUp = document.querySelector(".sign-up");
let signUpBtn = document.querySelector(".informations .btn");
let usernameInput = document.querySelector("#username");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let userInvalid = document.querySelector(".user-invalid");
let emailInvalid = document.querySelector(".email-invalid");
let conPassInvalid = document.querySelector(".con-pass-invalid");
let passwordInvalid = document.querySelector(".password-invalid");
let formInput = document.querySelector(".informations .create_account");
let emailLink = document.querySelector("#link-email");
let succeed = document.querySelector(".succeed");

startBtn.addEventListener("click", function () {
  welcomeScreen.className =
    "welcome-screen animate__animated animate__backOutLeft";
  signUp.className = "sign-up animate__animated animate__backInRight";
 
});
startBtn.addEventListener("click", function () {
  function removeSlide() {
    welcomeScreen.remove();
  }
  function buildSignUp() {
    signUp.style.display = "flex";
  }
  setTimeout(removeSlide, 600);
  setTimeout(buildSignUp, 500);
});

function removeSlide2() {
  signUp.remove();
}
function buildSignUp2() {
  succeed.style.display = "flex";
}

signUpBtn.addEventListener("click", function () {
  function onlyLettersAndNumbers(str) {
    return /^[A-Za-z0-9]*$/.test(str);
  }

  const str1 = usernameInput.value;
  let status;

  function userCindetion() {
    
    if (usernameInput.value === "" ||usernameInput.value.length < 5 || usernameInput.value.length > 15 ||
      !isNaN(usernameInput.value[0].charAt(0)) === true ||
      !isNaN(usernameInput.value[usernameInput.value.length - 1].charAt(0)) ===
        true ||
      onlyLettersAndNumbers(str1) === false
    ) {
      userInvalid.innerHTML = "username is Invalid";
      userInvalid.classList.add("invalid");
      userInvalid.classList.remove("valid");
      formInput.style.gap = "3px";
      status = false;
    } else {
      userInvalid.innerHTML = "username is valid";
      userInvalid.classList.add("valid");
      userInvalid.classList.remove("invalid");
      formInput.style.gap = "3px";
      status = true;
    }
  }
  userCindetion()

  let email = document.querySelector("#email").value;

  let patern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function emailCondetion() {
      
      if (email.match(patern)) {
        emailInvalid.innerHTML = "email is valid";
        emailInvalid.classList.add("valid");
        emailInvalid.classList.remove("invalid");
        formInput.style.gap = "0px";
        status = true;
      } else {
        emailInvalid.innerHTML = "email is Invalid";
        emailInvalid.classList.add("invalid");
        emailInvalid.classList.remove("valid");
        formInput.style.gap = "0px";
        status = false;
      }
    }
    emailCondetion()

    function passwordCondetion() {
      
      if (password.value.length < 8 || password === "") {
        passwordInvalid.innerHTML = "password is Invalid";
        passwordInvalid.classList.add("invalid");
        passwordInvalid.classList.remove("valid");
        formInput.style.gap = "0px";
        conPassInvalid.innerHTML = "confirm Password is Invalid";
        conPassInvalid.classList.add("invalid");
        conPassInvalid.classList.remove("valid");
        status = false;
      } else {
        passwordInvalid.innerHTML = "password is valid";
        passwordInvalid.classList.add("valid");
        passwordInvalid.classList.remove("invalid");
        formInput.style.gap = "0px";
        status = true;
      }
    }
    passwordCondetion()

    function confPassCondition() {
      
      if (confirmPassword.value === password.value) {
        conPassInvalid.innerHTML = "confirm Password is valid";
        conPassInvalid.classList.add("valid");
        conPassInvalid.classList.remove("invalid");
        formInput.style.gap = "0px";
        status = true;
      } else {
        conPassInvalid.innerHTML = "confirm Password is Invalid";
        conPassInvalid.classList.add("invalid");
        conPassInvalid.classList.remove("valid");
        formInput.style.gap = "0px";
        status = false;
      }
    }
    confPassCondition()

    function antherPassCond() {    
      // This Function made to in start when click password ==! confirmPassword   
      if (password.value === "" || password.value.length < 8) {
        conPassInvalid.innerHTML = "confirm Password is Invalid";
        conPassInvalid.classList.add("invalid");
        conPassInvalid.classList.remove("valid");
        formInput.style.gap = "0px";
        status = false;
      }
    }
    antherPassCond()
  
    function finalcondition() {
      if (usernameInput.value === "" ||usernameInput.value.length < 5 || usernameInput.value.length > 15 ||
      !isNaN(usernameInput.value[0].charAt(0)) === true ||
      !isNaN(usernameInput.value[usernameInput.value.length - 1].charAt(0)) ===
        true ||
      onlyLettersAndNumbers(str1) === false || password.value.length < 8 || password === "" ||password.value === "" || password.value.length < 8) {
        status = false
      }
    }
    finalcondition()

    function cheack(params) {
      if (status === true) {
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            body: [
              usernameInput.value,
              email,
              password.value,
              confirmPassword.value,
            ],
          }),
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data.body[0]);
            emailLink.innerHTML = `<a id="link-email" href="https://goldblv.com/api/hiring/tasks/register">${data.body[1]}</a>`;
          });
        signUp.className = "welcome-screen animate__animated animate__backOutLeft";
        succeed.className = "sign-up animate__animated animate__backInRight";
        setTimeout(removeSlide2, 600);
        setTimeout(buildSignUp2, 500);
      } else {
        status = false;
      }
    }
    cheack()

});
