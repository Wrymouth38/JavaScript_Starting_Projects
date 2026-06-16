function addNumbers(a, b) {
    return a + b;
}

function calculate() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    var result = addNumbers(num1, num2);

    window.alert("The sum is: " + result);
}

