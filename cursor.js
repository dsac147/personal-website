// function numberRandom(min,max) {
//     return Math.round(Math.random()*(max-min)+min);
// }

// window.addEventListener("mouseover", function(evt){
//     var x =evt.x
//     var y=evt.y
//     var cursor = document.querySelector('.cursor')
//     var cursorPoint = document.querySelector(".cursor-point")
//     setTimeout(() => {
//         cursor.style.left = x + "px"
//         cursor.style.top = y + "px"
//     }, 60);
//     setTimeout(() => {
//         cursorPoint.style.left = x + "px"
//         cursorPoint.style.top = y + "px"
//     }, 30);
// })

// window.addEventListener("mousedown",function (evt) {
//     var cursor = document.querySelector('.cursor')
//     var cursorPoint = document.querySelector(".cursor-point")
//     cursor.classList.add("click")
//     cursorPoint.classList.add("click")
//     var shadow = document.createElement("div")
//     shadow.className = "shadow"
//     var number = numberRandom(80,200)
//     cursor.appendChild(shadow)
//     setTimeout(() => {
//         shadow.style.width = number + "px"
//         shadow.style.height = number + "px"
//         shadow.classList.add("active")
//     }, 10);
//     this.setTimeout(() => {
//         cursor.removeChild(shadow)
//     }, 600);
// })

// window.addEventListener("mouseup",function (evt) {
//     var cursor = document.querySelector('.cursor')
//     var cursorPoint = document.querySelector(".cursor-point")
//     cursor.classList.remove("click")
//     cursorPoint.classList.remove("click")
// })
