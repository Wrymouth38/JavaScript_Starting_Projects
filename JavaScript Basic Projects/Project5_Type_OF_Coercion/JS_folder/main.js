document.write(typeof "word" + "<br>");
document.write(typeof 3 + "<br>"); //This will display the type of the number
document.write("10" + 5 + "<br>");
document.write(2E310 + "<br>"); //This should display infinity
document.write(-3E310 + "<br>"); //This should display -infinity
document.write(19 > 5); //This should display true
document.write("<br>");
document.write(19 < 5); //This should display false
document.write("<br>");
document.write(19 == 19); //This should display true
document.write("<br>")
X = 10;
Y = 10;
document.write(X === Y);
document.write("<br>");
B = 82;
C = "82";
document.write(B === C);
document.write("<br>");
document.write(5 > 2 && 10 > 4); //This should display true
document.write("<br>");
document.write(5 > 10 && 10 > 4);
document.write("<br>");
document.write(5 > 10 || 10 > 4); //This should display true
document.write("<br>");
document.write(5 > 10 || 10 > 20);
document.write("<br>"); 

function my_function() {
    document.getElementById("test").innerHTML = 0/0 + "<br>"; //This will display NaN because you cannot divide by 0
    //document.getElementById("test").innerHTML = isNaN('This is a string') + "<br>"; This will display true because the string is not a number
    //document.getElementById("test").innerHTML = isNaN('007') + "<br>"; This will display false because the string is a number
}

