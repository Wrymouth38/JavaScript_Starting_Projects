document.write(typeof "word" + "<br>");
document.write(typeof 3 + "<br>"); //This will display the type of the number
document.write("10" + 5 + "<br>");

function my_function() {
    document.getElementById("test").innerHTML = 0/0 + "<br>"; //This will display NaN because you cannot divide by 0
    //document.getElementById("test").innerHTML = isNaN('This is a string') + "<br>"; This will display true because the string is not a number
    //document.getElementById("test").innerHTML = isNaN('007') + "<br>"; This will display false because the string is a number
}

document.write(2E310) + "<br>"; //This should display infinity
document.write(-3E310) + "<br>"; //This should display -infinity
