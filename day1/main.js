play = (e) =>{
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`li[data-key = "${e.keyCode}"]`);
    if(audio){
        audio.currentTime = 0;
        audio.play();
        key.classList.add("play");
        key.addEventListener("transitionend", ()=>{audio.pause()})
        
    }

}
removeTransition = (e) => {

    if(e.propertyName === "transform"){

        e.target.classList.remove("play");
    }
}
const ElList = document.querySelectorAll('li');
console.log(ElList);
ElList.forEach(el=>{
    el.addEventListener("transitionend",removeTransition );
})

window.addEventListener("keydown",play);