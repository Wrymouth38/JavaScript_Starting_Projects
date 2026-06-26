function full_sentence() {
    var part_1 = "I am learning";
    var part_2 = " a lot from this course.";
    var whole_sentence = part_1.concat(part_2);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}