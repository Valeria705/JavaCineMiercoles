//preguntando por un dato que esta almacenado en memoria

let datosPeliculaSeleccionada=JSON.parse(localStorage.getItem("peliculaSelccionada"))

console.log(datosPeliculaSeleccionada)
let poster= datosPeliculaSeleccionada.poster
let nombre= datosPeliculaSeleccionada.nombre
let genero= datosPeliculaSeleccionada.genero
let idioma= datosPeliculaSeleccionada.idioma
let director= datosPeliculaSeleccionada.director
//let actores= datosPeliculaSeleccionada.actores
let sipnosis= datosPeliculaSeleccionada.sipnosis
let clasificacion= datosPeliculaSeleccionada.clasificacion
let duracion= datosPeliculaSeleccionada.duracion

let foto=document.getElementById("foto")
foto.src=poster

let titulo=document.getElementById("titulo")
titulo.textContent=nombre

let sip=document.getElementById("sipnosis")
sipnosis.textContent=sipnosis

let gene=document.getElementById("genero")
gene.textContent=genero

let idio=document.getElementById("idioma")
idio.textContent=idioma

let dura=document.getElementById("duracion")
dura.textContent=duracion

let clas=document.getElementById("clasificacion")
clas.textContent=clasificacion

//let actor=document.getElementById("actores")
//actor.textContent=actores

let dir=document.getElementById("director")
dir.textContent=director
