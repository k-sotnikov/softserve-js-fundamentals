//please check at first whether pop-up windows is not blocked by your browser

let newWindow = window.open("", "", "width=300,height=300,left=100,top=100");

setTimeout(function() {
    newWindow.resizeTo(500, 500);
    setTimeout(function() {
        newWindow.moveTo(200, 200);
        setTimeout(function() {
            newWindow.close();
        }, 2000);
    }, 2000);
}, 2000);



