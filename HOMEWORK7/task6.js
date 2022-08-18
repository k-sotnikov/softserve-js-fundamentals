let output = document.querySelector("#sizeOfWindow");

let writeSizeOfWindow = function() {
    output.innerHTML = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
}

writeSizeOfWindow();

window.addEventListener('resize', writeSizeOfWindow);