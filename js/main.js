//DOM Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

//Options
const showAmPm = true;

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
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

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

// Get Name 
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

//set Name
function setName(e) {
  if (e.type === 'keypress') {
    //Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus 
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

//set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    //Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

  //run
  showTime();
  setBgGreet();
  getName();
  getFocus();