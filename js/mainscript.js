
function load_home() {
    document.getElementById("leftDiv").innerHTML = '<object type="text/html" data="index.html" ></object>';
}

function create_document() {
    document.getElementById("leftDiv").innerHTML = '<object type="text/html" data="register-document.html" ></object>';
}


function exit_app() {
    // var txt;
    var r = confirm("آیا مطمئن به خروج هستید؟")
    if (r == true) {
        var targetURL = "../login2/login.html";
        window.location = targetURL;
    }
    else {
        return;
    }

}