//document.write("hola a todos");
let linea1 = [];
let linea2 = [];
let cant_nods=0;

function set_input(){     
    const sb = document.querySelector('#cant--nodos');
   while (container.hasChildNodes()) {    
        container.removeChild(container.lastChild);
    }
    console.log(sb);
    if(sb.value=="")
    {
        cant_nods=0;
    }
    if(sb.value=="2")
    {
        cant_nods=4;
    }
    if(sb.value=="3")
    {
        cant_nods=6;
    }
    if(sb.value=="4")
    {
        cant_nods=8;
    }
    if(sb.value=="5")
    {
        cant_nods=10;
    }
    for(var i=0;i<cant_nods;i++)
    {
        container.appendChild(document.createElement("br"));
        var label = document.createElement("label");
        label.for="id--input"+i;
        label.title="Valor nodo "+i;

        var input = document.createElement("input");
        input.type = "number";
        input.className = "input-din"; // set the CSS class
        input.id= "id--input--"+ i;
        input.placeholder="valor nodo "+i;
        container.appendChild(input); 
        container.appendChild(document.createElement("br"));
    }

    for(var i=0;i<cant_nods-2;i++)
    {
        container.appendChild(document.createElement("br"));
        var CambioL = document.createElement("input");
        CambioL.type = "number";
        CambioL.className = "input-din"; // set the CSS class
        CambioL.id= "id_CambioL_"+ i;
        CambioL.placeholder="valor linea "+i;
        container.appendChild(CambioL);
        container.appendChild(document.createElement("br")); 
    }
}

function guardar_data()
{
    let x=0;
    for(var i=0;i<cant_nods;i++)
    {
        var s = document.getElementById("id--input--"+i).value;
        console.log(s);
        if(s=="")
        {
            window.alert("los valores no pueden estar vacios");
            return;
        }
        if(s<0)
        {
            window.alert("los valores no pueden ser menor a 0");
            return;
        }    
    }
    
    for(var i=0;i<cant_nods-2;i++)
    {
        var s = document.getElementById("id_CambioL_"+i).value;
        console.log(s);
        if(s=="")
        {
            window.alert("los valores no pueden estar vacios");
            return;
        }
        if(s<0)
        {
            window.alert("los valores no pueden ser menor a 0");
            return;
        }    
    }  

    for(var i=0;i<cant_nods/2;i++)
        linea1[i]=document.getElementById("id--input--"+i).value;
    for(var i=cant_nods/2;i<cant_nods;i++)
     {  
         linea2[x]=document.getElementById("id--input--"+i).value;   
        x++;
    }     
}



function borrar_datos()
{
    for(var i=0;i<cant_nods;i++)
    {
        let s = document.getElementById("id--input--"+i);
        s.value = -1;
    } 
    
    for(var i=0;i<cant_nods-2;i++)
    {
        let s = document.getElementById("id_CambioL_"+ i);
        s.value = -1;
    }  
}

function generar_nodos()
{

    
}

/*function crear_tabla(){
    var col = document.getElementById("cols").value;
    var filas = document.getElementById("rows").value;
    var tabla="<table border=\"0\">";
    
    tabla+="<tr><td></td>";
    for(j=0;j<col;j++){ 
        tabla+="<td>"+(j+1)+ "</td>";
    }
    tabla+="</tr>";
    
    for(i=0;i<filas;i++){
        tabla+="<tr>";
        tabla+="<td>"+(i+1)+ "</td>";
        for(j=0;j<col;j++){ 
            tabla+="<td>"+"<input type=\"text\" size=\"1\">"+ "</td>";
        }
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("resultado").innerHTML=tabla;
}
*/
function agregar_fila()
{

}


        (function() { 
            easyTabs();
        })();
    var a = [ [linea1[0],linea1[1],linea1[2],linea1[3]], [linea2[4],linea2[5],linea2[6],linea2[7]] ];
    var t = [ [0,0,0,0], [0,0,0,0] ];
    var e = [ [0,0,0,0], [0,0,0,0] ];

    function anadir_inputs(){
        linea1 = document.getElementById("frameLinea1").value
        linea2 = document.getElementById("frameLinea2").value
        cantNodos = document.getElementById("eleccionNodos").value
        a[0][0] = document.getElementById("id--input--0").value
        a[0][1] = document.getElementById("id--input--1").value
        a[0][2] = document.getElementById("id--input--2").value
        a[0][3] = document.getElementById("id--input--3").value
        a[0][4] = document.getElementById("id--input--4").value
        a[1][0] = document.getElementById("id--input--5").value
        a[1][1] = document.getElementById("id--input--6").value
        a[1][2] = document.getElementById("id--input--7").value
        a[1][3] = document.getElementById("id--input--8").value
        a[1][4] = document.getElementById("id--input--9").value
        
        if (cantNodos == 3){
            linea1.setAttribute("src", "Nodos_L1_3N.html");
            linea2.setAttribute("src", "Nodos_L1_3N.html");
        }
        else if (cantNodos == 4){
            linea1.setAttribute("src", "Nodos_L1_4N.html");
            linea2.setAttribute("src", "Nodos_L1_4N.html");
        }
        else if (cantNodos == 5){
            linea1.setAttribute("src", "Nodos_L1_5N.html");
            linea2.setAttribute("src", "Nodos_L1_5N.html");
        }
        location.reload();
    }