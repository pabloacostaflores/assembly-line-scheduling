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
}
function guardar_data()
{
    let x=0;
    for(var i=0;i<cant_nods;i++)
    {
        let s = document.getElementById("id--input--"+i);
        if(s<0)
        {
            console.log("penede burrop");
            window.alert("los valores no pueden ser menor a 0");
            return;
        }    
    }    
    for(var i=0;i<cant_nods/2;i++)
        linea1[i]=document.getElementById("id--input--"+i);
    for(var i=cant_nods/2;i<cant_nods;i++)
     {  
         linea2[x]=document.getElementById("id--input--"+i);   
        x++;
    }     
     console.log(linea1.length);
     console.log(linea2.length);
     for(let x=0;x<cant_nods/2;x++)
     {
         console.log(linea1[x],x);
         console.log(linea2[x],x);
     }
}
function borrar_datos()
{
    for(var i=0;i<cant_nods;i++)
    {
        let s = document.getElementById("id--input--"+i);
        s.value = -1;
    }       
    
}