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
*/


window.onload=function ()
{
    document.getElementById("btnSaludar").addEventListener("click",function (e){
        console.log("boton");
        console.log(e.target)
    });
};

document.getElementById("contenedor").addEventListener("click",function (e)
{
    console.log("contenedor");
    e.stopPropagation();
    console.log(e.target);
},true);/// quiero que capture el evento en fase de captura, si es falso lo toma en default en burbuja


const formularo=document.getElementsByTagName("form")[0];  //devuelve un array
formularo.addEventListener("submit", function(e)
{
    //e.preventDefault();
    console.log(e.target);
});// eevento submit lo lanza el formulario




