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