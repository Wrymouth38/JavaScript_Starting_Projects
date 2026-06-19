document.write(typeof "word" + "<br>");
document.write(typeof 3 + "<br>"); //This will display the type of the number
document.write("10" + 5 + "<br>");

function my_function() {
    document.getElementById("test").innerHTML = 0/0; //This will display NaN because you cannot divide by 0
}