let peliculas=[
    {
        nombre:"Avatar",
        genero:"Ciencia ficción",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/avatar.png?alt=media&token=4775b8fa-5e9c-42bb-9ae3-f0f0bf010f0d",
        sinopsis:"lorem",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"La Bestia",
        genero:"suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/la%20bestia.jpg?alt=media&token=b46a53b9-3af7-4fc2-9c7e-966ec628f719",
        sinopsis:"lorem",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"Tren Bala",
        genero:"suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinevm-f98a1.appspot.com/o/trenbala.jpg?alt=media&token=5c3a8ba1-c30b-45eb-8dd9-c91f110f07f7",
        sinopsis:"lorem",
        clasificacion:"+18",
        idioma:"En subtitulado"
    }
    ,
    {
        nombre:"Anime",
        genero:"suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinevm-f98a1.appspot.com/o/uno.jpg?alt=media&token=d2a52d3a-7871-4178-b1e8-0a0e712e3744",
        sinopsis:"lorem",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"Avatar",
        genero:"Ciencia ficción",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/avatar.png?alt=media&token=4775b8fa-5e9c-42bb-9ae3-f0f0bf010f0d",
        sinopsis:"lorem",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"La Bestia",
        genero:"suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/la%20bestia.jpg?alt=media&token=b46a53b9-3af7-4fc2-9c7e-966ec628f719",
        sinopsis:"lorem",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"Tren Bala",
        genero:"suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinevm-f98a1.appspot.com/o/trenbala.jpg?alt=media&token=5c3a8ba1-c30b-45eb-8dd9-c91f110f07f7",
        sinopsis:"lorem",
        clasificacion:"+18",
        idioma:"En subtitulado"
    }
    ,
    {
        nombre:"Anime",
        genero:"suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinevm-f98a1.appspot.com/o/uno.jpg?alt=media&token=d2a52d3a-7871-4178-b1e8-0a0e712e3744",
        sinopsis:"lorem",
        clasificacion:"+18",
        idioma:"En subtitulado"
    }
    ,
    {
        nombre:"Tren Bala",
        genero:"suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinevm-f98a1.appspot.com/o/trenbala.jpg?alt=media&token=5c3a8ba1-c30b-45eb-8dd9-c91f110f07f7",
        sinopsis:"lorem",
        clasificacion:"+18",
        idioma:"En subtitulado"
    }
    ,
    {
        nombre:"Anime",
        genero:"suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinevm-f98a1.appspot.com/o/uno.jpg?alt=media&token=d2a52d3a-7871-4178-b1e8-0a0e712e3744",
        sinopsis:"lorem",
        clasificacion:"+18",
        idioma:"En subtitulado"
    }
]


//RECORRIENDO UN ARREGLO EN JS

let fila= document.getElementById("fila");

peliculas.forEach(function(pelicula){
    //console.log(pelicula)
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)


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
    let idioma= document.createElement("h6")
    idioma.classList.add("text-center")
    idioma.textContent="idioma: "+pelicula.idioma

    //7.Creamso la sinopsis
    let sinopsis= document.createElement("h6")
    sinopsis.classList.add("d-none")
    sinopsis.textContent="sinopsis: "+pelicula.sinopsis


    //Padres e hijos

    
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombrePelicula)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sinopsis)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
   



})

//DETECTANDO SELECION DE UNA PELICULA
fila.addEventListener("click", function(){
    alert("esta seleccionando una pelicula")
})
