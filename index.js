// Write your code here!
let main = document.getElementById('main');
main.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = 'Payam is the champion';
document.body.appendChild(newHeader);



