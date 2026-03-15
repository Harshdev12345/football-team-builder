let playerCount = 0
let formation = "433"

const formations = {

"433":[
[250,550],
[80,450],[200,450],[320,450],[440,450],
[120,330],[250,330],[380,330],
[120,180],[250,120],[380,180]
],

"442":[
[250,550],
[80,450],[200,450],[320,450],[440,450],
[100,320],[200,320],[320,320],[420,320],
[180,160],[320,160]
]

}

function addCustomPlayer(){

let name = document.getElementById("playerInput").value.trim()

if(name === "") return

if(playerCount >= 11){
alert("You can only add 11 players")
return
}

name = name.charAt(0).toUpperCase() + name.slice(1)

addPlayer(name)

document.getElementById("playerInput").value=""

}

function addPlayer(name){

let field = document.getElementById("field")

let player = document.createElement("div")

player.className="player"

player.innerText="⚽ "+name

let pos = formations[formation][playerCount]

player.style.left=pos[0]+"px"
player.style.top=pos[1]+"px"

field.appendChild(player)

dragElement(player)

playerCount++

}

function clearTeam(){

document.querySelectorAll(".player").forEach(p=>p.remove())

playerCount=0

}

function setFormation(type){

formation=type

clearTeam()

}

function dragElement(el){

let pos1=0,pos2=0,pos3=0,pos4=0

el.onmousedown = dragMouseDown

function dragMouseDown(e){

e.preventDefault()

pos3=e.clientX
pos4=e.clientY

document.onmouseup=closeDrag
document.onmousemove=elementDrag

}

function elementDrag(e){

e.preventDefault()

pos1=pos3-e.clientX
pos2=pos4-e.clientY

pos3=e.clientX
pos4=e.clientY

let newTop=el.offsetTop-pos2
let newLeft=el.offsetLeft-pos1

let field=document.getElementById("field")

let maxX=field.clientWidth-el.offsetWidth
let maxY=field.clientHeight-el.offsetHeight

if(newLeft<0)newLeft=0
if(newTop<0)newTop=0
if(newLeft>maxX)newLeft=maxX
if(newTop>maxY)newTop=maxY

el.style.top=newTop+"px"
el.style.left=newLeft+"px"

}

function closeDrag(){

document.onmouseup=null
document.onmousemove=null

}

}

function saveImage(){

html2canvas(document.getElementById("field")).then(canvas=>{

let link=document.createElement("a")

link.download="lineup.png"

link.href=canvas.toDataURL()

link.click()

})

}
