const hoursHand = document.getElementById("hour-hand");
const minutesHand = document.getElementById("minute-hand");
const secondsHand = document.getElementById("second-hand");

function updateTime() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();

    hoursHand.style.transform = `rotate(calc(90deg + ${currentHour * 30}deg))`;
    minutesHand.style.transform = `rotate(calc(90deg + ${currentMinute * 6}deg))`;
    secondsHand.style.transform = `rotate(calc(90deg + ${currentSecond * 6}deg))`;
}

updateTime();
setInterval(updateTime, 1000);