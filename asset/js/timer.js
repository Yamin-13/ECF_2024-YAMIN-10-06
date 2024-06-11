// functions for the timer when the title is used ==============================
document.getElementById('use_title').addEventListener('click', function () {
    document.getElementById('page_2_pop_up').style.display = 'none';
    document.getElementById('timer_page').style.display = 'block';
    startTimer(3600, document.getElementById('countdown-timer'));
});

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10); // modulo ('%')

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "00:" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}