
let input = {
    name: "",
    email: "",
    message: ""
};

let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    for (props in input) {
	if(input[props] == "") {
	    let attr = document.querySelector(`.field_${props}`);
	    e.preventDefault();

	    attr.setAttribute("data-has-error", true);
	}
    }
});

form.addEventListener("input", (e) => {
    let { value, name } = e.target;
    let attr = document.querySelector(`.field_${name}`);
    input[name] = value;

    attr.setAttribute("data-has-error", false);
});
