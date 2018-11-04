let a = prompt("сколько у вас денег?")
let howApple = Number(prompt("сколько вы купили яблок?"))
let howBread = Number(prompt("сколько вы купили батонов хлеба?"))
let apple = howApple*Number(prompt("сколько стоит одно яблоко?"))
let bread = howBread*Number(prompt("сколько стоит один батон?"))
let res = apple+bread
document.body.textContent = (a >= res)
