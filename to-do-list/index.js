//ЛОКАЛ СТОРЕДЖ. Синхронізація

function writeToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function readFromLocalStorage(key) {
    if (JSON.parse(localStorage.getItem(key)) === null && key !== 'lastSelectedCategoryInList') { //створюємо пустий масив для зберігання обєктів group та item, для зберігання останньої категорії ігноруємо
        localStorage.setItem(key, JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(key));
}

//змінні для роботи з категоріями та items

let toDoCategories = readFromLocalStorage('toDoCategories');
let toDoItems = readFromLocalStorage('toDoItems');

//КАТЕГОРІЇ

//при доданні нової категорії спочатку відаляемо всі категорії з випадаючого списка
function hideCategoriesInDropdownList() {
    let optionInCategoryList = document.querySelectorAll('option');
    for (const iterator of optionInCategoryList) {
        iterator.remove();
    }
}

//відображаємо категорії у випадаючому списку
function showCategoriesInDropdownList(){
    let categoryList = document.querySelector('#categoryList');
    for (const iterator of toDoCategories) {
        let optionElement = document.createElement("option");
        optionElement.value = iterator.categoryValue;
        optionElement.innerHTML = iterator.categoryName;
        categoryList.appendChild(optionElement);
    }
    categoryList.value = readFromLocalStorage('lastSelectedCategoryInList'); //відображаємо останню активну категорію (вибрану, чи додану), данні про це були попередньо записани у ЛокалСторедж
}

//при початковому завантаженні сотрінки відображаємо категорії
showCategoriesInDropdownList();

//класс для багаторазового використання для створення нової категорії та функція для додавання категорії у масив та у локал сторедж.
class Category {
    constructor(categoryName, parentCategory) {
        this.categoryName = categoryName;
        this.categoryValue = categoryName;
        this.parentCategory = parentCategory;
    }

    pushCategoryToArrayAndLocalStorage() {
        toDoCategories.push(this);
        writeToLocalStorage("toDoCategories", toDoCategories);

    }
}

//створюємо нову категорію по кліку на кнопку
let addListCategoryButton = document.querySelector('#addListCategoryButton');
let addListCategoryField = document.querySelector('#addListCategoryField');
addListCategoryButton.addEventListener("click", () => {
    if (addListCategoryField.value === "") {
        alert('Please write something to text field to create a new category');
    } else {
        (new Category(addListCategoryField.value, "parentCategory1")).pushCategoryToArrayAndLocalStorage();
        writeToLocalStorage("lastSelectedCategoryInList", addListCategoryField.value); //записуємо додану категорію як останню у локал сторєдж
        addListCategoryField.value = "";
        hideCategoriesInDropdownList();
        showCategoriesInDropdownList();
        showCategoryNameAndItems();
    }

});

//створюємо нову категорію по натисканню клавіши Ентер
addListCategoryField.addEventListener("keyup", (e) => {
    if(e.keyCode == 13){
        addListCategoryButton.click();
        addListCategoryField.focus();
    }
});

//відображаємо на сторінці назву вибраної у випадаючому списку категорії та відображаємо перелік items для цієї категорії
function showCategoryNameAndItems() {
    let categoryList = document.querySelector('#categoryList');
    let categoryNameOutput = document.querySelector('#categoryNameOutput');
    if (categoryList.value) {
        categoryNameOutput.innerHTML = categoryList.value;
        writeToLocalStorage("lastSelectedCategoryInList", categoryList.value);
        hideItemsAndAddItemTextFieldAndButton();
        showAddItemTextFieldAndButton();
        showItems();
    } else {
        hideItemsAndAddItemTextFieldAndButton();
        categoryNameOutput.innerHTML = 'Please add a category to start using the application';
    }
    
}

//при початковому завантаженні сторінки викликаємо відповіднц функцію
showCategoryNameAndItems();

let categoryList = document.querySelector('#categoryList');
categoryList.addEventListener('change', showCategoryNameAndItems);

//класс для багаторазового використання для створення нового завдання (item) та функція для додавання item у масив та у локал сторедж.
class Item {
    constructor(itemName, itemCategory) {
        this.itemName = itemName;
        this.itemCategory = itemCategory;
        this.itemIsDone = false;
    }

    pushItemToArray() {
        toDoItems.push(this);
        writeToLocalStorage("toDoItems", toDoItems);
    }
}

//відображає на сторінці поле та кнопку для додавання item на сторінку, у масив та локал сторедж
function showAddItemTextFieldAndButton() {
        let items = document.querySelector('#items');
        
        let addElementTr = document.createElement('tr');
        addElementTr.innerHTML = `
        <th colspan="2"><input type="text" id="addItemTextField" placeholder="New To-do item"></th>
        <th><button id="addItemButton">+</button></th>
        `;
        items.append(addElementTr);
        
        let addItemButton = document.querySelector("#addItemButton");
        addItemButton.addEventListener("click", () => { // по кліку додаємо item
            let addItemTextField = document.querySelector("#addItemTextField");
            let categoryList = document.querySelector('#categoryList');
            if (addItemTextField.value === "") {
                alert('Please write something to text field to create a new list item');
            } else {
                (new Item(addItemTextField.value, categoryList.value)).pushItemToArray();
                addItemTextField.value = "";
                hideItemsAndAddItemTextFieldAndButton();
                showAddItemTextFieldAndButton();
                showItems();
            }

        });
        
        //по натисканню на клавішу Ентер додаємо item 
        document.querySelector("#addItemTextField").addEventListener("keyup", (e) => {
            if(e.keyCode == 13){
                addItemButton.click();
                document.querySelector("#addItemTextField").focus();
            }
        });
}

//видаляемо зі сторінки перелік items та кнопку додавання item тому що вони у однієї таблиці для кращего форматування на сторінці. ця функція виконується при додаванні нового item щоб не було їх задвоювання
function hideItemsAndAddItemTextFieldAndButton() {
    let itemsElements = document.querySelectorAll('tr');
    for (const iterator of itemsElements) {
        iterator.remove();
    }
}

//функція для видалення item зі сторінки, масива та локал сторедж
function delItem(event) {
    itemToDel = event.target.parentElement.previousElementSibling.children[0].innerHTML;
    let index = toDoItems.findIndex(el => el.itemName === itemToDel);
    toDoItems.splice(index, 1);
    writeToLocalStorage("toDoItems", toDoItems);
    event.target.parentElement.parentElement.remove();
}   

//функція для відображення на сторінці усіх items, відмічання ії виконаними або відображення тексту якщо немає жлдного item
function showItems() {
    let items = document.querySelector('#items');
    let categoryDropdownList = document.querySelector('#categoryList');

    let counter = 0;

    for (const i of toDoItems) {
        if (categoryDropdownList.value === i.itemCategory) {
            counter++;
            let tr = document.createElement("tr");
        
            let td1 = document.createElement("td");
            let input = document.createElement("input");
            input.type = "checkbox";
            input.className = "itemCheckbox";
            input.checked = i.itemIsDone; //беремо статус (виконано/не виконано) з обєкта 
            input.addEventListener("click", () => { 
                i.itemIsDone = input.checked; //записуємо статус (виконано/не виконано) в обєкт
                writeToLocalStorage("toDoItems", toDoItems); //після чого завантажуємо масив обєектів з items у локал сторедж
                if (input.checked) { //згідно статусу робимо item закресленим чи ні
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

    if (counter === 0) {
        let addElementTr = document.createElement('tr');
        addElementTr.innerHTML = `<td colspan="3"><p>Please add a new item to the list</p></td>`;
        items.append(addElementTr);

    }
}
