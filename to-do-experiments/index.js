// local storage implementation

function writeCategoryToLocalStorage() {
    localStorage.setItem('toDoCategories', JSON.stringify(toDoCategories));
}


function readCategoryFromLocalStorage() {
    let infFromLocalStorage = JSON.parse(localStorage.getItem('toDoCategories'));
    if (infFromLocalStorage === null) {
        toDoCategories = [];
        localStorage.setItem('toDoCategories', JSON.stringify(toDoCategories));
    }
    return JSON.parse(localStorage.getItem('toDoCategories'));
}

function writeItemToLocalStorage() {
    localStorage.setItem('toDoItems', JSON.stringify(toDoItems));
}


function readItemFromLocalStorage() {
    let infFromLocalStorage = JSON.parse(localStorage.getItem('toDoItems'));
    if (infFromLocalStorage === null) {
        toDoItems = [];
        localStorage.setItem('toDoItems', JSON.stringify(toDoItems));
    }
    return JSON.parse(localStorage.getItem('toDoItems'));
}

let toDoCategories;
toDoCategories = readCategoryFromLocalStorage();
let toDoItems;
toDoItems = readItemFromLocalStorage();

//categories

//showing categories in List

function hideCategoryInList() {
    let optionInCategoryList = document.querySelectorAll('option');
    for (const iterator of optionInCategoryList) {
        iterator.remove();
    }
}

function showCategoryInList(){
    let categoryList = document.querySelector('#categoryList');
    for (const iterator of toDoCategories) {
        let optionElement = document.createElement("option");
        optionElement.value = iterator.categoryValue;
        optionElement.innerHTML = iterator.categoryName;
        categoryList.appendChild(optionElement);
    }
    
}

showCategoryInList();

//adding categories' objects to array

class Category {
    constructor(categoryName, parentCategory) {
        this.categoryName = categoryName;
        this.categoryValue = categoryName;
        this.parentCategory = parentCategory;
    }

    pushCategoryToArray() {
        toDoCategories.push(this);
        writeCategoryToLocalStorage();

    }
}

let addListCategoryButton = document.querySelector('#addListCategoryButton');
addListCategoryButton.addEventListener("click", () => {
    let addListCategoryField = document.querySelector('#addListCategoryField');
    (new Category(addListCategoryField.value, "parentCategory1")).pushCategoryToArray();
    addListCategoryField.value = "";
    hideCategoryInList();
    showCategoryInList();
});

//show category name and items
function showCategoryNameAndItems() {
    let categoryList = document.querySelector('#categoryList');
    let categoryNameOutput = document.querySelector('#categoryNameOutput');
    categoryNameOutput.innerHTML = categoryList.value + " :";
    hideItems();
    showAddItemTextFieldAndButton();
    showItems();
}

showCategoryNameAndItems();
let categoryList = document.querySelector('#categoryList');
categoryList.addEventListener('change', showCategoryNameAndItems);

//items

class Item {
    constructor(itemName, itemCategory) {
        this.itemName = itemName;
        this.itemCategory = itemCategory;
        this.itemIsDone = false;
    }

    pushItemToArray() {
        toDoItems.push(this);
        writeItemToLocalStorage();
    }
}

function showAddItemTextFieldAndButton() {
        let items = document.querySelector('#items');
        let addElementTr = document.createElement('tr');
        addElementTr.innerHTML = `
        <th colspan="2"><input type="text" id="addItemTextField" placeholder="New To-do item"></th>
        <th><button id="addItemButton">+</button></th>
        `;
        items.append(addElementTr);
        let addItemButton = document.querySelector("#addItemButton");
        addItemButton.addEventListener("click", () => {
            let addItemTextField = document.querySelector("#addItemTextField");
            let categoryList = document.querySelector('#categoryList');
            (new Item(addItemTextField.value, categoryList.value)).pushItemToArray();
            addItemTextField.value = "";
            hideItems();
            showAddItemTextFieldAndButton();
            showItems();
        });

}

function hideItems() {
    let itemsElements = document.querySelectorAll('tr');
    for (const iterator of itemsElements) {
        iterator.remove();
    }
}

function delItem(event) {
    itemToDel = event.target.parentElement.previousElementSibling.children[0].innerHTML;
    let index = toDoItems.findIndex(el => el.itemName === itemToDel);
    toDoItems.splice(index, 1);
    writeItemToLocalStorage();
    event.target.parentElement.parentElement.remove();
}   

function showItems() {
    let items = document.querySelector('#items');
    let categoryList = document.querySelector('#categoryList');

    for (const i of toDoItems) {
        // if item category == gategory to show
        if (categoryList.value === i.itemCategory) {
            let tr = document.createElement("tr");
        
            let td1 = document.createElement("td");
            let input = document.createElement("input");
            input.type = "checkbox";
            input.className = "itemCheckbox";
            input.checked = i.itemIsDone;
            input.addEventListener("click", () => {
                i.itemIsDone = input.checked;
                writeItemToLocalStorage();
                if (input.checked) {
                    p.classList.add("lineThrough");
                } else {
                    p.classList.remove("lineThrough");
                }
            });
            
            tr.append(td1);
            td1.append(input);
            
            let td2 = document.createElement("td");
            let p = document.createElement("p");
            p.className = "itemTextClass";
            if (input.checked) {
                p.classList.add("lineThrough");
            }
            p.innerText = i.itemName;
            tr.append(td2);
            td2.append(p);
            
            let td3 = document.createElement("td");
            let button = document.createElement("button");
            button.className = "delItemButton";
            button.innerText = "-";
            button.addEventListener("click", delItem);
            tr.append(td3);
            td3.append(button);

            items.append(tr);
        }
        
    }
}

showCategoryNameAndItems();


// adding listener to all events

document.addEventListener("click", function(event){
   if (event.target.className === "delItemButton") {
        console.log("Dell item Button pressed");
    }
    if (event.target.id === "addItemButton") {
        console.log("Add item Button pressed");
    }
    if (event.target.id === "addListCategoryButton") {
        console.log("Add list Button pressed");
    }
}); 

// let divArray = document.querySelectorAll("div");
// divArray.forEach(div => {
//     div.addEventListener("click", handler);
// });

// // данная функция установлена как обработчик события click для всех div на странице
// function handler(event) {
//     // event.target - элемент, который инициировал событие
//     // this - элемент, для которого срабатывает обработчик
//     alert(`this.id = ${this.id} event.target.id = ${event.target.id}`);
// }


    






