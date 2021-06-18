let card1 = document.querySelector('.card1');
card1.addEventListener('mouseover',()=>{
    document.querySelector('.pg1').style.clipPath='circle(600px at 100% 0)';
    document.querySelector('.card_content1').style.filter= 'blur(0.1rem)';
})
card1.addEventListener('mouseout',()=>{
    document.querySelector('.pg1').style.clipPath='circle(0 at 100% 0)';
    document.querySelector('.card_content1').style.filter= 'blur(0rem)';
})

let card2 = document.querySelector('.card2');
card2.addEventListener('mouseover',()=>{
    document.querySelector('.pg2').style.clipPath='circle(600px at 100% 0)';
    document.querySelector('.card_content2').style.filter= 'blur(0.2rem)';
})
card2.addEventListener('mouseout',()=>{
    document.querySelector('.pg2').style.clipPath='circle(0 at 100% 0)';
    document.querySelector('.card_content2').style.filter= 'blur(0rem)';
})

let card3 = document.querySelector('.card3');
card3.addEventListener('mouseover',()=>{
    document.querySelector('.pg3').style.clipPath='circle(600px at 100% 0)';
    document.querySelector('.card_content3').style.filter= 'blur(0.2rem)';
})
card3.addEventListener('mouseout',()=>{
    document.querySelector('.pg3').style.clipPath='circle(0 at 100% 0)';
    document.querySelector('.card_content3').style.filter= 'blur(0rem)';
})

let card4 = document.querySelector('.card4');
card4.addEventListener('mouseover',()=>{
    document.querySelector('.pg4').style.clipPath='circle(600px at 100% 0)';
    document.querySelector('.card_content4').style.filter= 'blur(0.2rem)';
})
card4.addEventListener('mouseout',()=>{
    document.querySelector('.pg4').style.clipPath='circle(0 at 100% 0)';
    document.querySelector('.card_content4').style.filter= 'blur(0rem)';
})

