window.alert(Math.random() * 100); //This is a random number generator that will generate a number between 0 and 100

function my_Dictionary() { //This is a dictionary function here
    var Animal = { //This is the dictionary
        Species: "Dog",
        Color: "Black",
        Breed: "German Shepherd",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound; //This will delete the sound property from the dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //This will display the sound of the animal when the user clicks on the paragraph
}
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

function modulus_Operator() { //This is a modulus operator function here
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() { //This is a negation operator function here
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

