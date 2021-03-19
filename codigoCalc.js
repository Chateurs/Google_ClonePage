
const BtnNumbers = document.getElementsByName('data-number');
const BtnOperation = document.getElementsByName('data-operation');
const BtnResult = document.getElementsByName('data-result')[0];
const BtnClear = document.getElementsByName('data-clean')[0];
var Result = document.getElementById('Pantalla');
var numeroActual='';
var numeroAnterior='';
var operacion=undefined;


BtnNumbers.forEach(function(boton){
boton.addEventListener('click' ,function(){
    AddNumber(boton.innerText);
    
})
});


function AddNumber(num){
    
    numeroActual = numeroActual.toString() + num.toString(); 
    actualizar();
}


BtnOperation.forEach(function(boton){
boton.addEventListener('click' ,function(){
    SelectOperation(boton.innerText);
})
});



BtnResult.addEventListener('click',function(){
    calcular();
    actualizar();
});  
 

BtnClear.addEventListener('click' , function(){
    limpiar();
    actualizar()
    

})

function SelectOperation(op){
    if(numeroActual === '') return;
    if(numeroAnterior !== ''){
        calcular()
    }
    operacion = op.toString();
    numeroAnterior = numeroActual;
    numeroActual = '';

}

function calcular(){
    var calculo;
    const anterior = parseFloat(numeroAnterior);
    const actual = parseFloat(numeroActual);

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


function actualizar(){
    Result.value = numeroActual;
}

function limpiar(){
    
    numeroActual='';
    numeroAnterior='';
    operacion=undefined;

}



    