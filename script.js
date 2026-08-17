let bulb=document.getElementById("bulbImage");
let cat=document.getElementById("catImage");
let onswitch=document.getElementById("onSwitch");
let offswitch=document.getElementById("offSwitch");

function switchOn(){
    bulb.src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    cat.src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    onswitch.style.backgroundColor="Green";
    offswitch.style.backgroundColor="Grey";
    
}
function switchOff(){
    bulb.src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    cat.src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    onswitch.style.backgroundColor="Grey";
    offswitch.style.backgroundColor="Red";
}