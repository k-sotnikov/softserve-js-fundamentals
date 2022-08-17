let h1 = document.querySelectorAll("h1");


for (const iterator of h1) {
    iterator.classList.add("green-background");
}

let p1 = document.querySelector("#myDiv").firstElementChild;
p1.classList = "bold-font";

document.querySelector("#myDiv").firstElementChild.nextElementSibling.style.color = "red";

document.querySelector("#myDiv").children[2].classList.add("underlined-font");

document.querySelector("#myDiv").lastElementChild.classList.add("italic-font");

document.querySelector("#myList").style.fontSize = 0;
let liList = document.querySelectorAll("#myList > li");
for (const iterator of liList) {
    iterator.classList.add("one-line");
}

document.querySelector("span").classList.add("invisible");