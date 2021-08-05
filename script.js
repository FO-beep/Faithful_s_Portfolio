const spanYear = document.querySelector("#currentYear");
const currentYear = new Date();

//console.log(currentYear);

spanYear.innerText = currentYear.getFullYear();
