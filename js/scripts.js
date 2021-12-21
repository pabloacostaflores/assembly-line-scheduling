//////////////////////////////// NodoC.js ////////////////////////////////////
import {linea1} from 'sol_direct.js';
//////////////////////////////////////////////////////////////////////////////

///////////////////////////////// sol_directa.js /////////////////////////////
//document.write("hola a todos");
let linea1 = [];
let linea2 = [];
let cant_nods = 0;
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////// Nodoc.js ////////////////////////////////////
//CREACION DE LAS MATRICES
let linea1 = new Array(5)
let linea2 = new Array(5)
for (let i = 0; i < 5; i++) {
    linea1[i] = new Array(5)
    linea2[i] = new Array(5)
    for (let j = 0; j < 5; j++) {
        linea1[i][j] = 0;
        linea2[i][j] = 0;
    }
}

var analizarNodo = new Boolean(false);
var i = 0;
//a[0][0] = nodo a
//a[0][1] = nodo b
//a[0][2] = nodo c
//...
//a[1][0] = nodo f
var a = [ [ 4, 5, 3, 2 ], [ 2, 10, 1, 4 ] ]; //Valores nodos
var t = [ [ 0, 7, 4, 5 ], [ 0, 9, 2, 8 ] ]; //Valores de las flechas de intercambio
var e = [ 10, 12 ], x = [ 18, 7 ]; //Entrada y salida
//Se realiza el algoritmo
//var a = [ [0,0,0,0], [0,0,0,0] ];
//var t = [ [0,0,0,0], [0,0,0,0] ];
//var e = [ [0,0,0,0], [0,0,0,0] ];

carAssembleTime(a, t, e, x);

cy.unbind('click');
cy.bind('click', 'node, edge', function(event) {
    if (analizarNodo){
        colorearAnalizados();
        analizarNodo = false;
    }
    else if (i<5){
        colorearTodos();
        colorear();
        analizarNodo = true;
        i++;
    }
    else if (i >= 5){
        i = 4;
        colorearTodos();
        colorear();
        i++;
    }
});
/////////////////////////////////////////////////////////////////////////////

//////////////////////////// prueba.js //////////////////////////////////////
var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),

    boxSelectionEnabled: false,
  
    style: [
      {
        selector: 'node',
        css: {
          'background-color': 'green',
          'content': 'data(num)',
          'text-valign': 'center',
          'text-halign': 'center'
        }
      },
      {
        selector: ':parent',
        css: {
          'background-color': 'gray',
          'text-valign': 'top',
          'text-halign': 'center',
        }
      },
      {
        selector: 'edge',
        css: {
          //'content': 'data(num)',
          'text-valign': 'left',
          'font-size': 'x-small', 
          'curve-style': 'bezier',
          'target-arrow-shape': 'triangle'
        }
      }
    ],
  
    elements: {
      nodes: [
        //{ data: { id: 'aux'}, position: { x: 150, y: 85 } },
        { data: { id: 'x' } },
        { data: { id: 'a', num: 5, parent: 'x' }, position: { x: 200, y: 85 } },
        { data: { id: 'b', num: 6, parent: 'x' }, position: { x: 250, y: 85 } },
        { data: { id: 'c', num: 15, parent: 'x' }, position: { x: 300, y: 85 } },
        
        //{ data: { id: 'aux', num: 0}, position: { x: 450, y: 85 } },
        { data: { id: 'y' } },
        //{ data: { id: 'aux', num: 0}, position: { x: 150, y: 150 } },
        { data: { id: 'f', num: 30, parent: 'y' }, position: { x: 200, y: 150 } },
        { data: { id: 'g', num: 35, parent: 'y' }, position: { x: 250, y: 150 } },
        { data: { id: 'h', num: 40, parent: 'y' }, position: { x: 300, y: 150 } },
        //{ data: { id: 'aux', num: 0}, position: { x: 450, y: 150 } }
      ],
      edges: [
        //Linea X
        //{ data: { id: 'toA', num: 0, source: '',target: 'a' } },
        { data: { id: 'ab', num: 1, source: 'a', target: 'b' } },
        { data: { id: 'bc', num: 2, source: 'b', target: 'c' } },
        //Linea Y
        { data: { id: 'fg', num: 5, source: 'f', target: 'g' } },
        { data: { id: 'gh', num: 6, source: 'g', target: 'h' } },
        //Intersecciones
        { data: { id: 'ag', num: 9, source: 'a', target: 'g' } },
        { data: { id: 'fb', num: 10, source: 'f', target: 'b' } },
        { data: { id: 'bh', num: 11, source: 'b', target: 'h' } },
        { data: { id: 'gc', num: 12, source: 'g', target: 'c' } },
      ]
    },
  
    layout: {
      name: 'preset',
      padding: 5
    }
  });
///////////////////////////////////////////////////////////////////////////

////////////////////////////// NodoC.js /////////////////////////////////////
function colorear(){
    var nodo;
    let primeraLinea = ['a', 'b', 'c', 'd', 'e'];
    let segundaLinea = ['f', 'g', 'h', 'i', 'j'];
    var dirNodo;
        //syncDelay(1000);
    for(var j=0; j<i+1; j++){
        if (linea2[i][j] == 1)
            nodo = primeraLinea[j];
        if (linea2[i][j] == 2)
            nodo = segundaLinea[j];
        if (linea2[i][j] == 0)
            break;
        dirNodo = '[id = "'+nodo+'"]';
        cy.nodes(dirNodo).style('background-color', 'red');
    }
}

function colorearAnalizados(){
    var nodo1, nodo2, nodoActual;
    let primeraLinea = ['a', 'b', 'c', 'd', 'e'];
    let segundaLinea = ['f', 'g', 'h', 'i', 'j'];
    var dirNodo1, dirNodo2, dirNodoActual;

    nodo1 = primeraLinea[i-1];
    nodo2 = segundaLinea[i-1];
    nodoActual = segundaLinea[i];
    dirNodo1 = '[id = "'+nodo1+'"]';
    dirNodo2 = '[id = "'+nodo2+'"]';
    dirNodoActual = '[id = "'+nodoActual+'"]';

    cy.nodes(dirNodo1).style('background-color', 'blue');
    cy.nodes(dirNodo2).style('background-color', 'blue');
    cy.nodes(dirNodoActual).style('background-color', 'yellow');
}

function colorearTodos(){
    let primeraLinea = ['a', 'b', 'c', 'd', 'e'];
    let segundaLinea = ['f', 'g', 'h', 'i', 'j'];
    var nodo1, nodo2, dirNodo1, dirNodo2;
    for(var j=0; j<5;j++){
        nodo1 = primeraLinea[j];
        nodo2 = segundaLinea[j];
        dirNodo1 = '[id = "'+nodo1+'"]';
        dirNodo2 = '[id = "'+nodo2+'"]';
        cy.nodes(dirNodo1).style('background-color', 'green');
        cy.nodes(dirNodo2).style('background-color', 'green');
    }

}

function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}

//LINEAS DE PRODUCCION
function minEst(num1, num2, linea, nodo){
    var retorno = 0;
    var i = 0;
    if (num1 < num2){ //Se mantiene en la misma linea
        retorno = num1;	
        for(i=0; i<nodo; i++){ //Llena la lista con la informacion del nodo pasado, ya que no cambio de linea
            if (linea == 1)
                linea1[nodo][i] = linea1[nodo-1][i];
            else
                linea2[nodo][i] = linea2[nodo-1][i];
        }
    }
    else{ //Cambio de linea
        retorno = num2;
        for(i=0; i<nodo; i++){
            if (linea == 1)
                linea1[nodo][i] = linea2[nodo-1][i];
            else
                linea2[nodo][i] = linea1[nodo-1][i];
        }
    }
    if (linea == 1)
            linea1[nodo][nodo] = linea; //Se agrega el nodo
        else
            linea2[nodo][nodo] = linea;
    return retorno; 
}

function carAssembleTime(a , t , e , x) {
    var n = a[0].length;

    // time taken to leave first station in line 1
    var first = e[0] + a[0][0];
    linea1[0][0] = 1;
    // time taken to leave first station in line 2
    var second = e[1] + a[1][0];
    linea2[0][0] = 2;

    for (var i = 1; i < n; i++) {
        var up = minEst(first + a[0][i], second + t[1][i] + a[0][i], 1, i),
                down = minEst(second + a[1][i], first + t[0][i] + a[1][i], 2, i);
        first = up;
        second = down;
    }

    first += x[0];
    second += x[1];

    return Math.min(first, second);
    }
///////////////////////////////////////////////////////////////////////////

///////////////////////////////// prueba.js /////////////////////////////////
    function easyTabs() {
        var groups = document.querySelectorAll('.t-container');
        if (groups.length > 0) {
          for (i = 0; i < groups.length; i++) {
            var tabs = groups[i].querySelectorAll('.t-tab');
            for (t = 0; t < tabs.length; t++) {
              tabs[t].setAttribute("index", t+1);
              if (t == 0) tabs[t].className = "t-tab selected";
            }
            var contents = groups[i].querySelectorAll('.t-content');
            for (c = 0; c < contents.length; c++) {
              contents[c].setAttribute("index", c+1);
              if (c == 0) contents[c].className = "t-content selected";
            }
          }
          var clicks = document.querySelectorAll('.t-tab');
          for (i = 0; i < clicks.length; i++) {
            clicks[i].onclick = function() {
              var tSiblings = this.parentElement.children;
              for (i = 0; i < tSiblings.length; i++) {
                tSiblings[i].className = "t-tab";
              }
              this.className = "t-tab selected";
              var idx = this.getAttribute("index");
              var cSiblings = this.parentElement.parentElement.querySelectorAll('.t-content');
              for (i = 0; i < cSiblings.length; i++) {
                cSiblings[i].className = "t-content";
                if (cSiblings[i].getAttribute("index") == idx) {
                  cSiblings[i].className = "t-content selected";
                }
              }
            };
          }
        }
      }
////////////////////////////////////////////////////////////////////////////

///////////////////////////// sol_directa.js /////////////////////////////////
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
/////////////////////////////////////////////////////////////