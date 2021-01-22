const SCREEN = document.getElementById("screen");
const BUTTON = document.querySelectorAll("button");

var screenVal = '';

for(var i=0;i<BUTTON.length;i++) {
    BUTTON[i].addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText=='C') {
            screenVal = '';
            SCREEN.value = screenVal;
        } else if(buttonText == '=') {
            SCREEN.value = eval(screenVal);
        } else {
            screenVal += buttonText;
            SCREEN.value = screenVal;
        }
    })
}

