let main = document.createElement('main');
main.className = 'mainClass check item';

let div = document.createElement('div');
div.id = 'myDiv';

let p = document.createElement('p');
p.textContent = "First paragraph";

div.append(p);
main.append(div);
document.body.prepend(main);

