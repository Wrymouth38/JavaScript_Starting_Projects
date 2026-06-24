function Add_numbers_1() {
    var X = 10
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}

Add_numbers_1();
Add_numbers_2();

function get_Date() {
        if (new Date().getHours() < 11) {
            document.getElementById("Greeting").innerHTML = "How are you today?";
        }
    }