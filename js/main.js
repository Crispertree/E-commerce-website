const inputElement = document.getElementById("search-bar");
const buttonElement = document.getElementById("search-entry");

buttonElement.addEventListener("click" function (event) {
    let enteredName = inputElement.value;
    HeadingElement.innertext = "Search results:" + enteredName;

}