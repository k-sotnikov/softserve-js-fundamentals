// Task 1

let test = document.querySelector("#test");
test.innerHTML = "<b>Last</b>";

//variant 2
document.getElementById("test").textContent = "Last";


//Task 2
document.querySelector(".image").setAttribute("src", "cat.jpg");

//variant 2
let images = document.querySelectorAll("img");

for (const image of images) {
    if (image.className == "image" && image.getAttribute("src") == "dog.jpg") {
        image.setAttribute("src", "cat.jpg");
    }
}

//Task 3
let text = document.querySelectorAll("#text > p");
for (const key in text) {

    text[key].textContent = `Selector text ${key}: ` + text[key].textContent;
}

//Task 4
//valiant 1
let list = document.querySelectorAll("#list li");
let order = [1, 5, 2, 4, 3];
let listOutput = "";
for (let index = 0; index < order.length; index++) {
    const element = order[index] - 1;
    listOutput += list[element].textContent;
    if (index != order.length - 1) {
        listOutput += ",";
    }
}
alert(listOutput);

//variant 2

let listOutput1 = "";
listOutput1 += document.querySelector("#list li:first-child").textContent + ",";
listOutput1 += document.getElementById("list").lastElementChild.innerHTML + ",";
listOutput1 += document.querySelector("#list").firstElementChild.nextElementSibling.innerHTML + ",";
listOutput1 += document.querySelector("#list").children[3].innerHTML + ",";
listOutput1 += document.querySelector("#list").children[3].previousElementSibling.innerHTML;
alert(listOutput1);
