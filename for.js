let numero = parserInt(prompt("Digite um número de 1 a 10:"));

for(let i = 1; i <= 10; i++){
    if(i > numero){
        break
    }
    console.log(i);
};