let cores = [];

for (let i = 0; i <5; i++){
    let cor = prompt('Insira a cor ${i + }');
    cores.push(cor);
}

console.log("Array completo:", cores);
console.log("Tamanho do array", cores.length);

let corRemover = prompt("Digite qual cor quer remover!");
let indiceRemover = cores.indexOf(corRemover);

if (indiceRemover !== -1){
    cores.splice(indiceRemover, 1);
    console.log('A cor ${corRemover} foi removida do array');
    
    
}

