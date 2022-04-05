document.getElementById('player').addEventListener("mouseover",sumarPuntos);

var puntos=0;
var tiempo=30;
var puntosObjetivo=30;

function sumarPuntos(){
 puntos++;
 
 let ranNum= Math.round(Math.random()*500);//aqui se define una variable, lo que hace la variable es retornar un punto flotante y retorna un número redondeado al entero más cercano, y el 500 es el rango porque si se pone más atravesaria la interfaz del juego
 let ranNum2= Math.round(Math.random()*500);
 document.getElementById("player").style.marginTop=ranNum+"px";
 document.getElementById("player").style.marginLeft=ranNum+"px";
 if(puntos==30){
     alert("ganaste");
 }
}

function restarTiempo(){
    tiempo--;
    document.getElementById("score").innerHTML= "PUNTOS: <b>"+puntos+ "/"+puntosObjetivo+"</b>";
    document.getElementById("time").innerHTML=" Tiempo: "+tiempo+ " ";
    if(tiempo==0){
        alert("Perdiste!");
        tiempo=30;
        puntos=0;
    }
}

setTimeout(restarTiempo,500);