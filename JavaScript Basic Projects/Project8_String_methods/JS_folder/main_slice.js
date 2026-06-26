function slice_method() {
    var Sentence = "All work and no play makes Jack a dull boy";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;   
}