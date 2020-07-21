
function clicou (){
document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
//alert( "Obridado por clicar");
}

function redirecionar(){

window.open("https://digitalinnovation.one/");
//window.location.href=" https://digitalinnovation.one/";
}

function trocar(elemento){
elemento.innerHTML="Obrigado por passar o mause"
//document.getElementById("onmause").innerHTML="Obrigado por passar o mause";
//alert("Trocar o Texto")

}
function voltar(elemento){
    elemento.innerHTML="Passe o Mouse aqui"
//document.getElementById("onmause").innerHTML="Passe o Mouse aqui";
}

function load(){
alert("Página carregada")
}

function funcaoChange(elemento){
console.log(elemento.value)
}

/*
function soma(n1, n2){
return n1 + n2
}
*/



/*
var validar =0;
function validaIdade(idade){
     validar;
        if(idade >=18){
            validar=true
}else{
    validar=false
} return validar
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

/*
var d = new Date();
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
*/

/*Repetição for
var count;
for(count=0; count<=5; count++)
alert(count)
*/


/* Repetições while
var count = 0;
while(count<=5){
    console.log(count);
    alert(count)
    count++
    */



/* Condicionais
var idade = prompt( "Qual sua Idade?")
if(idade >= 18){
     alert(" Maior de Idade");
} else{ alert(" Menor de idade");
}


/*
Array e dicionário

var frutas = [{nome:"maçã",cor: "vermelha"}, { nome:"Uva", Cor:" roxa"}]
console.log(frutas)
alert(frutas[0].nome)
console.log(fruta.nome +" "+ fruta.cor)
alert("Nome da fruta:"+" " + fruta.nome + " e " + "Cor da fruta:"+" "+ fruta.cor)
console.log("Nome da fruta:"+" " + fruta.nome + " e " + "Cor da fruta:"+" "+ fruta.cor)
*/

//lista.push("uva")
//lista.pop("laranja")
//console.log(lista [1])
//alert(lista[1])
//console.log(lista)
//console.log(lista.toString())
//console.log(lista.join(" - "))



//var  name = " Sandokan Alves";
//alert("Bem vindo" + name)
//var idade = 10
//var idade2 = 25
//var frase =" Japão é o melhor time do mundo";
//alert("Meu primeiro js")
//alert(idade + idade2);
//console.log (name);
//console.log (idade + idade2);
//console.log(frase.replace("Japão" , "Brasil"))
//alert(frase.toLocaleUpperCase())