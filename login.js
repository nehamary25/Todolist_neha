let username = document.getElementById("username");
let password = document.getElementById("password");

function validateLogin() {
    
    if(username.value != "admin") {
        username_error.innerHTML = "User not found!";
        username_error.style.color = "red";
        return false;
    }

    else if(password.value != 12345) {
        password_error.innerHTML = "Invalid Password";
        password_error.style.color = "red";
        return false;
    }

    else {
        return true;
    }
}