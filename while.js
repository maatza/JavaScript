var num = parseInt(prompt("Digite um número para calcular o fatorial:"));
if(num <0){
    alert("Número inválido");
}else{
            var result = 1;
            var i = 1;
            while (i <= num){
                result *=i;
                i++;
            }
        
        alert("O Fatorial de " + num + "é" + result);
    }
