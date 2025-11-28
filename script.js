let main =document.querySelector(`.main`);
let btn =document.querySelector(`co1`);
co1.addEventListener(`click`, function(){
    if (main.style.color==`white`)
    {
        main.style.color=` green`;
    } else {
        main.style.color= `white`;
    }
});

 main =document.querySelector(`.main`);
 btn =document.querySelector(`co2`);
co2.addEventListener(`click`, function(){
        main.style.color=` red`;
});

main =document.querySelector(`.main`);
btn =document.querySelector(`co3`);
co3.addEventListener(`click`, function(){
        main.style.color=` #05c9fd`;
});

main =document.querySelector(`.main`);
btn =document.querySelector(`co4`);
co4.addEventListener(`click`, function(){
        main.style.color=` #fe02a1`;
});