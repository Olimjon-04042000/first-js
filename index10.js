let a = prompt("Siz sekundda qiymat kiriting men uni qancha soat minut va sekundligini aytib beraman: ");
let h;
let m;
let s;
h = (a - a % 3600) / 3600;
m = (a % 3600 - (a % 3600) % 60) / 60;
s = a - h * 3600 - m * 60;
document.write(h + " soat " + m + " minut " + s + " sekund.");