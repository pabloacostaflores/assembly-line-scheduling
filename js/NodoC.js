import {linea1} from 'sol_direct.js';

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