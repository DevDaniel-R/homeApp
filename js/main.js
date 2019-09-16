//DOM Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// Show Time 
function showTime() {
  let today = new Date(),
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();

  //set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  //Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

//add zeros
function addZero(n) {
  return (parseInt(n,10) < 10 ? '0' : '') + n;
}

//Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
  hour = today.getHours();

  if(hour < 12) {
    //Morning
    document.body.style.background = "no-repeat url('../img/morning.jpg') center/cover";
      greeting.textContent = 'Good Morning';
  }else if(hour < 15) {
    //Afternoon
    document.body.style.background = "no-repeat url('../img/afternoon.jpg') center/cover";
      greeting.textContent = 'Good Afternoon';
  }else if(hour < 20) {
    //evening 
      document.body.style.background = "no-repeat url('../img/evening.jpg') center/cover";
      greeting.textContent = 'Good evening';
  } else {
    //night
      document.body.style.background = "no-repeat url('../img/night.jpg') center/cover";
      greeting.textContent = 'Good Night';
      document.body.style.color = 'white';
  }
}

  //run
  showTime();
  setBgGreet();