let a = prompt("Siz sekundda raqam kiriting men u qancha soat ekanligini aytib beraman: ");
let b;
b = (a - a % 3600) / 3600;
document.write(b + " soat");