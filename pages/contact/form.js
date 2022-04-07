
let input = {
    name: "",
    email: "",
    msg: ""
};

let form = document.querySelector(".form");

function isValidEmail(email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

function isEmptyField(value) {
    return value === "";
}

function setAttribute(name) {
    let el = document.querySelector(`.field_${name}`);
    el.setAttribute("data-has-error", true);   
}

function showEmptyWarning(name) {
    let elText = document.querySelector(`.error__text_${name}`);
    elText.textContent = "Can't be empty";
}

function showEmailWarning(email) {
    let invalidEmailText = document.querySelector(".error__text_email");
    invalidEmailText.textContent = "Please enter a valid email";
   
}

form.addEventListener("submit", (e) => {
    for (name in input) {
	
	if(isEmptyField(input[name])) {
	    setAttribute(name);
	    showEmptyWarning(name);
	    e.preventDefault();
	}
	else if (name == "email" && !isValidEmail(input[name])) {
	    setAttribute(name);
	    showEmailWarning(name);
	    e.preventDefault();
	}
    }
});

form.addEventListener("input", (e) => {
    let { value, name } = e.target;
    input[name] = value;

    let el = document.querySelector(`.field_${name}`);
    el.setAttribute("data-has-error", false);
});
