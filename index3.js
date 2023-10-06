let a = prompt("Uch xonalik raqam kiriting: ");
let b;
b = (a % 100 - a % 10) / 10 + (a % 10) * 10 + (a - a % 100);
document.write(b);