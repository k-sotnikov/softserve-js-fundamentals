//Task 1
console.log("Task 1:");

let calcRectangleArea = function (width, height) {
    if (isNaN(width) || !Number(height)) {
        throw new Error("Not a number");
    } else {
        return width * height;
    }
}
try {
    console.log(calcRectangleArea("test", 6));
} catch (error) {
    console.log(error);
}

//Task 2
console.log("Task 2:");

let checkAge = function() {
    let inputAge = prompt("Please enter your age: ");
    let error;
    try {
        if (inputAge == "") {
            throw new Error("The field is empty! Please enter your age");
        } else if (isNaN(inputAge)) {
            throw new Error("You must enter a number");
        } else if (inputAge < 14){
            throw new Error("Age must be more than 14 years old");
        } else {
            return "You have got an access to movies database";
        }
    } catch (error) {
        return error;
    }
}

alert(checkAge());

//Task 3
console.log("Task 3:");

class MonthException {
    constructor(message) {
        this.name = "MonthException";
        this.message = message;
    }
}

let showMonthName = function(monthNumber) {
    
    try {
        if (monthNumber >= 0 && monthNumber < 13) {
            let date = new Date(0, monthNumber-1);
            let monthName = date.toLocaleString('default', { month: 'long' });
            alert(monthName);
        } else {
            throw new MonthException("Incorrect month number");
            
        }
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

let inputMonthNumber = +prompt("Please enter a month number: ");
showMonthName(inputMonthNumber);

//Task 4
console.log("Task 4:");

let showUser = function(id) {
    try {
        if (id >= 0) {
            return {
                id: id
            };
        } else {
            throw new Error(`ID must not be negative: ${id}`);
        }
    } catch (exception) {
        console.log(exception);
    }
}

let showUsers = function(ids) {
    let newArr = [];
    ids.forEach(element => {
        if ((showUser(element)) !== undefined) {
            newArr.push(showUser(element));
        }
    });
    return newArr;

}

console.log(showUsers([7, -12, 44, 22]));