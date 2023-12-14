console.log("login in the browser");

const emailInputField = document.getElementById("emailInputId");
const passwordInputField = document.getElementById("passwordInputId");
const loginBtn = document.getElementById("loginBtn");

console.log(emailInputField, passwordInputField, loginBtn);


const handleSubmit = () => {
    const email = emailInputField.value;
    const password = passwordInputField.value

    console.log(email, password);
}


loginBtn.addEventListener("click", handleSubmit);