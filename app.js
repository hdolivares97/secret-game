let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }    
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p',  `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    //mensaje de inicio
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();



/*Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(listaGenerica);
console.log("---------------------------------------------------------------------");

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
console.log(lenguagesDeProgramacion);
console.log("---------------------------------------------------------------------");

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguagesDeProgramacion);
console.log("---------------------------------------------------------------------");

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLista(){
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log((i+1) + ".-" +lenguagesDeProgramacion[i]);        
    }
}
mostrarLista();
console.log("---------------------------------------------------------------------");

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarListaInversa(){
    for (let i = (lenguagesDeProgramacion.length - 1); i >= 0; i--) {
        console.log((i+1) + ".-" +lenguagesDeProgramacion[i]);        
    }
}
mostrarListaInversa();
console.log("---------------------------------------------------------------------");

//Crea una función que calcule el promedio de los elementos en una lista de números.
function listaPromedio(){
    let lista = [10,5,14];
    let suma = 0;
    let tamaño = lista.length;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];        
    }
    promedio = suma / tamaño;
    console.log(promedio);
}
listaPromedio();
console.log("---------------------------------------------------------------------");

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function numeroMayor(){
    let lista = [40,50000,14,56,30,1,1000]; 
    let numeroMayor = lista[0];
    let numeroMenor = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > numeroMayor) {
            numeroMayor = lista[i];
        } else if(lista[i] < numeroMenor){
            numeroMenor = lista[i];
        }        
    }
    console.log("Número más grande: " + numeroMayor + " ---- número mas pequeño: " + numeroMenor);
}
numeroMayor();
console.log("---------------------------------------------------------------------");

//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaTodo(){
    let lista = [100,25,14];
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];        
    }    
    console.log("La suma de todos los elementos es: " + suma);
}
sumaTodo();
console.log("---------------------------------------------------------------------");

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function posicionLista(valor){
    let lista = [40,50000,14,56,30,1,1000]; 
    let pos = -1;
    if (lista.includes(valor)) {
        for (let i = 0; i < lista.length; i++) {
            if (valor === lista [i]) {
                pos = i;
            }
        }
    }
    return pos;
}

console.log(posicionLista(14));
console.log("---------------------------------------------------------------------");

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let lista1 = [2,5,9];
let lista2 = [3,5,1];
let listaNueva = [];
function dosListas(l1, l2){
    for (let i = 0; i < l1.length; i++) {
        for (let j = 0; j < l2.length; j++) {
            listaNueva.push(l1[i] + l2[j]);
        }
    }

    return listaNueva;
}

console.log(dosListas(lista1, lista2)); */

/*Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número. 
let listaF = [2,5,9];
let listaNuevaF = [];
function listaCuadrados(lista){
    for (let i = 0; i < lista.length; i++) {
        listaNuevaF.push(lista[i] * lista[i]);        
    }

    return listaNuevaF;
}
console.log(listaCuadrados(listaF));
*/

/*
function Hola(){
    console.log('Hola mundo');
}

function Hola2(nombre){
    console.log('Hola ' + nombre);
}

function numeroDoble(numero){
    return numero * 2;
}

function numerosPromedio(num1, num2, num3){
    return (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;
}

function numeroMayor(num1, num2){
    if(parseInt(num1) > parseInt(num2)){
        return num1;
    }else{
        return num2;
    }
}

function numeroMultiplicado(numero){
    return parseInt(numero) * parseInt(numero);
}

Hola();
Hola2('Hugo');
console.log(numeroDoble(10));
console.log(numerosPromedio(5,5,8));
console.log(numeroMayor(5, 8)); 
console.log(numeroMultiplicado(5));
*/
