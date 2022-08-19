let toDoCategories = [];
let toDoItems = [];

// let cat1 = {
//     categoryName: "Hosework",
//     categoryValue: "Hosework",
//     parentCategory: ""
// }

class Item {
    constructor(itemName, itemCategory) {
        this.itemName = itemName;
        this.itemCategory = itemCategory;
        this.itemIsDone = false;
    }

    pushItemToArray() {
        toDoItems.push(this);
    }
}


let addItemTextField = document.querySelector("#addItemTextField");
let addItemButton = document.querySelector("#addItemButton");


const hideItems = function () {
    let itemsElements = document.querySelectorAll('tr');
    for (const iterator of itemsElements) {
        if (iterator.className !== "doNotRemove") {
            iterator.remove();
        }
    }
}

let showItems = function () {
    let items = document.querySelector('#items');

    for (const i of toDoItems) {
        let tr = document.createElement("tr");
        
        let td1 = document.createElement("td");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.className = "itemCheckbox";
        input.checked = i.itemIsDone;
        // input.addEventListener("click", () => {
        //     console.log(input.checked);
        // });
        
        tr.append(td1);
        td1.append(input);
        
        let td2 = document.createElement("td");
        let p = document.createElement("p");
        p.className = "itemTextClass";
        p.innerText = i.itemName;
        tr.append(td2);
        td2.append(p);
        
        let td3 = document.createElement("td");
        let button = document.createElement("button");
        button.className = "delItemButton";
        button.innerText = "-";
        tr.append(td3);
        td3.append(button);

        items.append(tr);
        console.log(tr);
        console.log(items);
    }
}

// showItems();

addItemButton.addEventListener("click", () => {
    (new Item(addItemTextField.value, "taskCategory1")).pushItemToArray();
    console.log(toDoItems);
    addItemTextField.value = "";
    hideItems();
    showItems();
});

hideItems();
showItems();

    






