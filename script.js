let analog = document.getElementsByClassName('analog');
let clockAn = document.getElementsByClassName('clock')[0];
//usng this loop for the necessary rotation
//deg which is degree (it helps to rotate in degrees)
//one full circle is 360 deg
for (var i = 1; i < 60; i++) {
  clockAn.innerHTML += "<div class='analog'></div>";
  analog[i].style.transform = "rotate(" + 6 * i + "deg)"; //  // we got 6 because 360/60 = 6
}

function clock() {
  let weekday = new Array(7),
  //new Date, hours, minutes and seconds.
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      //the hour,minute,date, seconds and day changes at the right time
      hourAn = document.querySelector('.hour-tick'),
      minuteAn = document.querySelector('.minute-tick'),
      secondsAn = document.querySelector('.second-tick'),
      dateAn = document.querySelector('.dateclock'),
      dayAn = document.querySelector('.dayclock');
     
      //the day changes
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
  
      let day = weekday[d.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hourAn.style.transform = "rotate("+hDeg+"deg)";
  minuteAn.style.transform = "rotate("+mDeg+"deg)";
  secondsAn.style.transform = "rotate("+sDeg+"deg)";
  dateAn.innerHTML = date+"/"+month+"/"+year;
  dayAn.innerHTML = day;
}

setInterval("clock()", 100);
