//Variables que contienen el elemento en HTML asignado en una variable
const BtnNumbers = document.getElementsByName('data-number');
const BtnOperation = document.getElementsByName('data-operation');
const BtnResult = document.getElementsByName('data-result')[0];
const BtnClear = document.getElementsByName('data-clean')[0];
var Result = document.getElementById('Pantalla');

//Las variables en la cual se guardan las operaciones
var numeroActual='';
var numeroAnterior='';
var operacion=undefined;

//El evento click del boton que captura el valor de cada boton numerico
//cuando se acciona la funcion "boton" se llama la funcion addnumber y imprime en el input
BtnNumbers.forEach(function(boton){
boton.addEventListener('click' ,function(){
    AddNumber(boton.innerText);
    
})
});

//funcion addnumber la cual agrega los numeros y guarda el primero en una variable y concatena la segunda
//llama a la funcion actualizar la cual imprime el valor del boton en el input propiamente
function AddNumber(num){
    
    numeroActual = numeroActual.toString() + num.toString(); 
    actualizar();
}

//funcion la cual captura la operacion que vamos a utilizar y el evento click de esos botones
BtnOperation.forEach(function(boton){
boton.addEventListener('click' ,function(){
    SelectOperation(boton.innerText);
})
});

//evento click del boton "=" este llama al metodo calcular en el cual se hace toda la operacion y a actualizar

BtnResult.addEventListener('click',function(){
    calcular();
    actualizar();
});  
 
//evento del boton clear el cual restablece el valor de las variables y limpia la pantalla

BtnClear.addEventListener('click' , function(){
    limpiar();
    actualizar()
    

})
//Funcion que selecciona la operacion y hace validaciones
// si la variable actual es estrictamente vacia entonces retorne
//si el numeroAnterior devuelve operadores del mismo tipo llama al metodo calcular
// a la variable operacion se le asigna los valores de cadena de op y el numero anterior pasa al actual
function SelectOperation(op){
    if(numeroActual === '') return;
    if(numeroAnterior !== ''){
        calcular()
    }
    operacion = op.toString();
    numeroAnterior = numeroActual;
    numeroActual = '';

}
//la funcion calcular se hacen variables que reciben el valor ya parseado del 1er numero y 2do numero que captura y lo convierte a float
function calcular(){
    var calculo;
    const anterior = parseFloat(numeroAnterior);
    const actual = parseFloat(numeroActual);
//se hace una comparacion con el isNan si retorna valores del mismo tipo y en dado caso se hace la validacion de cada operacion con un switch
//los Case validan cada valor del boton de la operacion y mediante eso hace la operacion que asigna
    if(isNaN(anterior) || isNaN(actual))return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        
        case '-':
            calculo = anterior - actual;
            break;   
        
        case '/':
            calculo = anterior / actual;
            break;      
                    
        case 'X':
            calculo = anterior * actual;
            break;  
            
            default: return;

    }
    numeroActual = calculo;
    operacion= '';
    numeroAnterior = '';

}

//imprime el valor en la pantalla 
function actualizar(){
    Result.value = numeroActual;
}
// limpia la pantalla de la calculadora
function limpiar(){
    
    numeroActual='';
    numeroAnterior='';
    operacion=undefined;

}



    