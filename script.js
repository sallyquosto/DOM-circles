const circleArea = document.getElementById('circle-area');
let count = 1;

function buttonOne() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.innerText = count;
    circleArea.append(circle);
    count++;
}

function buttonTwo() {
    var element = document.body;
    element.classList.toggle("green-mode");
 }

 function removeCircle(e) {
     e.target.remove();
 }