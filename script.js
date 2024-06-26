// Clock Code

const hoursHand = document.getElementById("hour-hand");
const minutesHand = document.getElementById("minute-hand");
const secondsHand = document.getElementById("second-hand");

function updateTime() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();

    hoursHand.style.transform = `rotate(calc(90deg + ${(currentHour * 30) + (currentMinute / 2)}deg))`;
    minutesHand.style.transform = `rotate(calc(90deg + ${currentMinute * 6}deg))`;
    secondsHand.style.transform = `rotate(calc(90deg + ${currentSecond * 6}deg))`;
}

updateTime();
setInterval(updateTime, 1000);


// Converter Code

const convertButton = document.getElementById("convert-btn");
const inputElement = document.getElementById("number");
const outputElement = document.getElementById("output");

let romanArrMap = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
let numberArrMap = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

let inputNumber;

convertButton.addEventListener("click", () =>  {
        inputNumber = parseInt(inputElement.value);
        console.log(inputNumber);
        if(isValidNumber(inputNumber)) {
            outputElement.style.fontSize = "4rem";
            inputElement.style.backgroundColor = "hsla(0, 0%, 100%, 80%)";

            outputDisplay(convertToRoman(inputNumber));

        } else {
            inputElement.style.backgroundColor = "hsla(0, 93%, 83%, 0.8)";
            outputElement.style.fontSize = "2.5rem";

            if (inputNumber <= 0) {
                outputElement.innerText = "Please enter a number greater than or equal to 1.";
            } else {
                outputElement.innerText = "Please enter a number less than or equal to 3999.";
            }
        }
        
    }
);

function convertToRoman(num) {
    let romanArr = [];
    let number = num;

    let romanNumeral = "";

    for(let i = 0; i < numberArrMap.length; i++) {
        while(number >= numberArrMap[i]) {
            romanArr.push(romanArrMap[i]);
            number -= numberArrMap[i];
        }
        if(number < numberArrMap[i]) {continue};
    }

    romanNumeral = romanArr.join("");
    return romanNumeral;
}

function outputDisplay(romanNumeral){
    outputElement.innerText = romanNumeral;
}

function isValidNumber(num) {
    return num > 0 && num < 4000;
}