function bomDia(){
    console.log("Bom dia!");
}

const boaTarde = function(){
    console.log("Boa tarde!");
}


//Passar uma função como parâmetro para outra função
function executarQualquerCoisa(fn){
    if(typeof fn === "function"){
        fn();
    }
    //fn();
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);



//2) Como retornar função a partir de outra função

function potencia(base){
    return function(expoente) {
        return Math.pow(base,expoente);
    }
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

const resultadoPotencia = potencia(3)(4);
console.log(resultadoPotencia);