// clock
let clock = () => {
    const newDate = new Date()
    let hours = newDate.getHours()
    let mins = newDate.getMinutes()
    let sec = newDate.getSeconds()

    let period = "AM"

    if (hours == 0) {
        hours = 12
    } else if (hours >= 12) {
        hours = hours - 12
        period = "PM"
    } 

    hours = hours < 10 ? "0" + hours : hours;
    mins = mins < 10 ? "0" + mins : mins;
    sec = sec < 10 ? "0" + sec : sec;

    
    // variables
    let time = `${hours} : ${mins} : ${sec} : ${period}`;
    document.getElementById('clock').innerHTML = time;

    setTimeout(clock, 1000);


}

clock()