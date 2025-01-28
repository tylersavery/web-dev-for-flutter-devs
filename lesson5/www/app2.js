
var myButtonElement;
var myClickCountElement;
var clickCount = 0;


function run() {
    myButtonElement = document.getElementById("myButton");
    myClickCountElement = document.getElementById("myClickCount");

    myButtonElement.addEventListener('click', handleButtonClick);

}

function handleButtonClick() {
    clickCount++;
    myClickCountElement.textContent = clickCount;
}


window.addEventListener("load", () => {
    run();
})