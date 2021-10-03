var elementos = [];
var topo      = -1;
const MAX     = 1000;

// criação da pilha
function push(num){                       
    if(topo < MAX){
        topo            = topo + 1;
        elementos[topo] = num;
    }
    else{
        console.log("Pilha esta cheia");
    }

}

function pop(){
    if(topo != -1){
        let num = elementos[topo];
        topo    = topo - 1;
        return num;
    }
    else{
        console.log("Pilha está vazia");
    }
}

// implementando a função estaVazia para indicar quando a pilha está vazia
function estaVazia(){
    return topo == -1;
}


var numDecimal = prompt("Insira um valor decimal:"); //solicita ao usuario num a ser convertido
var resto; // armazena o resto da divisão


while(numDecimal != 0){
    resto      = parseInt(numDecimal % 2);
    push(resto);
    numDecimal = parseInt(numDecimal / 2);
}

while(!estaVazia()){
    console.log(pop());
}