let names = document.querySelector('#names');
let btn = document.querySelector('#btn');

const delName = function () {
    const toDelete = document.querySelector(`option[value=${names.value}]`);
    toDelete.remove();
}

btn.addEventListener('click', delName);
