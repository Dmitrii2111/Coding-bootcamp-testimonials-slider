import '../src/style.scss'

let forward = document.getElementById("forward")
let back = document.getElementById("back")

let tanya = document.getElementById("tanya")
let john = document.getElementById("john")

function next () {
   tanya.style = "display: none"
   john.style = "display: block"
}
function prev () {
   tanya.style = "display: block"
   john.style = "display: none"
}
function btn(){
   if(tanya.style.display === 'block') {
      next()
   } else{
      prev()
   }
  
}

forward.addEventListener("click", btn)
back.addEventListener("click", btn)