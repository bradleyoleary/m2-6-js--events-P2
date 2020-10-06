const form = document.getElementById("form");
const terms = document.getElementById("#terms")

form.addEventListener("submit", confirmIfValid);
//Password Validation
function confirmIfValid(event) {
    let errorText = document.getElementById("passwordError")
    let errorPopUp = document.querySelector(".errorMessage");
    let passwordStr = document.getElementById("password").value;
    let confirmPassStr = document.getElementById("confirmPass").value;
    let password = document.getElementById("password");
    let confirmPass = document.getElementById("confirmPass");

    //if password is less than 10 char - throw error
    if (passwordStr.length < 10) {
        errorText.innerText = "Your password is too short! Please provide a password that is at least 10 characters long.";
        password.classList.add("pink-border");
        password.focus();
        errorPopUp.style.display = "block";
    }//if confirmed password does not match origional possword - throw error
    else if (passwordStr != confirmPassStr) {
        errorText.innerText = "The passwords do not match. Please try again.";
        confirmPass.classList.add("pink-border");
        confirmPass.focus();
        errorPopUp.style.display = "block";
    }//if checkbox is not checked - throw alert
    else if (!document.getElementById("termcheckbox").checked) {
        alert("Please agree to the terms of service to continue.");
    }//if checkbox is checked - alert success
    else if (document.getElementById("termcheckbox").checked) {
        alert("Success!");
        clearErrors();
        return true;
    }

    event.preventDefault();
}

 function clearErrors() {
  document.getElementById("password").classList.remove("pink-border");
  document.getElementById("confirmPass").classList.remove("pink-border");
};