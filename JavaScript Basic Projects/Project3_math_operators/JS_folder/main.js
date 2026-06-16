function addition_Function() {  //Addition function here
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() { //This is subtraction function here
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() { //This is multiplication function here
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
}

function division() { //This is division function here
    var simple_Math = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math;
}

function alltogether_math() { //This is a more complex math function here
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}
