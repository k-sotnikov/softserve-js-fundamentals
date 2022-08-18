/* <button id="btn">Live button!</button>
<br/><br/>
<div id="output"></div>

<script src="task5.js"></script> */

let btn = document.querySelector('#btn');
let output = document.querySelector('#output');

let addStrToOutput = function(text) {
    let p = document.createElement('p');
    p.textContent = text;
    output.append(p);
}

btn.addEventListener('mousedown', () => {
    addStrToOutput("I was pressed!");
});

btn.addEventListener('mouseover', () => {
    addStrToOutput("Mouse on me!");
});

btn.addEventListener('mouseout', () => {
    addStrToOutput("Mouse is not on me!");
});

