const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const bright = document.querySelector('#bright');
const saturate = document.querySelector('#saturate');
const contrast = document.querySelector('#contrast');
const basecolor = document.querySelector('#basecolor');
const img = document.querySelector('img');
const imgbg = document.querySelector('.imgbg');
const reset = document.querySelector('.reset');


spacing.oninput = (e)=>{
    img.style.setProperty('--scale',e.target.value/100+0.5);
}

blur.oninput = (e) => {
    console.log(e.target.value);
    img.style.setProperty('--blur',`${e.target.value/50}px`);

}
bright.oninput = (e)=>{
    img.style.setProperty('--bright',e.target.value/100+0.5);
}
contrast.oninput = (e)=>{
    img.style.setProperty('--contrast',e.target.value/100+0.5);
}
saturate.oninput = (e)=>{
    img.style.setProperty('--saturate',`${parseInt(e.target.value)+50}%`);
}
basecolor.oninput = (e)=>{
    imgbg.style.setProperty('--bg-color',`${e.target.value}`);
}
let click = false;
reset.addEventListener('mousedown',()=>{
    click = true;
    console.log(click);
    img.classList.add('root_img');
});
if(click){
    console.log('d');
    
}
reset.addEventListener('mouseup',()=>{
    click = false;
    console.log(click);
    img.classList.remove('root_img');
});



