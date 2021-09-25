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
        var r = document.getElementById("respuestas"+rNum.toString());
        
        resps[i] = r.options[r.selectedIndex].text; //Toma la opción que se seleccionó, y la guarda en un arreglo de respuestas, para tenerlas almacenadas y después escribirlas
        preg[i] = document.querySelector(".preg"+rNum.toString()).textContent; //Obtener el contenido de los h5 que tienen las preguntas -- esto para ahorrar líneas de código en no ponerlas una por una. 
        console.log(preg[i]); 
        
        rNum++;

        respuesta += "<div class=\"form-group\"><h5>"+preg[i]+" </h5><label>"+resps[i]+"</label></div>";
    } 

    document.getElementById('respuestas').innerHTML = respuesta; 

    
    
}

document.getElementById('reservMesas').addEventListener("change", function(){ mesas();});
document.getElementById('mostrar').addEventListener("click", function(){mostrar();});


let mesas = function()
{
    let numMesas = document.getElementById("reservMesas").value; 
    let contenido = ''; 
    let i; 

    for(i = 0; i < numMesas; i++)
    {
        contenido += '<h3>Mesa '+(i+1)+'</h3>'+
        '<h4> Número de comensales </h4>'+
        '<p>Adultos: </p>'+
        '<select name="adultos" id="adultos'+i+'" class="form-select" onChange="numMenores();">'+
            '<option value="0">Num. Adultos</option>'+
            '<option value="1">1</option>'+
            '<option value="2">2</option>'+
            '<option value="3">3</option>'+
            '<option value="4">4</option>'+
        '</select><br>'+
        '<p>Niños: </p>'+
        '<select name="menores" id="menores'+i+'" class="form-select" onChange="edades();"> '+
            '<option value="0">Num. Niños</option>'+
            '<option value="1">1</option>'+
            '<option value="2">2</option>'+
            '<option value="3">3</option>'+
            '<option value="4">4</option>'+
        '</select><br>'+
        '<div id="edades'+i+'" class="form-group"></div><hr>';
    }

    document.getElementById("mesas").innerHTML = contenido; 

}

let numMenores = function()
{
    let numMesas = document.getElementById("reservMesas").value;
    for(let i = 0; i < numMesas; i++)
    {
        if(document.getElementById("adultos"+i))
        {
            let numAdultos = document.getElementById("adultos"+i).value; 
            switch(numAdultos)
            {
                case '1': 
                    document.getElementById("menores"+i).innerHTML = '<option value="0">Num. Niños</option>'+
                    '<option value="1">1</option>'+
                    '<option value="2">2</option>'+
                    '<option value="3">3</option>'+
                    '<option value="4">4</option>';
                    break;
                case '2': 
                    document.getElementById("menores"+i).innerHTML = '<option value="0">Num. Niños</option>'+
                    '<option value="1">1</option>'+
                    '<option value="2">2</option>'+
                    '<option value="3">3</option>';
                    break;
                case '3': 
                    document.getElementById("menores"+i).innerHTML = '<option value="0">Num. Niños</option>'+
                    '<option value="1">1</option>'+
                    '<option value="2">2</option>';
                    break; 
                case '4': 
                    document.getElementById("menores"+i).innerHTML = '<option value="0">0</option>';
                    document.getElementById("edades"+i).innerHTLM = '';
                    break;  
                default: 
                    break; 
            }
        }
    }
}

let edades = function()
{
    let numMesas = document.getElementById("reservMesas").value;
    for(let i = 0; i < numMesas; i++)
    {
        let contenido = '';
        if(document.getElementById("menores"+i))
        {
            let numMenores = document.getElementById("menores"+i).value;
            for(let j = 0; j < numMenores; j++)
            {
                contenido += '<label>Niño '+(j+1)+'<input type="text" class="form-control" name="edadMenores" id="edadMenores'+j+'"></label>'; 
                document.getElementById("edades"+i).innerHTML = contenido; 
            }
        }
    }
}

let mostrar = function()
{
    //Mesas
    let numMesas = document.getElementById("reservMesas").value;
    localStorage.setItem('numMesas', numMesas); 

    //Adultos
    let numAdultos = document.getElementsByName("adultos"); 
    let valoresAdultos = []; 
    for(let i = 0; i < numAdultos.length; i++)
    {
        let a = document.getElementById("adultos"+i); 
        valoresAdultos[i] = a.options[a.selectedIndex].value;
        localStorage.setItem('valoresAdultos', valoresAdultos);
    }

    //Niños
    let numMenores = document.getElementsByName("menores"); 
    let valoresMenores = []; 
    for(let i = 0; i < numMenores.length; i++)
    {
        let n = document.getElementById("menores"+i); 
        valoresMenores[i] = n.options[n.selectedIndex].value;
        localStorage.setItem('valoresMenores', valoresMenores); 
    }
    //Edad niños
    let edadMenores = document.getElementsByName("edadMenores"); 
    let valoresEdad = []; 
    for(let i = 0; i < edadMenores.length; i++)
    {
        valoresEdad[i] = edadMenores[i].value; 
        localStorage.setItem('valoresEdad', valoresEdad);
    }

    window.open("reservacion.html"); 
}


/*'<p>Niños: </p>'+
            '<select name="menores" id="menores'+i+'" class="form-select">'+
                '<option value="">Num. Niños</option>'+
                '<option value="1">1</option>'+
                '<option value="2">2</option>'+
                '<option value="3">3</option>'+
                '<option value="4">4</option>'+
            '</select><br><hr>';*/

/*
//Mesas
    let numMesas = document.getElementById("reservMesas").value;
    localStorage.setItem('numMesas', numMesas); 

    //Adultos
    let numAdultos = document.getElementsByName("adultos"); 
    let valoresAdultos = []; 
    for(let i = 0; i < numAdultos.length; i++)
    {
        let a = document.getElementById("adultos"+i); 
        valoresAdultos[i] = a.options[a.selectedIndex].value;
        localStorage.setItem('valoresAdultos', valoresAdultos);
    }

    //Niños
    let numMenores = document.getElementsByName("menores"); 
    let valoresMenores = []; 
    for(let i = 0; i < numMenores.length; i++)
    {
        let n = document.getElementById("menores"+i); 
        valoresMenores[i] = n.options[n.selectedIndex].value;
        localStorage.setItem('valoresMenores', valoresMenores); 
    }
    //Edad niños
    let edadMenores = document.getElementsByName("edadMenores"); 
    let valoresEdad = []; 
    for(let i = 0; i < edadMenores.length; i++)
    {
        valoresEdad[i] = edadMenores[i].value; 
        localStorage.setItem('valoresEdad', valoresEdad);
    }

    window.open("reservacion.html"); 
*/





