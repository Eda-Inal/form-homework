let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)
function formSubmit(even) {
even.preventDefault()
console.log("başarılı")}