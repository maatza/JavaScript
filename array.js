function numero (){
    var numero = Math.random();


var numeroIntervalo = Math.round(numero * 30) + 20;

return numeroIntervalo;
}

var resultado = numero();
console.log(resultado);
