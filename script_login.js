const checkIn = document.getElementById("password_visibility");
var passwordIn = document.getElementById('password');
var emailIn = document.getElementById('email');
const formIn = document.getElementById("myForm");
const submit = document.getElementById("submit");

checkIn.addEventListener("change", function() {
    if (checkIn.checked) {
        passwordIn.type = "text";
    } else {
        passwordIn.type = "password";
    }
});

submit.onclick = function(){
    if (emailIn.value == "admin@gmail.com" && passwordIn.value =="admin1234"){
        formIn.action = "index.html";
        formIn.submit();
    }
}

