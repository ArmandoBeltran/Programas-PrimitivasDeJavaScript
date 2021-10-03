(function ()
{
    document.getElementById("resultadoTarjeta").style.display = "block"; 
    document.getElementById("resultadoTarjeta").innerHTML = localStorage.getItem('tarjeta'); 

    document.getElementById("rNombre").style.top = "5%"; 
    document.getElementById("rTitulo").style.top = "15%";
    document.getElementById("rSubtitulo").style.left = "47%";
    document.getElementById("rSubtitulo").style.top = "59%"; 

    
    var audio = new Audio('audio/congrats.mp3'); 
    audio.play();
})();