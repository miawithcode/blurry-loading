const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let load = 0;

let blurIntervar = setInterval(blurring, 30);

function blurring(){
    load++;
    if(load > 99){
        clearInterval(blurIntervar);
    }

    loadingText.textContent = `${load}%`;

    /* 
    随着load的增加，text透明度增加，opacity(1-0)
    随着load的增加，背景图片的模糊度减少，filter.blur(30px-0px) 
    */
    let opacityValue = (load * (0-1) / 100) + 1;
    let blurValue = (load * (0-30) / 100) + 30;

    loadingText.style.opacity = opacityValue;
    bg.style.filter = `blur(${blurValue}px)`;
}