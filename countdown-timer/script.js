const daysEle = document.getElementById('days');
const hoursEle = document.getElementById('hours');
const minsEle = document.getElementById('mins');
const secondsEle = document.getElementById('seconds');


const countDownTime='1 Jan 2022';

function countDown(){
    const finalDate = new Date(countDownTime);
    const currentDate = new Date();

    const totalSeconds= (finalDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/ 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const minutes = Math.floor(totalSeconds/ 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEle.innerHTML = days;
    hoursEle.innerHTML= formatTime(hours);
    minsEle.innerHTML= formatTime(minutes);
    secondsEle.innerHTML= formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
//initial call
countDown();


setInterval(countDown,1000);
