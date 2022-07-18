let currentNumberWrapper = document.getElementById("currentNumber");
let h1 = document.getElementsByTagName('h1')[0];
let p = document.getElementsByTagName('p')[0];

console.log(h1);
console.log(p);

let currentNumber = 0;


function increment(){
    currentNumber ++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber --;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        h1.style.color = 'red';
        p.style.color = 'red';
    }
}


/*
function increment(){
    if(currentNumber < 10){
        currentNumber ++;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement(){
    if(currentNumber > 0){
        currentNumber --;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}
*/