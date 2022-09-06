/*
const btn = document.getElementById("btnSaludar");


btn.addEventListener("click",mostrar);


function mostrar(){
    alert("mostrar");
}

const pepe = function(){

}

window.addEventListener("load",function ()
{
    document.getElementById("btnSaludar").addEventListener("click",function (){
        alert("Hola bienvenido a js");
    });
});


*/


window.onload=function ()
{
    document.getElementById("btnSaludar").addEventListener("click",function (){
        alert("Hola bienvenido a js");
    });
};

function sumar(a,b){
    return a + b;
}

// funcion expresada

const sumarr=function(a,b){
    return a +b;
}

const sumarrr=(a,b)=>a+b;

//const sumarrr = a => a * 2;

console.log(sumar(3,4));
console.log(sumarr(3,4));
console.log(sumarrr(3,4));



