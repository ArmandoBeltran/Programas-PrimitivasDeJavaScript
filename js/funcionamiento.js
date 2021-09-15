function crearCajas()
{
    var numCajas = parseInt(document.getElementById("numCajas").value); 
    var color = document.getElementById("colores").value; 
    var bordes = document.getElementById("bordes").value; 

    var estilo = "width: 70px; height: 70px; margin: 10px; border: 5px "+bordes+" "+color; 
    var caja = "";

    for(var i = 0; i < numCajas; i++)
    {
        caja += "<article style=\""+estilo+"\"></article>";
    }

    document.getElementById('cajas').innerHTML = caja;
}

function respuestas()
{
    var rNum = 1;
    var resps = []; 
    var preg = []; 
    var respuesta = "";

    for (var i = 0; i < 5; i++)
    {
        var r = document.getElementById("respuestas"+rNum.toString())
        
        resps[i] = r.options[r.selectedIndex].text; //Toma la opción que se seleccionó, y la guarda en un arreglo de respuestas, para tenerlas almacenadas y después escribirlas
        preg[i] = document.querySelector(".preg"+rNum.toString()).textContent; //Obtener el contenido de los h5 que tienen las preguntas -- esto para ahorrar líneas de código en no ponerlas una por una. 
        console.log(preg[i]); 
        
        rNum++;

        respuesta += "<div class=\"form-group\"><h5>"+preg[i]+" </h5><label>"+resps[i]+"</label></div>";
    } 

    document.getElementById('respuestas').innerHTML = respuesta; 

    
    
}

