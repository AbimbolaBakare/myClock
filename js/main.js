let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let evening = 18;

// getting to show our current time on the page
let showCurrentTime = () => {
    // display the string on the webpage
    let clock = document.getElementById('clock') ;

    let currentTime = new Date();
    // console.log(currentTime);

    // return the hour according to local time
    let hours = currentTime.getHours();
    // console.log(hours);
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    // set hours
    if (hours >= noon){
        meridian = "PM"
    }

    if (hours > noon){
        hours = hours - 12;
    }

    // set minutes
    if (minutes < 10){
        minutes = "0" + minutes;
    }

    // set seconds
    if (seconds < 10){
        seconds = "0"+ seconds;
    }

    // put together the string that dipslay the time
    let clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian + "!";
    
    clock.innerHTML = clockTime;
};

showCurrentTime();

// getting the clock to increment on its won and chnage out messages and pictures
let updateClock = () => {
    let time = new Date().getHours();
    let messageText;
    let image = "c";

    let timeChangeJs = document.getElementById("timeChange");
    let clockImageJs = document.getElementById("clockImage");

    if (time == wakeuptime){
        image=  "./images/wakeup.jpg";
        messageText = "Rise and shine!";
    }
    else if (time == lunchtime){
        image = "./images/lunchtime.jpg";
        messageText = "Lets have some lucnch";
    }
    else if (time == naptime){
        image = "./images/naptime.jpg";
        messageText = "Sleep time";
    }
    else if (time < noon){
        image = "./images/morning.jpg";
        messageText = "Good morning";
    }
    else if (time >= evening ){
        image = "./images/evening.jpg";
        messageText = "Good evening"
    }
    else{
        image = "./images/afternoon.jpg";
        messageText = "Good afternoon"
    }
      clockImageJs.src = image;
      timeChangeJs.innerHTML = messageText;
      showCurrentTime();
} ;

updateClock();

let oneSecond = 1000;
setInterval(updateClock, oneSecond);

