// task 1
console.log("task 1:");

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

let propsCount = function(obj) {
    //variant 1:
    // let count = 0;
    // for (let key in obj) {
    //     count += 1;
    // }
    // return count;

    //variant 2:
    return Object.keys(obj).length;
}    

console.log(`Quantity of keys: ${propsCount(mentor)}`);

// task 2
console.log("task 2:");

let user = new Object();
user.name = "John";
user.surname = "Johnson";
user.email = "john@gmail.com";
user.age = 27;
user.university = "KHNURE";

let showProps = function(obj) {
    let keysArray = [];
    let valuesArray = [];
    //variant 1
    console.log("- variant 1: ");
    for (const key in obj) {
        keysArray.push(key);
        valuesArray.push(obj[key]);
    }
    console.log(keysArray.toString());
    console.log(valuesArray.toString());
    
    //variant 2
    console.log("- variant 2: ");
    keysArray = [];
    valuesArray = [];
    keysArray = Object.keys(obj);
    keysArray.forEach(key => valuesArray.push(obj[key]));
    console.log(keysArray.toString());
    console.log(valuesArray.toString());
}

showProps(user);

// task 3
console.log("task 3:");

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return `${this.name} ${this.surname}`;

    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    
    showFullName(midleName) {
        return `${this.name} ${midleName} ${this.surname}`;
    }

    showCourse() {
        let today = new Date();
        let yearToday = today.getFullYear();
        if (yearToday - this.year <= 6 && yearToday - this.year >= 1) {
            return yearToday - this.year;
        } else {
            return "This person is not a student now";
        }
        
    }
}

let stud1 = new Student("Petro", "Petrenko", 2015);

console.log(`Full name: ${stud1.showFullName("Petrovych")}`);
console.log(`Current course: ${stud1.showCourse()}`);

// task 4
console.log("task 4:");

class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        
    }

    #experience = 1.2;

    showSalary() {
        return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience() {
        return (this.dayRate * this.workingDays * this.#experience).toFixed(2);
    }

    get experience() {
        return this.#experience;
    }

    set experience(value) {
        if (value > 0 && value < 10) {
            this.#experience = value;
        } else {
            throw new Error("Wrong koefficient experience");
        }

    }
}

let worker1 = new Worker("John Johnson", 20, 23);

console.log("Full name: " + worker1.fullName);                 
console.log("Salary: " + worker1.showSalary());
console.log("Experience: " + worker1.experience);
console.log("Salary With Experience: " + worker1.showSalaryWithExperience());

worker1.experience = 1.5;

console.log("New experience: " + worker1.experience);
console.log("Salary with new experience: " + worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 23);
worker2.experience = 1.7;
let worker3 = new Worker("Andy Ander", 29, 23);
worker3.experience = 1.7;
let worker4 = new Worker("Ivan Ivanov", 45, 23);
worker4.experience = 1.7;
let worker5 = new Worker("Tomina Tomson", 49, 23);
worker5.experience = 1.6;

let sortWorkersByExperience = function () {
    let maxExperience = -Infinity;

    for (const key in arguments) {
        const iterator = arguments[key];

        console.log(`\r\n`);
        console.log("Full name: " + iterator.fullName);                 
        console.log("Salary: " + iterator.showSalary());
        console.log("Experience: " + iterator.experience);
        console.log("Salary With Experience: " + iterator.showSalaryWithExperience());

        if (iterator.experience > maxExperience) {
            maxExperience = iterator.experience;
        }

    }

    let sortedArray = Array.from(arguments);
    
    console.log(`\r\nSorted salary with max experience rate (${maxExperience}):`);

    sortedArray.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
    for (const iterator of sortedArray) {
        if (iterator.experience === maxExperience) {
            console.log(`${iterator.fullName} - ${iterator.showSalaryWithExperience()}`);
        }
    }
}

sortWorkersByExperience(worker1, worker2, worker3, worker4, worker5);

// task 5
console.log("task 5:");