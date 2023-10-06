let a = prompt("Siz sekundda qiymat kiriting men uni qancha minut va sekundligini aytib beraman: ");
let m;
let s;
m = (a - a % 60) / 60;
s = a % 60;
document.write(m + " minut," + s + " sekund");