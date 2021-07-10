const sec_hand = document.querySelector('.sec-hand');
const min_hand = document.querySelector('.min-hand');
const hour_hand = document.querySelector('.hour-hand');
const time = document.querySelector('.time');

setDate = ()=>{
    let now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();
    let ampm = "";
    if(hour > 12) {hour -=12;ampm = "PM"} 
    else {hour = hour;ampm = "AM"}
    console.log(hour);
    time.innerHTML = `${ampm} ${hour}:${minute}:${second}`;
    let hour_rad = ((hour/12)*360)+90;
    let min_rad = ((minute/60)*360)+90;
    let sec_rad = ((second/60) *360)+90;
    if(minute === 0) {min_hand.style.transition = 'all 0.0001s';min_hand.style.transform = `rotate(${min_rad}deg)`;}
    else min_hand.style.transform = `rotate(${min_rad}deg)`;
    if(second === 0) {sec_hand.style.transition = 'all 0.0001s';sec_hand.style.transform = `rotate(${sec_rad}deg)`;}
    else sec_hand.style.transform = `rotate(${sec_rad}deg)`;
    if(hour === 0) {hour_hand.style.transition = 'all 0.0001s';hour_hand.style.transform = `rotate(${hour_rad}deg)`;}
    else hour_hand.style.transform = `rotate(${hour_rad}deg)`;
    console.log(second,sec_rad);}
setDate();
setInterval(setDate,1000);