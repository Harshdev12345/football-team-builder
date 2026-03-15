let playerCount = 0

function addCustomPlayer(){

let name = document.getElementById("playerInput").value

if(name === "") return

if(playerCount >= 11){
alert("You can only add 11 players")
return
}

addPlayer(name)

document.getElementById("playerInput").value = ""

}

function addPlayer(name){

let field = document.getElementById("field")

let player = document.createElement("div")

player.className = "player"

player.innerText = name

player.style.left = Math.random()*400 + "px"
player.style.top = Math.random()*500 + "px"

field.appendChild(player)

dragElement(player)

playerCount++

}

function dragElement(el){

let pos1=0,pos2=0,pos3=0,pos4=0

el.onmousedown = dragMouseDown

function dragMouseDown(e){

e.preventDefault()

pos3 = e.clientX
pos4 = e.clientY

document.onmouseup = closeDrag
document.onmousemove = elementDrag

}

function elementDrag(e){

e.preventDefault()

pos1 = pos3 - e.clientX
pos2 = pos4 - e.clientY

pos3 = e.clientX
pos4 = e.clientY

el.style.top = (el.offsetTop - pos2) + "px"
el.style.left = (el.offsetLeft - pos1) + "px"

}

function closeDrag(){

document.onmouseup = null
document.onmousemove = null

}

}
