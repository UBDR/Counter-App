let display = document.getElementById('screen');
let addButton = document.getElementById('plus');
let subButton = document.getElementById('minus');

display.innerHTML = 0;

addButton.addEventListener('click', this.increaseDisplayData);
subButton.addEventListener('click', this.decreaseDisplayData);
let myWindow =  window.open("https://www.google.com","_blank");

function increaseDisplayData() {
    display.innerHTML = Number(display.innerHTML) + 1;
    myWindow.open();


}
function decreaseDisplayData() {
    if(display.innerHTML>0)
    display.innerHTML = Number(display.innerHTML) - 1;
    myWindow.close();

}
// function openWindow(){
//     window.open("www.google.com","_blank","width=200, height=100")
// }


