let a = prompt("Siz sekundda qiymat kiriting men uni qancha soat va sekundligini aytib beraman: ");
let h;
let s;
h = (a - a % 3600) / 3600;
s = a % 3600;
document.write(h + " soat," + s + " sekund.");