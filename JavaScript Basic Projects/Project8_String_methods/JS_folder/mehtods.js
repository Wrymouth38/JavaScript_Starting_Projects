let text = "This is more methods challenge using search";
let position = text.search("using");

document.getElementById("demo").innerHTML = position;

let text1 = "This is more methods challenge using toUpperCase";
let upper = text1.toUpperCase();
document.getElementById("demo1").innerHTML = upper;

let text3 = "This is the value";
let result = text3.valueOf();

document.getElementById(demo2).innerHTML = result;

function tostring_method() {
    var X = 123;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();

}

function toPrecision_method() {
    var X = 123938.301125234905;
    document.getElementById("Numbers_to_precision").innerHTML = X.toPrecision(10);
}

function tofixed_method() {
    var X = 12.2345677;
    document.getElementById("Numbers_to_fixed").innerHTML = X.toFixed(2);
}

