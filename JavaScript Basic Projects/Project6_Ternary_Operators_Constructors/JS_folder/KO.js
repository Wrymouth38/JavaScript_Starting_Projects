function Vehicle(Make, Model, Year, Color) { //Constructor function to create Vehicle objects with properties Make, Model, Year, and Color
    this.Vehicle_Make = Make; //Assigning the Make parameter to the Vehicle_Make property of the object
    this.Vehicle_Model = Model; //Assigning the Model parameter to the Vehicle_Model property of the object
    this.Vehicle_Year = Year; //Assigning the Year parameter to the Vehicle_Year property of the object
    this.Vehicle_Color = Color; //Assigning the Color parameter to the Vehicle_Color property of the object
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //Creating a new Vehicle object named Jack with specified properties
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //Creating a new Vehicle object named Emily with specified properties
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //Creating a new Vehicle object named Erik with specified properties
function myFunction() { //Function to display information about Erik's vehicle in the HTML element with id "Keywords_and_Constructors"
    document.getElementById("Keywords_and_Constructors").innerHTML = //Setting the innerHTML of the element with id "Keywords_and_Constructors" to a string that describes Erik's vehicle
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + //Concatenating strings and Erik's vehicle properties to create a descriptive sentence
    " manufactured in " + Erik.Vehicle_Year; //Continuing the concatenation to include the year of Erik's vehicle
}