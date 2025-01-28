
const App = {
    myButtonElement: null,
    myClickCountElement: null,
    clickCount: 0,
    onLoad: () => {
        App.myButtonElement = document.getElementById("myButton");
        App.myClickCountElement = document.getElementById("myClickCount");

        App.myButtonElement.addEventListener('click', () => {
            App.handleButtonClick();
        })

    },
    handleButtonClick: () => {
        App.clickCount += 1;
        console.log('click', App.clickCount)

        App.myClickCountElement.textContent = App.clickCount;

    }
}




window.addEventListener("load", () => {
    App.onLoad();
})

