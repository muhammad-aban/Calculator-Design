let n7 = document.getElementById('b7')
let n8 = document.getElementById('b8')
let n9 = document.getElementById('b9')
let n4 = document.getElementById('b4')
let n5 = document.getElementById('b5')
let n6 = document.getElementById('b6')
let n1 = document.getElementById('b1')
let n2 = document.getElementById('b2')
let n3 = document.getElementById('b3')
let comma = document.getElementById('b-comma')
let clear = document.getElementById('bc')
let n0 = document.getElementById('b0')
let add = document.getElementById('b-add')
let mult = document.getElementById('b-mult')
let divide = document.getElementById('b-divide')
let minus = document.getElementById('b-sub')
let equal = document.getElementById('b-equal')
let reload = document.querySelector('.image')
let number = document.querySelector('.numbers')
n7.addEventListener("click", function(){
    number.textContent += "7"
})
n8.addEventListener("click", function(){
    number.textContent += "8"
})
n9.addEventListener("click", function(){
    number.textContent += "9"
})
n4.addEventListener("click", function(){
    number.textContent += "4"
})
n5.addEventListener("click", function(){
    number.textContent += "5"
})
n6.addEventListener("click", function(){
    number.textContent += "6"
})
n1.addEventListener("click", function(){
    number.textContent += "1"
})
n2.addEventListener("click", function(){
    number.textContent += "2"
})
n3.addEventListener("click", function(){
    number.textContent += "3"
})
n0.addEventListener("click", function(){
    number.textContent += "0"
})
add.addEventListener("click", function(){
    number.textContent += "+"
})
minus.addEventListener("click", function(){
    number.textContent += "-"
})
mult.addEventListener("click", function(){
    number.textContent += "*"
})
divide.addEventListener("click", function(){
    number.textContent += "/"
})
equal.addEventListener("click", function(){
    number.textContent = eval(number.textContent)
})
reload.addEventListener("click", function(){
    number.textContent = " "
})
clear.addEventListener("click", function(){
    number.textContent = number.textContent.slice(0 , number.textContent.length-1)
})
document.addEventListener("keydown", function(a){
    if(a.key == "="){
        number.textContent = eval(number.textContent)
    }
    else if(a.key == "Backspace" ){
        number.textContent = number.textContent.slice(0 , number.textContent.length-1)
    }else if(a.key in ["0","1","2","3","4","5","6","7","8","9","+","-","*","/"]){
        number.textContent += a.key
    }else if(a.key == "r"){
     number.textContent = " "   
    }
})