let body = document.querySelector('body');

let btnBlue = document.querySelector('#btn-blue');
let btnPink = document.querySelector('#btn-pink');
let btnBrown = document.querySelector('#btn-brown');
let linkYellow = document.querySelector('#link-yellow');

btnBlue.addEventListener('click', function () {
    body.className ='blueBackgroundColor';
});

btnPink.addEventListener('dblclick', function () {
    body.className ='pinkBackgroundColor';
});

btnBrown.addEventListener('mousedown', function () {
    body.className ='brownBackgroundColor';
});

btnBrown.addEventListener('mouseup', function () {
    body.classList.remove('brownBackgroundColor');
});

linkYellow.addEventListener('mouseover', function () {
    body.className ='yellowBackgroundColor';
});

linkYellow.addEventListener('mouseout', function () {
    body.classList.remove('yellowBackgroundColor');
});
