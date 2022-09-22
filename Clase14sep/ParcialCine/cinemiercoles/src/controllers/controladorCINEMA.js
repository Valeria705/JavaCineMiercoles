import{peliculas} from "../helper/baseDatos.js"
import{peliculasProximas} from "../helper/baseDatosNuevas.js"
import{pintarPeliculas} from "../helper/pintarPeliculas.js"



//RECORRIENDO UN ARREGLO EN JS
let peliculaSelccionada={}
let fila= document.getElementById("fila");

//Llamo a la funcion pintarPleiculas
pintarPeliculas(peliculas)



//DETECTANDO SELECION DE UNA PELICULA
fila.addEventListener("click", function(evento){
    
    peliculaSelccionada.poster=(evento.target.parentElement.querySelector('img').src);
    peliculaSelccionada.nombre=(evento.target.parentElement.querySelector('h3').textContent);
    peliculaSelccionada.genero=(evento.target.parentElement.querySelector('h4').textContent);
    peliculaSelccionada.idioma=(evento.target.parentElement.querySelector('h5').textContent);
    peliculaSelccionada.sipnosis=(evento.target.parentElement.querySelector('p').textContent);
    peliculaSelccionada.director=(evento.target.parentElement.querySelector('h6').textContent);
  
    peliculaSelccionada.duracion=(evento.target.parentElement.querySelector('h8').textContent);
    peliculaSelccionada.clasificacion=(evento.target.parentElement.querySelector('h9').textContent);

    console.log(peliculaSelccionada)
    
    //Llamando a la memoria del navegador

    localStorage.setItem("peliculaSelccionada",JSON.stringify(peliculaSelccionada))
    // redirecciona a otra lista
    window.location.href="./src/views/ampliarinfoPelicula.html"
})
