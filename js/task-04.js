
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]') ;
const counter = document.querySelector('#value');

let counterValue = 0;

decBtn.addEventListener('click', decCounter)
incBtn.addEventListener('click', incCounter)


function decCounter(event){ counterValue -=1; 
counter.textContent = counterValue};
function incCounter(event){ counterValue +=1; 
counter.textContent = counterValue};



