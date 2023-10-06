let a = prompt("Uch xonali raqam kiriting: ");
let b;
b = (a - a % 100) / 10 + (a % 100 - a % 10) * 10 + a % 10;
document.write(b);