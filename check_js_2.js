let age = +prompt(`Введите свой возраст`)
if(age === 0 & age < 12 ){
    alert("Вы ребенок")
}
else if(age < 18 ){
    alert("Вы подросток")
}
else if(age < 60){
    alert("Вы взрослый")
}
else if(age >= 60){
    alert("Вы пенсионер")
}

let numb = +prompt(`Введите цифру от 0 до 9`)
let numb2;
switch (numb){
    case 0:
        numb2 = ")";
        break
    case 1:
        numb2 = "!";
        break
    case 2:
        numb2 = "@";
        break
    case 3:
        numb2 = "#";
        break
    case 4:
        numb2 = "$";
        break
    case 5:
        numb2 = "%";
        break
    case 6:
        numb2 = "^";
        break
    case 7:
        numb2 = "&";
        break
    case 8:
        numb2 = "*";
        break
    case 9:
        numb2 = "(";
        break
}
alert(`Под цифрой ${numb} находиться знак ${numb2}`)

let number = +prompt(`Введите трехзначное число`)
let number1 = number /100
let number2 = Math.floor(number / 10 ) % 10
let number3 = number % 10
if (number1 === number2 && number1 === number3 && number2 === number3){
    alert(`В числе есть парные цифры`)
}
else{
    alert(`В числе нет парных цифр`)
}

let digit = prompt("Введите трехзначное число:");
let digit1 = Math.floor(digit / 100);
let digit2 = Math.floor(digit / 10) % 10;
let digit3 = digit % 10;

if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
  alert("В числе есть парные цифры");
} else {
  alert("В числе нет парных цифр");
}

let year = +prompt("Введите год");
let isLeapYear = false;
if (year % 400 === 0) {
  isLeapYear = true;
} else if (year % 4 === 0 && year % 100 !== 0) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}

if (isLeapYear) {
  alert("Год высокосный");
} else {
  alert("Год не высокосный");
}

let numb4 = prompt("Введите пятизначное число");
let Palindr = false;
if (numb4.length === 5) {
    let numb5 = numb4.split('').reverse().join('');
if (numb4 === numb5) {
    Palindr = true;
    }
}
if (Palindr) {
    alert("Это число палиндром");
} else {
    alert("Это число не палиндром");
}

let usd = +prompt("Введите количество USD");
let newCurrency = prompt('Введите валюту для обмена: "EUR", "UAN" или "AZN"');
let convert;
switch (newCurrency) {
  case "EUR":
    convert = usd * 0.93;
    break;
  case "UAN":
    convert = usd * 37.07;
    break;
  case "AZN":
    convert = usd * 1.7;
    break;
  default:
    alert("Неправильно выбрана валюта");
    break;
}
if (convert !== undefined) {
  alert(`Полученная сумма: ${convert.toFixed(2)}`);
}


let numb6 = +prompt("Введите сумму покупки");
let discount = 0;
if (numb6 >= 200 && numb6 < 300) {
    discount = 0.03;
} else if (numb6 >= 300 && numb6 < 500) {
    discount = 0.05;
} else if (numb6 >= 500) {
    discount = 0.07;
}
let result = numb6 - (numb6 * discount);
alert(`Сумма со скидкой: ${result.toFixed(2)}`);

let circleLength = +prompt(`Введите длинну круга`)
let squarePyrimeter = +prompt(`Введите периметр квадрата`)
let circleInSquare = true
let rCircle = circleLength / 2
let square = (squarePyrimeter / 4) /2
if (rCircle < square){
    circleInSquare = true 
}
else {
    circleInSquare = false
}
alert("При таких значениях круг " + (circleInSquare ? "поместиться в квадрат" : "не поместиться в крвадрат"))

let score = 0;
let answer1 = prompt("Вопрос 1: Какая столица Украины\n(a) Львов\n(b) Киев\n(c) Одесса");
if (answer1.toLowerCase() === "b") {
    score += 2;
}
let answer2 = prompt("Вопрос 2: Какой год считаеться началом 21 века\n(a) 2000\n(b) 2001\n(c) 1999");
if (answer2.toLowerCase() === "b") {
    score += 2;
}
let answer3 = prompt("Вопрос 3: Какая самая большая планета солнечной системы?\n(a) Земля\n(b) Марс\n(c) Юпитер");
if (answer3.toLowerCase() === "c") {
    score += 2;
}
alert(`Вы набрали ${score} балы`);

let day1 = +prompt("Введите день:");
let month1 = +prompt("Введите месяц:");
let year1 = +prompt("Введите год:");
if (day1 >=0 && day1 <=31){
}
if (month1 >=1 && month1 <=12){
}
if (year1 >0){
}