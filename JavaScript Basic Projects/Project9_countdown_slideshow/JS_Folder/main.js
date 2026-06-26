function countdown() {
    var seconds = document.getElementById("seconds").ariaValueMax;

    function tick() {
        seconds = seconds - 1;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time is up!");
            clearTimeout(time);
            TimeRanges.innerHTML = "";
        }
    }
    tick();
}