function Ride_Function() { //Function to determine if a person can ride based on height (using Ternary operation)
    var Height, Can_ride; //Declaring variables
    Height = document.getElementById("Height").value; //Assigning value to Height variable from input field
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //Using Ternary operator to determine if the person can ride based on height
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //Displaying the result in the HTML element with id "Ride"
}