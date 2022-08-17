let input1Msg = prompt("Please enter a massage for unput1");
let input2Msg = prompt("Please enter a massage for unput2");

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

input1.value = input1Msg;
input2.value = input2Msg;

input2.after(input1);
