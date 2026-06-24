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
        else {
            document.getElementById("Greeting").innerHTML = "to late to appologise";
        }
    }

function Questionair() {
    input1 = document.getElementById("input1").value;
    if (input1 == "yes") {
        document.getElementById("Greeting").innerHTML = "May the Emperor protect you";
    }
    else {
        document.getElementById("Greeting").innerHTML = "You are not a true believer";
    }
}