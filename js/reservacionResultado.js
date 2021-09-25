(function()
{
    let numMesas = localStorage.getItem('numMesas'); 
    let contenido = ''; 
    if(numMesas > 1)
    {
        contenido += '<h1>Reservación de las '+numMesas+' Mesas</h1>'; 
    } 
    else
    {
        contenido += '<h1>Reservación de la mesa</h1>';
    }

    let valoresAdultos = localStorage.getItem('valoresAdultos'); 
    let adultos = valoresAdultos.split(','); 
    for(let i = 0; i < adultos.length; i++)
    {
        contenido += '<div class="form-group">'+
        '<h3>Numero de adultos: '+adultos[i]+'</h3>'+
        '</div>';
    }

    let valoresMenores = localStorage.getItem('valoresMenores'); 
    let menores = valoresMenores.split(','); 
    for(let i = 0; i < menores.length; i++)
    {
        contenido += '<div class="form-group">'+
        '<h3>Numero de niños: '+menores[i]+'</h3>'+
        '</div>';
    }

    let valoresEdad = localStorage.getItem('valoresEdad'); 
    let edades = valoresEdad.split(','); 

    for(let i = 0; i < edades.length; i++)
    {
        if(edades[i])
        {
            contenido += '<div class="form-group">'+
            '<h3>Edad niño '+(i+1)+': '+edades[i]+'</h3>'+
            '</div>';
        }
    }
    document.getElementById("nodos").innerHTML = contenido; 
})();