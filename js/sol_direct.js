//document.write("hola a todos");
var linea1 = [];
var linea2 = [];
function set_input(){
    //document.getElementById("mySelect").onchange;
    //html.Push("<input type='text' name='name", count, "'>");
     
    const sb = document.querySelector('#cant--nodos');
    console.log(sb);
    var cant_nods=0;
    if(sb.value=="")
    {
         //document.write("ninguna opcion");
        cant_nods=0;
    }
    if(sb.value=="2")
    {
        //document.write("2 nodos");
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
    llenar_arreglos(cant_nods);
}
function llenar_arreglos(cant_nods)
{
    for(var i=0;i<cant_nods;i++)
    {
        //linea1[i]=
        //linea2[i]=
    }
}

function crear_tabla(){
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

function agregar_fila()
{

}