const form = document.querySelector("form");
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a proper email address")
    }
});