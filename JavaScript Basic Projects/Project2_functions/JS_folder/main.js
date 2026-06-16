function addNumbers(a, b) {
    return a + b;
}

function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = addNumbers(num1, num2);

    console.log(result);
}

