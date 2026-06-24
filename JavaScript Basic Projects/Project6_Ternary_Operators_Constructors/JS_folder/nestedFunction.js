function count_Function() { //Function to demonstrate nested functions and variable scope
    document.getElementById("Counting").innerHTML = Count(); //Calling the Count function and setting its return value as the innerHTML of the element with id "Counting"
    function Count() { //Nested function to increment the Starting_point variable
        var Starting_point = 9; //Declaring a variable Starting_point and initializing it to 9
        function Plus_one() {Starting_point += 1;}  //Nested function to increment Starting_point by 1
        Plus_one(); //Calling the Plus_one function to increment Starting_point
        return Starting_point; //Returning the updated value of Starting_point after incrementing
    }
}