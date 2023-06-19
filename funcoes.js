//Exercicios 1
function olaMundo() {
    console.log(olaMundo)
}
olaMundo();
olaMundo();

//Exercícios 2
function requisitado(){
    const entrega = 100
    const entrevista = 100
    const presenca = 100 
    if(entrega >= 100 && entrevista >= 100 && presenca >= 100){
        console.log("possivel monitor")
        
    }
    else{console.log("Selecione outro monitor")
}
}
requisitado()

//Exercicio 3
function bigNumber(){
   let numero1 = 10
   let numero2 = 30
   let numero3 = 70
   let result = 0

   if(numero1 > result){
    result = numero1
   }
   if(numero2 > result){
    result = numero2
   }
   if(numero3 > result){
    result = numero3
   }
   console.log(result)
}
bigNumber()




//Exercicios 3,1
function maiorNumero(num1,num2,num3){
   let resultado = 0
    if(num1 > resultado){
        resultado = num1
    }
    if(num2 > resultado){
        resultado = num2
    }
    if(num3 > resultado){
        resultado = num3
    }
    return resultado 
    
}
console.log(maiorNumero(90,120,30))

//Exercicio 4 
function info (nome,sobreNome,idade){
   
    return `Meu nome é ${nome} ${sobreNome } tenho ${idade} de idade.`
}
console.log(info("Eduardo","Dias",20))