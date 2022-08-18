let btn = document.querySelector('#btn');

function changeCSS() {
    document.querySelector('#text').classList.add("pNewStyle");
}

btn.addEventListener('click', changeCSS);
