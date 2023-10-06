let a = prompt("Siz sekundda raqam kiriting men necha minutligini aytib beraman: ");
let b;
b = (a - a % 60) / 60;
document.write(`${ b } soat`);