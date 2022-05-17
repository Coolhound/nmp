// Helper for viewport width diagnostics

const sizeOutput = document.querySelector("#size");
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function resizeListener() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;

    if ( window.innerWidth < 576 )
    sizeOutput.textContent = "xs";
    else if ( window.innerWidth < 768 )
    sizeOutput.textContent = "sm";
    else if ( window.innerWidth < 992 )
    sizeOutput.textContent = "md";
    else if ( window.innerWidth < 1200 )
    sizeOutput.textContent = "lg";
    else
    sizeOutput.textContent = "xl";
}

window.addEventListener("resize", resizeListener);

window.onload = function() {
    resizeListener();
}
