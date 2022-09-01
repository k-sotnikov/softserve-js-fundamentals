// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, , ...z] = arr;
// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log(z); // [Bob]


// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
//  };
//  let {names:[name, name1, name2], ages:[age0,age1,age2]} = data;
//  console.log(name2); // "Tom"
//  console.log(age2); // 24
//  console.log(name4); // "Bob"
// //  console.log(age4); // 26

// function mul(...args) {
//     array.forEach(element => {
        
//     });
//     // Ваш код

function mul(...args) {
        let el = 1;
        args.forEach(element => {
            if (!isNaN(element)) {
                el *= element;
            }
        });
        return el;
 }
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0