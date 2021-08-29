
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var targetURL = "../Login2/main.html";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "reza" && password == "reza123") {
        window.location = targetURL // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("موفق " + attempt + " عدد");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}