let display = document.getElementById('screen');
let addButton = document.getElementById('plus');
let subButton = document.getElementById('minus');

display.innerHTML = 0;

addButton.addEventListener('click', this.increaseDisplayData);
subButton.addEventListener('click', this.decreaseDisplayData);


function increaseDisplayData() {
    display.innerHTML = Number(display.innerHTML) + 1;
    


}
function decreaseDisplayData() {
    if(display.innerHTML>0)
    display.innerHTML = Number(display.innerHTML) - 1;
  

}



