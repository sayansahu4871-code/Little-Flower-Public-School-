function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("msg").innerHTML = "Login Successful ✅";
    } else {
        document.getElementById("msg").innerHTML = "Invalid Login ❌";
    }
}

function checkResult() {
    let roll = document.getElementById("roll").value;

    if (roll === "101") {
        document.getElementById("result").innerHTML = "Name: Rahul | Marks: 85%";
    } else if (roll === "102") {
        document.getElementById("result").innerHTML = "Name: Sita | Marks: 90%";
    } else {
        document.getElementById("result").innerHTML = "Result Not Found ❌";
    }
}