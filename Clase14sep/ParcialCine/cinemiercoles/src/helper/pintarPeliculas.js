export function pintarPeliculas(peliculas){
    let fila= document.getElementById("fila")

    peliculas.forEach(function(pelicula){
   
        //  TRAVERSING (CREAR ETIQUETAS HTML DESDE JAVASCRIPT)
        //1. creamos columna para cada pelicula
    
        let columna= document.createElement("div")
        columna.classList.add("col")
    
        //2. creamos una tarjeta para cada pelicula
    
        let tarjeta= document.createElement("div")
        tarjeta.classList.add("card","h-100")
    
        //3.Creamos una foto para cada pelicula
    
        let poster=document.createElement("img")
        poster.classList.add("card-img-top")
        poster.src=pelicula.poster
    
        //4.Creamos nombre de la pelicula
        let nombrePelicula= document.createElement("h3")
        nombrePelicula.classList.add("text-center")
        nombrePelicula.textContent=pelicula.nombre
    
        //5.Creamos el genero de la pelicula
    
        let genero= document.createElement("h4")
        genero.classList.add("text-center")
        genero.textContent="Genero: "+pelicula.genero
    
        //6. Creamos el idioma de cada pelicula
        let idioma= document.createElement("h5")
        idioma.classList.add("text-center")
        idioma.textContent="Idioma: "+pelicula.idioma
    
        //7.Creamso la sinopsis
        let sinopsis= document.createElement("p")
        sinopsis.textContent="Sinopsis: "+pelicula.sinopsis
    
         //8.Creamos el director
         let director= document.createElement("h6")
         director.classList.add("text-center")
         director.textContent="director: "+pelicula.director
 
    
         //9.Creamos los actores
       

         let duracion= document.createElement("h8")
         duracion.classList.add("text-center")
         duracion.textContent="duracion: "+pelicula.duracion
         
         let clasificacion= document.createElement("h9")
         clasificacion.classList.add("text-center")
         clasificacion.textContent="Clasificacion: "+pelicula.clasificacion
     
    
    
        //Padres e hijos
    
        
        tarjeta.appendChild(poster)
        tarjeta.appendChild(nombrePelicula)
        tarjeta.appendChild(genero)
        tarjeta.appendChild(idioma)
        tarjeta.appendChild(duracion)
        tarjeta.appendChild(clasificacion)
        //tarjeta.appendChild(actores)
        tarjeta.appendChild(sinopsis)
        tarjeta.appendChild(director)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
       
    
    
    
    })
}