const year=document.querySelector('#year');
const days=document.querySelector('#days');
const hours=document.querySelector('#hours');
const minutes=document.querySelector('#minutes');
const seconds=document.querySelector('#seconds');
const countdown=document.querySelector('#countdown');
const preloader=document.querySelector('#preloader');


const currentYear=new Date().getFullYear();

const nextYear=new Date(`January 01 ${currentYear+1} 00:00:00`);

//Встановлюємо рік на сторінці
year.innerText=currentYear+1;

function unpdateCounter(){
    const currentTime=new Date();

    const diff=nextYear-currentTime;
    
    //Переведення в ДНІ
    const daysLeft=Math.floor(diff/1000/60/60/24);
    
    //Годин всього, даліостача від ділення на 24 (переведення в дні) отримаєм 8 год
    const hoursLeft=Math.floor(diff/1000/60/60) % 24;
    
    //Хвилин всього, далі остаток від переведення в години , хвилин залишилось
    const minutesLeft=Math.floor(diff/1000/60) % 60;
    
    //Секунд всього , далі залишок від переведення в хвилини, секунд залишилось
    
    const secondsLeft=Math.floor(diff/1000) % 60;
    
    console.log(daysLeft,hoursLeft,minutesLeft,secondsLeft);
    
    
    days.innerText=daysLeft;
    hours.innerText=hoursLeft<10? '0'+hoursLeft:hoursLeft;
    minutes.innerText=minutesLeft<10? '0'+minutesLeft:minutesLeft;
    seconds.innerText=secondsLeft<10? '0'+secondsLeft:secondsLeft;
}

unpdateCounter();
setInterval(unpdateCounter,1000);

setTimeout(function(){
preloader.remove();
countdown.style.display='flex';
});



