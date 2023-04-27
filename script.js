const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function setClock() {
  const currentDate = new Date();

  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);

  setColor(secondsRatio);
}

function setRotation(element, rotationRatio) {

    const ro = "rotate"+"("+rotationRatio*360+"deg"+")";
    element.style.transform = ro;
    console.log(element.style.transform+" "+element.classList[1]);
    
}

function setColor(n){
    const rot = n*360;

    secondHand.style.filter = "hue-rotate"+"("+rot+"deg"+")";
}

setClock();
setInterval(setClock, 1000);

