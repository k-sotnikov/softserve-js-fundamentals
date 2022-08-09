//Task 1
console.log("Task 1:");

let calcRectangleArea = function (width, height) {
    if (!Number(width) || !Number(width)) {
        throw new Error("Not a number");
    } else {
        return width * height;
    }
} 
console.log(calcRectangleArea("test",2));