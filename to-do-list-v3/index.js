//ЛОКАЛ СТОРЕДЖ. Синхронізація

function writeToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readFromLocalStorage(key) {
  if (
    JSON.parse(localStorage.getItem(key)) === null &&
    key !== "lastSelectedCategoryInList"
  ) {
    //створюємо пустий масив для зберігання обєктів group та item, для зберігання останньої категорії ігноруємо
    localStorage.setItem(key, JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem(key));
}

//масиви для роботи з категоріями та items початково беруть данні з локал сторедж

let toDoCategories = readFromLocalStorage("toDoCategories");
let toDoItems = readFromLocalStorage("toDoItems");

//КАТЕГОРІЇ

//при доданні нової категорії спочатку відаляемо всі категорії з випадаючого списка
function hideCategoriesInDropdownList() {
  let optionInCategoryList = document.querySelectorAll("option");
  for (const iterator of optionInCategoryList) {
    iterator.remove();
  }
}

//відображаємо категорії у випадаючому списку на сторінці
function showCategoriesInDropdownList() {
  let categoryList = document.querySelector("#categoryList");
  for (const iterator of toDoCategories) {
    let optionElement = document.createElement("option");
    optionElement.value = iterator.categoryValue;
    optionElement.innerHTML = iterator.categoryName;
    categoryList.appendChild(optionElement);
  }
  categoryList.value = readFromLocalStorage("lastSelectedCategoryInList"); //відображаємо останню активну категорію (вибрану, чи додану), данні про це були попередньо записани у ЛокалСторедж
}

//при початковому завантаженні сотрінки відображаємо категорії та запускаємо Ивент листенер на кнопку "додати категорію"
showCategoriesInDropdownList();
addEventListenersToaddListCategoryButton();

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

//відображаємо на сторінці назву вибраної у випадаючому списку категорії та відображаємо перелік items для цієї категорії
function showCategoryNameAndItems() {
  let categoryList = document.querySelector("#categoryList");
  let categoryNameOutput = document.querySelector("#categoryNameOutput");
  if (categoryList.value) {
    categoryNameOutput.innerHTML = categoryList.value;
    writeToLocalStorage("lastSelectedCategoryInList", categoryList.value);
    hideItemsAndAddItemTextFieldAndButton();
    showAddItemTextFieldAndButton();
    showItems();
  } else {
    hideItemsAndAddItemTextFieldAndButton();
    categoryNameOutput.innerHTML =
      "Please add a category to start using the application";
  }
}

//при початковому завантаженні сторінки викликаємо відповідну функцію
showCategoryNameAndItems();

//ЗАВДАННЯ (ITEMS)

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
  let items = document.querySelector("#addItemsFieldAndButton");

  items.innerHTML = `
        <div class="row">
            <div class="col-10 p-3">
                <input type="text" id="addItemTextField" placeholder="New To-do item" class="form-control">
            </div>
            <div class="col-2 p-3">
                <button id="addItemButton"class="btn btn-dark" type="submit">+</button>
            </div>
        </div>
        `;

  addEventListenersAddItemEvents();
}

//видаляемо зі сторінки перелік items та кнопку додавання item тому що вони у однієї таблиці для кращего форматування на сторінці. ця функція виконується при додаванні нового item щоб не було їх задвоювання
function hideItemsAndAddItemTextFieldAndButton() {
  let itemsElements = document.querySelectorAll("#items .row");
  for (const iterator of itemsElements) {
    iterator.remove();
  }
}

//функція для видалення item зі сторінки, масива та локал сторедж
function delItem(event) {
  let itemToDel =
    event.target.parentElement.previousElementSibling.children[0].innerHTML;
  let index = toDoItems.findIndex((el) => el.itemName === itemToDel);
  toDoItems.splice(index, 1);
  writeToLocalStorage("toDoItems", toDoItems);
  event.target.parentElement.parentElement.remove();
}

function editItem(event) {
  // let itemToEdit = event.target.parentElement.previousElementSibling.children[0].innerHTML;
  let itemToEdit = event.target.innerHTML;

  let itemInArray = toDoItems.find((el) => el.itemName === itemToEdit);

  let isLineThrough = "";
  if (itemInArray.itemIsDone) {
    isLineThrough = "lineThrough";
  }
  let newItemName = "test";
  itemInArray.itemName = newItemName;
  writeToLocalStorage("toDoItems", toDoItems);
  //itemToEdit = newItemName;

  //     event.target.parentElement.previousElementSibling.children[0].remove();
  //     event.target.parentElement.previousElementSibling.innerHTML = `<p class="itemTextClass ${isLineThrough}">test</p>`;
}

//функція для відображення на сторінці усіх items, відмічання ії виконаними або відображення тексту якщо немає жлдного item
function showItems() {
  let items = document.querySelector("#items");
  let categoryDropdownList = document.querySelector("#categoryList");

  let counter = 0;

  for (const i of toDoItems) {
    if (categoryDropdownList.value === i.itemCategory) {
      counter++;

      let isChecked = "";
      let isLineThrough = "";
      if (i.itemIsDone) {
        isChecked = "checked";
        isLineThrough = "lineThrough";
      }

      items.innerHTML += `
            <div class="row">
                <div class="col-1 p-3">
                    <input type="checkbox" class="itemCheckbox form-check-input" ${isChecked}>
                </div>
                <div class="col-9 p-3">
                    <p class="itemTextClass ${isLineThrough}"">${i.itemName}</p>
                </div>
                <div class="col-2 p-3">
                    <button class="delItemButton btn btn-dark">-</button>
                </div>
            </div>
            `;
    }
  }

  if (counter === 0) {
    items.innerHTML += `
        <div class="row">
            <div class="col-12 p-3">
                <p class="itemTextClass">Please add a new item to the list</p>
            </div>
        </div>
        `;
  } else {
    addEventListenersToItemsElements();
  }
}

//IVENT LISTENERS

//якщо змінюється категорія у випадаючому списку
let categoryList = document.querySelector("#categoryList");
categoryList.addEventListener("change", showCategoryNameAndItems); //створюємо нову категорію по кліку на кнопку

//якщо додається категорія при кліку на кнопку
function addEventListenersToaddListCategoryButton() {
  let addListCategoryButton = document.querySelector("#addListCategoryButton");
  let addListCategoryField = document.querySelector("#addListCategoryField");
  addListCategoryButton.addEventListener("click", () => {
    if (addListCategoryField.value === "") {
      alert("Please write something to text field to create a new category");
    } else {
      new Category(
        addListCategoryField.value,
        "parentCategory1"
      ).pushCategoryToArrayAndLocalStorage();
      writeToLocalStorage(
        "lastSelectedCategoryInList",
        addListCategoryField.value
      ); //записуємо додану категорію як останню у локал сторєдж
      addListCategoryField.value = "";
      hideCategoriesInDropdownList();
      showCategoriesInDropdownList();
      showCategoryNameAndItems();
    }
  });
  //створюємо нову категорію по натисканню клавіши Ентер
  addListCategoryField.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
      addListCategoryButton.click();
      addListCategoryField.focus();
    }
  });
}

//якщо клікають по кнопці "додати item" або тиснуть на Ентер при фокусі на текстовому полі
function addEventListenersAddItemEvents() {
  let addItemButton = document.querySelector("#addItemButton");
  addItemButton.addEventListener("click", () => {
    // по кліку додаємо item
    let addItemTextField = document.querySelector("#addItemTextField");
    let categoryList = document.querySelector("#categoryList");
    if (addItemTextField.value === "") {
      alert("Please write something to text field to create a new list item");
    } else {
      new Item(addItemTextField.value, categoryList.value).pushItemToArray();
      addItemTextField.value = "";
      hideItemsAndAddItemTextFieldAndButton();
      showAddItemTextFieldAndButton();
      showItems();
    }
  });
  //по натисканню на клавішу Ентер додаємо item
  document.querySelector("#addItemTextField").addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
      addItemButton.click();
      document.querySelector("#addItemTextField").focus();
    }
  });
}

//якщо клікають по чекбоксу біля назви item щоб змінити статус
function addEventListenerToCheckBoxes() {
  let checkboxes = document.querySelectorAll(".itemCheckbox");
  for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i];
    checkbox.addEventListener("click", (event) => {
      let itemNameInHTML =
        event.target.parentElement.nextElementSibling.children[0].innerHTML;
      let p = event.target.parentElement.nextElementSibling.children[0];
      let itemInArray = toDoItems.find(
        (item) => item.itemName === itemNameInHTML
      );
      itemInArray.itemIsDone = event.target.checked; //записуємо статус (виконано/не виконано) в обєкт
      writeToLocalStorage("toDoItems", toDoItems); //після чого завантажуємо масив обєектів з items у локал сторедж
      if (event.target.checked) {
        //згідно статусу робимо item закресленим чи ні
        p.classList.add("lineThrough");
      } else {
        p.classList.remove("lineThrough");
      }
    });
  }
}

//якщо редагують назву item
function addEventListenerToEditItemName() {
  let editItemTexts = document.querySelectorAll(".itemTextClass");
  for (const i of editItemTexts) {
    i.addEventListener("click", editItem);
  }
}

//якщо видаляють item
function addEventListenerToDellItemButton() {
  let delItemButtons = document.querySelectorAll(".delItemButton");
  for (const i of delItemButtons) {
    i.addEventListener("click", delItem);
  }
}

function addEventListenersToItemsElements() {
  addEventListenerToCheckBoxes();
  addEventListenerToDellItemButton();
  addEventListenerToEditItemName();
}

//при початковому завантаденні сторінки додаємо ивент лісенери до items
addEventListenersToItemsElements();
