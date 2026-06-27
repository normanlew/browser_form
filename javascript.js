console.log("starting program");

const form = document.querySelector("form");
const email = document.getElementById("mail");
const country = document.getElementById("country");
const postal = document.getElementById("postal");
const pass = document.getElementById("pass");
const pass_confirm = document.getElementById("pass_confirm");
const div_container = document.querySelector(".container");

email.addEventListener("input", (event) => {
    console.log("inside email input listener");

    if(email.validity.valueMissing) {
        email.setCustomValidity("Please enter some input");
        email.reportValidity();
    }
    else if (email.validity.typeMismatch) {
        console.log("email validity type mismatch");
        email.setCustomValidity("Please enter a proper email address");
        email.reportValidity();
    }
    else if (email.validity.tooShort) {
        email.setCustomValidity(`Email must be ${email.minLength} characters`)
        email.reportValidity();
    }
    else {
        email.setCustomValidity("");
    }
    // email.setCustomValidity("test");
});

country.addEventListener("input", (event) => {

    if(country.validity.valueMissing) {
        country.setCustomValidity("Please enter some input");
        country.reportValidity();
    // }
    // else if (country.validity.typeMismatch) {
    //     console.log("country validity type mismatch");
    //     country.setCustomValidity("Please enter a proper country address");
    //     country.reportValidity();
    }
    else if (country.validity.tooShort) {
        country.setCustomValidity(`country must be ${country.minLength} characters`)
        country.reportValidity();
    }
    else {
        country.setCustomValidity("");
    }
    // country.setCustomValidity("test");
});

postal.addEventListener("input", (event) => {

    if(postal.validity.valueMissing) {
        postal.setCustomValidity("Please enter some input");
        postal.reportValidity();
    // }
    // else if (postal.validity.typeMismatch) {
    //     console.log("postal validity type mismatch");
    //     postal.setCustomValidity("Please enter a proper postal address");
    //     postal.reportValidity();
    }
    else if (postal.validity.tooShort) {
        postal.setCustomValidity(`postal must be ${postal.minLength} characters`)
        postal.reportValidity();
    }
    else {
        postal.setCustomValidity("");
    }
    // postal.setCustomValidity("test");
});

pass.addEventListener("input", (event) => {

    if(pass.validity.valueMissing) {
        pass.setCustomValidity("Please enter some input");
        pass.reportValidity();
    // }
    // else if (pass.validity.typeMismatch) {
    //     console.log("pass validity type mismatch");
    //     pass.setCustomValidity("Please enter a proper pass address");
    //     pass.reportValidity();
    }
    else if (pass.validity.tooShort) {
        pass.setCustomValidity(`pass must be ${pass.minLength} characters`)
        pass.reportValidity();
    }
    else {
        pass.setCustomValidity("");
    }
    // pass.setCustomValidity("test");
});

pass_confirm.addEventListener("input", (event) => {

    if(pass_confirm.validity.valueMissing) {
        pass_confirm.setCustomValidity("Please enter some input");
        pass_confirm.reportValidity();
    // }
    // else if (pass_confirm.validity.typeMismatch) {
    //     console.log("pass_confirm validity type mismatch");
    //     pass_confirm.setCustomValidity("Please enter a proper pass_confirm address");
    //     pass_confirm.reportValidity();
    }
    else if (pass_confirm.value !== pass.value) {
        pass_confirm.setCustomValidity("passwords must be the same");
        pass_confirm.reportValidity();
    }
    else {
        pass_confirm.setCustomValidity("");
    }
    // pass_confirm.setCustomValidity("test");
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

function checkIfValid() {
    const div_error = document.getElementById("err_msg");
    div_error.innerHTML = "";
 
    if (email.validity.valueMissing) {
        let p_email_valueMissing = document.createElement("p");
        p_email_valueMissing.innerHTML = "Email is missing";
        div_error.appendChild(p_email_valueMissing);
    }
    if (email.validity.typeMismatch) {
        let p_email_typeMisMatch = document.createElement("p");
        p_email_typeMisMatch.innerHTML = "Email is not in the correct format";
        div_error.appendChild(p_email_typeMisMatch);
    }
    if (email.validity.tooShort) {
        let p_email_tooShort = document.createElement("p");
        p_email_tooShort.innerHTML = "Email is not long enough";
        div_error.appendChild(p_email_tooShort);
    }

    if (country.validity.valueMissing) {
        let p_country_valueMissing = document.createElement("p");
        p_country_valueMissing.innerHTML = "Country is missing";
        div_error.appendChild(p_country_valueMissing);
    }
    if (country.validity.tooShort) {
        let p_country_tooShort = document.createElement("p");
        p_country_tooShort.innerHTML = "Country is not long enough";
        div_error.appendChild(p_country_tooShort);
    }

    if (postal.validity.valueMissing) {
        let p_postal_valueMissing = document.createElement("p");
        p_postal_valueMissing.innerHTML = "Postal is missing";
        div_error.appendChild(p_postal_valueMissing);
    }
    if (postal.validity.tooShort) {
        let p_postal_tooShort = document.createElement("p");
        p_postal_tooShort.innerHTML = "Postal is not long enough";
        div_error.appendChild(p_postal_tooShort);
    }

    if (pass.validity.valueMissing) {
        let p_pass_valueMissing = document.createElement("p");
        p_pass_valueMissing.innerHTML = "Password is missing";
        div_error.appendChild(p_pass_valueMissing);
    }
    if (pass.validity.tooShort) {
        let p_pass_tooShort = document.createElement("p");
        p_pass_tooShort.innerHTML = "Password is not long enough";
        div_error.appendChild(p_pass_tooShort);
    }

    if (pass_confirm.validity.valueMissing) {
        let p_pass_confirm_valueMissing = document.createElement("p");
        p_pass_confirm_valueMissing.innerHTML = "Confirm password is missing";
        div_error.appendChild(p_pass_confirm_valueMissing);
    }
    if (pass_confirm.value !== pass.value) {
        let p_pass_confirm_equal = document.createElement("p");
        p_pass_confirm_equal.innerHTML = "Passwords must match";
        div_error.appendChild(p_pass_confirm_equal);
    }
}